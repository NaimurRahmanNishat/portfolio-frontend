/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const isBrowser: boolean = typeof window !== "undefined";

  const checkScrollPosition = () => {
    if (!isBrowser) return;
    const scrollThreshold = 100;
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    setVisible(currentScrollPos > scrollThreshold);
  };

  const scrollToTop = () => {
    if (!isBrowser) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!isBrowser) return;
    window.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, [isBrowser]);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-lg transition-all duration-300",
          "bg-gradient-to-tr from-pink-600 via-violet-600 to-blue-600",
          "hover:from-pink-600 hover:to-blue-600",
          "text-white cursor-pointer focus:outline-none",
          "md:bottom-16 md:right-12 md:p-4",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
      </button>
    </div>
  );
};

export default ScrollTop;
