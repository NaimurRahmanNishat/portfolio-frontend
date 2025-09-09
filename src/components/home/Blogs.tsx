import React from 'react'

const Blogs = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      {/* Decorative Gradient Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 dark:from-pink-600 dark:via-purple-700 dark:to-indigo-900 rounded-full blur-3xl opacity-30 animate-[spin_40s_linear_infinite]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-gradient-to-r from-yellow-200 via-orange-300 to-pink-400 dark:from-yellow-600 dark:via-orange-700 dark:to-pink-800 rounded-full blur-3xl opacity-30 animate-[spin_50s_linear_reverse_infinite]" />
      </div>

      {/* Content Container here */}
      <div className="relative z-10 max-w-3xl mx-auto text-center backdrop-blur-xl bg-white/40 dark:bg-black/30 shadow-2xl rounded-2xl p-10 border border-white/30 dark:border-white/10">
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 drop-shadow-md">
          📝 Blogs
        </h2>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Explore our latest blogs with a clean, premium gradient background.
        </p>
      </div>
    </section>
  )
}

export default Blogs;