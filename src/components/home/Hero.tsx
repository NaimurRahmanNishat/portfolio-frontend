"use client";
import React from "react";
import { WordRotate } from "@/components/ui/WordRotate";
import { SparklesText } from "../ui/SparklesText";
import Typewriter from "typewriter-effect";
import { RiExternalLinkLine } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoCloudDownloadOutline, IoLogoFacebook, IoLogoGithub } from "react-icons/io5";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import HeroImageCards from "./HeroImageCards";

interface socialLinksProps {
    path: string;
    icon: React.ReactNode;
}

const role: string[] = ["Frontend Developer", "Backend Developer", "Fullstack Developer", "Software Engineer", "SQA Engineer", "DevOps Engineer", "Data Engineer", "Data Analyst", "Data Scientist", "Machine Learning Engineer", "Cloud Engineer", "Web App Developer"];
const typewrite: string[] = ["I'm a passionate full-stack developer dedicated to crafting modern, high-performance web applications with a seamless user experience. With a strong foundation in computer science and hands-on expertise in modern technologies, I thrive on transforming ideas into impactful digital solutions. Let's turn ideas into reality and create something extraordinary together!"];

// Google Drive view + download links
const cvView: string = "https://drive.google.com/file/d/1zbiffayvfd_yGARTtg3h2i_SzWZci0Tj/view?usp=drive_link";
const cvDownload: string = "https://drive.google.com/uc?export=download&id=1zbiffayvfd_yGARTtg3h2i_SzWZci0Tj";

const socialLinks: socialLinksProps[] = [
    { path: "https://www.linkedin.com/in/naimur-rahman-0a8046381", icon: <FaLinkedin /> },
    { path: "https://github.com/NaimurRahmanNishat", icon: <IoLogoGithub /> },
    { path: "https://www.facebook.com/profile.php?id=61576332312271", icon: <IoLogoFacebook /> },
    { path: "https://www.instagram.com/34naimurrahman", icon: <CiInstagram /> },
    { path: "https://x.com/naimurrahmun34", icon: <FaXTwitter /> },
]

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-20">
            {/* left side content start */}
            <div className="flex flex-col gap-4 md:w-[50%]">
                <div className="pt-4 md:pt-8">
                    <WordRotate words={role} className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 via-pink-600" />
                </div>
                {/* sparkles text */}
                <SparklesText>
                    <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 via-yellow-600">
                        NAIMUR RHAMAN NISHAT
                    </h2>
                </SparklesText>
                {/* typewrite text */}
                <div className="pt-4 md:pt-8 text-sm md:text-lg w-full h-[200px] bg-gradient-to-r from-pink-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent font-normal">
                    <Typewriter
                        options={{
                            strings: typewrite,
                            autoStart: true,
                            delay: 5,
                            deleteSpeed: 10,
                            loop: true,
                        }}
                    />
                </div>
                {/* all button */}
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    {/* Contact button */}
                    <Link
                        href="/contact"
                        className="px-8 py-3 border border-purple-500 cursor-pointer rounded-sm hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-2"
                    >
                        <MdOutlineContactPhone />
                        Contact Me
                    </Link>

                    {/* Download CV button */}
                    <Link
                        href={cvDownload}
                        download
                        className="px-8 py-3 border border-transparent bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer rounded-sm hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2"
                    >
                        Download CV
                        <IoCloudDownloadOutline />
                    </Link>

                    {/* View CV button */}
                    <Link
                        href={cvView}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-purple-500 cursor-pointer rounded-sm hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-2"
                    >
                        View CV
                        <RiExternalLinkLine />
                    </Link>
                </div>
                {/* Sociallink */}
                <div className="flex gap-4 mt-6 text-2xl">
                    {socialLinks.map((item, i) => (
                        <Tooltip key={i}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 border rounded-full hover:scale-110 transition-all duration-300 flex items-center justify-center"
                                >
                                    {item.icon}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.path.includes("linkedin") ? "LinkedIn" :
                                    item.path.includes("github") ? "GitHub" :
                                        item.path.includes("facebook") ? "Facebook" :
                                            item.path.includes("instagram") ? "Instagram" :
                                                item.path.includes("x") ? "X" : "Profile"}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </div>
            {/* left side content end */}

            {/* right side image start */}
            <div className="flex flex-col gap-4 pt-4 relative">
                <HeroImageCards/>
            </div>
            {/* right side image end */}
        </div>
    );
};

export default Hero;
