import React from "react";

const Project = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" />
      Project
    </div>
  );
};

export default Project;
