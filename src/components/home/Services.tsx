"use client";

import { useState } from "react";
import { Layers, Globe, Server, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientColor: string;
  technologies: string[];
}

const services: Service[] = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description:
      "End-to-end web development using modern JavaScript/TypeScript, combining scalable backend with interactive frontend.",
    icon: <Layers className="w-8 h-8" />,
    gradientColor: "from-pink-500 to-purple-600",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "JWT",
      "Zod",
      "Next Auth",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Responsive and interactive UI with reusable components, animation, and modern design systems.",
    icon: <Globe className="w-8 h-8" />,
    gradientColor: "from-cyan-500 to-blue-600",
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
      "React Hook Form",
      "TypeScript",
      "Shadcn UI",
      "Material UI",
      "Ant Design",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Secure and efficient backend systems with RESTful APIs, authentication, and scalable MongoDB integration.",
    icon: <Server className="w-8 h-8" />,
    gradientColor: "from-green-500 to-emerald-600",
    technologies: [
      "Node.js",
      "Express.js",
      "Mongoose",
      "Prisma",
      "RESTful APIs",
      "GraphQL",
      "JWT",
      "Zod",
      "OAuth",
    ],
  },
];
const Services = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-8">
            <span className="text-sm text-slate-300">What I Do</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Services I Offer
          </h1>

          <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">
            Comprehensive development solutions tailored to transform your ideas
            into exceptional digital experiences using modern technologies and
            best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Gradient Border */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradientColor} rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-none`}
              ></div>

              {/* Card Content */}
              <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 h-full border border-slate-700/50 group-hover:border-transparent transition-all duration-300">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradientColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Technologies Section */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50 hover:bg-slate-600/50 hover:border-slate-500/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center text-sm font-medium group/link cursor-pointer">
                  <span
                    className={`bg-gradient-to-r ${service.gradientColor} bg-clip-text text-transparent group-hover:text-white transition-colors duration-300`}
                  >
                    Learn more
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 ml-2 text-slate-400 group-hover/link:text-white group-hover/link:translate-x-1 transition-all duration-300`}
                  />
                </div>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradientColor} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 cursor-pointer group">
            <Link href="/projects">Ready to start your project?</Link>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
