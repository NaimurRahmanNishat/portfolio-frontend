import { getBaseUrl } from "@/utils/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ProjectDetails {
  overview: string;
  features: { name: string; description: string }[];
  technologies: { name: string; description: string }[];
}

export interface TProject {
  techStack?: string; 
  _id?: string;
  title: string;
  image: string;
  description: ProjectDetails;
  hosting: string;
  versionControl: string;
  link: string;
  github: string;
  createdAt?: string;
  updatedAt?: string;
}

// PaginationInfo for meta data
export interface PaginationInfo {
  totalProjects: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}

// PaginatedProjectResponse
export interface PaginatedProjectResponse {
  success: boolean;
  message: string;
  data: {
    projects: TProject[];
    pagination: PaginationInfo;
  };
}

export interface SingleProjectResponse {
  success: boolean;
  message: string;
  data?: TProject;
}

// CreateProjectRequest
export interface CreateProjectRequest {
  title: string;
  image: string;
  description: ProjectDetails; 
  frontend?: string;
  backend?: string;
  database?: string;
  hosting: string;
  versionControl: string;
  link: string;
  github: string;
}

export interface UpdateProjectRequest extends Partial<CreateProjectRequest> {
  _id: string;
}

// GetAllProjectsQueryArgs
export interface GetAllProjectsQueryArgs {
  category?: string;
  sortBy?: string;
  page?: number;
  limit?: number;
}

const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/projects`,
    credentials: "include",
  }),
  tagTypes: ["Project"],
  endpoints: (builder) => ({
    // Get all projects
    getAllProjects: builder.query<PaginatedProjectResponse, GetAllProjectsQueryArgs>({
      query: (args) => ({
        url: "/all-projects",
        method: "GET",
        params: args,
      }),
      providesTags: (result) =>
        result && result.data && result.data.projects
          ? [
              ...result.data.projects.map(({ _id }) => ({
                type: "Project" as const,
                id: _id,
              })),
              { type: "Project", id: "LIST" },
            ]
          : [{ type: "Project", id: "LIST" }],
    }),

    // Get single project
    getSingleProject: builder.query<SingleProjectResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Project", id }],
    }),

    // Create new project
    createProject: builder.mutation<SingleProjectResponse, CreateProjectRequest>({
      query: (projectData) => ({
        url: "/create-project",
        method: "POST",
        body: projectData,
      }),
      invalidatesTags: [{ type: "Project", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useGetSingleProjectQuery,
  useCreateProjectMutation,
} = projectApi;

export default projectApi;