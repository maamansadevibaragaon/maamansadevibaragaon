"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="/images/temple-front.webp"
        alt="Maa Mansa Devi Mandir"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-orange-950/70" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <Image
            src="/images/logo.png"
            alt="Temple Logo"
            width={120}
            height={120}
            className="mx-auto rounded-full shadow-2xl"
          />

          <p className="mt-6 text-yellow-300 text-xl md:text-3xl font-semibold">
            ॐ जय माँ मनसा देवी ॐ
          </p>

          <h1 className="mt-4 text-white text-5xl md:text-7xl font-extrabold">
            Maa Mansa Devi Mandir
          </h1>

          <p className="mt-6 text-yellow-100 text-lg md:text-2xl">
            ॥ ॐ ह्रीं श्रीं मंसादेव्यै नमः ॥

"भक्तानां मनोकामना पूर्णाय,
दिव्य कृपा स्वरूपिण्यै नमो नमः॥"
          </p>

          <p className="mt-2 text-white text-lg">
            जहाँ आस्था है, वहाँ माँ का आशीर्वाद है।
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="rounded-full bg-orange-600 px-8 py-4 text-white font-bold hover:bg-orange-700 transition">
              Plan Your Visit
            </button>

            <button className="rounded-full border-2 border-yellow-300 px-8 py-4 text-yellow-200 font-bold hover:bg-white hover:text-orange-700 transition">
              View Gallery
            </button>
          </div>

          <div className="mt-16 animate-bounce text-white text-3xl">
            ↓
          </div>
        </motion.div>
      </div>
    </section>
  );
}