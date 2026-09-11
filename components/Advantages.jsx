"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterHeading from "./TypewriterHeading";
import { useLanguage } from "@/context/LanguageContext";
import { Zap, Layers, TrendingUp, Gauge, Headphones, Terminal, Activity } from "lucide-react";

export default function Advantages() {
  const { t } = useLanguage();

  const statIcons = [
    <Zap key="1" className="w-5 h-5 text-[#5EC7E8]" />,
    <Layers key="2" className="w-5 h-5 text-[#4287C5]" />,
    <TrendingUp key="3" className="w-5 h-5 text-[#5EC7E8]" />,
    <Gauge key="4" className="w-5 h-5 text-[#A8E4F4]" />,
    <Headphones key="5" className="w-5 h-5 text-[#4287C5]" />,
    <Terminal key="6" className="w-5 h-5 text-[#5EC7E8]" />,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="advantages"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#061321] text-[#F7FAFC] overflow-hidden bg-dot-matrix"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#4287C5]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Typewriter Heading */}
        <div className="flex flex-col items-start text-left rtl:text-right mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10263D]/80 border border-[#5EC7E8]/30 mb-4 shadow-sm backdrop-blur-md"
          >
            <Activity className="w-3.5 h-3.5 text-[#5EC7E8]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#A8E4F4] font-mono">
              {t.advantages.sectionBadge}
            </span>
          </motion.div>

          <div className="min-h-[60px] sm:min-h-[75px] flex items-center mb-2">
            <TypewriterHeading
              text={t.advantages.sectionHeading}
              className="font-heading font-semibold text-[#F7FAFC] leading-[1.05]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#D3DCE5] font-medium max-w-3xl"
          >
            {t.advantages.subtitle}
          </motion.p>
        </div>

        {/* Meeting from Left & Right: AI Datacenter Visual (from Left) + Stats Grid (from Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12 sm:mb-16 overflow-hidden">
          
          {/* AI Generated High-Speed Datacenter Visual sliding from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group rounded-3xl overflow-hidden border border-[#5EC7E8]/30 shadow-2xl min-h-[280px] lg:min-h-[auto]"
          >
            <Image
              src="/images/tech-latency-speed.jpg"
              alt="High-speed execution infrastructure"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061321] via-[#061321]/30 to-transparent" />
          </motion.div>

          {/* 6 Key Stat Cards (7 cols) sliding from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {t.advantages.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative p-6 sm:p-7 rounded-3xl bg-[#0A1B2D]/85 border border-white/10 hover:border-[#5EC7E8]/50 hover:bg-[#10263D] transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-2xl bg-[#061321] border border-white/10 group-hover:border-[#5EC7E8]/40 group-hover:bg-[#142f4c] transition-all">
                    {statIcons[idx]}
                  </div>
                </div>

                <div>
                  <div className="font-heading text-3xl sm:text-4xl font-semibold text-[#F7FAFC] group-hover:text-[#5EC7E8] transition-colors mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-[#D3DCE5] font-body">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Bottom Approved Callout Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#10263D]/90 via-[#0A1B2D]/90 to-[#10263D]/90 border border-[#5EC7E8]/30 backdrop-blur-md shadow-xl"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-11 h-11 rounded-2xl bg-[#061321] border border-[#5EC7E8]/30 flex items-center justify-center text-[#5EC7E8] shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-[#D3DCE5] font-medium leading-[1.8] font-body">
              {t.advantages.description}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
