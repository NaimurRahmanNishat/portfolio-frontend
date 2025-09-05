import React from "react";
import StoreProvider from "../StoreProvider";
import { ThemeProvider } from "@/components/darkTheme/ThemeContext";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import StairTransition from "@/components/shared/StairTransition";
import PageTransition from "@/components/shared/PageTransition";
import ScrollTop from "@/components/shared/ScrollTop";
import { ToastContainer } from "react-toastify";
import { DotPattern } from "@/components/ui/DotPattern";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <StoreProvider>
        <ThemeProvider>
          <Navbar />
          <div className="relative w-full min-h-screen dark:bg-black/60">
            <StairTransition>
              <DotPattern className="opacity-10" />
              <main className="relative z-0">
                <PageTransition>
                  <TooltipProvider>{children}</TooltipProvider>
                  <ScrollTop />
                </PageTransition>
              </main>
              <ScrollProgress />
              <Footer />
            </StairTransition>
          </div>
        </ThemeProvider>
        <ToastContainer />
      </StoreProvider>
    </div>
  );
};

export default layout;
