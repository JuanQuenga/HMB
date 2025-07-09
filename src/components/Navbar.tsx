"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Tan Marikita's Café", href: "/cafe" },
  { label: "Products", href: "/products" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-br from-[#F11A23] to-[#D4151E] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/assets/logo-white.svg"
                alt="Herman's Modern Bakery Logo"
                width={48}
                height={48}
                className="transition-transform duration-300 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="ml-3 hidden sm:block">
              <h1 className="text-white font-dela-gothic-one text-lg lg:text-xl font-bold">
                Herman&apos;s
              </h1>
              <p className="text-white/80 text-xs lg:text-sm font-medium">
                Modern Bakery
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-white font-semibold text-lg hover:text-[#FCF4E0] transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FCF4E0] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Order Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/order"
              className="hidden sm:inline-flex items-center px-6 py-3 bg-white text-[#F11A23] font-bold font-dela-gothic-one rounded-xl hover:bg-[#FCF4E0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Order Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-gradient-to-b from-[#D4151E] to-[#F11A23]">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-white font-semibold text-lg py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/order"
                className="block mt-6 bg-white text-[#F11A23] font-bold font-dela-gothic-one py-3 px-6 rounded-xl text-center hover:bg-[#FCF4E0] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </nav>
  );
}
