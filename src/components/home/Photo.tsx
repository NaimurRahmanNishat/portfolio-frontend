"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import nishat from "../../../public/nishat.png";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.6, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* circle */}
        <motion.svg
          className="w-[320px] h-[320px] xl:w-[520px] xl:h-[520px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 1.2, duration: 0.6, ease: "easeInOut" },
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden">
            <Image
              src={nishat}
              alt="Naimur Rahman Nishat"
              priority
              quality={100}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
