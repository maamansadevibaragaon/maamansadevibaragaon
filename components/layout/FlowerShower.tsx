"use client";

import { motion } from "framer-motion";

const flowers = [
  { left: 5, duration: 12, delay: 0, size: 24 },
  { left: 15, duration: 15, delay: 2, size: 22 },
  { left: 25, duration: 11, delay: 4, size: 26 },
  { left: 35, duration: 14, delay: 1, size: 20 },
  { left: 45, duration: 13, delay: 5, size: 28 },
  { left: 55, duration: 16, delay: 3, size: 22 },
  { left: 65, duration: 12, delay: 6, size: 25 },
  { left: 75, duration: 15, delay: 2, size: 21 },
  { left: 85, duration: 13, delay: 4, size: 27 },
  { left: 95, duration: 14, delay: 1, size: 23 },
];

export default function FlowerShower() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {flowers.map((flower, index) => (
        <motion.div
          key={index}
          initial={{
            y: -80,
            x: `${flower.left}vw`,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "110vh",
            x: [
              `${flower.left}vw`,
              `${flower.left - 2}vw`,
              `${flower.left + 2}vw`,
            ],
            rotate: 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute select-none"
          style={{
            fontSize: `${flower.size}px`,
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}