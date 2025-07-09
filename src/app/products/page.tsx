"use client";
import { useState } from "react";
import { productCategories } from "@/data/products";
import Image from "next/image";

// All available product photos from /assets/photos
const allProductPhotos = [
  "/assets/photos/sweetbread-1.jpg",
  "/assets/photos/sweetbread-2.jpg",
  "/assets/photos/sweetbread-3.jpg",
  "/assets/photos/sweetbread-4.jpg",
  "/assets/photos/cakes-1.jpg",
  "/assets/photos/cakes-2.jpg",
  "/assets/photos/cakes-3.jpg",
  "/assets/photos/cakes-4.jpg",
  "/assets/photos/pastries-1.jpg",
  "/assets/photos/pastries-2.jpg",
  "/assets/photos/pastries-3.jpg",
  "/assets/photos/pastries-4.jpg",
  "/assets/photos/cookies-1.jpg",
  "/assets/photos/cookies-2.jpg",
  "/assets/photos/cookies-3.jpg",
  "/assets/photos/cookies-4.jpg",
  "/assets/photos/buns-n-rolls-1.jpg",
  "/assets/photos/buns-n-rolls-2.jpg",
  "/assets/photos/buns-n-rolls-3.jpg",
  "/assets/photos/celebrating-1.jpg",
  "/assets/photos/cafe-1.jpg",
  "/assets/photos/cafe-2.jpg",
  "/assets/photos/cafe-3.jpg",
  "/assets/photos/cafe-4.jpg",
  "/assets/photos/anniversary-1.png",
  "/assets/photos/anniversary-2.png",
  "/assets/photos/anniversary-3.png",
  "/assets/photos/sweet-bread.jpg",
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(
    productCategories[0].category
  );
  const activeCat = productCategories.find(
    (cat) => cat.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#FFF3F3]">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-5xl font-extrabold text-[#F11A23] mb-10 text-center tracking-tight">
          Our Products
        </h1>
        {/* <h2 className="text-lg font-semibold text-[#F11A23] mb-10 text-center uppercase tracking-widest">
          Herman’s Modern Bakery
        </h2> */}

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {productCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-5 py-2 rounded-full font-semibold border transition-all shadow-sm
                ${
                  activeCategory === cat.category
                    ? "bg-[#F11A23] text-white border-[#F11A23] scale-105"
                    : "bg-white text-[#F11A23] border-[#F11A23] hover:bg-[#F11A23]/90 hover:text-white"
                }
              `}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Products for Active Category */}
        {activeCat && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {activeCat.items.map((item, idx) => {
                // Use a real product photo, cycling through all available
                const photo = allProductPhotos[idx % allProductPhotos.length];
                return (
                  <div
                    key={item.name + item.size}
                    className="bg-white/95 rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-transform hover:scale-[1.03] hover:shadow-xl"
                  >
                    {photo && (
                      <div className="mb-4 w-full h-40 relative rounded-xl overflow-hidden">
                        <Image
                          src={photo}
                          alt={item.name}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          priority={idx < 3}
                        />
                      </div>
                    )}
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="font-bold text-xl text-gray-900">
                          {item.name}
                        </span>
                        <span className="font-bold text-[#F11A23] text-lg">
                          {item.price !== null
                            ? `$${item.price.toFixed(2)}`
                            : ""}
                        </span>
                      </div>
                      <div className="text-gray-500 text-sm font-light">
                        {item.size}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
