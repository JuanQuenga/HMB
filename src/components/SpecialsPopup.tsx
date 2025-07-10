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
            className="fixed inset-x-0 bottom-0 z-[110] bg-white rounded-t-3xl shadow-2xl pb-4 px-2  touch-pan-y"
            style={{ touchAction: "pan-y" }}
          >
            {/* Drag Handle */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-red-300 mb-2" />
            {/* Close Button - Bottom Bar */}
            <button
              className="absolute bottom-2 left-2 right-2 py-1 flex items-center justify-center bg-[#F11A23] text-white font-bold text-base shadow-[0_-4px_12px_-2px_rgba(0,0,0,0.3)] active:scale-95 transition-transform z-[120] rounded-lg"
              onClick={onClose}
              aria-label="Close"
            >
              CLOSE
            </button>
            <div className="overflow-y-auto max-h-[calc(85vh-80px)] px-1">
              <div className="pt-8">
                <h2 className="text-2xl font-dela-gothic-one text-[#F11A23]  text-center">
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
