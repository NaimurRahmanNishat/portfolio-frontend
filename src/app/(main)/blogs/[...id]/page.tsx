"use client";
import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { useParams } from "next/navigation";
import { useGetSingleBlogQuery } from "@/lib/features/blogs/blogApi";
import Loading from "@/components/shared/Loading";
import Error from "@/components/shared/Error";

const SingleBlogPage = () => {
  const { id } = useParams();
  // Use RTK Query instead of manual fetch
  const { data: blog, isLoading, isError } = useGetSingleBlogQuery(id as string);

  if (isLoading) {
    return <Loading/>
  }

  if (isError || !blog) {
    return <Error/>
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Thumbnail */}
      <div className="w-full h-fit rounded-2xl overflow-hidden mb-8">
        <Image
          src={
            blog.thumbnail ||
            "https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
          }
          alt={blog.title}
          width={1200}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Subtitle */}
      <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
      {blog.subtitle && (
        <p className="text-xl text-gray-400 mb-6">{blog.subtitle}</p>
      )}

      {/* Meta Info */}
      <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>
            {blog.createdAt
              ? new Date(blog.createdAt).toLocaleDateString()
              : "N/A"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={blog.authorImage || "https://via.placeholder.com/40"}
              alt="Author"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span>Author</span>
        </div>
        <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
          {blog.category}
        </span>
      </div>

      {/* Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {blog.content}
      </div>
    </div>
  );
};

export default SingleBlogPage;
