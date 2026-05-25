"use client";
import React from 'react';

export default function TimelineItem({ year, title, company, description, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-stretch w-full min-h-[160px] mb-8 md:mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      
      {/* Content panel wrapped in premium glass card */}
      <div className={`w-full md:w-1/2 pl-12 pr-4 md:pl-0 md:pr-0 flex ${isEven ? 'md:pr-16 md:justify-end' : 'md:pl-16 md:justify-start'}`}>
        <div className="bg-[#0A0A0A]/35 backdrop-blur-xl border border-white/5 p-6 rounded-2xl transition-all duration-300 w-full max-w-lg shadow-[0_20px_50px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_25px_60px_rgba(255,85,0,0.15)] hover:border-primary/40 hover:scale-[1.01] relative overflow-hidden group select-none">
          {/* Subtle ambient light glow inside card */}
          <div className="absolute -right-12 -bottom-12 w-28 h-28 rounded-full bg-primary/2 group-hover:bg-primary/6 blur-[30px] transition-all duration-300 pointer-events-none"></div>
          
          <div className="flex justify-between items-center mb-3">
            <span className="font-mono text-xs text-primary font-bold tracking-wider bg-primary/10 px-2.5 py-0.5 rounded-sm">
              {year}
            </span>
            <span className="font-mono text-[9px] text-foreground-muted tracking-widest select-none">
              LOG_0{index + 1}
            </span>
          </div>
          
          <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-tight leading-tight group-hover:text-primary transition-colors duration-200">{title}</h4>
          <p className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider mt-1">{company}</p>
          
          <p className="text-xs sm:text-sm text-foreground-muted mt-4 leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>

      {/* Center line and point marker with pulsing holographic wave */}
      <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 -translate-x-1/2 flex flex-col items-center z-10">
        {/* Pulsing Dot marker */}
        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background mt-8 shadow-[0_0_12px_rgba(255,85,0,0.8)] relative flex items-center justify-center">
          <span className="absolute w-6 h-6 rounded-full bg-primary/30 animate-ping pointer-events-none"></span>
        </div>
        {/* Connection line segment */}
        <div className="w-[2px] bg-[#1A1A1A] flex-grow mt-2"></div>
      </div>

      {/* Space filler for the opposite side on desktop */}
      <div className="hidden md:block w-1/2"></div>
    </div>
  );
}
