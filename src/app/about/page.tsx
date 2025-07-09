import { cafeInfo } from "@/data/cafeMenu";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FCF4E0]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#F11A23] to-[#D4151E] py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <Image
              src="/assets/logo-white.svg"
              alt="Herman's Modern Bakery Logo"
              width={120}
              height={120}
              className="mx-auto mb-8"
            />
            <h1 className="text-5xl lg:text-7xl font-dela-gothic-one text-white font-extrabold mb-6">
              Our Story
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              From humble beginnings in 1944 to Saipan&apos;s premier bakery,
              we&apos;ve been serving the community with love, tradition, and
              the finest baked goods.
            </p>
          </div>
        </div>
      </section>

      {/* 80th Anniversary Banner */}
      <div className="max-w-3xl mx-auto mt-8 mb-12 px-4">
        <a
          href="/80th-anniversary"
          className="block bg-gradient-to-br from-[#F11A23] to-[#D4151E] text-white text-xl md:text-2xl font-bold font-dela-gothic-one rounded-2xl shadow-lg px-8 py-6 text-center hover:scale-105 transition-transform duration-300 border-4 border-white"
        >
          🎉 Celebrating 80 Years! Click here to see our 80th Anniversary Page
          🎉
        </a>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
        {/* History Section */}
        <section className="mb-20 lg:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold">
                A Legacy of Excellence
              </h2>
              <div className="space-y-4 text-lg lg:text-xl text-gray-700 leading-relaxed">
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
              <div className="absolute -bottom-6 -left-6 bg-[#F11A23] text-white px-8 py-4 rounded-xl shadow-lg">
                <p className="text-xl font-bold font-dela-gothic-one">
                  Est. 1944
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tan Marikita Section */}
        <section className="mb-20 lg:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/photos/cafe-4.jpg"
                  alt="Tan Marikita Cafe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white text-[#F11A23] px-6 py-3 rounded-xl shadow-lg border-2 border-[#F11A23]">
                <p className="text-lg font-bold font-dela-gothic-one">
                  Tan Marikita Cafe
                </p>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold">
                Tan Marikita&apos;s Legacy
              </h2>
              <div className="space-y-4 text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>{cafeInfo.about}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20 lg:mb-32">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold text-center mb-12">
              By The Numbers
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#F11A23] font-dela-gothic-one mb-2">
                  80+
                </div>
                <div className="text-gray-600 font-medium">
                  Years of Service
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#F11A23] font-dela-gothic-one mb-2">
                  1000+
                </div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#F11A23] font-dela-gothic-one mb-2">
                  50+
                </div>
                <div className="text-gray-600 font-medium">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#F11A23] font-dela-gothic-one mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Fresh Baking</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20 lg:mb-32">
          <div className="bg-gradient-to-br from-[#F11A23] to-[#D4151E] rounded-3xl shadow-xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-dela-gothic-one font-bold text-center mb-12">
              Visit Us Today
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="space-y-6">
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
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="text-white/90">{cafeInfo.address}</p>
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
                    <p className="text-white/90">{cafeInfo.phone}</p>
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
              </div>
              <div className="space-y-6">
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
              <button className="bg-[#F11A23] hover:bg-[#D4151E] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300">
                View Our Menu
              </button>
              <button className="border-2 border-[#F11A23] text-[#F11A23] hover:bg-[#F11A23] hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300">
                Place An Order
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
