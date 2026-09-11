"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#061321] text-[#F7FAFC] select-none pointer-events-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-[#4287C5]/15 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Celestial Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative w-48 h-14 sm:w-60 sm:h-16 mb-4"
            >
              <Image
                src="/images/logo-light.png"
                alt="Celestial Trading Alliance"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Thin Cyan Line Expansion */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-32 sm:w-48 h-[2px] bg-gradient-to-r from-transparent via-[#5EC7E8] to-transparent mb-3"
            />

            {/* Brand Title Sub-label */}
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.45 }}
              className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#A8E4F4]/80 uppercase font-sans"
            >
              Institutional Trading
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
