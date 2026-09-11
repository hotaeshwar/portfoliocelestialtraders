"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterHeading from "./TypewriterHeading";
import { useLanguage } from "@/context/LanguageContext";
import { Layers, Globe, Sparkles } from "lucide-react";

export default function Accounts() {
  const { t } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const tiers = t.accounts.tiers;
  const labels = t.accounts.labels;

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
      id="accounts"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#061321] text-[#F7FAFC] overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#2F5F8D]/10 rounded-full blur-[160px] pointer-events-none" />

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
            <Layers className="w-3.5 h-3.5 text-[#5EC7E8]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#A8E4F4] font-mono">
              {t.accounts.sectionBadge}
            </span>
          </motion.div>

          <div className="min-h-[60px] sm:min-h-[75px] flex items-center mb-2">
            <TypewriterHeading
              text={t.accounts.sectionHeading}
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
            {t.accounts.subtitle}
          </motion.p>
        </div>

        {/* 3 Account Cards - Staggered Reveals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12 sm:mb-16"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {tiers.map((tier, idx) => {
            const isSpecial = idx === 1;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div key={idx} variants={itemVariants} className="relative">
                <div
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 h-full ${
                    isHovered
                      ? "bg-gradient-to-b from-[#142f4c] via-[#0A1B2D] to-[#0A1B2D] border-2 border-[#5EC7E8] shadow-[0_25px_60px_rgba(94,199,232,0.3)] -translate-y-2"
                      : isSpecial
                      ? "bg-gradient-to-b from-[#10263D] via-[#0A1B2D] to-[#0A1B2D] border border-[#5EC7E8]/50 shadow-xl"
                      : "bg-[#0A1B2D]/90 border border-white/10 shadow-lg"
                  }`}
                >
                  {/* Glowing Top Bar */}
                  {(isSpecial || isHovered) && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4287C5] via-[#5EC7E8] to-[#A8E4F4]" />
                  )}

                  <div>
                    {/* Profile Target */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full ${
                          isHovered || isSpecial
                            ? "bg-[#5EC7E8]/20 text-[#5EC7E8] border border-[#5EC7E8]/40"
                            : "bg-white/5 text-[#91A3B5] border border-white/10"
                        }`}
                      >
                        {tier.profile}
                      </span>
                      {isSpecial && <Sparkles className="w-4 h-4 text-[#5EC7E8]" />}
                    </div>

                    {/* Account Name */}
                    <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[#F7FAFC] mb-5">
                      {tier.name}
                    </h3>

                    {/* Min Deposit */}
                    <div className="mb-5 pb-5 border-b border-white/10">
                      <div className="text-xs font-semibold text-[#91A3B5] uppercase tracking-wider mb-1 font-body">
                        {labels.minDeposit}
                      </div>
                      <div className="text-3xl sm:text-4xl font-mono font-bold text-[#F7FAFC]">
                        {tier.minDeposit}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="space-y-3.5 mb-4 font-body text-sm">
                      <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                        <span className="text-[#91A3B5] font-medium">{labels.leverage}</span>
                        <span className="font-bold text-[#F7FAFC]">{tier.leverage}</span>
                      </div>

                      <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                        <span className="text-[#91A3B5] font-medium">{labels.spreads}</span>
                        <span className="font-bold text-[#5EC7E8]">{tier.spreads}</span>
                      </div>

                      <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                        <span className="text-[#91A3B5] font-medium">{labels.commission}</span>
                        <span className="font-bold text-[#F7FAFC]">{tier.commission}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* AI Multi-Screen Terminal Visual (from Left) + MARKET ACCESS Copy (from Right) Meeting in the Center */}
        <div className="rounded-3xl bg-[#0A1B2D]/90 border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center overflow-hidden">
            
            {/* AI Generated Terminal Visual sliding from LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[240px] overflow-hidden"
            >
              <Image
                src="/images/accounts-terminal.jpg"
                alt="Institutional Multi-Asset Trading Terminal"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A1B2D]/40 to-[#0A1B2D]" />
            </motion.div>

            {/* Approved Market Access Copy sliding from RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#10263D] border border-white/10 text-[#5EC7E8]">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] font-body text-[#5EC7E8]">
                  {t.accounts.marketAccess.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-[#D3DCE5] font-medium leading-[1.8] font-body">
                {t.accounts.marketAccess.text}
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
