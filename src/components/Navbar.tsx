"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Tan Marikita's Café", href: "/cafe" },
  { label: "Our Products", href: "/products" },
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
              <div className="absolute inset-0 "></div>
            </div>
            {/* <div className="ml-3 hidden sm:block transition-transform duration-300 group-hover:scale-110"> */}
            <div className="ml-3  transition-transform duration-300 group-hover:scale-110">
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

          {/* Social Media & Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Phone */}
            <a
              href="tel:+16702341726"
              className="flex items-center justify-center w-9 h-9 p-0 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Call us"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 16.925l-4.8-2.05a2 2 0 0 0-2.35.45l-2.05 2.05a15.05 15.05 0 0 1-6.6-6.6l2.05-2.05a2 2 0 0 0 .45-2.35l-2.05-4.8A2 2 0 0 0 3.05 2H2A2 2 0 0 0 0 4c0 10.493 8.507 19 19 19a2 2 0 0 0 2-2v-1.05a2 2 0 0 0-1.325-1.925z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:info@hermansmodernbakery.com"
              className="flex items-center justify-center w-9 h-9 p-0 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Email us"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/hermansmodernbakery"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 p-0 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/hermansmodernbakery/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 p-0 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </a>
          </div>

          {/* Order Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/order"
              className="hidden sm:inline-flex items-center px-6 py-3 bg-white text-[#F11A23] font-bold font-dela-gothic-one rounded-xl hover:bg-[#FCF4E0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Place An Order
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
          <div className="lg:hidden">
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

              {/* Mobile Social Media & Contact */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-white/20">
                <a
                  href="tel:+16702341726"
                  className="p-3 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300"
                  aria-label="Call us"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 16.925l-4.8-2.05a2 2 0 0 0-2.35.45l-2.05 2.05a15.05 15.05 0 0 1-6.6-6.6l2.05-2.05a2 2 0 0 0 .45-2.35l-2.05-4.8A2 2 0 0 0 3.05 2H2A2 2 0 0 0 0 4c0 10.493 8.507 19 19 19a2 2 0 0 0 2-2v-1.05a2 2 0 0 0-1.325-1.925z" />
                  </svg>
                </a>
                <a
                  href="mailto:info@hermansmodernbakery.com"
                  className="p-3 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300"
                  aria-label="Email us"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/hermansmodernbakery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/hermansmodernbakery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </a>
              </div>

              <Link
                href="/order"
                className="block mt-6 bg-white text-[#F11A23] font-bold font-dela-gothic-one py-3 px-6 rounded-xl text-center hover:bg-[#FCF4E0] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Place An Order
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
