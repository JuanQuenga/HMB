"use client";
import { Star, Utensils } from "lucide-react";

interface FloatingNavButtonsProps {
  onSpecialsClick: () => void;
  onMenuClick: () => void;
}

export default function FloatingNavButtons({
  onSpecialsClick,
  onMenuClick,
}: FloatingNavButtonsProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-br from-[#F11A23] to-[#D4151E] flex flex-row items-center md:hidden shadow-[0_-8px_24px_-4px_rgba(0,0,0,0.18)]">
      <button
        className="w-1/2 border-2 border-[#F11A23] bg-transparent text-white font-bold py-3 shadow-xl text-base flex items-center justify-center gap-2 active:scale-95 transition-transform"
        onClick={onSpecialsClick}
      >
        <Star className="w-5 h-5" />
        Specials
      </button>
      <div className="w-0.5 h-10 bg-white/40 mx-1"></div>
      <button
        className="w-1/2 border-2 border-[#F11A23] bg-transparent text-white font-bold py-3 shadow-xl text-base flex items-center justify-center gap-2 active:scale-95 transition-transform"
        onClick={onMenuClick}
      >
        <Utensils className="w-5 h-5" />
        Menu
      </button>
    </div>
  );
}
