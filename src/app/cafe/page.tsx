import { cafeInfo, cafeMenu, lunchSpecials } from "@/data/cafeMenu";
import Image from "next/image";

export default function CafePage() {
  return (
    <div className="min-h-screen bg-[#FCF4E0]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#F11A23] to-[#D4151E] py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <Image
              src="/assets/logo-white.svg"
              alt="Tan Marikita's Café Logo"
              width={120}
              height={120}
              className="mx-auto mb-8"
            />
            <h1 className="text-5xl lg:text-7xl font-dela-gothic-one text-white font-extrabold mb-6">
              {cafeInfo.name}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Where breakfast is served to perfection all day long!
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 max-w-2xl mx-auto">
              <p className="text-white text-lg lg:text-xl font-medium">
                {cafeInfo.hours}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
        {/* About Section */}
        <section className="mb-20 lg:mb-32">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold mb-8 text-center">
              About Our Café
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-6">
                <div className="space-y-4 text-lg lg:text-xl text-gray-700 leading-relaxed">
                  <p>{cafeInfo.intro}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-4 text-lg lg:text-xl text-gray-700 leading-relaxed">
                  <p>{cafeInfo.about}</p>
                </div>
                <div className="bg-[#F11A23]/5 rounded-2xl p-6 border-l-4 border-[#F11A23]">
                  <h3 className="font-bold text-lg text-[#F11A23] mb-2">
                    Contact Info
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <span className="font-semibold">Address:</span>{" "}
                      {cafeInfo.address}
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span>{" "}
                      {cafeInfo.phone}
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      <a
                        href={`mailto:${cafeInfo.email}`}
                        className="text-[#F11A23] hover:underline"
                      >
                        {cafeInfo.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lunch Specials Section */}
        <section className="mb-20 lg:mb-32">
          <div className="bg-gradient-to-br from-[#F11A23] to-[#D4151E] rounded-3xl shadow-xl p-8 lg:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-dela-gothic-one font-bold mb-4">
                {lunchSpecials.title}
              </h2>
              <p className="text-xl text-white/90">
                {lunchSpecials.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <div
                  key={day}
                  className="bg-white/10 rounded-2xl p-6 text-center"
                >
                  <h3 className="font-bold text-xl mb-2">{day}</h3>
                  <p className="text-white/80">Special of the Day</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Sections */}
        <div className="space-y-20 lg:space-y-32">
          {cafeMenu.map((section) => (
            <section
              key={section.section}
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold mb-12 text-center">
                {section.section}
              </h2>
              <div className="grid gap-8">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-gray-100 pb-6 last:border-b-0"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-4 mb-2">
                          <h3 className="font-bold text-xl lg:text-2xl text-gray-900">
                            {item.name}
                          </h3>
                          <span className="bg-[#F11A23] text-white px-3 py-1 rounded-full text-lg font-bold">
                            ${item.price?.toFixed(2)}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-20 lg:mt-32 text-center">
          <div className="bg-gradient-to-br from-[#F11A23] to-[#D4151E] rounded-3xl shadow-xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-dela-gothic-one font-bold mb-6">
              Visit Us Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experience the warm hospitality and delicious flavors that have
              made Tan Marikita&apos;s Café a beloved local institution for
              generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#F11A23] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300">
                Make a Reservation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#F11A23] px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300">
                Call to Order
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
