import Hero from "@/components/Hero";
import CafeSection from "@/components/CafeSection";
import BakeryMap from "@/components/BakeryMap";
import AboutUs from "@/components/AboutUs";
import { productCategories } from "@/data/products";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF4E0]">
      <main className="flex-1 flex flex-col items-center w-full">
        <section className="w-full bg-white">
          <Hero />
        </section>
        <section className="w-full bg-gradient-to-t from-[#FCF4E0] to-white">
          <CafeSection />
        </section>

        {/* Products Section */}
        <section className="w-full bg-gradient-to-t from-white to-[#FCF4E0]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-dela-gothic-one text-[#F11A23] mb-4">
                Featured Products
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#F11A23] to-[#D4151E] mx-auto mb-6 rounded-full" />
              <p className="text-gray-700 text-lg mb-4">
                A taste of our best sellers
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {(() => {
                const productPhotos = [
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
                  "/assets/photos/cafe-1.jpg",
                  "/assets/photos/cafe-2.jpg",
                  "/assets/photos/cafe-3.jpg",
                  "/assets/photos/cafe-4.jpg",
                ];
                return productCategories
                  .slice(0, 2)
                  .flatMap((cat) => cat.items.slice(0, 2))
                  .map((item, idx) => (
                    <Card
                      key={item.name + item.size}
                      className="bg-white/95 rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:scale-[1.03]"
                    >
                      <div className="w-full h-40 bg-gray-100 rounded-t-2xl flex items-center justify-center mb-4 relative overflow-hidden">
                        <img
                          src={productPhotos[idx % productPhotos.length]}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold text-gray-900 truncate">
                          {item.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-sm font-light">
                            {item.size}
                          </span>
                          <span className="font-bold text-[#F11A23] text-lg">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ));
              })()}
            </div>
            <div className="text-center">
              <Link
                href="/products"
                className="inline-block bg-[#F11A23] text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#D4151E] transition-colors text-lg font-dela-gothic-one"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full bg-gradient-to-t from-[#FCF4E0] to-white">
          <BakeryMap />
        </section>
        <section className="w-full bg-gradient-to-t from-white to-[#FCF4E0]">
          <AboutUs />
        </section>
        <section
          id="feedback"
          className="w-full bg-gradient-to-t from-[#FCF4E0] to-white pt-12 pb-12"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-dela-gothic-one text-[#F11A23] mb-4">
                80th Anniversary
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#F11A23] to-[#D4151E] mx-auto mb-6 rounded-full" />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Text/Link Left */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-dela-gothic-one text-black mb-2">
                  Celebrating 80 Years of Community
                </h3>
                <p className="text-gray-700 text-lg mb-4 max-w-xl md:mx-0 mx-auto">
                  Thank you for being part of our story! Watch highlights from
                  our 80th Anniversary and see how Herman&apos;s has grown with
                  Saipan.
                </p>
                <a
                  href="/80th-anniversary"
                  className="inline-block bg-[#F11A23] text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#D4151E] transition-colors text-lg font-dela-gothic-one"
                >
                  Visit the 80th Anniversary Page
                </a>
              </div>
              {/* Video Right */}
              <div className="flex-1 w-full max-w-lg aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/qGP__9OMg88?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=qGP__9OMg88"
                  title="Herman's 80th Anniversary Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
