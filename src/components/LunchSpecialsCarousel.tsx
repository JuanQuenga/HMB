"use client";

import React, { useState, useEffect } from "react";
import cafeData from "@/data/cafe.json";
import { ChevronDown, ChevronUp, Clock } from "lucide-react";

const { days, note, title, subtitle, includes } = cafeData;

type Day = {
  day: string;
  theme: string;
  price: number;
  items: string[];
};

export default function LunchSpecialsCarousel() {
  const [openDay, setOpenDay] = useState<string | null>(null);

  // Get current weekday as string (e.g., 'Monday')
  const todayIdx = new Date().getDay(); // 0=Sunday, 1=Monday, ...
  const weekdayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todayName = weekdayNames[todayIdx];

  // Auto-open current day on mobile when component mounts
  useEffect(() => {
    // Check if we're on mobile (you can adjust this breakpoint as needed)
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    if (isMobile) {
      setOpenDay(todayName);
    }
  }, [todayName]);

  const toggleDay = (day: string) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <section className="py-16 lg:py-24 ">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-6xl font-dela-gothic-one text-[#F11A23] font-extrabold mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F11A23] to-[#D4151E] mx-auto mb-6 rounded-full" />
          <p className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
            {subtitle}
          </p>

          {/* Desktop Layout - All on same row */}
          <div className="hidden lg:flex items-center justify-center gap-6 text-gray-600 text-lg">
            <span className="inline-flex items-center px-6 py-2 bg-[#F11A23] text-white font-bold font-dela-gothic-one rounded-xl shadow-lg text-lg">
              $12
            </span>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#F11A23]" />
              <span className="font-medium">10:30am – 2:00pm</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="font-medium">Includes {includes.join(", ")}</span>
          </div>

          {/* Mobile Layout - Price and time on same row, includes below */}
          <div className="lg:hidden">
            <div className="flex items-center justify-center gap-4 text-gray-600 text-lg mb-3">
              <span className="inline-flex items-center px-6 py-2 bg-[#F11A23] text-white font-bold font-dela-gothic-one rounded-xl shadow-lg text-lg">
                $12
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#F11A23]" />
                <span className="font-medium">10:30am – 2:00pm</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-gray-600 text-lg font-medium">
                Includes {includes.join(", ")}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Layout - All days shown */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 mb-8">
          {days.map((day: Day) => (
            <div
              key={day.day}
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
                    {/* {weekDates[idx]
                      ? `(${weekDates[idx].getMonth() + 1}/${weekDates[idx].getDate()})`
                      : ""} */}
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col h-full">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="flex flex-col items-center mb-2">
                    {/* Date removed from here */}
                    <span
                      className={`text-2xl font-bold font-dela-gothic-one ${day.day === todayName ? "text-white" : "text-gray-900"}`}
                    >
                      {day.day}
                    </span>
                  </div>
                  <div
                    className={`text-lg font-bold ${
                      day.day === todayName ? "text-white/90" : "text-[#F11A23]"
                    }`}
                  >
                    {day.theme}
                  </div>
                </div>

                {/* Menu Items */}
                <div
                  className={`flex-1 rounded-xl p-4 ${
                    day.day === todayName
                      ? "bg-white/10 border border-white/20"
                      : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  <div className="space-y-4">
                    {day.items.map((item: string, i: number) => (
                      <div key={i} className="text-center">
                        <span
                          className={`block text-lg font-semibold ${
                            day.day === todayName
                              ? "text-white"
                              : "text-gray-800"
                          }`}
                        >
                          {item}
                        </span>
                        {i < day.items.length - 1 && (
                          <div
                            className={`w-16 mx-auto border-b-2 mt-4 ${
                              day.day === todayName
                                ? "border-white/30"
                                : "border-gray-300"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Layout removed */}

        {/* Mobile Layout - Dropdowns */}
        <div className="lg:hidden space-y-3 mb-8">
          {days.map((day: Day) => (
            <div
              key={day.day}
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
                        className={`text-sm font-semibold ${
                          day.day === todayName
                            ? "text-white/90"
                            : "text-[#F11A23]"
                        }`}
                      >
                        {day.theme}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div
                        className={`text-xl font-bold font-dela-gothic-one ${
                          day.day === todayName ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {day.day}
                      </div>
                      <div
                        className={`text-sm font-medium ${
                          day.day === todayName
                            ? "text-white/80"
                            : "text-gray-600"
                        }`}
                      >
                        {day.day === todayName && (
                          <div className="bg-white text-[#F11A23] px-2 py-1 rounded-full text-xs font-bold font-dela-gothic-one">
                            TODAY{" "}
                            {/* {weekDates[idx]
                            ? `(${weekDates[idx].getMonth() + 1}/${weekDates[idx].getDate()})`
                            : ""} */}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {openDay === day.day ? (
                      <ChevronUp
                        className={`h-6 w-6 ${
                          day.day === todayName ? "text-white" : "text-gray-400"
                        }`}
                      />
                    ) : (
                      <ChevronDown
                        className={`h-6 w-6 ${
                          day.day === todayName ? "text-white" : "text-gray-400"
                        }`}
                      />
                    )}
                  </div>
                </div>
              </button>

              {openDay === day.day && (
                <div className="px-4 pb-6 border-t border-white/20">
                  <div
                    className={`mt-4 p-4 rounded-xl ${
                      day.day === todayName
                        ? "bg-white/10 border border-white/20"
                        : "bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <div className="space-y-4">
                      {day.items.map((item: string, i: number) => (
                        <div key={i} className="text-center">
                          <span
                            className={`block text-lg font-semibold ${
                              day.day === todayName
                                ? "text-white"
                                : "text-gray-800"
                            }`}
                          >
                            {item}
                          </span>
                          {i < day.items.length - 1 && (
                            <div
                              className={`w-16 mx-auto border-b-2 mt-4 ${
                                day.day === todayName
                                  ? "border-white/30"
                                  : "border-gray-300"
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2  px-6 py-3 rounded-full ">
            <span className="text-gray-600 text-base italic font-medium">
              {note}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
