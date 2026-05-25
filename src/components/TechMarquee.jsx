"use client";
import React from 'react';

const TECH_ITEMS = [
  'NEXT.JS', 'REACT', 'GSAP', 'LENIS', 'TAILWIND CSS', 'DAISYUI', 'FRAMER MOTION', 'POSTGRESQL',
  'DOCKER', 'NODE.JS', 'TYPESCRIPT', 'GRAPHQL', 'REDIS', 'VERCEL', 'GIT', 'FIGMA'
];

export default function TechMarquee() {
  // Triple the list to ensure infinite smooth seamless looping
  const extendedItems = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section className="py-12 bg-surface border-y border-border-color overflow-hidden w-full select-none z-10 relative">


      <div className="relative w-full overflow-hidden flex">
        {/* Smooth Fading Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Motion Container */}
        <div className="flex gap-16 whitespace-nowrap animate-marquee py-2">
          {extendedItems.map((tech, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 font-sans text-3xl md:text-5xl font-black text-foreground-muted hover:text-white transition-colors duration-200 cursor-default"
            >
              <span>{tech}</span>
              <span className="text-primary font-mono text-xl md:text-2xl">=</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
