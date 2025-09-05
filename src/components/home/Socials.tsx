import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";

// Social Icons
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

interface socialLinksProps {
  path: string;
  logo: IconType;
  className?: string;
  name: string;
}

const socialLinks: socialLinksProps[] = [
  { 
    path: "https://www.linkedin.com/in/naimur-rahman-0a8046381", 
    logo: FaLinkedin, 
    className: "bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700", 
    name: "LinkedIn" 
  },
  { 
    path: "https://github.com/NaimurRahmanNishat", 
    logo: FaGithub, 
    className: "bg-gray-900 text-white p-2 rounded-full hover:bg-gray-800", 
    name: "GitHub" 
  },
  { 
    path: "https://www.facebook.com/profile.php?id=61576332312271", 
    logo: FaFacebook, 
    className: "bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800", 
    name: "Facebook" 
  },
  { 
    path: "https://www.instagram.com/34naimurrahman", 
    logo: FaInstagram, 
    className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:from-purple-600 hover:to-pink-600", 
    name: "Instagram" 
  },
  { 
    path: "https://x.com/naimurrahmun34", 
    logo: FaXTwitter, 
    className: "bg-black text-white p-2 rounded-full hover:bg-gray-800", 
    name: "X" 
  },
];

const Socials = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((item, i) => (
        <Tooltip key={i}>
          <TooltipTrigger asChild>
            <Link
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-110 transition-all duration-300 flex items-center justify-center ${item.className}`}
            >
              <item.logo size={24} />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{item.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default Socials;