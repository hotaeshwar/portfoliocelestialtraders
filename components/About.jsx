"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterHeading from "./TypewriterHeading";
import { useLanguage } from "@/context/LanguageContext";
import { Compass, Target, Shield, Sparkles } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const pillarIcons = [
    <Compass key="vision" className="w-5 h-5 text-[#5EC7E8]" />,
    <Target key="mission" className="w-5 h-5 text-[#5EC7E8]" />,
    <Shield key="positioning" className="w-5 h-5 text-[#5EC7E8]" />,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#061321] text-[#F7FAFC] overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#2F5F8D]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#5EC7E8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Badge & Typewriter Heading */}
        <div className="flex flex-col items-start text-left rtl:text-right mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10263D]/80 border border-[#5EC7E8]/30 mb-4 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#5EC7E8]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#A8E4F4] font-mono">
              {t.about.sectionBadge}
            </span>
          </motion.div>

          <div className="min-h-[60px] sm:min-h-[75px] flex items-center">
            <TypewriterHeading
              text={t.about.sectionHeading}
              className="font-heading font-semibold text-[#F7FAFC] leading-[1.05]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
            />
          </div>
        </div>

        {/* AI Generated Institutional Visual + Main Copy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 sm:mb-16">
          
          {/* AI Generated Institutional Showcase Image (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative group rounded-3xl overflow-hidden border border-[#5EC7E8]/30 shadow-2xl min-h-[280px] sm:min-h-[340px]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/about-institutional.jpg"
                alt="Celestial Trading Alliance Institutional Hub"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061321] via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>

          {/* Main Approved Body Text Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-[#10263D]/90 to-[#0A1B2D]/90 border border-white/10 shadow-xl backdrop-blur-md"
          >
            <p className="text-base sm:text-lg lg:text-xl text-[#F7FAFC] font-medium leading-[1.8]">
              {t.about.mainCopy}
            </p>
          </motion.div>
        </div>

        {/* 3 Columns: VISION, MISSION, POSITIONING with Staggered Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.about.pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative group p-6 sm:p-8 rounded-3xl bg-[#0A1B2D]/85 border border-white/10 hover:border-[#5EC7E8]/50 hover:bg-[#10263D]/90 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#061321] border border-white/10 group-hover:border-[#5EC7E8]/40 group-hover:bg-[#142f4c] flex items-center justify-center mb-5 transition-all">
                  {pillarIcons[idx]}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] font-body text-[#5EC7E8] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#D3DCE5] text-sm sm:text-base font-medium leading-[1.75] font-body">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
