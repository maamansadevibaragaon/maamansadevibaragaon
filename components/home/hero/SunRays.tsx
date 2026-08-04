"use client";

import { motion } from "framer-motion";

export default function SunRays() {
  return (
    <motion.div
      animate={{
        opacity: [0.25, 0.45, 0.25],
        rotate: [0, 2, -2, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full"
        style={{
          background: `
          conic-gradient(
            from 180deg,
            transparent 0deg,
            rgba(255,220,120,0.12) 12deg,
            transparent 24deg,
            rgba(255,210,80,0.10) 36deg,
            transparent 48deg,
            rgba(255,230,150,0.10) 60deg,
            transparent 72deg,
            rgba(255,215,100,0.08) 84deg,
            transparent 96deg,
            rgba(255,220,120,0.10) 108deg,
            transparent 120deg,
            rgba(255,215,100,0.08) 132deg,
            transparent 144deg,
            rgba(255,220,120,0.10) 156deg,
            transparent 168deg,
            rgba(255,230,150,0.10) 180deg
          )
          `,
          filter: "blur(6px)",
        }}
      />
    </motion.div>
  );
}