"use client";

import React, { useState, useEffect } from "react";
import cafeData from "@/data/cafe.json";
import { Clock } from "lucide-react";
import LunchSpecialDayCard from "../components/LunchSpecialDayCard";

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
            <LunchSpecialDayCard
              key={day.day}
              day={day}
              todayName={todayName}
              openDay={openDay}
              toggleDay={toggleDay}
              isMobile={false}
            />
          ))}
        </div>

        {/* Tablet Layout removed */}

        {/* Mobile Layout - Dropdowns */}
        <div className="lg:hidden space-y-3 mb-8">
          {days.map((day: Day) => (
            <LunchSpecialDayCard
              key={day.day}
              day={day}
              todayName={todayName}
              openDay={openDay}
              toggleDay={toggleDay}
              isMobile={true}
            />
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
