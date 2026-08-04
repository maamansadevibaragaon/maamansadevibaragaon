"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sloks = [
  {
    title: "॥ ॐ ह्रीं श्रीं मंसादेव्यै नमः ॥",
    text: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरी नारायणि नमोऽस्तुते॥",
  },
  {
    title: "॥ जय माँ मनसा देवी ॥",
    text: "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
  },
  {
    title: "॥ श्री माते नमः ॥",
    text: "त्वमेव माता च पिता त्वमेव। त्वमेव बन्धुश्च सखा त्वमेव॥",
  },
];

export default function DivineSlok() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sloks.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mt-14 flex min-h-[180px] items-center justify-center overflow-hidden px-4">

      {/* Glow */}
      <div className="absolute h-56 w-56 rounded-full bg-yellow-400/10 blur-3xl" />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 1.04,
            y: -25,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative max-w-5xl text-center"
        >
          <h3 className="text-2xl font-bold text-yellow-300 drop-shadow-[0_0_18px_rgba(255,220,100,0.8)] md:text-4xl">
            {sloks[index].title}
          </h3>

          <div className="mx-auto my-5 h-[2px] w-32 rounded-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />

          <p className="text-lg leading-10 text-yellow-100 italic md:text-2xl">
            {sloks[index].text}
          </p>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}