"use client";
import React from "react";
import {
  Download,
  ExternalLink,
  Mail,
  MapPin,
  User,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import about from "../../../../public/about.png";
import Link from "next/link";
import { ShinyButton } from "@/components/ui/ShinyButton";
import { DotPattern } from "@/components/ui/DotPattern";

const interests = [
  "Open Source",
  "Travel",
  "Coding",
  "Music",
  "Reading",
  "Coffee",
  "Gaming",
];

const AboutPage = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "Framer Motion",
    "Chart.js",
    "Chakra UI",
    "JavaScript",
    "Bootstrap5",
  ];
  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "MySQL",
    "SQL",
    "Django",
    "REST API",
  ];
  const toolsSkills = [
    "Git",
    "AWS",
    "Firebase",
    "Supabase",
    "Postman",
    "Vercel",
    "Figma",
    "CI/CD",
  ];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <DotPattern />
      </div>
      {/* Decorative glowing circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-pink-400/30 dark:bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-screen-xl container mx-auto px-4 min-h-screen relative z-10">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
            About Me
          </h1>
          <p className="dark:text-gray-300 text-gray-600 max-w-2xl mx-auto px-4">
            A passionate developer dedicated to crafting beautiful, functional
            <br />
            web experiences
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Profile Section */}
            <div className="lg:col-span-1">
              <Card className="border-gray-700 bg-transparent p-6 mb-6">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-1">
                    <div className="w-full h-full bg-gray-800 rounded-3xl overflow-hidden">
                      <Image
                        src={about}
                        alt="Shakil Hossain"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-sm text-purple-400">
                      Available for Projects
                    </p>
                    <div className="flex justify-center mt-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-purple-400 rounded-full mx-1"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Naimur Rahman
                  </h2>
                  <p className="text-purple-400 text-lg">Software Engineer</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-3 text-purple-400" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      Rangpur, Bangladesh
                    </span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 mr-3 text-purple-400" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      naimurrahmun34@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <User className="w-4 h-4 mr-3 text-purple-400" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      naimurrahman
                    </span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Globe className="w-4 h-4 mr-3 text-purple-400" />
                    <Link
                      href="https://portfolios-sable-five.vercel.app/"
                      target="_blank"
                      className="text-gray-800 dark:text-gray-200 font-medium"
                    >
                      https://portfolios-sable-five.vercel.app
                    </Link>
                  </div>
                </div>

                {/* Download Resume Button */}
                <ShinyButton className="w-full bg-purple-600 px-4 py-2 flex items-center justify-center rounded-md cursor-pointer hover:bg-purple-700 text-white mb-6">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </ShinyButton>

                {/* Interests & Hobbies */}
                <div>
                  <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-4 flex items-center">
                    <div className="w-6 h-6 bg-purple-600 rounded mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    Interests & Hobbies
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gray-700 text-gray-300 hover:bg-gray-600 justify-center py-2"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Content Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* My Story */}
              <Card className="bg-transparent border-gray-700 p-6">
                <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-4 flex items-center">
                  <User className="w-5 h-5 mr-3 text-purple-400" />
                  My Story
                </h3>
                <div className="text-gray-300 space-y-4 text-sm leading-relaxed dark:text-gray-200 font-quin text-gray-800">
                  <p>
                    I&apos;m a passionate full-stack developer with over 3 years
                    of experience building modern web applications. I specialize
                    in React, Next.js, Node.js, and MongoDB, creating seamless
                    user experiences with clean, efficient code. My journey in
                    tech began with a curiosity about how websites work, which
                    led me to pursue a degree in Computer Science and
                    Engineering.
                  </p>
                  <p>
                    Beyond coding, I&apos;m deeply interested in UI/UX design
                    principles and believe that great software should not only
                    function flawlessly but also delight users with intuitive
                    interfaces. I&apos;m constantly learning new technologies
                    and techniques to stay at the forefront of web development.
                    When I&apos;m not coding, you&apos;ll find me exploring new
                    hiking trails, experimenting with photography, or
                    contributing to open-source projects.
                  </p>
                </div>
                <div className="flex gap-4 mt-6">
                  <Link href="/projects">
                    <ShinyButton className="border-purple-600 px-2 py-1 border rounded-md cursor-pointer text-purple-400 hover:bg-purple-600 hover:text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Projects
                    </ShinyButton>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-purple-600 cursor-pointer text-purple-400 hover:bg-purple-600 hover:text-white"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Me
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Skills & Expertise */}
              <Card className="bg-transparent border-gray-700 p-6">
                <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-6 flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded mr-3 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  Skills & Expertise
                </h3>

                <div className="space-y-6">
                  {/* Frontend */}
                  <div>
                    <h4 className="text-gray-800 dark:text-gray-200 font-medium mb-3 flex items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                      Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-blue-900/30 dark:text-blue-300 border border-blue-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h4 className="text-gray-800 dark:text-gray-200 font-medium mb-3 flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                      Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-green-900/30 dark:text-green-300 border border-green-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Others */}
                  <div>
                    <h4 className="text-gray-800 dark:text-gray-200 font-medium mb-3 flex items-center">
                      <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                      Tools & Others
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {toolsSkills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-purple-900/30 dark:text-purple-300 border border-purple-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Education */}
              <Card className="bg-transparent text-gray-800 border-gray-700 p-6">
                <h3 className="dark:text-white font-semibold mb-6 flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded mr-3 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  Education
                </h3>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="dark:text-white font-medium">
                        B.Sc. in Computer Science & Engineering
                      </h4>
                      <span className="text-green-400 text-sm font-medium">
                        2021 - Present
                      </span>
                    </div>
                    <div className="flex items-center text-green-400 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm">
                        Dhaka International University
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      Focused on software engineering, algorithms, and web
                      technologies
                    </p>
                    <div className="flex items-center text-green-400 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>CGPA: 3.45/4.00</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
