import { motion } from "framer-motion";
import React from "react";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggered delay.
const reverseIndex = (index: number): number => {
  const totalsteps = 6; // number of steps.
  return totalsteps - index - 1;
};

const Stairs: React.FC = () => {
  return (
    <>
      {/* render 6 motion divs, each representing a step of the stairs.
    Each div will have the same animation defined by the stairAnimation object.
    The delay for each div is calculated dynamically based on its reverse index,
    creating a staggered effect with decreasing delay for each subsequent step.
    */}
      {[...Array(6)].map((_, index: number) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full dark:bg-white bg-black relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;