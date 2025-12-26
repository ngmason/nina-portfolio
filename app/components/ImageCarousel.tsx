"use client";

import Image from "next/image";
import { useState } from "react";

type ImageCarouselProps = {
  images: string[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);

  const next = () =>
    setIndex((index + 1) % images.length);

  return (
    <>
      {/* Carousel */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-forest/10">
        <button
          onClick={() => setIsOpen(true)}
          className="absolute inset-0 z-10"
          aria-label="Expand image"
        />

        <Image
          src={images[index]}
          alt={`Project screenshot ${index + 1}`}
          fill
          className="object-cover"
        />

        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-cream/80 text-forest rounded-full p-3 md:p-2 shadow hover:bg-cream transition z-20"
        >
          ‹
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-cream/80 text-forest rounded-full p-3 md:p-2 shadow hover:bg-cream transition z-20"
        >
          ›
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-cream text-3xl hover:opacity-80"
            >
              ✕
            </button>

            <Image
              src={images[index]}
              alt={`Expanded screenshot ${index + 1}`}
              width={1600}
              height={900}
              className="object-contain rounded-xl shadow-xl w-full h-auto max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}