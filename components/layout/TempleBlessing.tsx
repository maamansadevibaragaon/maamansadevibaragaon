"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "🙏 माँ मनसा देवी मंदिर में आपका हार्दिक स्वागत है",
  "🌸 अपने मन को शांत करें...",
  "🪔 माँ के दिव्य दर्शन के लिए तैयार हो जाइए...",
  "✨ माँ मनसा देवी आपके जीवन में सुख, शांति एवं समृद्धि प्रदान करें",
  "🙏 जय माँ मनसा देवी 🙏",
];

export default function TempleBlessing() {
  const [visible, setVisible] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const seen = localStorage.getItem("mmd-blessing");

    if (seen === "true") {
      setVisible(false);
      return;
    }

    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev === messages.length - 1) {
          clearInterval(interval);

          setTimeout(() => {
            localStorage.setItem("mmd-blessing", "true");
            setVisible(false);
          }, 3500);

          return prev;
        }

        return prev + 1;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      >
        <div className="text-center px-8">

          <motion.h1
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mb-10 text-7xl text-yellow-400"
          >
            🕉
          </motion.h1>

          <AnimatePresence mode="wait">

            <motion.h2
              key={messageIndex}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              transition={{
                duration: 0.7,
              }}
              className="max-w-4xl text-3xl font-bold leading-relaxed text-white md:text-5xl"
            >
              {messages[messageIndex]}
            </motion.h2>

          </AnimatePresence>

          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mt-16 text-yellow-300 text-xl"
          >
            🔔
          </motion.div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}