"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageModal } from "@/components/ui/modal";
import { Star, Utensils } from "lucide-react"; // Added for mobile buttons
import { useMediaQuery } from "react-responsive"; // Added for mobile detection
import { AnimatePresence } from "framer-motion"; // Added for bottom sheet animation

export default function Anniversary80Page() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const anniversaryImages = [
    {
      src: "/assets/photos/anniversary-1.png",
      alt: "Herman's Modern Bakery 80th Anniversary Promo",
    },
    {
      src: "/assets/photos/anniversary-2.png",
      alt: "Herman's Modern Bakery 80th Anniversary Raffle Terms",
    },
    {
      src: "/assets/photos/anniversary-3.png",
      alt: "Herman's Modern Bakery 80th Anniversary Family Fun Day",
    },
  ];

  const handleImageClick = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const isMobile = useMediaQuery({ maxWidth: 768 }); // Define isMobile

  const [showSheet, setShowSheet] = useState<"specials" | "menu" | null>(null); // State for bottom sheet

  return (
    <div className="min-h-screen bg-[#FCF4E0]">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/qGP__9OMg88?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=qGP__9OMg88"
          title="Herman's 80th Anniversary Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
          style={{ pointerEvents: "none" }}
        ></iframe>
        <div className="absolute inset-0 bg-black/60" />
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center w-full px-4 text-center text-white">
          <Image
            src="/assets/logo-white.svg"
            alt="Herman's Modern Bakery Logo"
            width={128}
            height={128}
            className="w-24 h-24 sm:w-32 sm:h-32 mb-8"
            priority
          />
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-dela-gothic-one text-white font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
            Saipan&apos;s First And Finest
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-8 drop-shadow">
            Baked with love, served with a smile.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <section className="w-full flex flex-col items-center">
          <div className="w-full bg-gradient-to-br from-[#FFF3F3] to-[#FCF4E0] rounded-2xl shadow-xl border border-[#FBB1B5] p-0 md:p-0 overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Left: Text */}
              <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <h2 className="text-2xl md:text-3xl font-dela-gothic-one text-[#F11A23] mb-6 text-left">
                  About Our Café
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  Herman&apos;s wife, Maria, better known as &quot;Tan
                  Marikita&quot;, was well known throughout Saipan for her
                  generous spirit and hospitality. She opened her heart and home
                  to many.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  We hope the menu choices offered by Tan Marikita&apos;s Cafe
                  will be satisfying and enjoyable just as they were at her
                  table, where everyone was welcomed and treated like family.
                </p>
              </div>
              {/* Right: Image Grid */}
              <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 p-6 md:p-8 bg-white/70">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/assets/photos/cafe-1.jpg"
                    alt="Café interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/assets/photos/cafe-3.jpg"
                    alt="Café dining area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/assets/photos/cafe-4.jpg"
                    alt="Café atmosphere"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/assets/photos/cafe-2.jpg"
                    alt="Café seating"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-dela-gothic-one text-[#F11A23] font-bold mb-4">
            80th Anniversary Family Fun Day
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Date:</strong> October 26, 2024
            <br />
            <strong>Time:</strong> 2:00–6:00PM
            <br />
            <strong>Location:</strong> Herman&apos;s Modern Bakery
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
            <li>Cake Cutting Ceremony at 2:00PM with our Pan Family</li>
            <li>Live Music and Entertainment</li>
            <li>
              Exclusive Anniversary Treats & Limited-Edition Carnival Foods
            </li>
            <li>Fun and Games for the Community</li>
            <li>Hamburger Contest – Showcasing the Island&apos;s Best</li>
            <li>Community Thank-You Raffle with Prizes</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-dela-gothic-one text-[#F11A23] font-bold mb-4">
            Anniversary Promotions
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            All customers who visit the bakery from August 14, 2024 through
            October 26, 2024 can enjoy weekly promotion offers. Listen to the
            Morning Show on Power 99 for a chance to win prizes by answering our
            weekly memories questionnaire!
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-dela-gothic-one text-[#F11A23] font-bold mb-4">
            Thank You!
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            &quot;We are incredibly grateful to our loyal customers, past and
            present, who have supported us throughout the years. This
            anniversary is as much a celebration of them as it is of our
            bakery&apos;s history. We look forward to many more years of
            bringing joy to our community, one delicious treat at a time.&quot;
          </p>
        </section>

        {/* Anniversary Images Grid Section - moved here */}
        <section className="bg-[#FCF4E0] py-12">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
              {anniversaryImages.map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer transform transition-transform hover:scale-105 group"
                  onClick={() => handleImageClick(image)}
                >
                  <div className="relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={400}
                      className="rounded-2xl shadow-2xl object-cover w-full h-72 md:h-64"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-2xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-lg font-semibold">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="text-center mt-12">
          <a
            href="https://www.hermansbakery.com/wp-content/uploads/2024/10/Hermans-80th.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F11A23] text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#D4151E] transition-colors text-lg font-dela-gothic-one"
          >
            View 80th Anniversary Booklet
          </a>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeModal}
        imageSrc={selectedImage?.src || ""}
        imageAlt={selectedImage?.alt || ""}
      />

      {isMobile ? (
        <div className="w-full min-h-screen flex flex-col bg-[#FFF3F3]">
          {/* About Section */}
          <section className="bg-white rounded-2xl shadow-lg mx-3 px-4 py-6 mb-4 flex flex-col items-center">
            <h2 className="text-xl font-bold text-[#F11A23] font-dela-gothic-one mb-2 text-center">
              About Our Café
            </h2>
            <p className="text-gray-700 text-base leading-relaxed text-center mb-4">
              Herman&apos;s wife, Maria, better known as &quot;Tan Marikita,&quot; was well
              known throughout Saipan for her generous spirit and hospitality. She opened her heart and home to many. We hope the menu choices offered by Tan Marikita&apos;s Cafe will be satisfying and enjoyable just as they were at her table, where everyone was welcomed and treated like family.
            </p>
            {/* Bakery Info */}
            <div className="w-full bg-[#FCF4E0] rounded-xl p-4 mb-4">
              <h3 className="text-lg font-bold text-[#F11A23] mb-2">About the Bakery</h3>
              <p className="text-gray-700 text-sm mb-2">
                Since 1944, Herman&apos;s Modern Bakery has been a cherished name in our community, serving up fresh, delicious bread, pastries, cookies, and cakes for generations. We are proud to be Saipan&apos;s first and finest bakery, built on a tradition of quality and hospitality.
              </p>
              <div className="text-xs text-gray-600">
                <div className="mb-1"><b>Address:</b> 5040 Chalan Tun Herman Pan, Saipan</div>
                <div className="mb-1"><b>Phone:</b> +1 670-234-1726</div>
                <div className="mb-1"><b>Email:</b> sales@hermansbakery.com</div>
                <div><b>Hours:</b> 6:00am–2:00pm (Last order: 1:30pm)</div>
              </div>
            </div>
            {/* Call to Action */}
            <a
              href="/order"
              className="mt-2 inline-block bg-[#F11A23] hover:bg-[#D4151E] text-white text-base px-6 py-3 rounded-xl font-bold shadow-md transition"
            >
              Place an Order
            </a>
          </section>

          {/* Food Gallery - Vertical Grid */}
          <section className="mb-4">
            <h3 className="text-lg font-dela-gothic-one text-[#F11A23] mb-2 text-center">
              A Taste of Our Food
            </h3>
            <div className="grid grid-cols-1 gap-3 px-3">
              <div className="h-32 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/assets/photos/cafe-3.jpg"
                  alt="Café Food"
                  width={400}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-32 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/assets/photos/cafe-4.jpg"
                  alt="Café Experience"
                  width={400}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-32 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/assets/photos/cafe-1.jpg"
                  alt="Café Interior"
                  width={400}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Specials/Menu Buttons (optional, not floating) */}
          <div className="flex gap-3 px-3 mt-4">
            <button
              className="flex-1 bg-[#F11A23] text-white font-bold py-3 rounded-xl shadow-md text-base flex items-center justify-center gap-2 active:scale-95 transition-transform"
              onClick={() => setShowSheet("specials")}
            >
              <Star className="w-5 h-5" />
              Specials
            </button>
            <button
              className="flex-1 bg-[#F11A23] text-white font-bold py-3 rounded-xl shadow-md text-base flex items-center justify-center gap-2 active:scale-95 transition-transform"
              onClick={() => setShowSheet("menu")}
            >
              <Utensils className="w-5 h-5" />
              Menu
            </button>
          </div>
          {/* Bottom Sheet logic remains unchanged */}
          <AnimatePresence>
            {showSheet && (
              <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg rounded-t-2xl p-4 z-50">
                <h3 className="text-xl font-bold text-[#F11A23] mb-2 text-center">
                  {showSheet === "specials" ? "Specials" : "Menu"}
                </h3>
                {showSheet === "specials" ? (
                  <p className="text-gray-700 text-base leading-relaxed text-center">
                    Check out our exclusive anniversary specials and limited-edition treats!
                  </p>
                ) : (
                  <p className="text-gray-700 text-base leading-relaxed text-center">
                    View our full menu and daily offerings.
                  </p>
                )}
                <button
                  className="mt-4 inline-block bg-[#F11A23] hover:bg-[#D4151E] text-white text-base px-6 py-3 rounded-xl font-bold shadow-md transition"
                  onClick={() => setShowSheet(null)}
                >
                  Close
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        // ...desktop layout...
        <section className="w-full flex flex-col items-center">
          <div className="w-full bg-gradient-to-br from-[#FFF3F3] to-[#FCF4E0] rounded-2xl shadow-xl border border-[#FBB1B5] p-0 md:p-0 overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Left: Text */}
              <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <h2 className="text-2xl md:text-3xl font-dela-gothic-one text-[#F11A23] mb-6 text-left">
                  About Our Café
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  Herman&apos;s wife, Maria, better known as &quot;Tan
                  Marikita&quot;, was well known throughout Saipan for her
                  generous spirit and hospitality. She opened her heart and home
                  to many.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  We hope the menu choices offered by Tan Marikita&apos;s Cafe
                  will be satisfying and enjoyable just as they were at her
                  table, where everyone was welcomed and treated like family.
                </p>
              </div>
              {/* Right: Image Grid */}
              <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 p-6 md:p-8 bg-white/70">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/assets/photos/cafe-1.jpg"
                    alt="Café interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/assets/photos/cafe-3.jpg"
                    alt="Café dining area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/assets/photos/cafe-4.jpg"
                    alt="Café atmosphere"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/assets/photos/cafe-2.jpg"
                    alt="Café seating"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-dela-gothic-one text-[#F11A23] font-bold mb-4">
            80th Anniversary Family Fun Day
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Date:</strong> October 26, 2024
            <br />
            <strong>Time:</strong> 2:00–6:00PM
            <br />
            <strong>Location:</strong> Herman&apos;s Modern Bakery
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
            <li>Cake Cutting Ceremony at 2:00PM with our Pan Family</li>
            <li>Live Music and Entertainment</li>
            <li>
              Exclusive Anniversary Treats & Limited-Edition Carnival Foods
            </li>
            <li>Fun and Games for the Community</li>
            <li>Hamburger Contest – Showcasing the Island&apos;s Best</li>
            <li>Community Thank-You Raffle with Prizes</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-dela-gothic-one text-[#F11A23] font-bold mb-4">
            Anniversary Promotions
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            All customers who visit the bakery from August 14, 2024 through
            October 26, 2024 can enjoy weekly promotion offers. Listen to the
            Morning Show on Power 99 for a chance to win prizes by answering our
            weekly memories questionnaire!
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-dela-gothic-one text-[#F11A23] font-bold mb-4">
            Thank You!
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            &quot;We are incredibly grateful to our loyal customers, past and
            present, who have supported us throughout the years. This
            anniversary is as much a celebration of them as it is of our
            bakery&apos;s history. We look forward to many more years of
            bringing joy to our community, one delicious treat at a time.&quot;
          </p>
        </section>

        {/* Anniversary Images Grid Section - moved here */}
        <section className="bg-[#FCF4E0] py-12">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
              {anniversaryImages.map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer transform transition-transform hover:scale-105 group"
                  onClick={() => handleImageClick(image)}
                >
                  <div className="relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={400}
                      className="rounded-2xl shadow-2xl object-cover w-full h-72 md:h-64"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-2xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-lg font-semibold">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="text-center mt-12">
          <a
            href="https://www.hermansbakery.com/wp-content/uploads/2024/10/Hermans-80th.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F11A23] text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#D4151E] transition-colors text-lg font-dela-gothic-one"
          >
            View 80th Anniversary Booklet
          </a>
        </div>
      </div>
      )}

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeModal}
        imageSrc={selectedImage?.src || ""}
        imageAlt={selectedImage?.alt || ""}
      />
    </div>
  );
}
