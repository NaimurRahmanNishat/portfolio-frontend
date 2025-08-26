"use client";
import { motion } from "framer-motion";
import Photo from "./Photo";

interface CardDataProps {
  text: string;
  position: Partial<{ top: string; right: string; left: string }>;
  side: "left" | "right";
}

const cardData: CardDataProps[] = [
  { text: "SDLC (Software Development Life Cycle)", position: { top: "60%", right: "1%" }, side: "right" },
  { text: "TDD (Test Driven Development)", position: { top: "5%", right: "1%" }, side: "right" },
  { text: "SCRUM Software Development", position: { top: "46%", left: "-5%" }, side: "left" },
];

const HeroImageCards: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-full overflow-visible">
      <Photo />
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          initial={{ x: card.side === "left" ? -200 : 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: index * 0.8 }}
          className="absolute border rounded-lg p-3 bg-white/30 shadow-lg backdrop-blur-xs max-w-[160px]"
          style={card.position}
        >
          <h2 className="text-sm md:text-base font-semibold text-gray-800 dark:text-[#52D1B8]">
            {card.text}
          </h2>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroImageCards;
