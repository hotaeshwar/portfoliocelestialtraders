"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import TypewriterHeading from "./TypewriterHeading";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ArrowDown } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (typeof window !== "undefined" && window.history.pushState) {
      window.history.pushState(null, "", "/" + id);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#061321] bg-financial-grid pt-28 sm:pt-36 lg:pt-32 pb-16 sm:pb-20"
    >
      {/* Atmosphere Gradients */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2F5F8D]/15 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[450px] h-[400px] bg-[#5EC7E8]/10 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center overflow-hidden">
          
          {/* LEFT: Text & Headings sliding in smoothly from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left rtl:text-right"
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10263D]/90 border border-[#5EC7E8]/40 mb-6 shadow-md backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#5EC7E8]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#A8E4F4] uppercase font-mono">
                {t.hero.subtitle} • {t.hero.year}
              </span>
            </div>

            {/* Stable, Majestic Title */}
            <h1
              className="font-heading font-semibold text-[#F7FAFC] leading-[1.05] tracking-tight mb-4"
              style={{
                fontSize: "clamp(2.4rem, 5.2vw, 4.8rem)",
              }}
            >
              {t.hero.title}
            </h1>

            {/* Tagline with Controlled Typewriter Effect */}
            <div className="min-h-[56px] sm:min-h-[64px] flex items-center mb-8">
              <TypewriterHeading
                text={t.hero.tagline}
                tag="p"
                className="text-lg sm:text-xl lg:text-2xl font-body font-medium text-[#5EC7E8] max-w-xl leading-snug"
                typingSpeed={60}
                deletingSpeed={30}
                pauseTime={3000}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <MagneticButton
                onClick={() => scrollToSection("about")}
                variant="primary"
                size="lg"
              >
                {t.hero.btnExplore}
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection("trust-contact")}
                variant="secondary"
                size="lg"
                showArrow={false}
              >
                {t.hero.btnContact}
              </MagneticButton>
            </div>
          </motion.div>

          {/* RIGHT: 3D Holographic Globe sliding in smoothly from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] flex items-center justify-center select-none">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#5EC7E8]/25 via-[#4287C5]/15 to-transparent blur-3xl animate-pulse-subtle" />

              {/* 3D Sphere Visual */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-[#5EC7E8]/50 shadow-[0_0_60px_rgba(94,199,232,0.35)]">
                <Image
                  src="/images/hero-market-visual.jpg"
                  alt="Celestial Trading Alliance Market Visual"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#5EC7E8]/40 pointer-events-none" />
              </div>

              {/* Orbiting Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="absolute top-4 left-6 px-3.5 py-1.5 rounded-full bg-[#0A1B2D]/95 border border-[#5EC7E8]/50 text-xs font-mono font-bold text-[#A8E4F4] shadow-[0_0_20px_rgba(94,199,232,0.35)] backdrop-blur-md"
              >
                FOREX
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="absolute top-1/3 -right-2 sm:-right-4 px-3.5 py-1.5 rounded-full bg-[#0A1B2D]/95 border border-[#4287C5]/70 text-xs font-mono font-bold text-[#F7FAFC] shadow-lg backdrop-blur-md"
              >
                CFD
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="absolute top-1/2 -left-3 sm:-left-5 px-3.5 py-1.5 rounded-full bg-[#0A1B2D]/95 border border-[#4287C5]/70 text-xs font-mono font-bold text-[#A8E4F4] shadow-lg backdrop-blur-md"
              >
                MT5
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="absolute bottom-4 left-10 px-3.5 py-1.5 rounded-full bg-[#0A1B2D]/95 border border-[#5EC7E8]/50 text-xs font-mono font-bold text-[#A8E4F4] shadow-[0_0_20px_rgba(94,199,232,0.35)] backdrop-blur-md"
              >
                EQUITIES
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-[#91A3B5] hover:text-[#5EC7E8] transition-colors cursor-pointer"
          >
            <span>ABOUT</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#5EC7E8]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
