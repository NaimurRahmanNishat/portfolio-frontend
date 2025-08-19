"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { TextAnimate } from "../ui/text-animate";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setOpen(false);
  };

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;
    return isActive ? "text-pink-500 font-bold" : "text-primaryLight";
  };

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <Menu size={28} className="cursor-pointer text-purple-500"/>
        </SheetTrigger>
        <SheetContent side="left" className="pt-28 px-4">
          <VisuallyHidden>
            <SheetTitle>Navigation Menu</SheetTitle>
          </VisuallyHidden>
          <div className="flex flex-col gap-y-4 text-2xl">
            <Link
              href="/"
              onClick={handleLinkClick}
              className={getLinkClassName("/")}
            >
              <TextAnimate animation="blurInUp" by="character" once>
                Home
              </TextAnimate>
            </Link>

            <Link
              href="/about"
              onClick={handleLinkClick}
              className={getLinkClassName("/about")}
            >
              <TextAnimate animation="blurInUp" by="character" once>
                About
              </TextAnimate>
            </Link>

            <Link
              href="/projects"
              onClick={handleLinkClick}
              className={getLinkClassName("/projects")}
            >
              <TextAnimate animation="blurInUp" by="character" once>
                Projects
              </TextAnimate>
            </Link>

            <Link
              href="/blogs"
              onClick={handleLinkClick}
              className={getLinkClassName("/blogs")}
            >
              <TextAnimate animation="blurInUp" by="character" once>
                Blogs
              </TextAnimate>
            </Link>

            <Link
              href="/contact"
              onClick={handleLinkClick}
              className={getLinkClassName("/contact")}
            >
              <TextAnimate animation="blurInUp" by="character" once>
                Contact
              </TextAnimate>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;