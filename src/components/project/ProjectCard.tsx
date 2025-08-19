import { TProject } from "@/lib/features/projects/projectApi";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface projectType {
  project: TProject;
}

const ProjectCard = ({ project }: projectType) => {
  // Project Description conditonal render check
  const descriptionText = project.description && project.description.overview ? project.description.overview : "No description available.";

  return (
    <div className="bg-transparent rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-violet-600 flex flex-col">
      {/* Project Image */}
      <div className="relative w-full h-[200px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Card Body */}
      <div className="p-5 border-t border-gray-100 flex flex-col flex-1">
        {/* Title */}
        <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
          {project.title || "Project Title"}
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-5 line-clamp-3">
          {descriptionText.length > 100
            ? descriptionText.slice(0, 100) + "..."
            : descriptionText}
        </p>

        {/* Buttons */}
        <div className="mt-auto flex flex-col gap-2 border-t border-gray-700 pt-3 sm:flex-row">
          <Link
            href={project.link || "#"}
            target="_blank"
            className="flex gap-1 items-center justify-center hover:bg-purple-600 border border-purple-600 text-base dark:text-white text-center py-1 px-2 rounded-md font-medium transition-colors"
          >
            <SquareArrowOutUpRight />
            Live
          </Link>
          <Link
            href={project.github || "#"}
            target="_blank"
            className="flex gap-1 items-center justify-center hover:bg-blue-600 border border-blue-600 dark:text-white text-base text-center py-1 px-2 rounded-md font-medium transition-colors"
          >
            <Github />
            Repo
          </Link>
          <Link
            href={`/projects/${project._id}`}
            className="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-center py-1 px-2 rounded-md font-medium transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;