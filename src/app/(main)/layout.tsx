import React from "react";
import StoreProvider from "../StoreProvider";
import { ThemeProvider } from "@/components/darkTheme/ThemeContext";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import StairTransition from "@/components/shared/StairTransition";
import PageTransition from "@/components/shared/PageTransition";
import ScrollTop from "@/components/shared/ScrollTop";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <StoreProvider>
        <ThemeProvider>
          <Navbar />
          <StairTransition>
            <main>
              <PageTransition>
                {children}
                <ScrollTop />
              </PageTransition>
            </main>
          </StairTransition>
          <Footer />
        </ThemeProvider>
      </StoreProvider>
    </div>
  );
};

export default layout;
