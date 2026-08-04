"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 45 }, (_, index) => ({
  id: index,
  size: Math.random() * 5 + 2,
  left: Math.random() * 100,
  duration: Math.random() * 12 + 10,
  delay: Math.random() * 6,
}));

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0,
            y: 120,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: -900,
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
            ease: "linear",
          }}
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
          }}
          className="absolute bottom-0 rounded-full bg-yellow-300 shadow-[0_0_20px_rgba(255,220,100,0.8)]"
        />
      ))}
    </div>
  );
}