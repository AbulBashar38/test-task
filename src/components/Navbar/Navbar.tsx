"use client";
import logo from "@/assets/images/logo.png";
import { navbarItems } from "@/constant";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TopNavbar from "./TopNavbar";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <TopNavbar />
      <nav className="relative w-full">
        <div className="flex w-full items-center justify-between px-4 md:px-[211px] py-4 md:py-0">
          <div className="relative w-[120px] h-[50px] md:w-[173.12px] md:h-[74px]">
            <div className="relative w-full h-full">
              <Image src={logo} alt="logo" className=""></Image>
            </div>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon size={24} />
          </button>

          {/* Desktop Navigation links */}
          <nav className="hidden md:inline-flex items-end justify-center gap-10">
            {navbarItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="mt-1 font-semibold text-secondary text-lg text-center  whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#010101] border-t border-gray-800 z-50">
            <nav className="flex flex-col items-center py-4 gap-4">
              <a
                href="#"
                className="[font-family:'Figtree',Helvetica] font-semibold text-[#a9a9a9] text-lg tracking-[0] leading-[normal]"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </a>
              <a
                href="#"
                className="[font-family:'Figtree',Helvetica] font-semibold text-[#a9a9a9] text-lg tracking-[0] leading-[normal]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
