"use client";
import React from "react";
import { WordRotate } from "../ui/WordRotate";
import { SparklesText } from "../ui/SparklesText";
import { ShinyButton } from "../ui/ShinyButton";
import Link from "next/link";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";
import Socials from "./Socials";
import HeroImageCards from "./HeroImageCards";
import dynamic from "next/dynamic";
import { DotPattern } from "../ui/DotPattern";
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

// Rotating roles
const role: string[] = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Software Engineer",
  "SQA Engineer",
  "DevOps Engineer",
];

// CV links
const cvView: string =
  "https://drive.google.com/file/d/1zbiffayvfd_yGARTtg3h2i_SzWZci0Tj/view?usp=drive_link";
const cvDownload: string =
  "https://drive.google.com/uc?export=download&id=1zbiffayvfd_yGARTtg3h2i_SzWZci0Tj";

// Typewriter intro
const typewrite: string[] = [
  "A software engineer designs, develops, tests, and maintains software applications and systems by applying engineering principles and programming knowledge to solve problems and meet user needs. Their work involves the entire software development life cycle (SDLC), from initial planning and design to coding, testing, deployment, and ongoing maintenance. This includes writing and optimizing code, ensuring software compatibility, troubleshooting bugs, collaborating with teams, and documenting systems",
];

const Hero = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <DotPattern />
      </div>
      {/* Decorative glowing circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-pink-400/30 dark:bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-700" />

      {/* all content */}
      <div className="max-w-screen-xl container mx-auto px-4 min-h-screen">
        <div className="relative z-10 flex flex-col gap-6 md:flex-row items-center justify-between md:pt-20">
          {/* left content */}
          <div className="flex flex-col items-start gap-6 md:w-[50%] animate-fade-in-left">
            <div className="font-secondary -pb-4 md:pb-4 flex pt-4 md:pt-0 ">
              <WordRotate
                words={role}
                className="text-2xl  md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 via-pink-600"
              />
            </div>
            <SparklesText>
              <h1 className="text-4xl font-tertiary flex items-start gap-2 justify-start md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 via-yellow-600">
                NAIMUR RHAMAN NISHAT
              </h1>
            </SparklesText>
            {/* Typewriter intro */}
            <div className=" text-[16px] font-quin md:text-lg w-full md:h-[280px] h-[320px] text-left text-gray-600 dark:text-gray-500">
              <Typewriter
                options={{
                  strings: typewrite,
                  autoStart: true,
                  delay: 20,
                  deleteSpeed: 15,
                  loop: true,
                }}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
              <ShinyButton className="py-3 px-6 border border-purple-500 rounded-md transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Link href="/contact" className="flex items-center gap-2">
                  <MdOutlineContactPhone /> Contact Me
                </Link>
              </ShinyButton>

              <Link
                href={cvDownload}
                download
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg rounded-md hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                Download CV <IoCloudDownloadOutline />
              </Link>

              <ShinyButton className="px-6 py-3 border border-purple-500 rounded-md transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Link
                  href={cvView}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View CV <RiExternalLinkLine />
                </Link>
              </ShinyButton>
            </div>

            <div className="flex gap-4 mt-6 text-2xl">
              <Socials />
            </div>
          </div>

          {/* right content */}
          <div>
            <HeroImageCards />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
