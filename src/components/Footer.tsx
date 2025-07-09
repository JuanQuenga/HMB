import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Tan Marikita's Café", href: "/cafe" },
  { label: "Order", href: "/order" },
  { label: "80th Anniversary", href: "/80th-anniversary" },
  { label: "Family", href: "/family" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#F11A23] to-[#D4151E] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center lg:items-start">
              <Image
                src="/assets/logo-white.svg"
                alt="Herman's Modern Bakery Logo"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-dela-gothic-one font-bold mb-2">
                Herman&apos;s Modern Bakery
              </h3>
              <p className="text-white/80 text-sm text-center lg:text-left">
                Saipan&apos;s First And Finest Bakery
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-dela-gothic-one font-bold mb-4 text-center lg:text-left">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-300 text-center lg:text-left"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-dela-gothic-one font-bold mb-4 text-center lg:text-left">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+16702341726"
                className="flex items-center justify-center lg:justify-start gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
              >
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 16.925l-4.8-2.05a2 2 0 0 0-2.35.45l-2.05 2.05a15.05 15.05 0 0 1-6.6-6.6l2.05-2.05a2 2 0 0 0 .45-2.35l-2.05-4.8A2 2 0 0 0 3.05 2H2A2 2 0 0 0 0 4c0 10.493 8.507 19 19 19a2 2 0 0 0 2-2v-1.05a2 2 0 0 0-1.325-1.925z" />
                </svg>
                <span className="text-sm">+1 670-234-1726</span>
              </a>
              <a
                href="mailto:info@hermansmodernbakery.com"
                className="flex items-center justify-center lg:justify-start gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
              >
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-sm">info@hermansmodernbakery.com</span>
              </a>
              <a
                href="https://www.google.com/maps/place/Herman's+Modern+Bakery/@15.142887,145.730529,823m/data=!3m2!1e3!4b1!4m6!3m5!1s0x66d8b3dc9857811f:0xce480609204a92f0!8m2!3d15.142887!4d145.730529!16s%2Fg%2F1tggns1z?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
              >
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-sm">5040 Chalan Tun Herman Pan</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-dela-gothic-one font-bold mb-4 text-center lg:text-left">
              Follow Us
            </h4>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://www.facebook.com/hermansmodernbakery"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
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
                aria-label="Instagram"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.094 12 2.094m0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 9.333v5.334c0 3.256.012 3.665.07 4.945.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245 1.28.058 1.689.07 4.945.07s3.665-.012 4.945-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-4.945V9.333c0-3.256-.012-3.665-.07-4.945-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0z" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/60 text-sm text-center md:text-left">
              &copy; 2025 Herman&apos;s Modern Bakery. All rights reserved.
            </div>
            <div className="text-white/60 text-sm text-center md:text-right">
              PO BOX 500002 Saipan MP 96950
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
