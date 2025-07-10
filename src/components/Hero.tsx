"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[120px] md:min-h-[800px] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/qGP__9OMg88?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=qGP__9OMg88"
          title="Herman's 80th Anniversary Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "120vw",
            height: "120vh",
            minWidth: "100%",
            minHeight: "100%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
          className=""
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 py-6 md:py-32">
        <Image
          src="/assets/logo-white.svg"
          alt="Herman's Modern Bakery Logo"
          width={128}
          height={128}
          className="w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 mb-6"
          priority
        />
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-dela-gothic-one text-white font-extrabold mb-4 sm:mb-8 drop-shadow-lg">
          Saipan&apos;s First And Finest
        </h1>
        <p className="text-base sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-8 drop-shadow">
          Baked with love, served with a smile.
        </p>
      </div>
    </section>
  );
}
