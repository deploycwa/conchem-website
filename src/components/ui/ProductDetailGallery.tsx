"use client";

import Image from "next/image";
import { useState } from "react";
import ProductImage from "./ProductImage";

type ProductDetailGalleryProps = {
  productName: string;
  placeholderText?: string;
  gallery: string[];
};

export default function ProductDetailGallery({ productName, placeholderText, gallery }: ProductDetailGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = gallery[selectedIndex] ?? "";

  const thumbnailIndices = gallery.length > 1
    ? gallery
        .map((_, index) => index)
        .filter((index) => index !== selectedIndex)
        .sort(
          (a, b) =>
            ((a - selectedIndex + gallery.length) % gallery.length) -
            ((b - selectedIndex + gallery.length) % gallery.length)
        )
    : [];

  return (
    <div>
      <ProductImage
        src={selectedImage}
        alt={`${productName} main preview`}
        placeholderText={placeholderText}
        variant="detail"
        priority
      />

      {thumbnailIndices.length > 0 ? (
        <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
          {thumbnailIndices.map((galleryIndex, position) => {
            const src = gallery[galleryIndex];
            const isSelected = galleryIndex === selectedIndex;

            return (
              <button
                key={`${src}-${galleryIndex}`}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedIndex(galleryIndex)}
                className="block w-full rounded-[1.25rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
              >
                <div
                  className={`relative h-[110px] w-full overflow-hidden rounded-[1.25rem] border bg-[#F8FAFC] sm:h-[140px] lg:h-[160px] ${
                    isSelected ? "border-[#C8102E]" : "border-[#E5E7EB]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${productName} thumbnail ${position + 1}`}
                    fill
                    sizes="(max-width: 768px) 33vw, 160px"
                    className="object-cover object-center"
                  />
                </div>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
