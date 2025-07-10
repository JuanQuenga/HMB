"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[480px] md:min-h-[700px] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/qGP__9OMg88?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=qGP__9OMg88"
            title="Herman's 80th Anniversary Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder="0"
            style={{ pointerEvents: "none" }}
          ></iframe>
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </div>
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 py-16 md:py-24">
        <Image
          src="/assets/logo-white.svg"
          alt="Herman's Modern Bakery Logo"
          width={128}
          height={128}
          className="w-24 h-24 sm:w-32 sm:h-32 mb-8"
          priority
        />
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-dela-gothic-one text-white font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
          Saipan&apos;s First And Finest
        </h1>
        <p className="text-base sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-8 drop-shadow">
          Baked with love, served with a smile.
        </p>
      </div>
    </section>
  );
}
