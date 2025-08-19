"use client";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

type Props = {
  children: ReactNode;
};

const StairTransition = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
          <motion.div
            className="h-screen w-screen fixed bg-darkBlack top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.2, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
      {/* ✅ Render children below animation */}
      {children}
    </>
  );
};

export default StairTransition;
