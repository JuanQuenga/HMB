import { cafeInfo } from "@/data/cafeMenu";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FCF4E0]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#F11A23] to-[#D4151E] py-10 sm:py-14 lg:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/assets/bannerBackground.png')] bg-cover bg-center opacity-10 bg-[#FCF4E0]"></div>
        <div className="relative max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 z-10">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center p-4 sm:p-6">
              <Image
                src="/assets/logo-white.svg"
                alt="Herman's Modern Bakery Logo"
                width={150}
                height={150}
                className="w-16 h-16 sm:w-30 sm:h-30 lg:w-40 lg:h-40"
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-dela-gothic-one text-white font-extrabold mb-4 sm:mb-6">
            Our Story
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            From humble beginnings in 1944 to Saipan&apos;s premier bakery,
            we&apos;ve been serving the community with love, tradition, and the
            finest baked goods.
          </p>
        </div>
      </section>

      {/* 80th Anniversary Banner */}
      <div className="max-w-3xl mx-auto mt-6 sm:mt-8 mb-8 sm:mb-12 px-2 sm:px-4">
        <a
          href="/80th-anniversary"
          className="block bg-gradient-to-br from-[#F11A23] to-[#D4151E] text-white text-base sm:text-xl md:text-2xl font-bold font-dela-gothic-one rounded-2xl shadow-xl px-4 sm:px-8 py-4 sm:py-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
        >
          <div className="flex items-center justify-center gap-3">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>Celebrating 80 Years!</span>
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        </a>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-16 lg:py-24">
        {/* History Section */}
        <section className="mb-12 sm:mb-20 lg:mb-32">
          <div className="grid gap-8 sm:gap-12 lg:gap-20 items-center lg:grid-cols-2">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold">
                A Legacy of Excellence
              </h2>
              <div className="space-y-2 sm:space-y-4 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>{cafeInfo.intro}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/photos/celebrating-1.jpg"
                  alt="Herman's Bakery 80th Anniversary Group Photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-[#F11A23] text-white px-4 sm:px-8 py-2 sm:py-4 rounded-xl shadow-lg">
                <p className="text-base sm:text-xl font-bold font-dela-gothic-one">
                  Est. 1944
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tan Marikita Section */}
        <section className="mb-12 sm:mb-20 lg:mb-32">
          <div className="grid gap-8 sm:gap-12 lg:gap-20 items-center lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/photos/cafe-4.jpg"
                  alt="Tan Marikita Cafe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 bg-white text-[#F11A23] px-3 sm:px-6 py-1.5 sm:py-3 rounded-xl shadow-lg border-2 border-[#F11A23]">
                <p className="text-base sm:text-lg font-bold font-dela-gothic-one">
                  Tan Marikita Cafe
                </p>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold">
                Tan Marikita&apos;s Legacy
              </h2>
              <div className="space-y-2 sm:space-y-4 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>{cafeInfo.about}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-12 sm:mb-20 lg:mb-32">
          <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold text-center mb-6 sm:mb-12">
              By The Numbers
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F11A23] font-dela-gothic-one mb-1 sm:mb-2">
                  80+
                </div>
                <div className="text-gray-600 font-medium text-xs sm:text-base">
                  Years of Service
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F11A23] font-dela-gothic-one mb-1 sm:mb-2">
                  1000+
                </div>
                <div className="text-gray-600 font-medium text-xs sm:text-base">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F11A23] font-dela-gothic-one mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-gray-600 font-medium text-xs sm:text-base">
                  Menu Items
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F11A23] font-dela-gothic-one mb-1 sm:mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium text-xs sm:text-base">
                  Fresh Baking
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12 sm:mb-20 lg:mb-32">
          <div className="bg-gradient-to-br from-[#F11A23] to-[#D4151E] rounded-3xl shadow-xl p-4 sm:p-8 lg:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-dela-gothic-one font-bold text-center mb-6 sm:mb-12">
              Visit Us Today
            </h2>
            <div className="grid gap-4 sm:gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-2 sm:gap-4">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-xl">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1">
                      Address
                    </h3>
                    <p className="text-white/90 text-xs sm:text-base">
                      {cafeInfo.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+16702341726"
                      className="text-white/90 hover:text-white underline"
                    >
                      +1 670-234-1726
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a
                      href={`mailto:${cafeInfo.email}`}
                      className="text-white/90 hover:text-white underline"
                    >
                      {cafeInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Hours</h3>
                    <p className="text-white/90">{cafeInfo.hours}</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="font-bold text-lg mb-3">Special Note</h4>
                  <p className="text-white/90 text-sm">
                    Don&apos;t forget to take home some of our famous
                    Herman&apos;s Modern Bakery&apos;s Pan Tuba, Sweet Bread,
                    Pan Toasta, and other favorite pastries!
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                {/* Map */}
                <div className="min-h-[300px] md:min-h-[400px] relative rounded-xl overflow-hidden shadow-md bg-white">
                  <div className="w-full h-full min-h-[300px] md:min-h-[400px] bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 text-[#F11A23] mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-gray-600 font-medium">
                        Interactive Map
                      </p>
                    </div>
                  </div>
                </div>
                {/* Direction Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <a
                    href="https://maps.apple.com/?q=5040%20Chalan%20Tun%20Herman%20Pan,%20Saipan,%20Northern%20Mariana%20Islands%2096950"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-gray-800 text-white px-4 py-3 font-sans border border-black flex-1 text-lg font-bold flex items-center justify-center min-w-0 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Apple Maps
                  </a>
                  <a
                    href="https://maps.app.google.com/J2yJtKyHPNT1KL6f8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#4285F4] hover:bg-[#3367D6] text-white px-4 py-3 font-sans border border-[#4285F4] flex-1 text-lg font-bold flex items-center justify-center min-w-0 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold mb-6">
              Experience the Difference
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Join us for breakfast served to perfection all day long. Where
              everyone is welcomed and treated like family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="bg-[#F11A23] hover:bg-[#D4151E] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 inline-block text-center"
              >
                View Our Products
              </a>
              <a
                href="/order"
                className="border-2 border-[#F11A23] text-[#F11A23] hover:bg-[#F11A23] hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 inline-block text-center"
              >
                Place An Order
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
