import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full py-16">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-dela-gothic-one text-[#F11A23] font-extrabold mb-2 text-center">
          About Us
        </h2>
        <div className="w-16 h-1 bg-[#F11A23] mx-auto mb-10 rounded-full" />

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <Image
                src="/assets/photos/celebrating-1.jpg"
                alt="Herman's Modern Bakery 80th Anniversary Group Photo"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl object-cover w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] max-h-[80vh]"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#F11A23] text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="text-lg font-bold font-dela-gothic-one">
                  Since 1944
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-dela-gothic-one text-gray-800 font-bold">
              Saipan&apos;s First And Finest
            </h3>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              For over 80 years, Herman&apos;s Modern Bakery has been serving
              the community of Saipan with the finest baked goods and delicious
              meals. What started as a small family bakery has grown into a
              beloved local institution.
            </p>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Our commitment to quality ingredients, traditional recipes, and
              warm hospitality has made us a cornerstone of the Northern Mariana
              Islands&apos; culinary scene. Every day, we bake with love and
              serve with a smile.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F11A23] font-dela-gothic-one">
                  80+
                </div>
                <div className="text-gray-600 font-sans">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F11A23] font-dela-gothic-one">
                  1000+
                </div>
                <div className="text-gray-600 font-sans">Happy Customers</div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-[#F11A23] hover:bg-[#D9101F] text-white px-8 py-3 rounded-lg font-bold font-sans transition-colors duration-300">
                Learn More About Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
