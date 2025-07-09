import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Error Number */}
          <div className="relative mb-8">
            <h1 className="text-9xl md:text-[12rem] font-dela-gothic-one text-[#F11A23] font-bold leading-none">
              404
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F11A23]/20 to-[#D4151E]/20 blur-3xl rounded-full"></div>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-dela-gothic-one text-gray-800 font-bold mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-sans mb-8 max-w-2xl mx-auto leading-relaxed">
            It looks like this page has wandered off like a fresh loaf of bread
            from our oven. Don&apos;t worry, you can always find your way back
            to our delicious treats!
          </p>

          {/* Decorative Image */}
          <div className="relative mb-12 max-w-md mx-auto">
            <Image
              src="/assets/photos/bread1.jpg"
              alt="Fresh bread from Herman's Modern Bakery"
              width={400}
              height={300}
              className="rounded-2xl shadow-2xl object-cover w-full h-64"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#F11A23] text-white px-6 py-3 rounded-lg shadow-lg">
              <p className="text-lg font-bold font-dela-gothic-one">
                Fresh Daily
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="bg-[#F11A23] hover:bg-[#D9101F] text-white px-8 py-4 rounded-xl font-bold font-dela-gothic-one transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Back to Home
            </Link>
            <Link
              href="/products"
              className="bg-white hover:bg-gray-50 text-[#F11A23] border-2 border-[#F11A23] px-8 py-4 rounded-xl font-bold font-dela-gothic-one transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Browse Products
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 font-sans mb-4">Quick Navigation:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="text-[#F11A23] hover:text-[#D9101F] font-semibold font-sans transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="/cafe"
                className="text-[#F11A23] hover:text-[#D9101F] font-semibold font-sans transition-colors duration-300"
              >
                Tan Marikita&apos;s Café
              </Link>
              <Link
                href="/order"
                className="text-[#F11A23] hover:text-[#D9101F] font-semibold font-sans transition-colors duration-300"
              >
                Place an Order
              </Link>
              <Link
                href="/feedback"
                className="text-[#F11A23] hover:text-[#D9101F] font-semibold font-sans transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
