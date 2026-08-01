"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  "/images/temple-front.webp",
  "/images/maa-mansa-devi.jpeg",
  "/images/temple-front.webp",
  "/images/logo.png",
];

export default function GalleryPreview() {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-orange-600">
            Temple Gallery
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Moments of Faith & Devotion
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Explore the divine beauty of Maa Mansa Devi Mandir through our
            collection of temple photographs, festivals, aarti and spiritual
            celebrations.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl shadow-xl"
            >
              <Image
                src={image}
                alt="Temple Gallery"
                width={500}
                height={500}
                className="h-72 w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/gallery"
            className="rounded-full bg-orange-600 px-8 py-4 font-bold text-white transition hover:bg-orange-700"
          >
            View Complete Gallery →
          </Link>
        </div>

      </div>
    </section>
  );
}