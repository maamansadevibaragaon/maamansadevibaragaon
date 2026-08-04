"use client";

import DivineSlok from "./DivineSlok";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Camera, MapPin } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center px-6 pt-32 text-center">

      {/* OM */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-5"
      >
        <h2 className="text-6xl text-yellow-300 drop-shadow-[0_0_35px_rgba(255,210,80,0.9)] md:text-8xl">
          🕉
        </h2>
      </motion.div>

      {/* SHREE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="tracking-[12px] text-yellow-200"
      >
        श्री
      </motion.p>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-5 text-5xl font-black leading-tight text-white md:text-8xl"
      >
        Maa Mansa Devi
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-3 text-3xl font-bold tracking-[8px] text-yellow-300 md:text-5xl"
      >
        MANDIR
      </motion.h2>

      {/* LOCATION */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="mt-8 flex items-center gap-2 rounded-full bg-orange-600/70 px-6 py-3 text-white backdrop-blur-lg"
      >
        <MapPin size={18} />
        Bara Gaon • Baghpat • Uttar Pradesh
      </motion.div>

      {/* DIVINE SHLOK */}
      <DivineSlok />

      {/* WELCOME */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
        className="mt-8 max-w-4xl text-lg leading-9 text-white md:text-2xl"
      >
        माँ मनसा देवी के दिव्य दरबार में आपका हार्दिक स्वागत है।
        <br />
        श्रद्धा, विश्वास एवं भक्ति के साथ माँ के दिव्य दर्शन का
        पावन अनुभव प्राप्त करें।
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="mt-14 flex flex-col gap-5 sm:flex-row"
      >
        <Link
          href="/contact"
          className="rounded-full bg-orange-600 px-10 py-4 text-lg font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-orange-700"
        >
          🙏 Plan Your Visit
        </Link>

        <Link
          href="/gallery"
          className="flex items-center justify-center gap-2 rounded-full border-2 border-yellow-300 px-10 py-4 text-lg font-bold text-yellow-200 transition hover:bg-white hover:text-orange-700"
        >
          <Camera size={20} />
          Explore Gallery
        </Link>
      </motion.div>

      {/* SCROLL */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-24"
      >
        <ArrowDown
          size={42}
          className="text-yellow-300"
        />
      </motion.div>

    </div>
  );
}