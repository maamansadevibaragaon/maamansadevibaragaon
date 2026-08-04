"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import TempleBells from "./TempleBells";
import FlowerPetals from "./FlowerPetals";
import SunRays from "./SunRays";
import DivineMist from "./DivineMist";

const FloatingParticles = dynamic(
  () => import("./FloatingParticles"),
  {
    ssr: false,
  }
);

export default function HeroBackground() {
  return (
    <>
      {/* Temple Background Image */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 20,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/temple-front.webp"
          alt="Maa Mansa Devi Mandir"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-orange-950/90" />

      {/* Sunrise Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.25],
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-400 blur-[180px]"
      />

      {/* Divine Sun Rays */}
      <SunRays />

      {/* Divine Mist */}
      <DivineMist />

      {/* Floating Divine Particles */}
      <FloatingParticles />

      {/* Falling Flower Petals */}
      <FlowerPetals />

      {/* Temple Bells */}
      <TempleBells />
    </>
  );
}