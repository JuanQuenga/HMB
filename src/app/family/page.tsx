import Image from "next/image";

export default function FamilyPage() {
  const familyMembers = [
    {
      name: "Jesus T. Guerrero",
      image:
        "https://www.hermansbakery.com/wp-content/uploads/2024/05/DSC04509-683x1024.jpg",
      alt: "Jesus T. Guerrero",
    },
    {
      name: "Herman T. Guerrero",
      image:
        "https://www.hermansbakery.com/wp-content/uploads/2024/05/DSC04513-1-683x1024.jpg",
      alt: "Herman T. Guerrero",
    },
    {
      name: "JuanPan T. Guerrero",
      image:
        "https://www.hermansbakery.com/wp-content/uploads/2024/05/DSC04527-683x1024.jpg",
      alt: "JuanPan T. Guerrero",
    },
    {
      name: "Florencio T. Guerreo",
      image:
        "https://www.hermansbakery.com/wp-content/uploads/2024/08/bobby_guerrero_headshot-702x1024.jpg",
      alt: "Florencio T. Guerreo",
    },
    {
      name: "Margarita G. Sablan",
      image:
        "https://www.hermansbakery.com/wp-content/uploads/2024/05/DSC04465-683x1024.jpg",
      alt: "Margarita G. Sablan",
    },
    {
      name: 'Anna "Annie" G. Hayes',
      image:
        "https://www.hermansbakery.com/wp-content/uploads/2024/05/DSC04474-683x1024.jpg",
      alt: "Anna Annie G. Hayes",
    },
    {
      name: "Joseph LeePan T. Guerrero",
      image:
        "https://www.hermansbakery.com/wp-content/uploads/2024/05/DSC04550-683x1024.jpg",
      alt: "Joseph LeePan T. Guerrero",
    },
    {
      name: "Noreen T. Deleon Guerrero",
      image:
        "https://www.hermansbakery.com/wp-content/uploads/2024/05/DSC04487-683x1024.jpg",
      alt: "Noreen T. Deleon Guerrero",
    },
    {
      name: "Agnes G. Archibald",
      image:
        "https://www.hermansbakery.com/wp-content/uploads/2024/01/Untitled-design-4-1024x1024.png",
      alt: "Agnes G. Archibald",
    },
    {
      name: "Rudolpho T. Guerrero",
      image:
        "https://www.hermansbakery.com/wp-content/uploads/2024/01/Untitled-design-4-1024x1024.png",
      alt: "Rudolpho T. Guerrero",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCF4E0]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#F11A23] to-[#D4151E] py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <Image
              src="/assets/logo-white.svg"
              alt="Herman's Modern Bakery Logo"
              width={120}
              height={120}
              className="mx-auto mb-8"
            />
            <h1 className="text-5xl lg:text-7xl font-dela-gothic-one text-white font-extrabold mb-6">
              The HERMAN&apos;S Family
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Herman&apos;s Modern Bakery is more than just a place to find
              delicious baked goods; it&apos;s a cornerstone of the Saipan
              community, founded and lovingly operated by the Herman family. For
              over 80 years, our family has dedicated itself to crafting
              high-quality, homemade breads, pastries, and cakes that bring a
              touch of sweetness to your everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
        {/* Family Photo Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold mb-6">
              The Herman&apos;s Siblings
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://www.hermansbakery.com/wp-content/uploads/2024/05/DSC04595-Edit.jpg"
                  alt="Hermans Siblings"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Family Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold">
              Meet the Herman&apos;s Siblings
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {familyMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="aspect-[2/3] relative">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg text-gray-800 font-dela-gothic-one">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-20 lg:mb-32">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-dela-gothic-one text-[#F11A23] font-bold mb-6">
                A Family Legacy
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                For over 80 years, the Herman family has been the heart and soul
                of our bakery. Each sibling brings their unique talents and
                dedication to continue our family&apos;s tradition of excellence
                in baking and community service. Together, we honor our
                parents&apos; legacy while building a bright future for the next
                generation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#F11A23] text-white p-6 rounded-2xl mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Tradition
                </h3>
                <p className="text-gray-600">
                  Preserving our family&apos;s baking traditions for over 80
                  years
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#F11A23] text-white p-6 rounded-2xl mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Quality
                </h3>
                <p className="text-gray-600">
                  Crafting the finest baked goods with love and care
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#F11A23] text-white p-6 rounded-2xl mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.3c-.33.44-.49.98-.49 1.53V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Community
                </h3>
                <p className="text-gray-600">
                  Serving Saipan with dedication and warmth
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-[#F11A23] to-[#D4151E] rounded-3xl shadow-xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-dela-gothic-one font-bold mb-6">
              Visit Our Family Bakery
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Come experience the warmth and tradition of our family bakery.
              We&apos;d love to welcome you into our extended family!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="bg-white text-[#F11A23] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                Learn More About Us
              </a>
              <a
                href="/products"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#F11A23] transition-colors duration-300"
              >
                View Our Products
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
