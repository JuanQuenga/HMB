"use client";
import { cafeMenu } from "@/data/cafeMenu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";

interface MenuPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuPopup({ isOpen, onClose }: MenuPopupProps) {
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
          {/* Close Button - above the card, in the overlay */}
          <button
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[120] w-14 h-14 flex items-center justify-center rounded-full bg-[#F11A23] text-white text-4xl shadow-xl border-4 border-white active:scale-95 transition-transform"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
          {/* Popup Card */}
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
            className="fixed inset-x-0 bottom-0 z-[110] bg-white rounded-t-3xl shadow-2xl mt-8 pb-4 px-2 max-h-[85vh] touch-pan-y overflow-x-hidden max-w-full"
            style={{ touchAction: "pan-y" }}
          >
            {/* Drag Handle */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-red-300 mb-2" />
            <div className="overflow-y-auto max-h-[calc(85vh-80px)] pt-4 md:pt-8 overflow-x-hidden max-w-full">
              <Tabs defaultValue={cafeMenu[0].section} className="w-full">
                <div className="sticky -top-4 md:top-[64px] z-50 px-0 flex -mx-2  ">
                  <TabsList className="w-full flex flex-wrap gap-2 justify-center bg-white shadow-md p-2 h-full">
                    {cafeMenu.map((section) => (
                      <TabsTrigger
                        key={section.section}
                        value={section.section}
                        className="capitalize px-4 py-2 rounded-full font-bold text-sm transition-colors shadow-none border
                            data-[state=active]:bg-[#F11A23] data-[state=active]:text-white data-[state=active]:border-[#F11A23]
                            data-[state=inactive]:bg-[#FFE0E0] data-[state=inactive]:text-[#F11A23] data-[state=inactive]:border-[#FBB1B5] whitespace-nowrap"
                      >
                        {section.section.startsWith("Ala Cart")
                          ? "Ala Carte"
                          : section.section}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                <div className="pointer-events-none absolute left-0 right-0 top-full h-8 z-10 " />
                {cafeMenu.map((section) => (
                  <TabsContent
                    key={section.section}
                    value={section.section}
                    className="w-full pt-4"
                  >
                    <div className="flex flex-col gap-3 pt=1">
                      {/* If Ala Carte, show the Served with text at the top */}
                      {section.section.startsWith("Ala Cart") && (
                        <div className="mb-2 text-gray-600 font-semibold text-sm text-center italic">
                          Served with Steamed rice, buttered corn, or salad
                        </div>
                      )}
                      {section.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex flex-col gap-1 py-2"
                        >
                          <div className="flex items-baseline w-full">
                            <span className="font-extrabold text-base text-gray-900 whitespace-pre-line">
                              {item.name}
                            </span>
                            <span className="flex-1 border-t border-dotted border-gray-400 mx-2"></span>
                            <span className="font-extrabold text-base text-[#F11A23]">
                              ${item.price?.toFixed(2)}
                            </span>
                          </div>
                          {"description" in item && item.description && (
                            <span className="block text-gray-500 text-sm leading-tight">
                              {item.description}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
