"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterHeading from "./TypewriterHeading";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Phone, Globe, Mail, MapPin, ArrowUpRight, Building2 } from "lucide-react";

export default function TrustContact() {
  const { t } = useLanguage();
  const data = t.trustContact;

  const renderIcon = (label) => {
    switch (label) {
      case "PHONE":
      case "الهاتف":
        return <Phone className="w-5 h-5 text-[#5EC7E8]" />;
      case "WEBSITE":
      case "الموقع الإلكتروني":
        return <Globe className="w-5 h-5 text-[#5EC7E8]" />;
      case "EMAIL":
      case "البريد الإلكتروني":
        return <Mail className="w-5 h-5 text-[#5EC7E8]" />;
      case "REGISTERED ADDRESS":
      case "العنوان المسجل":
        return <Building2 className="w-5 h-5 text-[#5EC7E8]" />;
      case "OPERATIONAL ADDRESS":
      case "العنوان التشغيلي":
        return <MapPin className="w-5 h-5 text-[#4287C5]" />;
      default:
        return <Phone className="w-5 h-5 text-[#5EC7E8]" />;
    }
  };

  const contactLinks = data.details.filter((d) => d.isLink);
  const addresses = data.details.filter((d) => !d.isLink);

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
      id="trust-contact"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#061321] text-[#F7FAFC] overflow-hidden bg-financial-grid"
    >
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#5EC7E8]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#2F5F8D]/15 rounded-full blur-[180px] pointer-events-none" />

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
            <ShieldCheck className="w-3.5 h-3.5 text-[#5EC7E8]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#A8E4F4] font-mono">
              {data.sectionBadge}
            </span>
          </motion.div>

          <div className="min-h-[60px] sm:min-h-[75px] flex items-center mb-2">
            <TypewriterHeading
              text={data.sectionHeading}
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
            {data.overview}
          </motion.p>
        </div>

        {/* AI Generated Global Presence Skyline Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-[#5EC7E8]/30 shadow-2xl mb-10 group bg-[#0A1B2D]"
        >
          <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[360px] overflow-hidden">
            <Image
              src="/images/global-presence-bridge.jpg"
              alt="Celestial Trading Alliance Global Operational Skyline"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B2D] via-transparent to-transparent opacity-70" />
          </div>
        </motion.div>

        {/* Contact Channels: Phone, Website, Email */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8"
        >
          {contactLinks.map((item, idx) => (
            <motion.a
              key={idx}
              variants={itemVariants}
              href={item.href}
              target={item.label === "WEBSITE" || item.label === "الموقع الإلكتروني" ? "_blank" : undefined}
              rel={item.label === "WEBSITE" || item.label === "الموقع الإلكتروني" ? "noopener noreferrer" : undefined}
              className="group p-6 sm:p-8 rounded-3xl bg-[#0A1B2D]/85 border border-white/10 hover:border-[#5EC7E8]/60 hover:bg-[#10263D] transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_15px_35px_rgba(94,199,232,0.15)]"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-2xl bg-[#10263D] border border-white/10 group-hover:border-[#5EC7E8]/60 group-hover:bg-[#142f4c] group-hover:shadow-[0_0_15px_rgba(94,199,232,0.3)] transition-all">
                  {renderIcon(item.label)}
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#91A3B5] group-hover:text-[#5EC7E8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#91A3B5] mb-2 font-body group-hover:text-[#A8E4F4] transition-colors">
                  {item.label}
                </div>
                <div className="text-base sm:text-lg font-mono font-bold text-[#F7FAFC] break-all group-hover:text-[#5EC7E8] transition-colors">
                  {item.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Physical Address Cards (from Left) & Company Certificate (from Right) Meeting in the Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 overflow-hidden">
          
          {/* Registered & Operational Addresses sliding from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {addresses.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-8 rounded-3xl bg-[#0A1B2D]/85 border border-white/10 hover:border-[#5EC7E8]/40 transition-all shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#10263D] border border-white/10 group-hover:border-[#5EC7E8]/40 group-hover:bg-[#142f4c] transition-all">
                    {renderIcon(item.label)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5EC7E8] font-body">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#D3DCE5] font-medium leading-[1.8] font-body">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Official Registration Certificate sliding from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-center"
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_50px_rgba(94,199,232,0.18)] bg-white">
              <Image
                src="/celestial-company-certificate.png"
                alt="Celestial Trading Alliance Certificate"
                width={1920}
                height={1080}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
                className="w-full h-auto object-contain block rounded-2xl"
                priority
              />
            </div>
            <div className="w-full mt-3 px-2 flex items-center justify-between text-xs font-mono text-[#91A3B5]">
              <span>Company No. 2023-00433</span>
              <span className="text-[#5EC7E8]">Registered: 5 September 2023</span>
            </div>
          </motion.div>

        </div>

        {/* Closing Branding Sign-Off from PDF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#10263D]/90 via-[#0A1B2D]/95 to-[#10263D]/90 border border-[#5EC7E8]/40 shadow-2xl text-center flex flex-col items-center justify-center"
        >
          <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F7FAFC] tracking-wider mb-2">
            {data.closingBrand}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-[#5EC7E8] font-body font-medium">
            {data.closingTagline}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
