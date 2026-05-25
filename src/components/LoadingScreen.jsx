"use client";
import React from "react";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center font-mono select-none"
    >
      {/* Abstract Glowing ambient background blobs */}
      <div className="absolute top-[35%] left-[25%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[130px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-[30%] right-[20%] w-[350px] h-[350px] rounded-full bg-amber-600/5 blur-[140px] pointer-events-none -z-10 animate-pulse"></div>

      <div className="flex flex-col items-center gap-7 max-w-sm w-full px-8 text-center">
        {/* Large custom SVG Brand logo */}
        <div className="relative">
          <BrandLogo className="w-24 h-24" animated={true} />
          {/* Subtle outer neon ring */}
          <div className="absolute -inset-4 border border-primary/20 rounded-full animate-ping pointer-events-none opacity-20"></div>
        </div>

        {/* Brand Label */}
        <div>
          <h2 className="text-white text-lg font-black tracking-[0.25em] uppercase">
            PRATIK <span className="text-primary">BARUA</span>
          </h2>
        </div>

        {/* High-tech Glowing Progress Bar */}
        <div className="w-48 h-[2px] bg-[#111] rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(255,85,0,0.1)] border border-white/5">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="h-full w-full bg-gradient-to-r from-primary to-amber-500 shadow-[0_0_12px_#FF5500]"
          />
        </div>
      </div>
    </motion.div>
  );
}
