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
    <nav className="w-full bg-gradient-to-br from-[#E0151D] to-[#B81219] shadow-lg sticky top-0 z-50">
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
          <div className="hidden lg:flex items-center space-x-2">
            {/* Phone */}
            <a
              href="tel:+16702341726"
              className="flex items-center justify-center w-10 h-10 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Call us"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 16.925l-4.8-2.05a2 2 0 0 0-2.35.45l-2.05 2.05a15.05 15.05 0 0 1-6.6-6.6l2.05-2.05a2 2 0 0 0 .45-2.35l-2.05-4.8A2 2 0 0 0 3.05 2H2A2 2 0 0 0 0 4c0 10.493 8.507 19 19 19a2 2 0 0 0 2-2v-1.05a2 2 0 0 0-1.325-1.925z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:info@hermansmodernbakery.com"
              className="flex items-center justify-center w-10 h-10 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Email us"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/hermansmodernbakery"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="256"
                height="256"
                viewBox="0 0 256 256"
                className="w-5 h-5"
              >
                <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                  <path
                    d="M 83.254 90 H 59.253 c -1.104 0 -2 -0.896 -2 -2 V 54.696 c 0 -1.104 0.896 -2 2 -2 h 9.42 l 1.158 -8.979 H 59.253 c -1.104 0 -2 -0.896 -2 -2 v -8.286 c 0 -3.571 0.874 -8.319 8.432 -8.319 l 4.873 -0.002 v -7.801 c -1.871 -0.154 -4.797 -0.32 -8.015 -0.32 c -9.2 0 -14.693 5.666 -14.693 15.156 v 9.572 c 0 1.104 -0.896 2 -2 2 h -9.208 v 8.979 h 9.208 c 1.104 0 2 0.896 2 2 V 88 c 0 1.104 -0.896 2 -2 2 H 6.747 C 3.027 90 0 86.974 0 83.253 V 6.747 C 0 3.026 3.027 0 6.747 0 h 76.507 C 86.974 0 90 3.026 90 6.747 v 76.506 C 90 86.974 86.974 90 83.254 90 z M 61.253 86 h 22.001 C 84.769 86 86 84.768 86 83.253 V 6.747 C 86 5.232 84.769 4 83.254 4 H 6.747 C 5.232 4 4 5.232 4 6.747 v 76.506 C 4 84.768 5.232 86 6.747 86 H 43.85 V 56.696 h -9.208 c -1.104 0 -2 -0.896 -2 -2 V 41.717 c 0 -1.104 0.896 -2 2 -2 h 9.208 v -7.572 c 0 -11.816 7.163 -19.156 18.693 -19.156 c 4.763 0 8.981 0.356 10.278 0.529 c 0.994 0.132 1.736 0.98 1.736 1.982 v 11.608 c 0 1.104 -0.895 2 -1.999 2 l -6.873 0.003 c -3.995 0 -4.433 1.383 -4.433 4.319 v 6.286 h 10.853 c 0.575 0 1.122 0.248 1.502 0.679 c 0.38 0.432 0.555 1.006 0.481 1.577 l -1.674 12.979 c -0.129 0.997 -0.978 1.744 -1.983 1.744 h -9.179 V 86 z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/hermansmodernbakery/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
              <div className="flex justify-center space-x-2 pt-4 border-t border-white/20">
                <a
                  href="tel:+16702341726"
                  className="flex items-center justify-center w-10 h-10 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300"
                  aria-label="Call us"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 16.925l-4.8-2.05a2 2 0 0 0-2.35.45l-2.05 2.05a15.05 15.05 0 0 1-6.6-6.6l2.05-2.05a2 2 0 0 0 .45-2.35l-2.05-4.8A2 2 0 0 0 3.05 2H2A2 2 0 0 0 0 4c0 10.493 8.507 19 19 19a2 2 0 0 0 2-2v-1.05a2 2 0 0 0-1.325-1.925z" />
                  </svg>
                </a>
                <a
                  href="mailto:info@hermansmodernbakery.com"
                  className="flex items-center justify-center w-10 h-10 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300"
                  aria-label="Email us"
                >
                  <svg
                    className="w-5 h-5"
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
                  className="flex items-center justify-center w-10 h-10 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="256"
                    height="256"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                  >
                    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                      <path
                        d="M 83.254 90 H 59.253 c -1.104 0 -2 -0.896 -2 -2 V 54.696 c 0 -1.104 0.896 -2 2 -2 h 9.42 l 1.158 -8.979 H 59.253 c -1.104 0 -2 -0.896 -2 -2 v -8.286 c 0 -3.571 0.874 -8.319 8.432 -8.319 l 4.873 -0.002 v -7.801 c -1.871 -0.154 -4.797 -0.32 -8.015 -0.32 c -9.2 0 -14.693 5.666 -14.693 15.156 v 9.572 c 0 1.104 -0.896 2 -2 2 h -9.208 v 8.979 h 9.208 c 1.104 0 2 0.896 2 2 V 88 c 0 1.104 -0.896 2 -2 2 H 6.747 C 3.027 90 0 86.974 0 83.253 V 6.747 C 0 3.026 3.027 0 6.747 0 h 76.507 C 86.974 0 90 3.026 90 6.747 v 76.506 C 90 86.974 86.974 90 83.254 90 z M 61.253 86 h 22.001 C 84.769 86 86 84.768 86 83.253 V 6.747 C 86 5.232 84.769 4 83.254 4 H 6.747 C 5.232 4 4 5.232 4 6.747 v 76.506 C 4 84.768 5.232 86 6.747 86 H 43.85 V 56.696 h -9.208 c -1.104 0 -2 -0.896 -2 -2 V 41.717 c 0 -1.104 0.896 -2 2 -2 h 9.208 v -7.572 c 0 -11.816 7.163 -19.156 18.693 -19.156 c 4.763 0 8.981 0.356 10.278 0.529 c 0.994 0.132 1.736 0.98 1.736 1.982 v 11.608 c 0 1.104 -0.895 2 -1.999 2 l -6.873 0.003 c -3.995 0 -4.433 1.383 -4.433 4.319 v 6.286 h 10.853 c 0.575 0 1.122 0.248 1.502 0.679 c 0.38 0.432 0.555 1.006 0.481 1.577 l -1.674 12.979 c -0.129 0.997 -0.978 1.744 -1.983 1.744 h -9.179 V 86 z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/hermansmodernbakery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-white hover:text-[#FCF4E0] hover:bg-white/10 rounded-lg transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
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
