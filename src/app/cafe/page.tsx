"use client";
import { cafeMenu } from "@/data/cafeMenu";
import { Button } from "@/components/ui/button";
import LunchSpecials from "@/components/LunchSpecials";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
      <section className="relative w-full bg-gradient-to-br from-[#F11A23] to-[#D4151E] py-10 sm:py-20 lg:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/assets/bannerBackground.png')] bg-cover bg-center opacity-10 bg-[#FCF4E0]"></div>
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
          {/* Cafe Info Block */}
          <div className="mx-auto mt-6 mb-2 max-w-2xl bg-white/80 rounded-xl shadow p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {/* Address */}
              <div className="flex items-center text-[#F11A23] text-lg font-semibold">
                <MapPin className="w-7 h-7 mr-2" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Herman's+Modern+Bakery,+Chalan+Kanoa,+Saipan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline whitespace-nowrap"
                >
                  5040 Chalan Tun Herman Pan, Saipan
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-center text-[#F11A23] text-lg font-semibold">
                <Phone className="w-7 h-7 mr-2" />
                <a
                  href="tel:+16702341726"
                  className="hover:underline whitespace-nowrap"
                >
                  +1 670-234-1726
                </a>
              </div>
              {/* Email */}
              <div className="flex items-center text-[#F11A23] text-lg font-semibold">
                <Mail className="w-7 h-7 mr-2" />
                <a
                  href={`mailto:sales@hermansbakery.com`}
                  className="hover:underline whitespace-nowrap"
                >
                  sales@hermansbakery.com
                </a>
              </div>
              {/* Hours */}
              <div className="flex items-center text-[#F11A23]/90 text-base font-normal">
                <Clock className="w-7 h-7 mr-2" />
                <span className="whitespace-nowrap">
                  Open daily: 6:00am–2:00pm (Last order: 1:30pm)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout with Mobile-Collapsed Lunch Specials */}
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-12 flex flex-col gap-12">
        <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Info + Lunch Specials (mobile-collapsed style even on desktop) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Lunch Specials - always mobile-collapsed style */}
            <section className="w-full flex flex-col items-center">
              <div className="w-full bg-white/90 rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-dela-gothic-one text-[#F11A23] mb-6 text-center">
                  Lunch Specials
                </h2>
                <LunchSpecials forceMobile={true} />
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
                  <TabsList className="mb-28 w-full flex flex-wrap gap-3 justify-center bg-transparent">
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
