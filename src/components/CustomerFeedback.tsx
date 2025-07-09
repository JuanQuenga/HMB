"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const feedbackCategories = [
  "Cake",
  "Cookies",
  "Pastries",
  "Pies",
  "Breads",
  "Customer Service",
  "Tan Marakitas Caf&eacute;",
  "Other",
];

export default function CustomerFeedback() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    category: "",
    other: "",
    feedback: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Feedback submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-dela-gothic-one text-[#F11A23] font-extrabold mb-4">
          We want to hear from you
        </h2>
        <h3 className="text-2xl md:text-3xl font-dela-gothic-one text-gray-700 mb-2">
          Customer Feedback
        </h3>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                First Name <span className="text-[#F11A23]">*</span>
              </label>
              <div suppressHydrationWarning>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F11A23] focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Last Name <span className="text-[#F11A23]">*</span>
              </label>
              <div suppressHydrationWarning>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F11A23] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Phone and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Phone Number <span className="text-[#F11A23]">*</span>
              </label>
              <div suppressHydrationWarning>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F11A23] focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Email <span className="text-[#F11A23]">*</span>
              </label>
              <div suppressHydrationWarning>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F11A23] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Category Selection */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Please Select One <span className="text-[#F11A23]">*</span>
            </label>
            <div suppressHydrationWarning>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F11A23] focus:border-transparent bg-white"
              >
                <option value="">Please select a choice</option>
                {feedbackCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Other Field */}
          {formData.category === "Other" && (
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Other <span className="text-[#F11A23]">*</span>
              </label>
              <div suppressHydrationWarning>
                <Input
                  type="text"
                  name="other"
                  value={formData.other}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F11A23] focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Feedback Text */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Tell Us About Your Experience
            </label>
            <div suppressHydrationWarning>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F11A23] focus:border-transparent resize-none"
                placeholder="Share your experience with us..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              className="bg-[#F11A23] hover:bg-[#D4141A] text-white px-8 py-3 font-dela-gothic-one text-lg font-bold border border-[#F11A23]"
            >
              Send Here
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
