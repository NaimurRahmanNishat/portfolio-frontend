import { getBaseUrl } from "@/utils/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// same enum as backend
export enum BlogCategory {
  WebDevelopment = "Web Development",
  FrontendDevelopment = "Frontend Development",
  BackendDevelopment = "Backend Development",
  ProgrammingTips = "Programming Tips",
  TechTutorials = "Tech Tutorials",
  CareerDevelopment = "Career Development",
  ProjectShowcases = "Project Showcases",
  ToolsAndResources = "Tools & Resources",
  DevOpsAndDeployment = "DevOps & Deployment",
  IndustryNews = "Industry News",
}

// ✅ Response types
export interface TBlog {
  _id: string;
  title: string;
  slug: string;
  subtitle?: string;
  authorImage: string;
  category: BlogCategory;
  content: string;
  thumbnail?: string;
  isPublished: boolean;
  isFeatured: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface allBlogResponse {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  blogs: TBlog[];
}

// ✅ Query params
interface GetAllBlogsQueryArgs {
  search?: string;
  sortBy?: "newest" | "oldest" | "title-asc" | "title-desc";
  category?: BlogCategory | string;
  page?: number;
  limit?: number;
}

// ✅ Create Blog body
interface CreateBlogBody {
  title: string;
  slug?: string;
  subtitle?: string;
  authorImage?: string;
  category: BlogCategory;
  content: string;
  thumbnail?: string;
  isPublished?: boolean;
  isFeatured?: boolean;
}

const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/blogs`,
    credentials: "include",
  }),
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    // get all blogs (article list)
    getAllBlogs: builder.query<allBlogResponse, GetAllBlogsQueryArgs>({
      query: (args) => ({
        url: "/",
        method: "GET",
        params: args,
      }),
      transformResponse: (response: any) => response?.data ?? response,
      providesTags: (result) =>
        result?.blogs
          ? [
              ...result.blogs.map(({ _id }) => ({ type: "Blog" as const, id: _id })),
              { type: "Blog", id: "LIST" },
            ]
          : [{ type: "Blog", id: "LIST" }],
    }),

    // create blog (article)
    createBlog: builder.mutation<TBlog, CreateBlogBody>({
      query: (newBlog) => ({
        url: "/create-blog",
        method: "POST",
        body: newBlog,
      }),
      transformResponse: (response: any) => response?.data ?? response,
      invalidatesTags: [{ type: "Blog", id: "LIST" }],
    }),

    // get single blog
    getSingleBlog: builder.query<TBlog, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      transformResponse: (response: any) => response?.data ?? response,
      providesTags: (_result, _error, id) => [{ type: "Blog", id }],
    }),
  }),
});

export const { useGetAllBlogsQuery, useCreateBlogMutation, useGetSingleBlogQuery } = blogApi;
export default blogApi;
