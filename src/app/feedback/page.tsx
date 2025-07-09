import type { Metadata } from "next";
import CustomerFeedback from "@/components/CustomerFeedback";

export const metadata: Metadata = {
  title: "Customer Feedback - Herman's Modern Bakery",
  description:
    "Share your experience with Herman's Modern Bakery. We value your feedback to help us serve you better.",
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FCF4E0] to-white">
      <CustomerFeedback />
    </div>
  );
}
