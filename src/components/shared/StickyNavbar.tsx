"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import logo from "../../../public/logo.png";
import NavItems from './NavItems';
import Theme from '../darkTheme/Theme';
import Resume from './Resume';
import MobileMenu from './MobileMenu';

const StickyNavbar = () => {
      const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-20 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "dark:bg-black bg-white shadow-lg translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0"
      }`}
    >
        <div className="max-w-screen-xl container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="logo_image"
                  width={40}
                  height={40}
                  priority
                  className="w-10 h-10"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <NavItems />
            </div>

            {/* Desktop Actions (Theme + Resume) */}
            <div className="hidden md:flex items-center gap-4">
              <Theme />
              <Resume />
            </div>

            {/* Mobile Actions (Theme + Resume + Menu) */}
            <div className="flex md:hidden items-center gap-2">
              <Theme />
              <Resume />
              <MobileMenu />
            </div>
          </div>
        </div>
    </header>
  )
}

export default StickyNavbar