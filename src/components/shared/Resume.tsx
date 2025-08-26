"use client";
import { ExternalLink } from "lucide-react";
import { ShinyButton } from "../ui/ShinyButton";

const Resume = () => {
  const driveLink = "https://drive.google.com/uc?export=download&id=1zbiffayvfd_yGARTtg3h2i_SzWZci0Tj";

  const handleResumeClick = () => {
    window.open(driveLink, "_blank");
  };

  return (
    <div>
      <ShinyButton
        onClick={handleResumeClick}
        className="border border-transparent bg-gradient-to-r from-purple-500 to-indigo-500 text-white transition-all duration-300 px-3 py-1.5 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1"
      >
        <span>Resume</span>
        <ExternalLink className="h-4 w-4" />
      </ShinyButton>
    </div>
  );
};

export default Resume;