"use client";

import Image from "next/image";
import { useState } from "react";

type ImageCarouselProps = {
  images: string[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);

  const next = () =>
    setIndex((index + 1) % images.length);

  return (
    <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-forest/10">

      {/* Image */}
      <Image
        src={images[index]}
        alt={`Project screenshot ${index + 1}`}
        fill
        className="object-cover"
      />

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-cream/80 text-forest rounded-full p-2 shadow hover:bg-cream transition"
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-cream/80 text-forest rounded-full p-2 shadow hover:bg-cream transition"
      >
        ›
      </button>
    </div>
  );
}
