"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OrderPage() {
  const [serviceType, setServiceType] = useState("Pickup");
  const [cakeOccasion, setCakeOccasion] = useState("");
  const [cakeGender, setCakeGender] = useState("");
  const [cakeSize, setCakeSize] = useState("");
  const [cakeFlavor, setCakeFlavor] = useState("");
  const [icing, setIcing] = useState("");
  const [icingColor, setIcingColor] = useState("");
  const [filling, setFilling] = useState("");
  const [roastType, setRoastType] = useState("");
  const [orderTab, setOrderTab] = useState("Cake/Cupcake");

  return (
    <div className="min-h-screen bg-[#FCF4E0]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#F11A23] to-[#D4151E] py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <Image
              src="/assets/logo-white.svg"
              alt="Herman's Modern Bakery Logo"
              width={80}
              height={80}
              className="mx-auto mb-6"
            />
            <h1 className="text-4xl lg:text-6xl font-dela-gothic-one text-white font-extrabold mb-6">
              Place Your Order
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              From custom cakes to roasting services, we&apos;re here to make
              your special occasions unforgettable. Let us know what you need
              and we&apos;ll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-[#F11A23] to-[#D4151E] p-8 text-white">
              <h2 className="text-2xl lg:text-3xl font-dela-gothic-one font-bold mb-2">
                Order Details
              </h2>
              <p className="text-white/90">
                Fill out the form below and we&apos;ll contact you within 24
                hours to confirm your order.
              </p>
            </div>

            {/* Form Content */}
            <div className="p-8 lg:p-12">
              <form className="space-y-8">
                {/* Customer Info */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#F11A23] mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Customer Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      required
                      placeholder="First Name"
                      name="firstName"
                      className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                    />
                    <Input
                      required
                      placeholder="Last Name"
                      name="lastName"
                      className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                    />
                    <Input
                      required
                      placeholder="Phone Number"
                      name="phone"
                      type="tel"
                      className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                    />
                    <Input
                      required
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                    />
                  </div>
                </div>

                {/* Event Details */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#F11A23] mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Event Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      required
                      placeholder="Date of Event"
                      name="eventDate"
                      type="date"
                      className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                    />
                    <Input
                      required
                      placeholder="Time of Event"
                      name="eventTime"
                      type="time"
                      className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#F11A23] mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Service Type
                  </h3>
                  <div className="flex gap-4 mb-4">
                    {["Pickup", "Delivery"].map((type) => (
                      <Button
                        key={type}
                        type="button"
                        variant={serviceType === type ? "default" : "outline"}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                          serviceType === type
                            ? "bg-[#F11A23] text-white shadow-lg"
                            : "bg-white text-[#F11A23] border-2 border-[#F11A23] hover:bg-[#F11A23] hover:text-white"
                        }`}
                        onClick={() => setServiceType(type)}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                  {serviceType === "Delivery" && (
                    <Input
                      placeholder="Delivery Address"
                      name="deliveryLocation"
                      className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                    />
                  )}
                </div>

                {/* Order Type Tabs */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#F11A23] mb-6 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Order Type
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {["Cake/Cupcake", "Roasting Services", "Other"].map(
                      (tab) => (
                        <Button
                          key={tab}
                          type="button"
                          variant={orderTab === tab ? "default" : "outline"}
                          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                            orderTab === tab
                              ? "bg-[#F11A23] text-white shadow-lg"
                              : "bg-white text-[#F11A23] border-2 border-[#F11A23] hover:bg-[#F11A23] hover:text-white"
                          }`}
                          onClick={() => setOrderTab(tab)}
                        >
                          {tab}
                        </Button>
                      )
                    )}
                  </div>

                  {/* Cake/Cupcake Tab */}
                  {orderTab === "Cake/Cupcake" && (
                    <div className="space-y-6 bg-white rounded-xl p-6 border border-gray-200">
                      <h4 className="text-lg font-bold text-[#F11A23] mb-4">
                        🎂 Cake/Cupcake Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select
                          required
                          className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#F11A23] focus:ring-[#F11A23] bg-white"
                          value={cakeOccasion}
                          onChange={(e) => setCakeOccasion(e.target.value)}
                        >
                          <option value="">Select Occasion</option>
                          {[
                            "Birthday",
                            "Christening",
                            "Wedding",
                            "Graduation",
                            "Anniversary",
                            "Special Event Cake",
                            "Other",
                          ].map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                        <select
                          required
                          className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#F11A23] focus:ring-[#F11A23] bg-white"
                          value={cakeGender}
                          onChange={(e) => setCakeGender(e.target.value)}
                        >
                          <option value="">Select Gender</option>
                          {["Male", "Female", "Gender-neutral"].map((g) => (
                            <option key={g}>{g}</option>
                          ))}
                        </select>
                      </div>
                      <Input
                        required
                        placeholder="Age of person (0-100)"
                        name="cakeAge"
                        type="number"
                        min={0}
                        max={100}
                        className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                      />
                      <select
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#F11A23] focus:ring-[#F11A23] bg-white"
                        value={cakeSize}
                        onChange={(e) => setCakeSize(e.target.value)}
                      >
                        <option value="">Select Size/Shape</option>
                        {[
                          'Round 5"',
                          'Round 8"',
                          'Round 10"',
                          'Round 12"',
                          'Round 14"',
                          'Round 16"',
                          '8"x12"',
                          '12"x16"x1"',
                          '12"x16"',
                          '16"x24"x1"',
                          '16"x24"',
                          "Cupcake Mini (12 pack)",
                          "Cupcake Regular (6 Pack)",
                          "Cupcake Large (each)",
                          "Pull Apart Cupcakes",
                          'Cupcake Carousel (8" round 12 pieces)',
                          "Special Request",
                        ].map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                      <Input
                        placeholder="Special Size/Shape Request"
                        name="cakeSizeSpecial"
                        className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                      />
                      <select
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#F11A23] focus:ring-[#F11A23] bg-white"
                        value={cakeFlavor}
                        onChange={(e) => setCakeFlavor(e.target.value)}
                      >
                        <option value="">Select Cake Flavor</option>
                        {[
                          "Chiffon",
                          "Vanilla",
                          "Marble",
                          "Chocolate",
                          "Black Forest",
                          "Carrot",
                          "Choco Berry",
                          "Mandarin",
                          "Mango",
                          "Mocha Chiffon",
                          "Oreo Dark Chocolate",
                          "Strawberry",
                          "Tropical Surprise",
                          "Velvet",
                          "Chocolate Ganache",
                          "Dark Chocolate Raspberry",
                          "Coconut Lemon",
                          "Pistachio",
                          'Pistachio (8" Bundt)',
                          'Velvet (8" Bundt)',
                          "Other",
                        ].map((f) => (
                          <option key={f}>{f}</option>
                        ))}
                      </select>
                      <Input
                        placeholder="Cake Flavor - Other"
                        name="cakeFlavorOther"
                        className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select
                          required
                          className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#F11A23] focus:ring-[#F11A23] bg-white"
                          value={icing}
                          onChange={(e) => setIcing(e.target.value)}
                        >
                          <option value="">Select Icing</option>
                          {[
                            "Regular",
                            "Marshmallow",
                            "Butter",
                            "Chocolate",
                            "Lite Cream",
                            "Cream Cheese",
                            "Fondant",
                            "Special Request",
                          ].map((i) => (
                            <option key={i}>{i}</option>
                          ))}
                        </select>
                        <select
                          required
                          className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#F11A23] focus:ring-[#F11A23] bg-white"
                          value={icingColor}
                          onChange={(e) => setIcingColor(e.target.value)}
                        >
                          <option value="">Select Icing Color</option>
                          {[
                            "White",
                            "Red",
                            "Green",
                            "Blue",
                            "Yellow",
                            "Rainbow",
                            "Other/Mixed",
                          ].map((c) => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <Input
                        placeholder="Icing - Special Request"
                        name="icingSpecial"
                        className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                      />
                      <Input
                        placeholder="Icing Color - Mixed/Other"
                        name="icingColorOther"
                        className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                      />
                      <select
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#F11A23] focus:ring-[#F11A23] bg-white"
                        value={filling}
                        onChange={(e) => setFilling(e.target.value)}
                      >
                        <option value="">Select Filling Flavor</option>
                        {[
                          "No filling",
                          "Strawberry",
                          "Cherry",
                          "Chocolate",
                          "Lemon",
                          "Raspberry",
                          "Cream Cheese",
                          "Bavarian Cream",
                          "Other",
                        ].map((f) => (
                          <option key={f}>{f}</option>
                        ))}
                      </select>
                      <Input
                        placeholder="Filling Flavor - Other"
                        name="fillingOther"
                        className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                      />
                      <Input
                        placeholder="Message on Cake/Cupcake and other info"
                        name="cakeMessage"
                        className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                      />
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <input
                          type="file"
                          name="cakePhoto"
                          accept="image/*"
                          className="hidden"
                          id="cakePhoto"
                        />
                        <label htmlFor="cakePhoto" className="cursor-pointer">
                          <svg
                            className="w-8 h-8 mx-auto mb-2 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <span className="text-gray-600">
                            Upload reference photo (optional)
                          </span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Roasting Services Tab */}
                  {orderTab === "Roasting Services" && (
                    <div className="space-y-6 bg-white rounded-xl p-6 border border-gray-200">
                      <h4 className="text-lg font-bold text-[#F11A23] mb-4">
                        🍖 Roasting Services
                      </h4>
                      <select
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#F11A23] focus:ring-[#F11A23] bg-white"
                        value={roastType}
                        onChange={(e) => setRoastType(e.target.value)}
                      >
                        <option value="">Select Type of Roast</option>
                        {[
                          "Suckling Pig",
                          "Turkey",
                          "Chicken",
                          "Ham",
                          "Beef",
                          "Other",
                        ].map((r) => (
                          <option key={r}>{r}</option>
                        ))}
                      </select>
                      <Input
                        placeholder="Type of Roast - Other"
                        name="roastOther"
                        className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                      />
                      <Input
                        placeholder="Weight Range (e.g. 20-49 lbs)"
                        name="roastWeight"
                        className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                      />
                      <Input
                        placeholder="Special Requests"
                        name="roastSpecial"
                        className="border-gray-300 focus:border-[#F11A23] focus:ring-[#F11A23]"
                      />
                    </div>
                  )}

                  {/* Other Tab */}
                  {orderTab === "Other" && (
                    <div className="space-y-6 bg-white rounded-xl p-6 border border-gray-200">
                      <h4 className="text-lg font-bold text-[#F11A23] mb-4">
                        ✨ Other Services / Special Requests
                      </h4>
                      <textarea
                        placeholder="Describe your request in detail..."
                        name="otherRequest"
                        rows={6}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#F11A23] focus:ring-[#F11A23] resize-none"
                      />
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#F11A23] to-[#D4151E] text-white font-bold py-4 px-12 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Order Request
                  </Button>
                  <p className="text-gray-600 mt-4 text-sm">
                    We&apos;ll contact you within 24 hours to confirm your order
                    and discuss pricing.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
