import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Day = {
  day: string;
  theme: string;
  price: number;
  items: string[];
};

type Props = {
  day: Day;
  todayName: string;
  openDay: string | null;
  toggleDay: (day: string) => void;
  isMobile: boolean;
};

export default function LunchSpecialDayCard({
  day,
  todayName,
  openDay,
  toggleDay,
  isMobile,
}: Props) {
  if (!isMobile) {
    // Desktop layout
    return (
      <div
        className={`group relative transition-all duration-500 border-2 
          ${
            day.day === todayName
              ? "bg-gradient-to-br from-[#F11A23] to-[#D4151E] text-white scale-105 shadow-2xl z-10 border-[#F11A23]"
              : "bg-white text-gray-800 hover:shadow-xl hover:-translate-y-2 border-gray-200 hover:border-[#F11A23]/30"
          }
          rounded-2xl flex flex-col cursor-pointer`}
        style={{
          minHeight: 400,
          paddingTop: day.day === todayName ? 20 : undefined,
        }}
      >
        {/* Today Badge */}
        {day.day === todayName && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-white border-2  border-[#F11A23] text-[#F11A23] px-4 py-1 rounded-full text-sm font-bold font-dela-gothic-one shadow-lg">
              TODAY
            </div>
          </div>
        )}
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex flex-col items-center mb-2">
              <span
                className={`text-2xl font-bold font-dela-gothic-one ${day.day === todayName ? "text-white" : "text-gray-900"}`}
              >
                {day.day}
              </span>
            </div>
            <div
              className={`text-lg font-bold ${day.day === todayName ? "text-white/90" : "text-[#F11A23]"}`}
            >
              {day.theme}
            </div>
          </div>
          {/* Menu Items */}
          <div
            className={`flex-1 rounded-xl p-4 ${day.day === todayName ? "bg-white/10 border border-white/20" : "bg-gray-50 border border-gray-200"}`}
          >
            <div className="space-y-4">
              {day.items.map((item: string, i: number) => (
                <div key={i} className="text-center">
                  <span
                    className={`block text-lg font-semibold ${day.day === todayName ? "text-white" : "text-gray-800"}`}
                  >
                    {item}
                  </span>
                  {i < day.items.length - 1 && (
                    <div
                      className={`w-16 mx-auto border-b-2 mt-4 ${day.day === todayName ? "border-white/30" : "border-gray-300"}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Mobile layout
  return (
    <div
      className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
        day.day === todayName
          ? "bg-gradient-to-br from-[#F11A23] to-[#D4151E] text-white border-[#F11A23]"
          : "bg-white text-gray-800 border-gray-200 hover:border-[#F11A23]/30"
      }`}
    >
      <button
        onClick={() => toggleDay(day.day)}
        className="w-full p-4 text-left"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`text-sm font-semibold ${day.day === todayName ? "text-white/90" : "text-[#F11A23]"}`}
              >
                {day.theme}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className={`text-xl font-bold font-dela-gothic-one ${day.day === todayName ? "text-white" : "text-gray-900"}`}
              >
                {day.day}
              </div>
              <div
                className={`text-sm font-medium ${day.day === todayName ? "text-white/80" : "text-gray-600"}`}
              >
                {day.day === todayName && (
                  <div className="bg-white text-[#F11A23] px-2 py-1 rounded-full text-xs font-bold font-dela-gothic-one">
                    TODAY
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {openDay === day.day ? (
              <ChevronUp
                className={`h-6 w-6 ${day.day === todayName ? "text-white" : "text-gray-400"}`}
              />
            ) : (
              <ChevronDown
                className={`h-6 w-6 ${day.day === todayName ? "text-white" : "text-gray-400"}`}
              />
            )}
          </div>
        </div>
      </button>
      {openDay === day.day && (
        <div className="px-4 pb-6 border-t border-white/20">
          <div
            className={`mt-4 p-4 rounded-xl ${day.day === todayName ? "bg-white/10 border border-white/20" : "bg-gray-50 border border-gray-200"}`}
          >
            <div className="space-y-4">
              {day.items.map((item: string, i: number) => (
                <div key={i} className="text-center">
                  <span
                    className={`block text-lg font-semibold ${day.day === todayName ? "text-white" : "text-gray-800"}`}
                  >
                    {item}
                  </span>
                  {i < day.items.length - 1 && (
                    <div
                      className={`w-16 mx-auto border-b-2 mt-4 ${day.day === todayName ? "border-white/30" : "border-gray-300"}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
