"use client";
import LunchSpecials from "./LunchSpecials";
import { AnimatePresence, motion } from "framer-motion";

interface SpecialsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SpecialsPopup({ isOpen, onClose }: SpecialsPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black"
            onClick={onClose}
          />
          {/* Bottom Sheet */}
          <motion.div
            key="sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.y > 80) onClose();
            }}
            className="fixed inset-x-0 bottom-0 z-[110] bg-white rounded-t-3xl shadow-2xl pt-7 pb-4 px-2 max-h-[85vh] touch-pan-y"
            style={{ touchAction: "pan-y" }}
          >
            {/* Drag Handle */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-gray-300 mb-2" />
            {/* Large Floating Close Button */}
            <button
              className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-[#F11A23] text-white text-4xl shadow-xl border-4 border-white active:scale-95 transition-transform z-[120]"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
            <div className="overflow-y-auto max-h-[calc(85vh-80px)] px-1">
              <div className="pt-8">
                <h2 className="text-2xl font-dela-gothic-one text-[#F11A23] mb-6 text-center">
                  Lunch Specials
                </h2>
                <LunchSpecials forceMobile={true} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
