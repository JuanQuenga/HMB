"use client";
import React, { useState } from "react";
import LunchSpecialDayCard from "./LunchSpecialDayCard";
import cafeData from "../data/cafe.json";

function getTodayName() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date().getDay()];
}

type Props = {
  forceMobile?: boolean;
};

export default function LunchSpecials({ forceMobile }: Props) {
  const todayName = getTodayName();
  const [openDay, setOpenDay] = useState<string | null>(todayName);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const useMobile = forceMobile ?? isMobile;

  const toggleDay = (day: string) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <section className="w-full flex flex-col items-center py-8 px-2 md:px-0">
      <div className="text-lg text-gray-700 mb-1 text-center">
        {cafeData.availability}
      </div>
      <div className="text-base text-gray-500 mb-6 text-center">
        {cafeData.date} &bull;{" "}
        <span className="font-bold text-[#F11A23]">{cafeData.price}</span>
      </div>
      {/* Mobile-collapsed style: vertical accordion */}
      <div className="w-full space-y-3 pb-4">
        {cafeData.days.map((day) => (
          <LunchSpecialDayCard
            key={day.day}
            day={day}
            todayName={todayName}
            openDay={openDay}
            toggleDay={toggleDay}
            isMobile={useMobile}
          />
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-500 text-center">
        {cafeData.note}
      </div>
    </section>
  );
}
