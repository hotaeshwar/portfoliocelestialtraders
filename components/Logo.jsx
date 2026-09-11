"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo({
  variant = "default",
  className = "",
  size = "default",
  hideText = false,
}) {
  const isFooter = size === "footer" || size === "lg";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center transition-transform duration-300 hover:scale-[1.02] flex-shrink-0 ${className}`}
      aria-label="Celestial Trading Alliance Home"
    >
      <div
        className={`relative transition-all duration-300 ${
          isFooter
            ? "w-[240px] h-[64px] sm:w-[280px] sm:h-[72px]"
            : "w-[185px] h-[48px] sm:w-[220px] sm:h-[56px]"
        }`}
      >
        <Image
          src="/images/logo-light.png"
          alt="Celestial Trading Alliance"
          fill
          sizes={isFooter ? "(max-width: 640px) 240px, 280px" : "(max-width: 640px) 185px, 220px"}
          className="object-contain object-left group-hover:brightness-110 transition-all duration-300"
          priority
        />
      </div>
    </Link>
  );
}
