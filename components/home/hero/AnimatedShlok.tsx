"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SHLOK = "॥ ॐ ह्रीं श्रीं मंसादेव्यै नमः ॥";

export default function AnimatedShlok() {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(SHLOK.slice(0, index + 1));

      index++;

      if (index >= SHLOK.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="mt-12"
    >
      <h3
        className="
          text-2xl
          md:text-4xl
          text-yellow-200
          font-semibold
          tracking-wide
          leading-relaxed
          drop-shadow-[0_0_18px_rgba(255,220,120,0.9)]
        "
      >
        {text}

        {text.length !== SHLOK.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
            className="ml-1"
          >
            |
          </motion.span>
        )}
      </h3>
    </motion.div>
  );
}