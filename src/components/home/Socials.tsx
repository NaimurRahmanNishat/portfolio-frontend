import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// Social Icons
import linkedin from "../../../public/skills/linkedin.png";
import github from "../../../public/skills/github.png";
import facebook from "../../../public/skills/facebook.png";
import instagram from "../../../public/skills/instagram.png";
import twitter from "../../../public/skills/twitter.png";

interface socialLinksProps {
  path: string;
  image: StaticImageData;
}

const socialLinks: socialLinksProps[] = [
  { path: "https://www.linkedin.com/in/naimur-rahman-0a8046381", image: linkedin },
  { path: "https://github.com/NaimurRahmanNishat", image: github },
  { path: "https://www.facebook.com/profile.php?id=61576332312271", image: facebook },
  { path: "https://www.instagram.com/34naimurrahman", image: instagram },
  { path: "https://x.com/naimurrahmun34", image: twitter },
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
              className="hover:scale-110 transition-all duration-300 flex items-center justify-center"
            >
              <Image src={item.image} alt="social icon" width={48} height={48}/>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {item.path.includes("linkedin")
                ? "LinkedIn"
                : item.path.includes("github")
                ? "GitHub"
                : item.path.includes("facebook")
                ? "Facebook"
                : item.path.includes("instagram")
                ? "Instagram"
                : item.path.includes("x")
                ? "X"
                : "Profile"}
            </p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default Socials;
