import Hero from "@/components/Hero";
import FoodItems from "@/components/FoodItems";
import BakeryMap from "@/components/BakeryMap";
import AboutUs from "@/components/AboutUs";
import CustomerFeedback from "@/components/CustomerFeedback";
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
        <section className="w-full bg-gradient-to-b from-white to-[#FCF4E0]">
          <FoodItems />
        </section>

        {/* Products Section */}
        <section className="w-full bg-gradient-to-b from-[#FCF4E0] to-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-dela-gothic-one text-[#F11A23] mb-4">
                Featured Products
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                A taste of our best sellers
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {productCategories
                .slice(0, 2)
                .flatMap((cat) => cat.items.slice(0, 2))
                .map((item) => (
                  <Card
                    key={item.name + item.size}
                    className="bg-white/95 rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:scale-[1.03]"
                  >
                    <div className="w-full h-40 bg-gray-100 rounded-t-2xl flex items-center justify-center mb-4">
                      {/* Placeholder image, replace with real if available */}
                      <span className="text-5xl" role="img" aria-label="bakery">
                        🍞
                      </span>
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
                ))}
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
        <section className="w-full bg-gradient-to-b from-white to-[#FCF4E0] py-8">
          <BakeryMap />
        </section>
        <section className="w-full bg-gradient-to-b from-[#FCF4E0] to-white py-8">
          <AboutUs />
        </section>
        <section
          id="feedback"
          className="w-full bg-gradient-to-b from-white to-[#FCF4E0] py-8"
        >
          <CustomerFeedback />
        </section>
      </main>
    </div>
  );
}
