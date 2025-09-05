import React from "react";
import Socials from "../home/Socials";
import { Code, Leaf, Server, Briefcase, ChevronRight, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

interface serviceProps {
  icon: React.ElementType;
  title: string;
}

const services: serviceProps[] = [
  { icon: Code, title: "Software Development" },
  { icon: Leaf, title: "Frontend Development" },
  { icon: Server, title: "Backend Development" },
  { icon: Briefcase, title: "Full Stack Development" },
  { icon: Code, title: "Software Quality Assurance" },
];

const footerLinks = [
  { name: "Home", href: "/", icon: ChevronRight },
  { name: "About", href: "/about", icon: ChevronRight },
  { name: "Projects", href: "/projects", icon: ChevronRight },
  { name: "Blogs", href: "/blogs", icon: ChevronRight },
  { name: "Contact", href: "/contact", icon: ChevronRight },
];

const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-xl container mx-auto px-4">
        {/* top section */}
        <section className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 py-8 md:py-20">
          {/* left side */}
          <div className="w-full md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-4">
              <h1 className="bg-gradient-to-r from-pink-600 via-cyan-600 to-indigo-600 text-transparent bg-clip-text text-2xl md:text-3xl font-bold">
                Naimur Rahman
              </h1>
              <p className="text-sm md:text-base text-gray-600 -mt-3 mb-1">
                Full Stack Developer
              </p>
              <strong className="text-sm md:text-base text-gray-600">
                I&apos;m a passionate full-stack developer dedicated to crafting
                modern, high-performance web applications with a seamless user
                experience.
              </strong>
              {/* social links */}
              <div className="flex gap-4 mt-4 md:mt-8">
                <Socials />
              </div>
            </div>
            {/* middle */}
            <div className="md:px-4 flex flex-col gap-4">
              <section>
                {/* Heading */}
                <h2 className="relative inline-block font-bold text-lg mb-6">
                  Services
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"></span>
                </h2>

                {/* Services List */}
                <div className="flex flex-col gap-4">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 transition hover:translate-x-1 duration-300 cursor-pointer"
                      >
                        {/* Icon Circle */}
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                          <Icon size={16} className="text-gray-300" />
                        </div>
                        {/* Title */}
                        <span className="font-medium hover:text-purple-500">
                          {service.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
            {/* right */}
            <section className="md:px-6">
              <h2 className="relative inline-block font-bold text-lg mb-6">
                Quick Links
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"></span>
              </h2>
              {/* footer link */}
              <div className="flex flex-col gap-4">
                {footerLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      href={item.href}
                      key={index}
                      className="group flex items-center transition hover:translate-x-1 duration-300 cursor-pointer"
                    >
                      {/* Icon Circle */}
                      <div className="w-8 h-8 flex items-center justify-center">
                        <Icon
                          size={16}
                          className="group-hover:text-purple-500"
                        />
                      </div>
                      {/* Title */}
                      <span className="font-medium group-hover:text-purple-500">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>
          {/* right side */}
          <div className="w-full md:w-[30%]">
            <section className="w-full max-w-md bg-transparent text-white">
              {/* Heading */}
              <h2 className="relative inline-block font-bold text-lg mb-6">
                Contact
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"></span>
              </h2>

              {/* Contact Info */}
              <div className="flex flex-col gap-5">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600/20 text-purple-500">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm md:text-base text-gray-800 dark:text-gray-300">
                    naimurrahmun34@gmail.com
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600/20 text-purple-500">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col text-sm md:text-base text-gray-800 dark:text-gray-300">
                    <span>+880 1568-450889</span>
                    <span>+880 1736-340278</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600/20 text-purple-500">
                    <MapPin size={18} />
                  </div>
                  <span className="text-sm md:text-base text-gray-800 dark:text-gray-300">
                    Rangpur, Bangladesh
                  </span>
                </div>
              </div>

              {/* Newsletter / Email Input */}
              <div className="mt-6">
                <form className="flex items-center w-full rounded-lg overflow-hidden border border-gray-700 focus-within:border-purple-500 transition">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-transparent text-sm md:text-base text-gray-200 placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-2 mr-1 py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition"
                  >
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </section>
          </div>
        </section>
        {/* bottom section */}
        <section className="border-t-2 py-4">
          <p className="text-center text-xs font-medium">
            @{new Date().getFullYear()} Naimur Rahman All rights reserved
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
