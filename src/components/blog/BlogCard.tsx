import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { TBlog } from "@/lib/features/blogs/blogApi";
import Link from "next/link";

interface BlogCardProps {
  blog: TBlog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] group">
      
      {/* Blog Image */}
      <div className="p-4 pt-3">
        <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center mb-4 overflow-hidden">
          <Image
            src={blog.thumbnail || "https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"}
            alt={blog.title}
            width={400}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pt-0 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200 line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {blog.subtitle || blog.content.slice(0, 100) + "..."}
        </p>

        {/* Author & Date */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <Calendar size={12} />
            <span>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "N/A"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full overflow-hidden">
              <Image
                src={blog.authorImage || "https://via.placeholder.com/40"}
                alt="author"
                width={20}
                height={20}
                className="object-cover"
              />
            </div>
            <span>Author</span>
          </div>
        </div>

        {/* Read More Button */}
        <Link
          href={`/blogs/${blog._id}`}
          className="flex items-center gap-2 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors duration-200 group-hover:gap-3"
        >
          <span>Read More</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
