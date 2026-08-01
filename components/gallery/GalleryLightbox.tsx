"use client";

import Image from "next/image";

interface GalleryLightboxProps {
  image: {
    src: string;
    alt: string;
    title: string;
  };
  onClose: () => void;
}

export default function GalleryLightbox({
  image,
  onClose,
}: GalleryLightboxProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white px-4 py-2 font-bold text-black shadow-lg"
        >
          ✕
        </button>

        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={800}
          className="max-h-[85vh] w-auto rounded-xl object-contain"
        />

        <h2 className="mt-5 text-center text-2xl font-bold text-white">
          {image.title}
        </h2>
      </div>
    </div>
  );
}