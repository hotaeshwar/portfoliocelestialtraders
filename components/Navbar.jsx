"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t, isRTL } = useLanguage();

  const navLinks = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "advantages", label: t.nav.advantages },
    { id: "accounts", label: t.nav.accounts },
    { id: "partnerships", label: t.nav.partnerships },
    { id: "trust-contact", label: t.nav.trustContact },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sectionIds = ["home", "about", "advantages", "accounts", "partnerships", "trust-contact"];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 py-2.5 sm:py-4 pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 max-w-5xl w-full ${
            isScrolled ? "navbar-pill-scrolled" : "navbar-pill-initial"
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <div
            className="shrink-0 cursor-pointer"
            onClick={(e) => handleNavClick(e, "home")}
          >
            <Logo />
          </div>

          {/* Desktop Nav Links with Liquid Fluid Active Pill */}
          <div className="hidden lg:flex items-center gap-1 bg-[#061321]/60 p-1 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-3.5 py-1.5 text-xs xl:text-[13px] font-semibold font-body tracking-wide rounded-full transition-colors duration-200 select-none cursor-pointer ${
                    isActive ? "text-[#F7FAFC]" : "text-[#D3DCE5]/80 hover:text-[#5EC7E8]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="liquidNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-[#2F5F8D]/85 via-[#5EC7E8]/30 to-[#10263D]/95 border border-[#5EC7E8] shadow-[0_0_20px_rgba(94,199,232,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] rounded-full z-0 backdrop-blur-xl"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 28,
                        mass: 0.7,
                      }}
                    />
                  )}
                  <span className="relative z-10 drop-shadow-sm">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Actions: Language Switcher & Contact Button */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold font-body rounded-full border border-white/15 bg-[#10263D]/60 hover:border-[#5EC7E8] text-[#F7FAFC] transition-all shadow-sm"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#5EC7E8]" />
              <span>{t.nav.languageToggle}</span>
            </button>

            <button
              type="button"
              onClick={(e) => handleNavClick(e, "trust-contact")}
              className={`group flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold font-body rounded-full border transition-all cursor-pointer ${
                activeSection === "trust-contact"
                  ? "bg-[#5EC7E8]/25 border-[#5EC7E8] text-[#F7FAFC] shadow-[0_0_15px_rgba(94,199,232,0.4)]"
                  : "bg-[#10263D]/80 border-[#5EC7E8]/40 hover:border-[#5EC7E8] text-[#F7FAFC]"
              }`}
            >
              <span>{t.nav.trustContact}</span>
              <ArrowUpRight
                className={`w-3.5 h-3.5 text-[#5EC7E8] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  isRTL ? "rotate-[270deg] group-hover:-translate-x-0.5" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile & Tablet Toggle Controls */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold font-body rounded-full border border-white/15 bg-[#10263D]/70 text-[#5EC7E8]"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3" />
              <span>{language === "en" ? "العربية" : "EN"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full bg-[#10263D]/80 border border-white/15 text-[#F7FAFC] hover:border-[#5EC7E8] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-[#F7FAFC]" /> : <Menu className="w-4 h-4 text-[#F7FAFC]" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#061321]/80 backdrop-blur-xl lg:hidden flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: isRTL ? "-100%" : "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isRTL ? "-100%" : "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="w-full max-w-xs h-full bg-[#0A1B2D]/95 border-l border-r border-[#5EC7E8]/20 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div onClick={(e) => handleNavClick(e, "home")} className="cursor-pointer">
                    <Logo />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 text-[#F7FAFC]"
                    aria-label="Close Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-1.5 mt-6">
                  {navLinks.map((link, idx) => (
                    <motion.button
                      key={link.id}
                      type="button"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 + 0.05 }}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold font-body transition-all text-left rtl:text-right cursor-pointer ${
                        activeSection === link.id
                          ? "bg-[#10263D] text-[#5EC7E8] border border-[#5EC7E8]/40 shadow-[0_0_15px_rgba(94,199,232,0.2)]"
                          : "text-[#D3DCE5] hover:bg-white/5 hover:text-[#F7FAFC]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {activeSection === link.id && (
                        <span className="w-2 h-2 rounded-full bg-[#5EC7E8] shadow-[0_0_8px_#5EC7E8]" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl border border-white/10 bg-[#10263D] text-sm font-semibold text-[#F7FAFC] hover:border-[#5EC7E8]"
                >
                  <Globe className="w-4 h-4 text-[#5EC7E8]" />
                  <span>{t.nav.languageToggle}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
