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

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/logo.png"
            alt="Temple Logo"
            width={120}
            height={120}
            className="mx-auto"
          />

          <h2 className="mt-6 text-2xl font-bold text-yellow-300 md:text-4xl">
            🕉️ ॐ जय माँ मनसा देवी ॐ
          </h2>

          <h1 className="mt-4 text-5xl font-extrabold text-white md:text-7xl">
            Maa Mansa Devi Mandir
          </h1>

          <p className="mt-4 text-lg text-yellow-100 md:text-2xl">
            A Sacred Place of Faith & Devotion
          </p>

          <p className="mt-2 text-white">
            Bara Gaon, Uttar Pradesh
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-orange-600 px-8 py-3 font-bold text-white transition hover:bg-orange-700">
              Plan Your Visit
            </button>

            <button className="rounded-full border-2 border-yellow-300 px-8 py-3 font-bold text-white transition hover:bg-white hover:text-orange-700">
              Photo Gallery
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}