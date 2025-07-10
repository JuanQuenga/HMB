"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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

function isWeekday() {
  const day = new Date().getDay();
  return day >= 1 && day <= 5; // Monday = 1, Friday = 5
}

export default function CafeSection() {
  const todayName = getTodayName();
  const isWeekdayToday = isWeekday();
  const todaySpecial = cafeData.days.find((day) => day.day === todayName);

  return (
    <section className="w-full  py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-dela-gothic-one text-[#F11A23] mb-4">
            Tan Marikita&apos;s Café
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F11A23] to-[#D4151E] mx-auto mb-6 rounded-full" />
          <p className="text-gray-700 text-lg mb-4">
            Where breakfast is served to perfection all day long!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Photos */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/photos/cafe-1.jpg"
                    alt="Tan Marikita's Café Interior"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/photos/cafe-3.jpg"
                    alt="Tan Marikita's Café Food"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/photos/cafe-2.jpg"
                    alt="Tan Marikita's Café Atmosphere"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/photos/cafe-4.jpg"
                    alt="Tan Marikita's Café Experience"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Info and Lunch Special */}
          <div className="space-y-6">
            <div className="bg-white/90 rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-2xl font-dela-gothic-one text-[#F11A23] mb-4">
                About Our Café
              </h3>
              <p className="text-gray-700 mb-4">
                Herman&apos;s wife, Maria, better known as &quot;Tan
                Marikita&quot; was well known throughout Saipan for her generous
                spirit and hospitality. She opened her heart and home to many.
                We hope the menu choices offered by Tan Marikita&apos;s Cafe
                will be satisfying and enjoyable just as they were at her table,
                where everyone was welcomed and treated like family.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <strong>Hours:</strong> Open Daily 6:00AM - 2:00PM (Last
                  Order: 1:30PM)
                </p>
                <p>
                  <strong>Location:</strong> 5040 Chalan Tun Herman Pan, Saipan
                </p>
                <p>
                  <strong>Phone:</strong> +1 670-234-1726
                </p>
              </div>
            </div>

            {/* Lunch Special Section */}
            {isWeekdayToday && todaySpecial && (
              <div className="bg-gradient-to-br from-[#F11A23] to-[#D4151E] rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-2xl font-dela-gothic-one mb-2">
                  Today&apos;s Lunch Special
                </h3>
                <p className="text-white/90 mb-4">
                  {todayName} - {todaySpecial.theme}
                </p>
                <div className="space-y-2 mb-4">
                  {todaySpecial.items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      <span className="text-white/95">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    ${todaySpecial.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-white/80">
                    Includes rice, soup, salad &amp; bottled water
                  </span>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center">
              <Button
                asChild
                className="bg-[#F11A23] hover:bg-[#D4151E] text-white text-lg px-8 py-4 rounded-xl font-bold shadow-md"
              >
                <Link href="/cafe">View Our Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
