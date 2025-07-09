"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { FaApple, FaGoogle } from "react-icons/fa";

// Google Maps types
declare global {
  interface Window {
    google: {
      maps: {
        importLibrary: (library: string) => Promise<unknown>;
      };
    };
    initMap: () => void;
  }
}

export default function BakeryMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  const lat = 15.14305786427874;
  const lng = 145.7304914448438;
  const oldAddress =
    "5040 Chalan Tun Herman Pan PO Box 500002 96950 Saipan, Northern Mariana Islands";

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const loadGoogleMapsScript = () => {
      return new Promise<void>((resolve, reject) => {
        // Check if script is already loaded
        if (window.google?.maps) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBBUGFvsSJJ8yPLOZbOGafn-_Fzg4hYWiM&callback=initMap&v=weekly`;
        script.async = true;
        script.defer = true;
        script.onerror = () =>
          reject(new Error("Google Maps script failed to load"));

        window.initMap = () => {
          resolve();
        };

        document.head.appendChild(script);
      });
    };

    const initMap = async () => {
      try {
        await loadGoogleMapsScript();
        const { Map } = (await window.google.maps.importLibrary("maps")) as {
          Map: new (element: HTMLElement, options: unknown) => unknown;
        };
        const { AdvancedMarkerElement } =
          (await window.google.maps.importLibrary("marker")) as {
            AdvancedMarkerElement: new (options: unknown) => unknown;
          };

        if (mapRef.current) {
          const map = new Map(mapRef.current, {
            center: { lat, lng },
            zoom: 16,
            mapId: "DEMO_MAP_ID",
          });

          new AdvancedMarkerElement({
            map,
            position: { lat, lng },
            title: "Herman's Modern Bakery",
          });
        }
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    initMap();
  }, [isClient]);

  // Add business hours string
  const businessHours = [
    { days: "Mon–Fri", hours: "6:00am – 6:00pm" },
    { days: "Sat", hours: "6:00am – 4:00pm" },
    { days: "Sun", hours: "Closed" },
  ];

  const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(oldAddress)}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(oldAddress)}`;

  return (
    <section className="w-full py-16">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-dela-gothic-one text-[#F11A23] font-extrabold mb-2 text-center">
          Visit Us
        </h2>
        <div className="w-16 h-1 bg-[#F11A23] mx-auto mb-10 rounded-full" />
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Map */}
          <div className="flex-1 min-h-[300px] md:min-h-[400px] relative rounded-xl overflow-hidden shadow-md">
            {isClient ? (
              <div
                ref={mapRef}
                className="w-full h-full min-h-[300px] md:min-h-[400px]"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 min-h-[300px] md:min-h-[400px]">
                <MapPin className="w-12 h-12 text-[#F11A23] mx-auto mb-4" />
              </div>
            )}
          </div>
          {/* Info Card */}
          <div className="flex flex-col justify-center bg-white px-10 py-10 border border-gray-200 md:w-[420px] w-full rounded-xl shadow-lg">
            <div className="text-base text-gray-500 mb-2 font-sans">
              Our Location
            </div>
            <div className="text-2xl font-bold text-[#F11A23] mb-4 font-sans break-words">
              {oldAddress}
            </div>
            <div className="text-base text-gray-500 mb-2 font-sans">
              Business Hours
            </div>
            <ul className="mb-6">
              {businessHours.map((item) => (
                <li
                  key={item.days}
                  className="flex justify-between text-lg text-gray-700 font-sans mb-1"
                >
                  <span>{item.days}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <Button
                asChild
                className="bg-black hover:bg-gray-800 text-white px-4 py-3 font-sans border border-black flex-1 text-lg font-bold flex items-center justify-center min-w-0"
              >
                <a
                  href={appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center"
                >
                  <FaApple className="mr-2 text-xl" />
                  Apple Maps
                </a>
              </Button>
              <Button
                asChild
                className="bg-[#4285F4] hover:bg-[#3367D6] text-white px-4 py-3 font-sans border border-[#4285F4] flex-1 text-lg font-bold flex items-center justify-center min-w-0"
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center"
                >
                  <FaGoogle className="mr-2 text-xl" />
                  Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
