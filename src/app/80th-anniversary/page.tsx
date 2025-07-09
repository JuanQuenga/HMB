"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageModal } from "@/components/ui/modal";

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

  return (
    <div className="min-h-screen bg-[#FCF4E0]">
      {/* Hero Section */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[45vh] min-h-[320px] md:h-[60vh] md:min-h-[400px] flex flex-col justify-center items-center overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute w-full h-full inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <div className="w-full h-full absolute top-0 left-0">
              <iframe
                src="https://www.youtube.com/embed/qGP__9OMg88?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&loop=1&playlist=qGP__9OMg88"
                title="Herman's 80th Anniversary Video"
                allow="autoplay; encrypted-media"
                allowFullScreen={false}
                className="absolute top-1/2 left-1/2 min-w-[120vw] min-h-[120vh] w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover border-0"
                style={{
                  aspectRatio: "16/9",
                  width: "120vw",
                  height: "120vh",
                  minWidth: "100vw",
                  minHeight: "100%",
                  maxWidth: "none",
                  maxHeight: "none",
                }}
              ></iframe>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
        </div>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center w-full px-4 py-8 md:py-0 text-center text-white">
          <div className="flex justify-center mb-6 md:mb-8">
            <div
              className="bg-white rounded-full p-3 md:p-4 shadow-2xl flex items-center justify-center"
              style={{ width: 110, height: 110 }}
            >
              <Image
                src="/assets/logo-anniversary.png"
                alt="Herman's Modern Bakery 80th Anniversary Logo"
                width={90}
                height={90}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-dela-gothic-one text-white font-extrabold mb-4 md:mb-6 drop-shadow-lg">
            Celebrating 80 Years
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-xl md:max-w-2xl mx-auto leading-relaxed drop-shadow">
            Since 1944, Herman&apos;s Modern Bakery has been a cherished name in
            our community, serving up fresh, delicious bread, pastries, cookies,
            and cakes for generations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <section className="mb-12">
          <h2 className="text-3xl font-dela-gothic-one text-[#F11A23] font-bold mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Founded by Herman R. and Maria T. Guerrero in 1944, Herman&apos;s
            Modern Bakery began as a modest neighborhood bakery with a simple
            mission: to provide high-quality baked goods made from the finest
            ingredients. Over the decades, it has grown into a local institution
            known for its commitment to quality, craftsmanship, and community
            spirit.
          </p>
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
    </div>
  );
}
