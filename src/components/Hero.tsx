"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-8 md:py-16 bg-[#FCF4E0] relative text-center min-h-[350px] md:min-h-[520px] overflow-hidden"
      style={{
        backgroundImage: "url('/assets/bannerBackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative food illustrations - hidden on mobile for cleaner look */}
      <Image
        src="/assets/plates/breakfast1.png"
        alt="Taco"
        width={120}
        height={120}
        className="absolute left-8 bottom-8 md:left-16 md:bottom-16 opacity-90 z-0 hidden md:block"
      />
      <Image
        src="/assets/plates/dinner2.png"
        alt="Stacked Dish"
        width={100}
        height={100}
        className="absolute right-32 top-1/2 -translate-y-1/2 opacity-90 z-0 hidden md:block"
      />
      <Image
        src="/assets/plates/breakfast3.png"
        alt="Brownies"
        width={110}
        height={110}
        className="absolute left-32 top-8 opacity-90 z-0 hidden md:block"
      />
      <Image
        src="/assets/plates/dinner1.png"
        alt="Eggs and Sausage"
        width={130}
        height={130}
        className="absolute right-8 top-8 opacity-90 z-0 hidden md:block"
      />
      <Image
        src="/assets/ICON/Group 765.png"
        alt="Leaf"
        width={70}
        height={70}
        className="absolute right-8 bottom-8 opacity-80 z-0 hidden md:block"
      />
      {/* Optional: add more icons for extra playfulness */}
      <div className="absolute inset-0 " aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <Image
          src="/assets/logo-filled.svg"
          alt="Herman's Modern Bakery Logo"
          width={80}
          height={80}
          className="mx-auto mb-4 md:mb-6 md:w-[120px] md:h-[120px]"
          priority
        />
        <h1 className="text-3xl md:text-6xl font-dela-gothic-one font-extrabold text-brand mb-3 md:mb-4">
          Saipan&apos;s First And Finest
        </h1>
        <p className="text-base md:text-2xl font-sans mb-6 md:mb-8 text-[#7C5B4A]">
          Baked with love, served with a smile.
        </p>
        <div className="flex flex-row gap-2 sm:gap-4 justify-center">
          <a
            href="/order"
            className="inline-block px-4 py-2 sm:px-10 sm:py-4 bg-[#F11A23] hover:bg-[#D4151E] text-white text-sm sm:text-lg font-bold font-dela-gothic-one rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Place An Order
          </a>
          <a
            href="/80th-anniversary"
            className="inline-block px-4 py-2 sm:px-10 sm:py-4 bg-[#F11A23] hover:bg-[#D4151E] text-white text-sm sm:text-lg font-bold font-dela-gothic-one rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            80th Anniversary
          </a>
        </div>
      </div>
    </section>
  );
}
