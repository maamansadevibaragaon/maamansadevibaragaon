"use client";

import HeroBackground from "./hero/HeroBackground";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Camera, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Premium Animated Background */}
      <HeroBackground />

      {/* Hero Content */}

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">

        {/* Devotional Badge */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-full border border-yellow-300/40 bg-white/10 px-6 py-2 backdrop-blur-md"
        >
          <p className="text-sm font-semibold tracking-[3px] text-yellow-300 md:text-base">
            ॐ जय माँ मनसा देवी ॐ
          </p>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          className="mt-8 text-5xl font-extrabold leading-tight text-white drop-shadow-[0_0_25px_rgba(255,180,0,0.5)] md:text-7xl"
        >
          Maa Mansa Devi
          <br />
          Mandir
        </motion.h1>

        {/* Location */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.7,
          }}
          className="mt-6 flex items-center gap-2 rounded-full bg-orange-600/80 px-6 py-3 text-white shadow-xl backdrop-blur"
        >
          <MapPin size={18} />
          <span className="font-medium">
            Bara Gaon • Baghpat • Uttar Pradesh
          </span>
        </motion.div>

        {/* Sanskrit */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
          }}
          className="mt-10 text-2xl leading-relaxed text-yellow-100 md:text-3xl"
        >
          ॥ ॐ ह्रीं श्रीं मंसादेव्यै नमः ॥
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.3,
          }}
          className="mt-6 max-w-5xl text-lg leading-9 text-orange-100 md:text-2xl"
        >
          भक्तानां मनोकामना पूर्णाय
          <br />
          दिव्य कृपा स्वरूपिण्यै नमो नमः॥
        </motion.p>

        {/* Welcome */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.6,
          }}
          className="mt-8 text-xl italic text-white md:text-2xl"
        >
          माँ मनसा देवी के दिव्य दरबार में आपका हार्दिक स्वागत है।
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.9,
          }}
          className="mt-14 flex flex-col gap-5 sm:flex-row"
        >
          <Link
            href="/contact"
            className="rounded-full bg-orange-600 px-10 py-4 text-lg font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-orange-700"
          >
            Plan Your Visit
          </Link>

          <Link
            href="/gallery"
            className="flex items-center justify-center gap-2 rounded-full border-2 border-yellow-300 px-10 py-4 text-lg font-bold text-yellow-200 transition duration-300 hover:bg-white hover:text-orange-700"
          >
            <Camera size={20} />
            Explore Gallery
          </Link>
        </motion.div>

        {/* Scroll */}

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-24"
        >
          <ArrowDown
            size={38}
            className="mx-auto text-yellow-300"
          />
        </motion.div>

      </div>

    </section>
  );
}