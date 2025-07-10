"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { productCategories } from "@/data/products";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="min-h-screen bg-[#FCF4E0]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#F11A23] to-[#D4151E] py-6 sm:py-10 lg:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/assets/bannerBackground.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 lg:px-8 z-10">
          <div className="flex justify-center mb-4 sm:mb-8">
            <div className="bg-white rounded-full p-3 sm:p-4 shadow-2xl flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 sm:w-12 sm:h-12 text-[#F11A23]" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-dela-gothic-one text-white font-extrabold mb-3 sm:mb-6">
            Our Products
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover our fresh-baked delights, from traditional breads to
            decadent pastries
          </p>
        </div>
      </section>

      {/* Products Section */}
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-12 flex flex-col gap-12">
        <div className="w-full flex flex-col items-center">
          <section className="w-full flex flex-col items-center">
            <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-8">
              <h2 className="text-2xl md:text-3xl font-dela-gothic-one text-[#F11A23] mb-6 text-center">
                Our Products
              </h2>
              <Tabs
                value={activeCategory}
                onValueChange={handleTabChange}
                className="w-full"
              >
                <TabsList className="mb-8 w-full flex flex-wrap gap-3 justify-center bg-transparent sticky top-0 z-30 bg-white shadow-md">
                  {productCategories.map((cat) => (
                    <TabsTrigger
                      key={cat.category}
                      value={cat.category}
                      className={`capitalize px-7 py-3 rounded-full font-bold text-lg md:text-xl transition-colors shadow-none border
                        data-[state=active]:bg-[#F11A23] data-[state=active]:text-white data-[state=active]:border-[#F11A23]
                        data-[state=inactive]:bg-[#FFE0E0] data-[state=inactive]:text-[#F11A23] data-[state=inactive]:border-[#FBB1B5]`}
                    >
                      {cat.category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {productCategories.map((cat, catIdx) => (
                  <TabsContent
                    key={cat.category}
                    value={cat.category}
                    className="w-full pt-20"
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-xl md:text-2xl font-dela-gothic-one text-[#F11A23] font-bold mb-3">
                        {cat.category}
                      </h3>
                      <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Discover our selection of fresh{" "}
                        {cat.category.toLowerCase()} made with the finest
                        ingredients
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                      {cat.items.map((item, idx) => {
                        const photo =
                          allProductPhotos[
                            (catIdx * 8 + idx) % allProductPhotos.length
                          ];
                        return (
                          <Card
                            key={item.name + item.size}
                            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
                          >
                            {/* Product Image */}
                            <div className="relative h-40 sm:h-48 overflow-hidden">
                              {photo && (
                                <Image
                                  src={photo}
                                  alt={item.name}
                                  fill
                                  style={{ objectFit: "cover" }}
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                  priority={idx < 8}
                                  className="group-hover:scale-105 transition-transform duration-300"
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              {/* Sale Badge */}
                              {/* <div className="absolute top-2 right-2">
                                <Badge className="bg-[#F11A23] text-white font-bold px-2 py-1 text-xs">
                                  ${item.price.toFixed(2)}
                                </Badge>
                              </div> */}
                            </div>
                            {/* Product Info */}
                            <CardContent className="p-4">
                              <div className="space-y-2">
                                <h3 className="font-bold text-base text-gray-900 group-hover:text-[#F11A23] transition-colors duration-300 line-clamp-2">
                                  {item.name}
                                </h3>
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-500 text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">
                                    {item.size}
                                  </span>
                                  <span className="font-bold text-[#F11A23] text-base">
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
      </main>
    </div>
  );
}
