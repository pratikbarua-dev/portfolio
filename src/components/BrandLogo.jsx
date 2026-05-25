"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BrandLogo({ className = "w-8 h-8", animated = true }) {
  // SVG Vector Paths redesigned for premium high-contrast dark mode compatibility
  const pPath = "M 25 90 C 25 72, 30 62, 45 62 C 60 62, 72 52, 72 38 C 72 24, 58 14, 44 14 C 30 14, 24 24, 24 34";
  const arrowLine = "M 24 72 C 34 60, 44 50, 54 56 C 64 62, 72 46, 86 28";
  const arrowHead = "M 74 28 H 86 V 40";
  const caretPath = "M 38 8 L 48 0 L 58 8";

  return (
    <motion.svg
      className={`${className} select-none`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={animated ? { scale: 1.15, rotate: [0, -3, 3, 0] } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <defs>
        {/* Main Neon Cyber Gradients */}
        <linearGradient id="logo-orange" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF3300" />
          <stop offset="100%" stopColor="#FF7700" />
        </linearGradient>

        <linearGradient id="logo-amber" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF5500" />
          <stop offset="100%" stopColor="#FFCC00" />
        </linearGradient>

        <linearGradient id="logo-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5500" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF8800" stopOpacity="0.2" />
        </linearGradient>

        {/* High-fidelity glowing filters */}
        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient background glow behind the logo */}
      <circle cx="50" cy="50" r="30" fill="url(#logo-glow)" filter="blur(8px)" opacity="0.35" />

      {/* Caret Progress Roof */}
      <motion.path
        d={caretPath}
        stroke="url(#logo-amber)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animated ? { pathLength: 0, opacity: 0 } : {}}
        animate={animated ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        filter="url(#neon-glow)"
      />

      {/* Styled Letter "P" Loop Frame */}
      <motion.path
        d={pPath}
        stroke="url(#logo-orange)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animated ? { pathLength: 0, opacity: 0 } : {}}
        animate={animated ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        filter="url(#neon-glow)"
      />

      {/* Chart Arrow Rising Line */}
      <motion.path
        d={arrowLine}
        stroke="url(#logo-amber)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animated ? { pathLength: 0, opacity: 0 } : {}}
        animate={animated ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.0, delay: 0.4 }}
        filter="url(#neon-glow)"
      />

      {/* Chart Arrowhead */}
      <motion.path
        d={arrowHead}
        stroke="url(#logo-amber)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animated ? { opacity: 0, scale: 0.5 } : {}}
        animate={animated ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 1.2 }}
        filter="url(#neon-glow)"
      />
    </motion.svg>
  );
}
