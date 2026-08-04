"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TempleBells() {
  return (
    <>
      {/* Left Bell */}
      <motion.div
        className="absolute top-20 left-6 md:left-20 z-40 origin-top"
        animate={{
          rotate: [-10, 10, -8, 8, -6, 6, 0],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <Image
          src="/images/bell.png"
          alt="Temple Bell"
          width={90}
          height={180}
          priority
          className="drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]"
        />
      </motion.div>

      {/* Right Bell */}
      <motion.div
        className="absolute top-20 right-6 md:right-20 z-40 origin-top"
        animate={{
          rotate: [10, -10, 8, -8, 6, -6, 0],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <Image
          src="/images/bell.png"
          alt="Temple Bell"
          width={90}
          height={180}
          priority
          className="drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]"
        />
      </motion.div>
    </>
  );
}