"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Accounts from "@/components/Accounts";
import Partnerships from "@/components/Partnerships";
import TrustContact from "@/components/TrustContact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#061321] text-[#F7FAFC] overflow-x-hidden selection:bg-[#5EC7E8] selection:text-[#061321]">
      {/* 1. Floating Pill Navigation with Liquid Fluid Animation */}
      <Navbar />

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
