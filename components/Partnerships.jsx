"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterHeading from "./TypewriterHeading";
import { useLanguage } from "@/context/LanguageContext";
import { Network, Users, Share2, Award, Globe } from "lucide-react";

export default function Partnerships() {
  const { t } = useLanguage();

  const itemIcons = [
    <Network key="0" className="w-5 h-5 text-[#5EC7E8]" />,
    <Users key="1" className="w-5 h-5 text-[#5EC7E8]" />,
    <Share2 key="2" className="w-5 h-5 text-[#5EC7E8]" />,
    <Award key="3" className="w-5 h-5 text-[#5EC7E8]" />,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="partnerships"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#061321] text-[#F7FAFC] overflow-hidden bg-financial-grid"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#4287C5]/10 rounded-full blur-[180px] pointer-events-none" />

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
            <Globe className="w-3.5 h-3.5 text-[#5EC7E8]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#A8E4F4] font-mono">
              {t.partnerships.sectionBadge}
            </span>
          </motion.div>

          <div className="min-h-[60px] sm:min-h-[75px] flex items-center mb-2">
            <TypewriterHeading
              text={t.partnerships.sectionHeading}
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
            {t.partnerships.subtitle}
          </motion.p>
        </div>

        {/* AI Generated Partnership Mesh Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-[#5EC7E8]/30 shadow-2xl mb-10 group bg-[#0A1B2D]"
        >
          <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[360px] overflow-hidden">
            <Image
              src="/images/partners-ecosystem.jpg"
              alt="Global Partnership Ecosystem Mesh"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B2D] via-transparent to-transparent opacity-70" />
          </div>
        </motion.div>

        {/* 4 Partnership Offerings Grid - Staggered Reveals & Fixed Icon Hover */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {t.partnerships.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group p-6 sm:p-8 rounded-3xl bg-[#0A1B2D]/85 border border-white/10 hover:border-[#5EC7E8]/50 hover:bg-[#10263D] transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-[#061321] border border-white/10 group-hover:border-[#5EC7E8]/40 group-hover:bg-[#142f4c] transition-all">
                    {itemIcons[idx]}
                  </div>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F7FAFC] mb-3 group-hover:text-[#5EC7E8] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#D3DCE5] text-sm sm:text-base font-medium leading-[1.8] font-body">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
