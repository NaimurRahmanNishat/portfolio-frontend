"use client";
import React from 'react'
import { ShinyButton } from '../ui/ShinyButton';
import Link from 'next/link';
import { TBlog, useGetAllBlogsQuery } from '@/lib/features/blogs/blogApi';
import Loading from '../shared/Loading';
import Error from '../shared/Error';
import BlogCard from '../blog/BlogCard';
import { MoveRight } from 'lucide-react';

const Blogs = () => {
    // fetch blogs from backend
    const { data, isLoading, isError } = useGetAllBlogsQuery({
      search: "",
      sortBy: "newest",
      page: 1,
      limit: 4,
    });
  
    const blogs: TBlog[] = data?.blogs || [];
  
    if (isLoading) return <Loading />;
    if (isError) return <Error />;
  return (
    <section className="relative min-h-screen flex overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      {/* Decorative Gradient Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 dark:from-pink-600 dark:via-purple-700 dark:to-indigo-900 rounded-full blur-3xl opacity-30 animate-[spin_40s_linear_infinite]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-gradient-to-r from-yellow-200 via-orange-300 to-pink-400 dark:from-yellow-600 dark:via-orange-700 dark:to-pink-800 rounded-full blur-3xl opacity-30 animate-[spin_50s_linear_reverse_infinite]" />
      </div>

      {/* Content Container here */}
      <div className="max-w-screen-xl container mx-auto px-4 py-28 relative z-10">
              {/* Heading Section */}
        <div className="flex flex-col gap-4 md:gap-6 items-center justify-center">
          <h3 className="px-4 py-2 w-fit rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white font-medium font-quin">
            My Blogs
          </h3>
          <h2 className="text-3xl md:text-4xl font-secondary font-bold text-purple-600 dark:text-purple-400">
            Latest Blog Posts
          </h2>
          <p className="text-sm md:text-md text-gray-600 dark:text-gray-300 font-quin -mt-2 text-center">
            Read my latest blog posts and stay up to date with my latest <br /> projects.
          </p>
        </div>
      {/* content here go here */}
              {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-20">
          <Link
            href="/blogs"
            className="flex items-center justify-center cursor-pointer gap-2 text-pink-500 font-bold hover:text-pink-600 transition-colors duration-300"
          >
            <ShinyButton className="px-8 py-2 rounded-md hover:bg-slate-800 group">
              View All Blogs <span className="ml-2 group-hover:-rotate-20 transition-all duration-500"><MoveRight /></span>
            </ShinyButton>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blogs;