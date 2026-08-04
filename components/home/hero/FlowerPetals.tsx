"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${(index * 8) % 100}%`,
  duration: 10 + (index % 5) * 2,
  delay: index * 0.8,
  rotate: index % 2 === 0 ? 180 : -180,
}));

export default function FlowerPetals() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            y: -120,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "110vh",
            x: [0, 25, -25, 15, 0],
            rotate: petal.rotate,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 text-2xl md:text-3xl drop-shadow-[0_0_10px_rgba(255,200,120,0.7)]"
          style={{ left: petal.left }}
        >
          {petal.id % 2 === 0 ? "🌸" : "🟠"}
        </motion.div>
      ))}
    </div>
  );
}