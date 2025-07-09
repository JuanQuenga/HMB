"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 max-w-[90vw] max-h-[90vh] mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-20"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>

        <div className="relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            className="rounded-lg shadow-2xl object-contain max-w-full max-h-[80vh]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
