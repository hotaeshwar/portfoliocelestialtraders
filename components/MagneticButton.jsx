"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary", // "primary" | "secondary" | "outline"
  className = "",
  showArrow = true,
  size = "md", // "sm" | "md" | "lg"
}) {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isRTL } = useLanguage();

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.28;
    const y = (clientY - (top + height / 2)) * 0.28;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#10263D] to-[#0A1B2D] text-[#F7FAFC] border border-[#5EC7E8]/40 hover:border-[#5EC7E8] hover:shadow-[0_0_25px_rgba(94,199,232,0.35)] shadow-md",
    secondary:
      "bg-transparent text-[#F7FAFC] border border-white/20 hover:border-[#5EC7E8]/70 hover:bg-[#10263D]/40 hover:shadow-[0_0_20px_rgba(66,135,197,0.25)]",
    outline:
      "bg-transparent text-[#5EC7E8] border border-[#5EC7E8]/50 hover:bg-[#5EC7E8]/10 hover:border-[#5EC7E8]",
  };

  const content = (
    <motion.span
      animate={{ x: position.x * 0.6, y: position.y * 0.6 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className="relative z-10 flex items-center justify-center gap-2 font-semibold tracking-wide"
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            isRTL ? "rotate-[270deg] group-hover:-translate-x-0.5" : ""
          } text-[#5EC7E8]`}
        />
      )}
    </motion.span>
  );

  const wrapperProps = {
    ref: btnRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `group relative inline-flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 select-none ${sizeClasses[size]} ${variantStyles[variant]} ${className}`,
    onClick,
  };

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className="inline-block"
    >
      {href ? (
        <a href={href} {...wrapperProps}>
          {content}
        </a>
      ) : (
        <button type="button" {...wrapperProps}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
