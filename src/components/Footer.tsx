import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Tan Marikita's Café", href: "/cafe" },
  { label: "Place An Order", href: "/order" },
];

const extraLinks = [
  { label: "80th Anniversary", href: "/80th-anniversary" },
  { label: "Our History", href: "/history" },
  { label: "Our Family", href: "/family" },
  { label: "Customer Feedback", href: "/feedback" },
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

          {/* Other Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-dela-gothic-one font-bold mb-4 text-center lg:text-left">
              Other Links
            </h4>
            <div className="pb-6">
              <nav className="flex flex-col space-y-2 mt-4">
                {extraLinks.map((link) => (
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
          </div>

          {/* Contact Information & Social Media */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-dela-gothic-one font-bold mb-4 text-center lg:text-left">
              Contact Us
            </h4>
            <div className="space-y-3 mb-6">
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
            <h4 className="text-lg font-dela-gothic-one font-bold mb-4 text-center lg:text-left">
              Follow Us
            </h4>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://www.facebook.com/hermansmodernbakery"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
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
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
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
