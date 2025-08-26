"use client";
import { useEffect, useState } from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { WarpBackground } from "@/components/ui/WarpBackground";

const Contact = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => setMounted(true), [mounted]);

  if (!mounted) {
    return null; 
  }

  return (
    <main>
      <WarpBackground>
        <div className="max-w-screen-xl container mx-auto px-4 md:px-0">
          <h1 className="md:text-5xl text-4xl font-bold text-center md:pt-8 pt-4 font-secondary textGradient">
            Get In Touch
          </h1>
          <p className="md:text-xl text-lg text-gray-600 dark:text-gray-300 pt-4 md:pt-8 text-center font-secondary">
            Have a project in mind or want to collaborate? Feel free to reach
            out <br className="md:block hidden" /> through the form below or via
            my contact information.
          </p>
          {/* grid contact form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:px-8 px-4">
            {/* contact form */}
            <div className="relative w-full h-full rounded-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-600 via-cyan-600 to-indigo-600" />
              <ContactForm/>
            </div>
            {/* contact info */}
            <div className="relative w-full h-[400px] rounded-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-600 via-cyan-600 to-indigo-600" />
              <div className="w-full h-full border rounded-sm p-4">
                <ContactInfo/>
              </div>
            </div>
          </div>
        </div>
      </WarpBackground>
    </main>
  );
};

export default Contact;
