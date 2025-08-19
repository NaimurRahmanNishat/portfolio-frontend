"use client";
import { motion } from "framer-motion";
import { Briefcase, Home, LucideIcon, Mail, PenTool, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface INavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

const NavItem: INavItemProps[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/blogs", label: "Blogs", icon: PenTool },
  { href: "/contact", label: "Contact", icon: Mail },
];

const NavItems = () => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  return (
    <div className="px-2 py-1 bg-gray-200 dark:bg-slate-800 rounded-md">
      <div className="flex items-center space-x-2">
        {NavItem.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hoveredItem === item.href;

          return (
            <motion.div
              key={item.href}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative px-3 py-1.5 font-medium transition-all duration-300 rounded-xl text-sm uppercase tracking-wide",
                  "flex items-center gap-2",
                  isActive
                    ? "text-white shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600  via-violet-600 rounded-xl"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>

                {/* Active state background */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600  via-violet-600 rounded-xl -z-10 shadow-lg shadow-purple-500/25"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Hover state background */}
                {isHovered && !isActive && (
                  <motion.div
                    className="absolute inset-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl -z-10 border border-purple-200/30 dark:border-purple-700/30"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* Subtle glow effect for active item */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 rounded-xl -z-20 blur-lg opacity-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default NavItems;
