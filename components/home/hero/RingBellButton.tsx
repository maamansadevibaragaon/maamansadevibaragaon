"use client";

import { BellRing } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function RingBellButton() {
  const bellAudio = useRef<HTMLAudioElement>(null);
  const mantraAudio = useRef<HTMLAudioElement>(null);

  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTemple = async () => {
      if (started) return;

      setStarted(true);

      try {
        // Ring bell
        bellAudio.current!.currentTime = 0;
        await bellAudio.current?.play();

        // Wait for bell to finish
        setTimeout(async () => {
          mantraAudio.current!.loop = true;
          await mantraAudio.current?.play();
        }, 1800);
      } catch (err) {
        console.log(err);
      }
    };

    window.addEventListener("temple-start", startTemple);

    return () => {
      window.removeEventListener("temple-start", startTemple);
    };
  }, [started]);

  return (
    <>
      <audio
        ref={bellAudio}
        preload="auto"
        src="/audio/bell.mp3"
      />

      <audio
        ref={mantraAudio}
        preload="auto"
        src="/audio/shlok.mp3"
      />

      {!started && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/20 backdrop-blur-[2px] pointer-events-none"
        >
        </motion.div>
      )}
    </>
  );
}