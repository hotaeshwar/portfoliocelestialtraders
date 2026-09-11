"use client";

import React from "react";
import Logo from "./Logo";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  const { t, language, toggleLanguage } = useLanguage();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    if (typeof window !== "undefined" && window.history.replaceState) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (typeof window !== "undefined" && window.history.replaceState) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <footer className="relative bg-[#040C15] text-[#F7FAFC] pt-14 pb-10 overflow-hidden border-t border-white/5">
      {/* Huge Watermark Outline Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none w-full text-center z-0 overflow-hidden">
        <span className="font-heading font-extrabold text-[15vw] tracking-wider watermark-outline opacity-25">
          {t.footer.watermark}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10 items-start">
          
          {/* Logo & Tagline (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left rtl:text-right">
            <div onClick={scrollToTop} className="cursor-pointer mb-4">
              <Logo size="lg" />
            </div>
            <p className="text-lg sm:text-xl font-heading font-medium text-[#5EC7E8] max-w-md leading-snug">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5EC7E8] mb-3 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2">
              {t.footer.links.map((link, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs sm:text-sm font-medium text-[#D3DCE5] hover:text-[#5EC7E8] transition-colors cursor-pointer text-left rtl:text-right"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5EC7E8] mb-3 font-sans">
              Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#D3DCE5]">
              <a
                href="mailto:info@celestialtrader.com"
                className="flex items-center gap-2 hover:text-[#5EC7E8] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#5EC7E8]" />
                <span>info@celestialtrader.com</span>
              </a>
              <a
                href="tel:+97145580646"
                className="flex items-center gap-2 hover:text-[#5EC7E8] transition-colors font-mono"
              >
                <Phone className="w-4 h-4 text-[#5EC7E8]" />
                <span>+971 4 558 0646</span>
              </a>
            </div>

            {/* Language Switcher */}
            <div className="pt-2">
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#10263D]/60 hover:border-[#5EC7E8] text-xs font-semibold text-[#F7FAFC] transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#5EC7E8]" />
                <span>{language === "en" ? "العربية" : "English"}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#91A3B5]">
          <p>{t.footer.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-semibold text-[#D3DCE5] hover:text-[#5EC7E8] transition-colors cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <div className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-[#5EC7E8] group-hover:bg-[#5EC7E8]/10 transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-[#5EC7E8]" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
