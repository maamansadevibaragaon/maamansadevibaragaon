"use client";

import { useState } from "react";
import DivineSlok from "./DivineSlok";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, MapPin, BellRing } from "lucide-react";

export default function HeroContent() {
  const [started, setStarted] = useState(false);

  const handleTempleStart = () => {
    if (started) return;

    setStarted(true);
    window.dispatchEvent(new Event("temple-start"));
  };

  return (
    <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center px-6 pt-32 text-center">

      {/* Ring Temple Bell */}
      {!started && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleTempleStart}
          className="group mb-8 flex items-center gap-3 rounded-full border-2 border-yellow-300 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 px-8 py-4 text-yellow-200 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-yellow-300 hover:text-orange-700 hover:shadow-yellow-400/50"
        >
          <BellRing
            size={30}
            className="group-hover:animate-bounce"
          />

          <span className="text-xl font-bold">
            🔔 Ring the Temple Bell
          </span>
        </motion.button>
      )}

      {/* Temple Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative mt-2"
      >
        <div className="absolute inset-0 scale-150 rounded-full bg-yellow-400/20 blur-3xl" />

        <h1
          className="
            relative
            text-5xl
            font-black
            leading-tight
            text-white
            md:text-8xl
            drop-shadow-[0_0_45px_rgba(255,220,120,0.95)]
          "
        >
          Maa Mansa Devi
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="
          mt-4
          text-3xl
          md:text-5xl
          font-extrabold
          tracking-[10px]
          text-yellow-300
          drop-shadow-[0_0_18px_rgba(255,220,100,0.9)]
        "
      >
        MANDIR
      </motion.h2>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-8 flex items-center gap-2 rounded-full bg-orange-600/70 px-6 py-3 text-white backdrop-blur-lg shadow-lg"
      >
        <MapPin size={18} />
        Bara Gaon • Baghpat • Uttar Pradesh
      </motion.div>

      {/* Sanskrit Slok */}
      <DivineSlok />

      {/* Welcome */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mt-8 max-w-4xl text-lg leading-9 text-white md:text-2xl"
      >
        माँ मनसा देवी के दिव्य दरबार में आपका हार्दिक स्वागत है।
        <br />
        श्रद्धा, विश्वास एवं भक्ति के साथ माँ के दिव्य दर्शन का
        पावन अनुभव प्राप्त करें।
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="mt-14 flex flex-col gap-5 sm:flex-row"
      >
        <Link
          href="/contact"
          className="rounded-full bg-orange-600 px-10 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-orange-700"
        >
          🙏 Plan Your Visit
        </Link>

        <Link
          href="/donate"
          className="rounded-full border-2 border-yellow-300 bg-yellow-400/10 px-10 py-4 text-lg font-bold text-yellow-200 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:text-orange-700 hover:shadow-yellow-300/50"
        >
          ❤️ Donate
        </Link>
      </motion.div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-24"
      >
        <ArrowDown
          size={42}
          className="text-yellow-300 drop-shadow-[0_0_10px_rgba(255,220,100,0.8)]"
        />
      </motion.div>

    </div>
  );
}