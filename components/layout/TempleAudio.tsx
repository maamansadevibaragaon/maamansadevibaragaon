"use client";

import { useEffect, useRef } from "react";

export default function TempleAudio() {
  const started = useRef(false);

  useEffect(() => {
    const bell = new Audio("/audio/bell.mp3");
    const shlok = new Audio("/audio/shlok.mp3");

    bell.preload = "auto";
    shlok.preload = "auto";

    bell.volume = 1;
    shlok.volume = 1;

    // IMPORTANT
    shlok.loop = false;

    const startTemple = async () => {
      // Prevent playing more than once
      if (started.current) return;

      started.current = true;

      try {
        bell.currentTime = 0;
        await bell.play();

        bell.onended = async () => {
          try {
            shlok.currentTime = 0;
            await shlok.play();
          } catch (err) {
            console.log(err);
          }
        };
      } catch (err) {
        console.log(err);
      }
    };

    window.addEventListener("temple-start", startTemple);

    return () => {
      window.removeEventListener("temple-start", startTemple);

      bell.pause();
      shlok.pause();

      bell.currentTime = 0;
      shlok.currentTime = 0;
    };
  }, []);

  return null;
}