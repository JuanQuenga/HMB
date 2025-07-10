"use client";
import { cafeMenu } from "@/data/cafeMenu";
import { Button } from "@/components/ui/button";
import LunchSpecials from "@/components/LunchSpecials";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Printer } from "lucide-react";
import Image from "next/image";

export default function CafePage() {
  const cafeInfo = {
    name: "Tan Marikita's Café",
    address: "5040 Chalan Tun Herman Pan, Saipan",
    phone: "+1 670-234-1726",
    email: "sales@hermansbakery.com",
    hours: "OPEN DAILY: 6:00AM TO 2:00PM (Last Order call @ 1:30PM)",
  };
  return (
    <div className="min-h-screen bg-[#FCF4E0]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-black/90 to-[#000000] py-10 sm:py-20 lg:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-[url('/assets/photos/cafe-2.jpg')] bg-cover bg-center opacity-50 bg-[#FCF4E0]"></div>
        <div className="relative max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 z-10">
          <div className="flex justify-center mb-6 sm:mb-8">
            <Image
              src="/assets/logo-white.svg"
              alt="Tan Marikita's Café Logo"
              width={96}
              height={96}
              className="w-16 h-16 sm:w-24 sm:h-24"
            />
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-dela-gothic-one text-white font-extrabold mb-4 sm:mb-6">
            {cafeInfo.name}
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-8">
            Where breakfast is served to perfection all day long!
          </p>
        </div>
      </section>

      {/* Main content with mobile-first layout */}
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-12 flex flex-col gap-12">
        {/* About Section - First on mobile, hidden on desktop */}
        <section className="w-full flex flex-col items-center lg:hidden">
          <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-48 md:h-64 bg-gradient-to-br from-[#F11A23] to-[#D4151E]">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 bg-[url('/assets/photos/cafe-1.jpg')] bg-cover bg-center opacity-30"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl md:text-4xl font-dela-gothic-one font-bold mb-2">
                    About Our Café
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 font-medium">
                    Tan Marikita&apos;s Legacy of Hospitality
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {/* Unified Story Section */}
              <div className="max-w-3xl mx-auto flex flex-col gap-6 mb-8 text-center">
                <h3 className="text-2xl md:text-3xl font-dela-gothic-one text-[#F11A23] mb-2">
                  Our Story
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Herman&apos;s wife, Maria, better known as &quot;Tan
                  Marikita&quot;, was well known throughout Saipan for her
                  generous spirit and hospitality. She opened her heart and home
                  to many.
                </p>
                <div className="bg-gradient-to-r from-[#FFF3F3] to-[#FFE0E0] p-6 rounded-xl border-l-4 border-[#F11A23] mx-auto">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
                    &quot;We hope the menu choices offered by Tan
                    Marikita&apos;s Cafe will be satisfying and enjoyable just
                    as they were at her table, where everyone was welcomed and
                    treated like family.&quot;
                  </p>
                </div>
              </div>

              {/* Unified Photo Gallery - always 2x2 grid */}
              <div className="max-w-4xl mx-auto mb-10">
                <h3 className="text-xl md:text-2xl font-dela-gothic-one text-[#F11A23] mb-4 text-center">
                  Our Café Atmosphere
                </h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="relative h-28 sm:h-32 md:h-40 rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="/assets/photos/cafe-1.jpg"
                      alt="Café interior"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="relative h-28 sm:h-32 md:h-40 rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="/assets/photos/cafe-3.jpg"
                      alt="Café dining area"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="relative h-28 sm:h-32 md:h-40 rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="/assets/photos/cafe-4.jpg"
                      alt="Café atmosphere"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="relative h-28 sm:h-32 md:h-40 rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="/assets/photos/cafe-2.jpg"
                      alt="Café seating"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-[#E0151D] to-[#B81219] rounded-2xl text-white overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-dela-gothic-one font-bold mb-2">
                      Visit Us Today
                    </h3>
                    <p className="text-white/90 text-base md:text-lg">
                      Experience the warmth and hospitality of Tan
                      Marikita&apos;s Café
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <MapPin className="w-6 h-6 mr-4 text-white/90 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-sm text-white/80 uppercase tracking-wide">
                          Location
                        </p>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Herman's+Modern+Bakery,+Chalan+Kanoa,+Saipan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-white hover:text-[#FCF4E0] transition-colors duration-300 break-words"
                        >
                          5040 Chalan Tun Herman Pan, Saipan
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <Phone className="w-6 h-6 mr-4 text-white/90 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-sm text-white/80 uppercase tracking-wide">
                          Phone
                        </p>
                        <a
                          href="tel:+16702341726"
                          className="text-base text-white hover:text-[#FCF4E0] transition-colors duration-300 break-words"
                        >
                          +1 670-234-1726
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <Mail className="w-6 h-6 mr-4 text-white/90 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-sm text-white/80 uppercase tracking-wide">
                          Email
                        </p>
                        <a
                          href="mailto:sales@hermansbakery.com"
                          className="text-base text-white hover:text-[#FCF4E0] transition-colors duration-300 break-words"
                        >
                          sales@hermansbakery.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <Printer className="w-6 h-6 mr-4 text-white/90 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-sm text-white/80 uppercase tracking-wide">
                          Fax
                        </p>
                        <span className="text-base text-white break-words">
                          288-1726
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <p className="text-lg font-semibold text-white mb-1">
                      Open Daily
                    </p>
                    <p className="text-base text-white/90">
                      6:00am – 2:00pm (Last order: 1:30pm)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Layout Container */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Lunch Specials + About */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <section className="w-full flex flex-col items-center">
              <div className="w-full bg-white/90 rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-dela-gothic-one text-[#F11A23] mb-6 text-center">
                  Lunch Specials
                </h2>
                <LunchSpecials forceMobile={true} />
              </div>
            </section>

            {/* About Section - Desktop version (under Lunch Specials) */}
            <section className="w-full flex flex-col items-center hidden lg:flex">
              <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Hero Image */}
                <div className="relative h-48 md:h-64 bg-gradient-to-br from-[#F11A23] to-[#D4151E]">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-[url('/assets/photos/cafe-1.jpg')] bg-cover bg-center opacity-30"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-3xl md:text-4xl font-dela-gothic-one font-bold mb-2">
                        About Our Café
                      </h2>
                      <p className="text-lg md:text-xl text-white/90 font-medium">
                        Tan Marikita&apos;s Legacy of Hospitality
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  {/* Unified Story Section */}
                  <div className="max-w-3xl mx-auto flex flex-col gap-6 mb-8 text-center">
                    <h3 className="text-2xl md:text-3xl font-dela-gothic-one text-[#F11A23] mb-2">
                      Our Story
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      Herman&apos;s wife, Maria, better known as &quot;Tan
                      Marikita&quot;, was well known throughout Saipan for her
                      generous spirit and hospitality. She opened her heart and
                      home to many.
                    </p>
                    <div className="bg-gradient-to-r from-[#FFF3F3] to-[#FFE0E0] p-6 rounded-xl border-l-4 border-[#F11A23] mx-auto">
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
                        &quot;We hope the menu choices offered by Tan
                        Marikita&apos;s Cafe will be satisfying and enjoyable
                        just as they were at her table, where everyone was
                        welcomed and treated like family.&quot;
                      </p>
                    </div>
                  </div>

                  {/* Unified Photo Gallery - always 2x2 grid */}
                  <div className="max-w-4xl mx-auto mb-10">
                    <h3 className="text-xl md:text-2xl font-dela-gothic-one text-[#F11A23] mb-4 text-center">
                      Our Café Atmosphere
                    </h3>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div className="relative h-28 sm:h-32 md:h-40 rounded-xl overflow-hidden shadow-lg group">
                        <Image
                          src="/assets/photos/cafe-1.jpg"
                          alt="Café interior"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                      <div className="relative h-28 sm:h-32 md:h-40 rounded-xl overflow-hidden shadow-lg group">
                        <Image
                          src="/assets/photos/cafe-3.jpg"
                          alt="Café dining area"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                      <div className="relative h-28 sm:h-32 md:h-40 rounded-xl overflow-hidden shadow-lg group">
                        <Image
                          src="/assets/photos/cafe-4.jpg"
                          alt="Café atmosphere"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                      <div className="relative h-28 sm:h-32 md:h-40 rounded-xl overflow-hidden shadow-lg group">
                        <Image
                          src="/assets/photos/cafe-2.jpg"
                          alt="Café seating"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-gradient-to-br from-[#E0151D] to-[#B81219] rounded-2xl text-white overflow-hidden">
                    <div className="p-6 md:p-8">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl md:text-3xl font-dela-gothic-one font-bold mb-2">
                          Visit Us Today
                        </h3>
                        <p className="text-white/90 text-base md:text-lg">
                          Experience the warmth and hospitality of Tan
                          Marikita&apos;s Café
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                          <MapPin className="w-6 h-6 mr-4 text-white/90 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-sm text-white/80 uppercase tracking-wide">
                              Location
                            </p>
                            <a
                              href="https://www.google.com/maps/search/?api=1&query=Herman's+Modern+Bakery,+Chalan+Kanoa,+Saipan"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-base text-white hover:text-[#FCF4E0] transition-colors duration-300 break-words"
                            >
                              5040 Chalan Tun Herman Pan, Saipan
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                          <Phone className="w-6 h-6 mr-4 text-white/90 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-sm text-white/80 uppercase tracking-wide">
                              Phone
                            </p>
                            <a
                              href="tel:+16702341726"
                              className="text-base text-white hover:text-[#FCF4E0] transition-colors duration-300 break-words"
                            >
                              +1 670-234-1726
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                          <Mail className="w-6 h-6 mr-4 text-white/90 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-sm text-white/80 uppercase tracking-wide">
                              Email
                            </p>
                            <a
                              href="mailto:sales@hermansbakery.com"
                              className="text-base text-white hover:text-[#FCF4E0] transition-colors duration-300 break-words"
                            >
                              sales@hermansbakery.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                          <Printer className="w-6 h-6 mr-4 text-white/90 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-sm text-white/80 uppercase tracking-wide">
                              Fax
                            </p>
                            <span className="text-base text-white break-words">
                              288-1726
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                        <p className="text-lg font-semibold text-white mb-1">
                          Open Daily
                        </p>
                        <p className="text-base text-white/90">
                          6:00am – 2:00pm (Last order: 1:30pm)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Menu with Tabs */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <section className="w-full flex flex-col items-center">
              <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-8">
                <h2 className="text-2xl md:text-3xl font-dela-gothic-one text-[#F11A23] mb-6 text-center">
                  Menu
                </h2>
                <Tabs defaultValue={cafeMenu[0].section} className="w-full">
                  <TabsList className="mb-28 w-full flex flex-wrap gap-3 justify-center bg-transparent sticky top-0 z-30 ">
                    {cafeMenu.map((section) => (
                      <TabsTrigger
                        key={section.section}
                        value={section.section}
                        className={`capitalize px-7 py-3 rounded-full font-bold text-lg md:text-xl transition-colors shadow-none border
                            data-[state=active]:bg-[#F11A23] data-[state=active]:text-white data-[state=active]:border-[#F11A23]
                            data-[state=inactive]:bg-[#FFE0E0] data-[state=inactive]:text-[#F11A23] data-[state=inactive]:border-[#FBB1B5]`}
                      >
                        {section.section.startsWith("Ala Cart")
                          ? "Ala Carte"
                          : section.section}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {cafeMenu.map((section) => (
                    <TabsContent
                      key={section.section}
                      value={section.section}
                      className="w-full"
                    >
                      <div className="flex flex-col gap-3">
                        {/* If Ala Carte, show the Served with text at the top */}
                        {section.section.startsWith("Ala Cart") && (
                          <div className="mb-2 text-[#F11A23] font-semibold text-base md:text-lg">
                            Served with Steamed rice, buttered corn, or salad
                          </div>
                        )}
                        {section.items.map((item) => (
                          <div
                            key={item.name}
                            className="flex flex-col gap-1 py-2"
                          >
                            <div className="flex items-baseline w-full">
                              <span className="font-extrabold text-lg md:text-xl text-gray-900 whitespace-pre-line">
                                {item.name}
                              </span>
                              <span className="flex-1 border-t border-dotted border-gray-400 mx-2"></span>
                              <span className="font-extrabold text-lg md:text-xl text-[#F11A23]">
                                ${item.price?.toFixed(2)}
                              </span>
                            </div>
                            {"description" in item && item.description && (
                              <span className="block text-gray-500 text-sm md:text-base leading-tight">
                                {item.description}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </section>
          </div>
        </div>

        {/* Call to Action */}
        <section className="w-full flex flex-col items-center mt-8">
          <Button
            asChild
            className="bg-[#F11A23] hover:bg-[#D4151E] text-white text-lg px-8 py-4 rounded-xl font-bold shadow-md"
          >
            <a href="/order">Place an Order</a>
          </Button>
        </section>
      </main>
    </div>
  );
}
