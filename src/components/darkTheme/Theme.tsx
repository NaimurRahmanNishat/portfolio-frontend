"use client";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { useTheme } from "./ThemeContext";

const Theme = () => {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20 blur-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.2 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      />

      <Button
        variant="ghost"
        size="icon"
        className="relative h-9 w-9 rounded-full cursor-pointer bg-background border border-primary/20 hover:bg-primary/10 hover:border-primary/30"
        onClick={toggleTheme} // Use toggleTheme here
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme} // Correct key: theme
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 30, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="text-primary"
          >
            {theme === "dark" ? (
              <Moon className="h-[18px] w-[18px]" strokeWidth={2} />
            ) : (
              <Sun className="h-[18px] w-[18px]" strokeWidth={2} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Decorative ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-primary/30"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
            repeatType: "loop",
          }}
        />
      </Button>
    </motion.div>
  );
};

export default Theme;
