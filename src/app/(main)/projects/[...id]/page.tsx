"use client";
import { useParams } from "next/navigation";
import {
  TProject,
  useGetSingleProjectQuery,
} from "@/lib/features/projects/projectApi";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/shared/Loading";
import Error from "@/components/shared/Error";
import { CheckCircle } from "lucide-react";  

const SingleProjectPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleProjectQuery(id as string);
  if (isLoading) return <Loading />;
  if (isError || !data?.data) return <Error />;
  const project = data.data as TProject;

  return (
    <div className="container mx-auto px-4 py-8 space-y-10">
      {/* Image Section */}
      <div className="w-full">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={600}
          priority
          className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        {project.title}
      </h1>

      {/* Hosting & Version Control */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow border">
          <p className="text-sm text-gray-500 mb-1">Hosting</p>
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            {project.hosting}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow border">
          <p className="text-sm text-gray-500 mb-1">Version Control</p>
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            {project.versionControl}
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border">
        <h2 className="text-xl font-semibold text-purple-600 mb-3">
          📖 Project Overview
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description.overview}
        </p>
      </section>

      {/* Features */}
      <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border">
        <h2 className="text-xl font-semibold text-yellow-500 mb-5 flex items-center gap-2">
          ✨ Features
        </h2>
        <ul className="space-y-3">
          {project.description.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {feature.name}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Technologies */}
      <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border">
        <h2 className="text-xl font-semibold text-blue-500 mb-5 flex items-center gap-2">
          🛠 Technologies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {project.description.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border shadow-sm"
            >
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                {tech.name}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href={project.link}
          target="_blank"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 text-center rounded-md font-semibold transition-colors duration-200"
        >
          Visit Live Site
        </Link>
        <Link
          href={project.github}
          target="_blank"
          className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 text-center rounded-md font-semibold transition-colors duration-200"
        >
          View on GitHub
        </Link>
      </div>
    </div>
  );
};

export default SingleProjectPage;
