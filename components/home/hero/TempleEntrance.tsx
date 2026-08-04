"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Props {
  onEnter: () => void;
}

export default function TempleEntrance({ onEnter }: Props) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (clicked) return;

    setClicked(true);

    setTimeout(() => {
      onEnter();
    }, 1700);
  }

  return (
    <AnimatePresence>
      {!clicked ? (
        <motion.div
          className="absolute inset-0 z-[80] flex items-center justify-center bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-center">

            <motion.div
              animate={{
                rotate: [-10, 10, -10],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              <button onClick={handleClick}>
                <Image
                  src="/images/bell.png"
                  alt="Temple Bell"
                  width={180}
                  height={360}
                  priority
                  className="drop-shadow-[0_0_40px_gold]"
                />
              </button>
            </motion.div>

            <h2 className="mt-8 text-4xl font-bold text-yellow-300">
              Ring Temple Bell
            </h2>

            <p className="mt-3 text-lg text-white">
              Begin Your Divine Darshan
            </p>

          </div>
        </motion.div>
      ) : (
        <motion.div
          className="absolute inset-0 z-[80] bg-yellow-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 1.4 }}
        />
      )}
    </AnimatePresence>
  );
}