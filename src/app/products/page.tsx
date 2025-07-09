"use client";
import { useState } from "react";
import { productCategories } from "@/data/products";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";

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
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(
    productCategories[0].category
  );
  const activeCat = productCategories.find(
    (cat) => cat.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FCF4E0] via-white to-[#FFF3F3]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#F11A23] to-[#D4151E] py-10 sm:py-20 lg:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/assets/bannerBackground.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 z-10">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="bg-white rounded-full p-3 sm:p-4 shadow-2xl flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 sm:w-12 sm:h-12 text-[#F11A23]" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-dela-gothic-one text-white font-extrabold mb-4 sm:mb-6">
            Our Products
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover our fresh-baked delights, from traditional breads to
            decadent pastries
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="pt-8 sm:pt-16 pb-10 sm:pb-16 lg:py-24 bg-gradient-to-b from-white via-[#FCF4E0] to-[#FCF4E0] relative z-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          {activeCat && (
            <div>
              {/* Category Header */}
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold mb-3 sm:mb-4">
                  {activeCat.category}
                </h2>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#F11A23] to-[#D4151E] mx-auto mb-4 sm:mb-6 rounded-full" />
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  Discover our selection of fresh{" "}
                  {activeCat.category.toLowerCase()} made with the finest
                  ingredients
                </p>
              </div>

              {/* Category Selector - Integrated as Filter */}
              <div className="flex gap-1 sm:gap-4 py-1 sm:py-2 mb-6 sm:mb-8 justify-center flex-wrap">
                {productCategories.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveCategory(cat.category)}
                    className={`whitespace-nowrap rounded-full px-3 py-1 sm:px-6 sm:py-3 text-xs sm:text-base font-medium transition border border-transparent ${activeCategory === cat.category ? "bg-[#F11A23] text-white" : "bg-white text-[#F11A23] hover:bg-[#F11A23]/10 border-[#F11A23]/20"}`}
                    style={{ minWidth: 70 }}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {activeCat.items.map((item, idx) => {
                  const photo = allProductPhotos[idx % allProductPhotos.length];
                  return (
                    <Card
                      key={item.name + item.size}
                      className="group bg-white/95 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
                    >
                      {/* Product Image */}
                      <div className="relative h-36 sm:h-48 overflow-hidden">
                        {photo && (
                          <Image
                            src={photo}
                            alt={item.name}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            priority={idx < 8}
                            className="group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Price Badge */}
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                          <Badge className="bg-[#F11A23] text-white font-bold px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm">
                            ${item.price.toFixed(2)}
                          </Badge>
                        </div>
                      </div>

                      {/* Product Info */}
                      <CardContent className="p-3 sm:p-6">
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="font-bold text-base sm:text-xl text-gray-900 group-hover:text-[#F11A23] transition-colors duration-300 line-clamp-2">
                            {item.name}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500 text-xs sm:text-sm font-medium bg-gray-100 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                              {item.size}
                            </span>
                            <span className="font-bold text-[#F11A23] text-base sm:text-xl">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
