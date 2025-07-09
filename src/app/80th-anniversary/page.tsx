import Image from "next/image";

export default function Anniversary80Page() {
  return (
    <div className="min-h-screen bg-[#FCF4E0]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#F11A23] to-[#D4151E] py-20 lg:py-32 text-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 lg:px-8 z-10">
          <div className="flex justify-center mb-8">
            <div
              className="bg-white rounded-full p-4 shadow-2xl flex items-center justify-center"
              style={{ width: 180, height: 180 }}
            >
              <Image
                src="/assets/logo-anniversary.png"
                alt="Herman's Modern Bakery 80th Anniversary Logo"
                width={150}
                height={150}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-dela-gothic-one text-white font-extrabold mb-6">
            Celebrating 80 Years
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Since 1944, Herman’s Modern Bakery has been a cherished name in our
            community, serving up fresh, delicious bread, pastries, cookies, and
            cakes for generations.
          </p>
        </div>
      </section>

      {/* Anniversary Images Grid Section */}
      <section className="bg-[#FCF4E0] py-12">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
            <Image
              src="/assets/photos/anniversary-1.png"
              alt="Herman's Modern Bakery 80th Anniversary Promo"
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl object-cover w-full h-72 md:h-64"
              priority
            />
            <Image
              src="/assets/photos/anniversary-2.png"
              alt="Herman's Modern Bakery 80th Anniversary Raffle Terms"
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl object-cover w-full h-72 md:h-64"
            />
            <Image
              src="/assets/photos/anniversary-3.png"
              alt="Herman's Modern Bakery 80th Anniversary Family Fun Day"
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl object-cover w-full h-72 md:h-64"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <section className="mb-12">
          <h2 className="text-3xl font-dela-gothic-one text-[#F11A23] font-bold mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Founded by Herman R. and Maria T. Guerrero in 1944, Herman’s Modern
            Bakery began as a modest neighborhood bakery with a simple mission:
            to provide high-quality baked goods made from the finest
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
            <strong>Location:</strong> Herman’s Modern Bakery
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
            <li>Cake Cutting Ceremony at 2:00PM with our Pan Family</li>
            <li>Live Music and Entertainment</li>
            <li>
              Exclusive Anniversary Treats & Limited-Edition Carnival Foods
            </li>
            <li>Fun and Games for the Community</li>
            <li>Hamburger Contest – Showcasing the Island’s Best</li>
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
            “We are incredibly grateful to our loyal customers, past and
            present, who have supported us throughout the years. This
            anniversary is as much a celebration of them as it is of our
            bakery’s history. We look forward to many more years of bringing joy
            to our community, one delicious treat at a time.”
          </p>
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
    </div>
  );
}
