"use client";
import logo from "@/assets/images/logo.png";
import { navbarItems } from "@/constant";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const BottomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className=" w-full relative mt-4 md:mt-9 flex items-center justify-center z-10">
      <section className="container md:px-32">
        <div className="flex w-full items-start justify-between">
          <div className="md:w-fit w-full md:block flex items-center justify-center">
            <div className="md:h-[72px] md:w-auto w-28 h-auto">
              <Image src={logo} alt="logo" className="h-full w-full"></Image>
            </div>
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
          <div className="md:hidden absolute top-[calc(100%+10px)] left-0 w-full bg-[#010101] border-t border-gray-800 z-50">
            <ul className="flex flex-col items-center py-4 gap-4">
              {navbarItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="font-figtree font-semibold text-[#a9a9a9] text-lg tracking-[0] leading-[normal]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </section>
    </nav>
  );
};

export default BottomNavbar;
