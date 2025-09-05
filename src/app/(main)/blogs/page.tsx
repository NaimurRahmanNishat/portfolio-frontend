"use client";
import BlogCard from "@/components/blog/BlogCard";
import React, { useState } from "react";
import SearchBar from "@/components/blog/SearchBar";
import SortDropdown from "@/components/blog/SortDropdown";
import { TBlog, useGetAllBlogsQuery } from "@/lib/features/blogs/blogApi";
import Loading from "@/components/shared/Loading";
import Error from "@/components/shared/Error";

const BlogsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title-asc" | "title-desc">("newest");
  const [page, setPage] = useState(1);

  // fetch blogs from backend
  const { data, isLoading, isError } = useGetAllBlogsQuery({
    search: searchQuery,
    sortBy,
    page,
    limit: 9,
  });

  const blogs: TBlog[] = data?.blogs || [];

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="max-w-screen-xl container mx-auto px-4">
      {/* blog header section */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="md:text-5xl text-4xl font-bold text-center md:pt-8 pt-4 font-secondary textGradient">
          All Blogs
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 pt-2 md:pt-4 text-center">
          Explore my thoughts, tutorials, and insights on various topics.
        </p>
      </div>

      {/* filter & sort section */}
      <div className="flex items-center justify-between gap-4 pt-8">
        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      {/* blog cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {/* pagination controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2">{page} / {data?.totalPages || 1}</span>
        <button
          onClick={() => setPage((prev) => (data?.totalPages && prev < data.totalPages ? prev + 1 : prev))}
          disabled={page === data?.totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogsPage;
