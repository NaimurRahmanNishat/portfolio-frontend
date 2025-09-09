"use client";
import React from "react";
import ProjectCard from "../project/ProjectCard";
import {
  TProject,
  useGetAllProjectsQuery,
} from "@/lib/features/projects/projectApi";
import Loading from "../shared/Loading";
import Error from "../shared/Error";
import Link from "next/link";
import { ShinyButton } from "../ui/ShinyButton";
import { MoveRight } from "lucide-react";

const Project = () => {
  // API call for limtted projects
  const { data, isLoading, isError } = useGetAllProjectsQuery({
    category: "Fullstack Development",
    sortBy: "newest",
    page: 1,
    limit: 3,
  });

  // Backend data 
  const projects: TProject[] = data?.data?.projects || [];

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="relative min-h-screen flex items-start justify-start bg-white dark:bg-gray-950 overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" />

      {/* Project Section */}
      <div className="max-w-screen-xl container mx-auto px-4 py-28 relative z-10">
        {/* Heading Section */}
        <div className="flex flex-col gap-4 md:gap-6 items-center justify-center">
          <h3 className="px-4 py-2 w-fit rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white font-medium font-quin">
            My Projects
          </h3>
          <h2 className="text-3xl md:text-4xl font-secondary font-bold text-purple-600 dark:text-purple-400">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-quin -mt-2 text-center">
            Explore my highlighted projects showcasing my latest work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-20">
          <Link
            href="/projects"
            className="flex items-center justify-center cursor-pointer gap-2 text-pink-500 font-bold hover:text-pink-600 transition-colors duration-300"
          >
            <ShinyButton className="px-8 py-2 rounded-md hover:bg-slate-800 group">
              View All Projects <span className="ml-2 group-hover:-rotate-20 transition-all duration-500"><MoveRight /></span>
            </ShinyButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
