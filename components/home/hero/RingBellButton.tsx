"use client";

import { useRef } from "react";
import Image from "next/image";

export default function RingBellButton() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playBell = () => {
    // Bell sound
    const bell = new Audio("/audio/temple-bell.mp3");
    bell.play();

    // Start background mantra after bell
    setTimeout(() => {
      audioRef.current?.play().catch(() => {});
    }, 1800);
  };

  return (
    <>
      <button
        onClick={playBell}
        className="group flex items-center gap-4 rounded-full
        bg-gradient-to-r from-yellow-400 to-orange-500
        px-8 py-4
        text-xl font-bold text-white
        shadow-2xl transition-all
        hover:scale-105"
      >
        <Image
          src="/images/bell.png"
          alt="Temple Bell"
          width={42}
          height={42}
          className="group-hover:animate-bounce"
        />

        🔔 Ring The Bell
      </button>

      <audio
        ref={audioRef}
        src="/audio/mantra.mp3"
        loop
      />
    </>
  );
}