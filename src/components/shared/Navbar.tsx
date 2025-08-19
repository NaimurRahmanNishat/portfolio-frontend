import Link from "next/link";
import NavItems from "./NavItems";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Theme from "../darkTheme/Theme";
import Resume from "./Resume";
import MobileMenu from "./MobileMenu";
import StickyNavbar from "./StickyNavbar";

const Navbar = () => {
  return (
    <>
      <header className="h-20 flex items-center justify-between w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
      <StickyNavbar />
    </>
  );
};

export default Navbar;
