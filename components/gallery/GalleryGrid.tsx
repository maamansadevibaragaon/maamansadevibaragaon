"use client";

import { useState } from "react";
import Image from "next/image";
import { gallery } from "@/data/gallery";
import GalleryFilter from "./GalleryFilter";
import GalleryLightbox from "./GalleryLightbox";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<
  (typeof gallery)[number] | null
>(null);

  const filteredGallery =
    activeCategory === "All"
      ? gallery
      : gallery.filter((image) => image.category === activeCategory);

  return (
    <>
      <GalleryFilter
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredGallery.map((image) => (
          <div
  key={image.id}
  onClick={() => setSelectedImage(image)}
            className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="h-64 w-full object-cover transition-transform duration-500 hover:scale-110"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-orange-700">
                {image.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {image.category}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
  <GalleryLightbox
    image={selectedImage}
    onClose={() => setSelectedImage(null)}
  />
)}
    </>
  );
}