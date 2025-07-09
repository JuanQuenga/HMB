"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { productCategories } from "@/data/products";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const categories = productCategories.map((cat) => cat.category);
  const initialCategory =
    searchParams.get("category") &&
    categories.includes(searchParams.get("category")!)
      ? searchParams.get("category")!
      : productCategories[0].category;
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    const param = searchParams.get("category");
    if (param && categories.includes(param) && param !== activeCategory) {
      setActiveCategory(param);
    }
    // eslint-disable-next-line
  }, [searchParams]);

  const handleTabChange = (category: string) => {
    setActiveCategory(category);
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FCF4E0] via-white to-[#FFF3F3]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#F11A23] to-[#D4151E] py-10 sm:py-20 lg:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/assets/bannerBackground.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 lg:px-8 z-10">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-4 shadow-2xl flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-[#F11A23]" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-dela-gothic-one text-white font-extrabold mb-6">
            Our Products
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover our fresh-baked delights, from traditional breads to
            decadent pastries
          </p>
        </div>
      </section>

      {/* Products Tabs Section */}
      <section className="pt-8 sm:pt-16 pb-16 lg:py-24 bg-gradient-to-b from-white via-[#FCF4E0] to-[#FCF4E0] relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs
            value={activeCategory}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="mx-auto my-10 flex overflow-x-auto scrollbar-hide gap-3 rounded-full bg-[#FFE5E5] shadow-lg p-2 w-fit min-w-full justify-center">
              {productCategories.map((cat) => (
                <TabsTrigger
                  key={cat.category}
                  value={cat.category}
                  className="capitalize px-8 py-3 text-lg font-extrabold rounded-full transition-all duration-200 data-[state=active]:bg-[#F11A23] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-[#F11A23] focus-visible:ring-2 focus-visible:ring-[#F11A23]"
                >
                  {cat.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {productCategories.map((cat, catIdx) => (
              <TabsContent key={cat.category} value={cat.category}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold mb-4">
                    {cat.category}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#F11A23] to-[#D4151E] mx-auto mb-6 rounded-full" />
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover our selection of fresh {cat.category.toLowerCase()}{" "}
                    made with the finest ingredients
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {cat.items.map((item, idx) => {
                    const photo =
                      allProductPhotos[
                        (catIdx * 8 + idx) % allProductPhotos.length
                      ];
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
