"use client";
import { useState } from "react";
import ProjectCard from "@/components/project/ProjectCard";
import Error from "@/components/shared/Error";
import Loading from "@/components/shared/Loading";
import {
  TProject,
  useGetAllProjectsQuery,
} from "@/lib/features/projects/projectApi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const categories = [
  { label: "All Projects", value: undefined },
  { label: "Frontend", value: "Frontend Development" },
  { label: "Backend", value: "Backend Development" },
  { label: "Fullstack", value: "Fullstack Development" },
];

const ProjectPage = () => {
  // new state for category and sort
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const [sortBy, setSortBy] = useState<string | undefined>("default"); // Default sort
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  // useGetAllProjectsQuery- page & limit parameters passed
  const { data, isLoading, isError } = useGetAllProjectsQuery({
    category: selectedCategory,
    sortBy: sortBy,
    page: page,
    limit: limit,
  });

  // API response to projects & pagination given by backend
  const projects: TProject[] = data?.data?.projects || [];
  const pagination = data?.data?.pagination;
  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Our Projects
      </h2>

      {/* Category, Sort, and Limit filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        {/* Category Filters buttons */}
        <div className="flex flex-wrap justify-center gap-2 py-1 px-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
          {categories.map((cat) => {
            const isActive =
              selectedCategory === cat.value ||
              (!selectedCategory && cat.value === undefined);
            return (
              <button
                key={cat.label}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setPage(1);
                }}
                className={`px-2 py-1 rounded-md font-medium cursor-pointer transition-colors duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600  via-violet-600 text-white shadow-md"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Sort By Dropdown */}
        <div className="flex gap-4">
          <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className="w-full md:w-[180px] font-medium bg-gray-200 dark:bg-gray-700">
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800">
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="title-asc">Title (A-Z)</SelectItem>
              <SelectItem value="title-desc">Title (Z-A)</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>

          {/* Limit Dropdown */}
          <Select
            value={String(limit)}
            onValueChange={(value) => {
              setLimit(Number(value));
              setPage(1); // limit change back to number 1 page
            }}
          >
            <SelectTrigger className="w-full md:w-[140px] font-medium bg-gray-200 dark:bg-gray-700">
              <SelectValue placeholder="Show per page" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800">
              <SelectItem value="4">4 per page</SelectItem>
              <SelectItem value="8">8 per page</SelectItem>
              <SelectItem value="12">12 per page</SelectItem>
              <SelectItem value="20">20 per page</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      {/* Pagination Controls */}
      {pagination && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <Button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
            variant="outline"
          >
            Previous
          </Button>
          <span className="text-gray-800 dark:text-white">
            {page} of {pagination.totalPages}
          </span>
          <Button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page >= pagination.totalPages}
            variant="outline"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
