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
      <nav className=" w-full mt-9 flex items-center justify-center ">
        <section className="container px-32">
          <div className="flex w-full items-start justify-between">
            <div className="h-[72px] w-auto">
              <Image src={logo} alt="logo" className="h-full w-full"></Image>
            </div>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon size={24} />
            </button>

            <ul className="hidden md:inline-flex items-end justify-start gap-10">
              {navbarItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="mt-1 font-semibold text-secondary text-lg text-center  whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
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
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
