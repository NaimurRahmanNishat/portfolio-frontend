"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Globe, Code, Wrench, Server } from "lucide-react";

// Frontend images
import tailwind from "../../../public/skills/tailwind.png";
import redux from "../../../public/skills/redux.png";
import react from "../../../public/skills/react.png";
import nextjs from "../../../public/skills/next.js.png";
import css from "../../../public/skills/css.png";
import chakra from "../../../public/skills/chakra.png";
import motion from "../../../public/skills/motion.png";
import bootstrap from "../../../public/skills/bootstrap.png";
import html from "../../../public/skills/html.png";
import chartjs from "../../../public/skills/chartjs.png";
import daisy from "../../../public/skills/daisy.png";

// Backend images
import nodejs from "../../../public/skills/nodejs.png";
import express from "../../../public/skills/expressjs.png";
import mongodb from "../../../public/skills/mongodb.png";
import mongoose from "../../../public/skills/mongoose.png";
import django from "../../../public/skills/django.png";
import mysql from "../../../public/skills/mysql.png";
import sql from "../../../public/skills/sql.png";
import jwt from "../../../public/skills/jwt.png";
import firebase from "../../../public/skills/firebase.png";
import supabase from "../../../public/skills/supabase.png";
import restapi from "../../../public/skills/rest-api.png";

// language images
import javascript from "../../../public/skills/javascript.png";
import typescript from "../../../public/skills/typescript.png";
import python from "../../../public/skills/python.png";
import java from "../../../public/skills/java.png";
import c from "../../../public/skills/c-programming.png";
import cpp from "../../../public/skills/cpp.png";

// tools images
import git from "../../../public/skills/git.png";
import github from "../../../public/skills/github.png";
import postman from "../../../public/skills/postman.png";
import vscode from "../../../public/skills/vscode.png";
import figma from "../../../public/skills/figma.png";
import vercel from "../../../public/skills/vercel.png";
import linux from "../../../public/skills/linux.png";
import netlify from "../../../public/skills/netlify.png";

interface Technology {
    name: string;
    image: StaticImageData;
}

interface CategoryData {
    title: string;
    subtitle: string;
    technologies: Technology[];
}

const categories: Record<string, CategoryData> = {
    frontend: {
        title: "Frontend",
        subtitle:
            "Building modern, responsive user interfaces with cutting-edge technologies",
        technologies: [
            { name: "HTML5", image: html },
            { name: "CSS3", image: css },
            { name: "TailwindCSS", image: tailwind },
            { name: "Bootstrap", image: bootstrap },
            { name: "ReactJS", image: react },
            { name: "NextJS", image: nextjs },
            { name: "Redux", image: redux },
            { name: "Chakra UI", image: chakra },
            { name: "Dasiy UI", image: daisy },
            { name: "Framer Motion", image: motion },
            { name: "Chart.js", image: chartjs},
        ],
    },
    backend: {
        title: "Backend",
        subtitle: "Developing robust server-side applications and APIs with modern frameworks",
        technologies: [
            { name: "Node.js", image: nodejs },
            { name: "Express.js", image: express },
            { name: "Django", image: django },
            { name: "MongoDB", image: mongodb },
            { name: "Mongoose", image: mongoose },
            { name: "MySQL", image: mysql },
            { name: "SQL", image: sql },
            { name: "JWT", image: jwt },
            { name: "Firebase", image: firebase },
            { name: "Supabase", image: supabase },
            { name: "REST API", image: restapi },
        ],
    },
    language: {
        title: "Language",
        subtitle: "Mastering multiple programming languages for diverse development needs",
        technologies: [
            { name: "Javascript", image: javascript },
            { name: "Typescript", image: typescript },
            { name: "Python", image: python },
            { name: "C++", image: cpp },
            { name: "C", image: c },
            { name: "Java", image: java },
        ],
    },
    tools: {
        title: "Tools",
        subtitle: "Utilizing a wide range of tools and frameworks to enhance development efficiency",
        technologies: [
            { name: "Git", image: git },
            { name: "GitHub", image: github },
            { name: "VS Code", image: vscode },
            { name: "Postman", image: postman },
            { name: "Figma", image: figma },
            { name: "Vercel", image: vercel },
            { name: "Render", image: vercel},
            { name: "Netlify", image: netlify },
            { name: "Linux", image: linux},
        ],
    },
};

const navItems = [
    { id: "frontend", label: "Frontend", icon: <Globe className="w-4 h-4" /> },
    { id: "backend", label: "Backend", icon: <Server className="w-4 h-4" /> },
    { id: "language", label: "Language", icon: <Code className="w-4 h-4" /> },
    { id: "tools", label: "Tools", icon: <Wrench className="w-4 h-4" /> },
];

const TechSkills = () => {
    const [activeCategory, setActiveCategory] = useState<string>("frontend");
    const currentData = categories[activeCategory];

    return (
        <div className="min-h-screen text-white">
            {/* Navigation */}
            <nav className="container mx-auto px-4 py-6 w-full">
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center gap-2 md:gap-4 px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-md w-fit">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveCategory(item.id)}
                                className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === item.id
                                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                                    }`}
                            >
                                {item.icon}
                                <span className="hidden sm:inline">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            {currentData && (
                <main className="container mx-auto px-4 pb-4">
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-pink-500 to-indigo-600 bg-clip-text text-transparent mb-6">
                            {currentData.title}
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                            {currentData.subtitle}
                        </p>
                    </div>

                    {/* Technology Grid */}
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-gradient-to-r from-indigo-900/30 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-purple-500/20">
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                                {currentData.technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="group relative bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
                                    >
                                        {/* Icon */}
                                        <div className="relative z-10 flex flex-col items-center">
                                            <div className="p-3 rounded-xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                                <Image
                                                    src={tech.image}
                                                    alt={tech.name}
                                                    width={48}
                                                    height={48}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <h3 className="text-sm md:text-base font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 text-center">
                                                {tech.name}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
};

export default TechSkills;
