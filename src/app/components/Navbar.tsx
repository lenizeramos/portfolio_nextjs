"use client";
import Image from "next/image";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#0b0b0b] shadow-md fixed top-0 w-full z-20 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/">
            <Image
              src={"/images/logo.png"}
              width={50}
              height={50}
              alt="logo"
              className="pb-2"
            />
          </Link>
          <div className="hidden md:flex space-x-6 ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[#ff007f] hover:text-white transition-colors ${pathname === link.href ? "font-bold" : ""}`}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-[#ff007f] p-4 flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 translate-y-5"
        } overflow-hidden`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-300 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
