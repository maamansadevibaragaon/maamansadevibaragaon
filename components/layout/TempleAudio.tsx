"use client";

import { useEffect } from "react";

export default function TempleAudio() {
  useEffect(() => {
    const bell = new Audio("/audio/bell.mp3");
    const shlok = new Audio("/audio/shlok.mp3");

    bell.preload = "auto";
    shlok.preload = "auto";

    bell.volume = 1;
    shlok.volume = 1;

    const playTempleAudio = async () => {
      try {
        // Play Bell
        await bell.play();

        // When Bell Ends → Play Shlok
        bell.onended = async () => {
          try {
            await shlok.play();
          } catch (error) {
            console.log("Shlok autoplay blocked:", error);
          }
        };
      } catch (error) {
        console.log("Autoplay blocked:", error);
      }
    };

    playTempleAudio();

    return () => {
      bell.pause();
      shlok.pause();

      bell.currentTime = 0;
      shlok.currentTime = 0;
    };
  }, []);

  return null;
}