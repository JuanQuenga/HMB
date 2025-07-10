"use client";
import { cafeMenu } from "@/data/cafeMenu";
import { Button } from "@/components/ui/button";
import LunchSpecials from "@/components/LunchSpecials";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Clock, Printer } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CafePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [showSheet, setShowSheet] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (showSheet) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Clean up in case the component unmounts while open
    return () => document.body.classList.remove("overflow-hidden");
  }, [showSheet]);

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
        <div className="absolute inset-0 bg-black/10"></div>
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

      {/* Mobile Layout: Clean Modern Redesign */}
      {isMobile ? (
        <div className="w-full min-h-screen flex flex-col bg-[#FFF3F3]">
          {/* About Section */}
          <section className="bg-white rounded-2xl shadow-lg mx-3 px-4 py-6 mb-4 flex flex-col items-center">
            <h2 className="text-xl font-bold text-[#F11A23] font-dela-gothic-one mb-2 text-center">
              About Our Café
            </h2>
            <p className="text-gray-700 text-base leading-relaxed text-center mb-4">
              Herman&apos;s wife, Maria, better known as &quot;Tan
              Marikita,&quot; was well known throughout Saipan for her generous
              spirit and hospitality. She opened her heart and home to many. We
              hope the menu choices offered by Tan Marikita&apos;s Cafe will be
              satisfying and enjoyable just as they were at her table, where
              everyone was welcomed and treated like family.
            </p>
            {/* Contact Info */}
            <div className="w-full grid grid-cols-2 gap-3 text-xs mt-2">
              <div className="flex items-center gap-2 text-[#F11A23]">
                <MapPin className="w-4 h-4" />
                <span>5040 Chalan Tun Herman Pan</span>
              </div>
              <div className="flex items-center gap-2 text-[#F11A23]">
                <Phone className="w-4 h-4" />
                <span>+1 670-234-1726</span>
              </div>
              <div className="flex items-center gap-2 text-[#F11A23]">
                <Mail className="w-4 h-4" />
                <span>sales@hermansbakery.com</span>
              </div>
              <div className="flex items-center gap-2 text-[#F11A23]">
                <Printer className="w-4 h-4" />
                <span>Fax: 288-1726</span>
              </div>
              <div className="flex items-center gap-2 text-[#F11A23] col-span-2">
                <Clock className="w-4 h-4" />
                <span>Open daily: 6:00am–2:00pm (Last order: 1:30pm)</span>
              </div>
            </div>
          </section>

          {/* Food Gallery - Horizontal Scroll */}
          <section className="mb-4">
            <h3 className="text-lg font-dela-gothic-one text-[#F11A23] mb-2 text-center">
              A Taste of Our Food
            </h3>
            <div className="flex gap-3 overflow-x-auto px-3 pb-2 scrollbar-hide">
              <div className="min-w-[120px] h-28 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                <Image
                  src="/assets/photos/cafe-3.jpg"
                  alt="Café Food"
                  width={160}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-[120px] h-28 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                <Image
                  src="/assets/photos/cafe-4.jpg"
                  alt="Café Experience"
                  width={160}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-[120px] h-28 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                <Image
                  src="/assets/photos/cafe-1.jpg"
                  alt="Café Interior"
                  width={160}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Fixed Bottom Buttons - Side by Side, Aligned */}
          {/* Removed the old floating buttons here */}

          {/* Bottom Sheet/Card for Specials/Menu */}
          <AnimatePresence>
            {showSheet && (
              <>
                {/* Overlay */}
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[100] bg-black"
                  onClick={() => setShowSheet(null)}
                />
                {/* Bottom Sheet */}
                <motion.div
                  key="sheet"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="y"
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, info) => {
                    if (info.offset.y > 80) setShowSheet(null);
                  }}
                  className="fixed inset-x-0 bottom-0 z-[110] bg-white rounded-t-3xl shadow-2xl pt-7 pb-4 px-2 max-h-[85vh] touch-pan-y"
                  style={{ touchAction: "pan-y" }}
                >
                  {/* Drag Handle */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-gray-300 mb-2" />
                  {/* Large Floating Close Button */}
                  <button
                    className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-[#F11A23] text-white text-4xl shadow-xl border-4 border-white active:scale-95 transition-transform z-[120]"
                    onClick={() => setShowSheet(null)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                  <div className="relative overflow-y-scroll max-h-[calc(85vh-80px)] px-1">
                    <Tabs defaultValue={cafeMenu[0].section} className="w-full">
                      <TabsList className="mb-6 w-full flex flex-wrap gap-2 justify-center bg-transparent sticky top-0 z-20 bg-white shadow-md sticky-tabslist">
                        {cafeMenu.map((section) => (
                          <TabsTrigger
                            key={section.section}
                            value={section.section}
                            className="capitalize px-4 py-2 rounded-full font-bold text-sm transition-colors shadow-none border
                                data-[state=active]:bg-[#F11A23] data-[state=active]:text-white data-[state=active]:border-[#F11A23]
                                data-[state=inactive]:bg-[#FFE0E0] data-[state=inactive]:text-[#F11A23] data-[state=inactive]:border-[#FBB1B5] whitespace-nowrap"
                          >
                            {section.section.startsWith("Ala Cart")
                              ? "Ala Carte"
                              : section.section}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      <div className="pointer-events-none absolute left-0 right-0 top-full h-8 z-10 bg-gradient-to-b from-[#F1F1F1] to-transparent" />
                      {cafeMenu.map((section) => (
                        <TabsContent
                          key={section.section}
                          value={section.section}
                          className="w-full pt-16"
                        >
                          <div className="flex flex-col gap-3">
                            {/* If Ala Carte, show the Served with text at the top */}
                            {section.section.startsWith("Ala Cart") && (
                              <div className="mb-2 text-gray-600 font-semibold text-sm text-center italic">
                                Served with Steamed rice, buttered corn, or
                                salad
                              </div>
                            )}
                            {section.items.map((item) => (
                              <div
                                key={item.name}
                                className="flex flex-col gap-1 py-2"
                              >
                                <div className="flex items-baseline w-full">
                                  <span className="font-extrabold text-base text-gray-900 whitespace-pre-line">
                                    {item.name}
                                  </span>
                                  <span className="flex-1 border-t border-dotted border-gray-400 mx-2"></span>
                                  <span className="font-extrabold text-base text-[#F11A23]">
                                    ${item.price?.toFixed(2)}
                                  </span>
                                </div>
                                {"description" in item && item.description && (
                                  <span className="block text-gray-500 text-sm leading-tight">
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
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      ) : (
        /* Desktop Layout - Two Column Layout with Mobile-Collapsed Lunch Specials */
        <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-12 flex flex-col gap-12">
          <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Column: Lunch Specials + About */}
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
              {/* About Section - under Lunch Specials */}
              <section className="w-full flex flex-col items-center">
                <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-dela-gothic-one text-[#F11A23] mb-6 text-center">
                    About Our Café
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src="/assets/photos/cafe-2.jpg"
                            alt="Café Atmosphere"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                          Herman&apos;s wife, Maria, better known as &quot;Tan
                          Marikita&quot; was well known throughout Saipan for
                          her generous spirit and hospitality. She opened her
                          heart and home to many.
                        </p>
                      </div>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        We hope the menu choices offered by Tan Marikita&apos;s
                        Cafe will be satisfying and enjoyable just as they were
                        at her table, where everyone was welcomed and treated
                        like family.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/assets/photos/cafe-1.jpg"
                          alt="Café interior"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/assets/photos/cafe-3.jpg"
                          alt="Café dining area"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/assets/photos/cafe-4.jpg"
                          alt="Café atmosphere"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/assets/photos/cafe-2.jpg"
                          alt="Café seating"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-6 p-4 bg-gradient-to-br from-[#F11A23] to-[#D4151E] rounded-xl text-white">
                    <h3 className="text-lg md:text-xl font-bold mb-4 text-center">
                      Visit Us Today
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-3 text-white/80 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm">Location</p>
                          <a
                            href="https://www.google.com/maps/search/?api=1&query=Herman's+Modern+Bakery,+Chalan+Kanoa,+Saipan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/90 hover:underline break-words"
                          >
                            5040 Chalan Tun Herman Pan, Saipan
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 mr-3 text-white/80 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm">Phone</p>
                          <a
                            href="tel:+16702341726"
                            className="text-sm text-white/90 hover:underline break-words"
                          >
                            +1 670-234-1726
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 mr-3 text-white/80 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm">Email</p>
                          <a
                            href="mailto:sales@hermansbakery.com"
                            className="text-sm text-white/90 hover:underline break-words"
                          >
                            sales@hermansbakery.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Printer className="w-5 h-5 mr-3 text-white/80 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm">Fax</p>
                          <span className="text-sm text-white/90 break-words">
                            288-1726
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-white/90">
                        Open daily: 6:00am–2:00pm (Last order: 1:30pm)
                      </p>
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
                    <TabsList className="mb-28 w-full flex flex-wrap gap-3 justify-center bg-transparent sticky top-0 z-30 bg-white shadow-md">
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
                        className="w-full pt-20"
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
      )}
    </div>
  );
}
