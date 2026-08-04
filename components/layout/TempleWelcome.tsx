"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TempleWelcome() {
  const [show, setShow] = useState(true);

  const bellRef = useRef<HTMLAudioElement>(null);
  const shlokRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let mounted = true;

    const startExperience = async () => {
      try {
        if (bellRef.current) {
          bellRef.current.volume = 1;
          bellRef.current.currentTime = 0;

          await bellRef.current.play();

          bellRef.current.onended = async () => {
            try {
              if (shlokRef.current) {
                shlokRef.current.volume = 1;
                shlokRef.current.currentTime = 0;
                await shlokRef.current.play();

                shlokRef.current.onended = () => {
                  if (mounted) setShow(false);
                };
              } else {
                setShow(false);
              }
            } catch {
              setShow(false);
            }
          };
        } else {
          setShow(false);
        }
      } catch {
        // Browser blocked autoplay
        setShow(false);
      }
    };

    startExperience();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-orange-950 via-orange-900 to-black"
        >
          <div className="text-center px-8">

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="text-7xl"
            >
              🕉
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-8 text-4xl font-bold text-yellow-300 md:text-6xl"
            >
              श्री माँ मनसा देवी मंदिर
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-xl text-orange-200"
            >
              रावण उर्फ़ बड़ा गाँव
            </motion.p>

            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mt-10 text-yellow-400"
            >
              ✨ Divine Blessings Await ✨
            </motion.div>

          </div>

          <audio ref={bellRef} preload="auto">
            <source src="/audio/bell.mp3" type="audio/mpeg" />
          </audio>

          <audio ref={shlokRef} preload="auto">
            <source src="/audio/shlok.mp3" type="audio/mpeg" />
          </audio>
        </motion.div>
      )}
    </AnimatePresence>
  );
}