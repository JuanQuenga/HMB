import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Tan Marikita's Café", href: "/cafe" },
  { label: "Order", href: "/order" },
];

export default function Footer() {
  return (
    <footer className="w-full shadow-lg py-8  bg-gradient-to-br from-[#F11A23] to-[#D4151E]">
      <div className="flex flex-col items-center gap-4 w-full">
        <Image
          src="/assets/logo-white.svg"
          alt="Herman's Modern Bakery Logo"
          width={60}
          height={60}
          className="mb-2"
        />
        <nav className="flex flex-wrap justify-center gap-6 mb-2">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg font-bold font-dela-gothic-one text-white hover:text-[#FCF4E0] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="text-white text-sm font-bold text-center font-sans">
          &copy; {new Date().getFullYear()} Herman&apos;s Modern Bakery. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
