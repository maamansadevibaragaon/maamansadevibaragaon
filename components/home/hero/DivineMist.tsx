"use client";

import { motion } from "framer-motion";

export default function DivineMist() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <motion.div
        animate={{
          x: [-120, 120, -120],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 h-[350px] w-[170%]
        bg-white/10 blur-[90px]"
      />

      <motion.div
        animate={{
          x: [120, -120, 120],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-16 right-0 h-[250px] w-[170%]
        bg-white/10 blur-[100px]"
      />

      <motion.div
        animate={{
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute inset-x-0 bottom-0 h-[300px]
        bg-gradient-to-t
        from-white/20
        via-white/8
        to-transparent"
      />
    </div>
  );
}