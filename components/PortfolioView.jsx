"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Accounts from "@/components/Accounts";
import Partnerships from "@/components/Partnerships";
import TrustContact from "@/components/TrustContact";
import Footer from "@/components/Footer";

export default function PortfolioView({ initialSection = "home" }) {
  useEffect(() => {
    let targetSection = initialSection;
    if (typeof window !== "undefined") {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
      if (path && ["about", "advantages", "accounts", "partnerships", "trust-contact"].includes(path)) {
        targetSection = path;
      } else if (path === "home" || !path) {
        targetSection = "home";
        if (window.history.replaceState) {
          window.history.replaceState(null, "", "/");
        }
      }
    }

    if (targetSection && targetSection !== "home") {
      const timer = setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [initialSection]);

  return (
    <div className="relative min-h-screen bg-[#061321] text-[#F7FAFC] overflow-x-hidden selection:bg-[#5EC7E8] selection:text-[#061321]">
      {/* 1. Floating Pill Navigation with Liquid Fluid Animation */}
      <Navbar initialSection={initialSection} />

      {/* 2. Main Sections */}
      <main>
        {/* Cover / Hero */}
        <Hero />

        {/* About Celestial */}
        <About />

        {/* Key Trading Advantages */}
        <Advantages />

        {/* Account Solutions */}
        <Accounts />

        {/* Partnership Ecosystem */}
        <Partnerships />

        {/* Trust & Contact */}
        <TrustContact />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
