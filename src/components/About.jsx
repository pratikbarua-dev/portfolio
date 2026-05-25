"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TECH_INFO = {
  nextjs: {
    name: 'Next.js (App Router)',
    category: 'CORE_FRAMEWORK',
    metric: '95% Mastery',
    desc: 'Core architecture for high-performance React applications. Implements server-side rendering, static routing optimization, and lightning-fast Edge routes.'
  },
  react: {
    name: 'React.js',
    category: 'FRONTEND_LIBRARY',
    metric: '95% Proficiency',
    desc: 'Designing interactive, modular, and reactive state-driven user interface components.'
  },
  nodejs: {
    name: 'Node.js',
    category: 'RUNTIME_ENGINE',
    metric: '92% Proficiency',
    desc: 'High-performance V8 runtime powering highly scalable backend APIs and real-time WebSocket systems.'
  },
  mongodb: {
    name: 'MongoDB',
    category: 'NOSQL_DATABASE',
    metric: '88% Proficiency',
    desc: 'Document-oriented database for fluid, schemaless JSON storage and complex data modeling.'
  },
  express: {
    name: 'Express.js',
    category: 'API_ROUTING',
    metric: '92% Proficiency',
    desc: 'Minimalist, fast web routing framework optimized to serve secure RESTful and WebSocket endpoints.'
  },
  tailwind: {
    name: 'Tailwind CSS',
    category: 'UTILITY_STYLING',
    metric: '94% Mastery',
    desc: 'Utility-first CSS engine for rapid prototyping and modular, light styling structures.'
  },
  daisyui: {
    name: 'DaisyUI',
    category: 'UI_COMPONENTS',
    metric: '94% Mastery',
    desc: 'Premium dark-themed visual layer delivering clean aesthetics and micro-interactions.'
  },
  docker: {
    name: 'Docker',
    category: 'CONTAINERIZATION',
    metric: '85% Proficiency',
    desc: 'Wrapping applications inside secure, lightweight, and deterministic container networks.'
  },
  coolify: {
    name: 'Coolify',
    category: 'DEV_OPS_AUTO',
    metric: '88% Proficiency',
    desc: 'Self-hosted DevOps orchestrator automating builds and continuous git deployments.'
  },
  supabase: {
    name: 'Supabase',
    category: 'BACKEND_SERVICE',
    metric: '85% Proficiency',
    desc: 'Self-hosted Supabase instances delivering real-time PostgreSQL databases, authentication, and secure edge tables.'
  }
};

/* 
  Interactive Glass Tile Wrapper 
  Includes traveling laser border beam animation + deep 3D drop-shadows
*/
const TileWrapper = ({ children, onClick, className, rounded = 'rounded-2xl', innerRounded = 'rounded-[14.5px]' }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative p-[1.5px] overflow-hidden group transition-all duration-300 cursor-pointer shadow-[0_15px_45px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.06)] hover:shadow-[0_25px_60px_rgba(255,85,0,0.22)] active:scale-[0.98] ${rounded} ${className}`}
    >
      {/* Sweeping Laser Border Light */}
      <div 
        className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_40%,#FF5500_50%,transparent_60%)] animate-[spin_3.5s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
        style={{ transformOrigin: 'center' }}
      ></div>

      {/* Inner Content Block */}
      <div className={`relative w-full h-full bg-[#080808]/95 backdrop-blur-md flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0D0D0D]/95 ${innerRounded}`}>
        {children}
      </div>
    </div>
  );
};

export default function About() {
  const [activeModalTech, setActiveModalTech] = useState(null);

  const revealVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      } 
    },
  };

  return (
    <section 
      id="about" 
      className="py-20 md:py-28 px-6 md:px-12 max-w-[1280px] mx-auto w-full border-t border-border-color z-10 relative overflow-hidden"
    >
      {/* Background soft ambient glows */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/3 blur-[130px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/2 blur-[130px] pointer-events-none z-0"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="w-full relative z-10"
      >
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 max-w-xl">

          <h2 className="text-3xl md:text-4xl font-black uppercase mt-2 tracking-tight">
            TECHNICAL SKILLS
          </h2>
          <p className="text-foreground-muted text-sm mt-4 leading-relaxed font-light">
            A curated showcase of my engineering stack, clean-code philosophy, and self-hosted infrastructure operations.
          </p>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full items-center">
          
          {/* COLUMN 1: Profile Summary (Spans 5 Columns) */}
          <div className="lg:col-span-5 group bg-[#0A0A0A]/40 backdrop-blur-md border border-[#1A1A1A] hover:border-primary/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,85,0,0.08)] relative overflow-hidden select-none h-full">
            {/* Glowing spot */}
            <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-primary/4 blur-[50px] transition-all duration-300 group-hover:bg-primary/8 group-hover:scale-110 pointer-events-none"></div>
            
            <div>
              {/* Profile details */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-[#222] p-1.5 bg-[#0E0E0E]">
                  <img 
                    src="/avatar-visual.png" 
                    alt="Pratik Barua" 
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-white uppercase">Pratik Barua</h3>
                  <p className="font-mono text-xs text-primary font-bold mt-0.5 uppercase tracking-wide">
                    Software Engineering Student & MERN Stack Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-foreground-muted text-sm leading-relaxed font-light">
                  I am a passionate Software Engineering student dedicated to crafting premium, modern, dark-themed digital experiences. As an aspiring MERN Stack Developer and a proud Programming Hero learner, I approach coding with a craftsman's precision, combining academic excellence with hands-on technical proficiency.
                </p>
                <p className="text-foreground-muted text-sm leading-relaxed font-light">
                  I focus on creating dynamic web applications utilizing the MERN stack (MongoDB, Express, React, Node.js) and Next.js. I prioritize pure, clean JavaScript architectures, fluid micro-animations, and high-fidelity user experiences that perform seamlessly.
                </p>
                <p className="text-foreground-muted text-sm leading-relaxed font-light">
                  Through my rigorous training at Daffodil International University and practical projects driven by Programming Hero, I've developed deep engineering habits—from optimized React patterns to self-hosted cloud DevOps networks using Docker and Coolify.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="border-t border-[#111] pt-6 mt-8 grid grid-cols-2 gap-4">
              <div>
                <span className="font-mono text-[9px] text-foreground-muted uppercase tracking-wider">Education</span>
                <div className="font-sans text-xs font-bold text-white mt-1">B.Sc. SWE (DIU)</div>
              </div>
              <div>
                <span className="font-mono text-[9px] text-foreground-muted uppercase tracking-wider">Top CGPA</span>
                <div className="font-sans text-xs font-bold text-primary mt-1">4.00 / 4.00</div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Asymmetric 4x4 Pure Glass Logo Grid (Spans 7 Columns) */}
          <div id="skills" className="lg:col-span-7 flex justify-center items-center w-full py-4 sm:py-8">
            <div className="grid grid-cols-4 gap-4 sm:gap-5 max-w-[420px] w-full aspect-square">
              
              {/* TILE 1: Next.js (Large - spans 2 cols, 2 rows) */}
              <TileWrapper 
                onClick={() => setActiveModalTech('nextjs')}
                className="col-span-2 row-span-2 aspect-square"
                rounded="rounded-[28px]"
                innerRounded="rounded-[26.5px]"
              >
                <svg className="w-[62%] h-[62%] text-white group-hover:text-primary transition-colors duration-300" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_about_next)">
                    <circle cx="8" cy="8" r="7.375" fill="black" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.63 11V5" stroke="url(#paint0_linear_about_next)" strokeWidth="1.25" strokeMiterlimit="1.41421"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z" fill="url(#paint1_linear_about_next)"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_about_next" x1="11.13" y1="5" x2="11.13" y2="11" gradientUnits="userSpaceOnUse">
                      <stop stopColor="currentColor"/>
                      <stop offset="0.609375" stopColor="currentColor" stopOpacity="0.57"/>
                      <stop offset="0.796875" stopColor="currentColor" stopOpacity="0"/>
                      <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_about_next" x1="9.9375" y1="9.0625" x2="13.5574" y2="13.3992" gradientUnits="userSpaceOnUse">
                      <stop stopColor="currentColor"/>
                      <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
                    </linearGradient>
                    <clipPath id="clip0_about_next">
                      <rect width="16" height="16" fill="black"/>
                    </clipPath>
                  </defs>
                </svg>
              </TileWrapper>

              {/* TILE 2: React.js (Small) */}
              <TileWrapper 
                onClick={() => setActiveModalTech('react')}
                className="aspect-square"
              >
                <svg className="w-[58%] h-[58%] text-white group-hover:text-primary transition-colors duration-300" viewBox="0 0 128 128" fill="none">
                  <g fill="currentColor">
                    <circle cx="64" cy="64" r="11.4"/>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
                  </g>
                </svg>
              </TileWrapper>

              {/* TILE 3: Node.js (Small) */}
              <TileWrapper 
                onClick={() => setActiveModalTech('nodejs')}
                className="aspect-square"
              >
                <svg className="w-[58%] h-[58%] text-white group-hover:text-primary transition-colors duration-300" viewBox="-16.5 0 289 289" fill="currentColor">
                  <path d="M127.999999,288.463771 C124.024844,288.463771 120.314699,287.403728 116.869564,285.548656 L81.6231884,264.612838 C76.32298,261.697724 78.9730854,260.637682 80.5631458,260.107661 C87.7184259,257.72257 89.0434775,257.192547 96.4637688,252.952381 C97.2587979,252.422361 98.3188405,252.687372 99.1138718,253.217392 L126.144927,269.383024 C127.20497,269.913045 128.530021,269.913045 129.325053,269.383024 L235.064182,208.165634 C236.124225,207.635611 236.654245,206.575571 236.654245,205.250519 L236.654245,83.0807467 C236.654245,81.7556929 236.124225,80.6956526 235.064182,80.1656324 L129.325053,19.2132506 C128.26501,18.6832305 126.939959,18.6832305 126.144927,19.2132506 L20.4057954,80.1656324 C19.3457551,80.6956526 18.8157349,82.0207041 18.8157349,83.0807467 L18.8157349,205.250519 C18.8157349,206.31056 19.3457551,207.635611 20.4057954,208.165634 L49.2919247,224.861286 C64.9275364,232.811595 74.7329196,223.536234 74.7329196,214.260871 L74.7329196,93.681159 C74.7329196,92.0910985 76.0579711,90.5010358 77.9130428,90.5010358 L91.4285716,90.5010358 C93.0186343,90.5010358 94.6086948,91.8260873 94.6086948,93.681159 L94.6086948,214.260871 C94.6086948,235.196689 83.2132512,247.387164 63.3374737,247.387164 C57.2422362,247.387164 52.4720502,247.387164 38.9565214,240.761906 L11.1304347,224.861286 C4.24016581,220.886129 5.68434189e-14,213.46584 5.68434189e-14,205.515528 L5.68434189e-14,83.3457557 C5.68434189e-14,75.3954465 4.24016581,67.9751552 11.1304347,64.0000006 L116.869564,2.78260752 C123.494824,-0.927535841 132.505176,-0.927535841 139.130436,2.78260752 L244.869565,64.0000006 C251.759834,67.9751552 256,75.3954465 256,83.3457557 L256,205.515528 C256,213.46584 251.759834,220.886129 244.869565,224.861286 L139.130436,286.078676 C135.685299,287.668739 131.710145,288.463771 127.999999,288.463771 L127.999999,288.463771 Z M160.596274,204.455488 C114.219461,204.455488 104.679089,183.254659 104.679089,165.233955 C104.679089,163.643893 106.004141,162.053832 107.859212,162.053832 L121.639752,162.053832 C123.229813,162.053832 124.554864,163.113872 124.554864,164.703935 C126.674947,178.749484 132.770187,185.639753 160.861283,185.639753 C183.122154,185.639753 192.662526,180.604556 192.662526,168.67909 C192.662526,161.788821 190.012423,156.753624 155.296065,153.308489 C126.409938,150.393375 108.389235,144.033126 108.389235,120.977226 C108.389235,99.5113875 126.409938,86.7908901 156.621119,86.7908901 C190.542443,86.7908901 207.238095,98.4513472 209.358178,123.89234 C209.358178,124.687371 209.093167,125.482403 208.563147,126.277434 C208.033127,126.807454 207.238095,127.337474 206.443064,127.337474 L192.662526,127.337474 C191.337475,127.337474 190.012423,126.277434 189.747412,124.952382 C186.567289,110.376813 178.351966,105.606625 156.621119,105.606625 C132.240165,105.606625 129.325053,114.086957 129.325053,120.447205 C129.325053,128.132506 132.770187,130.5176 165.631471,134.757766 C198.227744,138.997931 213.598344,145.093169 213.598344,167.884058 C213.333333,191.20497 194.252589,204.455488 160.596274,204.455488 L160.596274,204.455488 Z" />
                </svg>
              </TileWrapper>

              {/* TILE 4: MongoDB (Small) */}
              <TileWrapper 
                onClick={() => setActiveModalTech('mongodb')}
                className="aspect-square"
              >
                <svg className="w-[50%] h-[50%] text-white group-hover:text-primary transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.19 23.55c-.06 0-.1-.01-.13-.04-.3-.32-3.8-4.06-4.9-9.15-1-4.63-.12-8.5 2.65-11.45.67-.71 1.43-1.37 2.25-1.96.11-.08.26-.08.37 0 .82.59 1.58 1.25 2.25 1.96 2.77 2.95 3.65 6.82 2.65 11.45-1.1 5.09-4.6 8.83-4.9 9.15-.04.03-.08.04-.14.04zm-.19-21c-.56.45-1.09.96-1.58 1.51-2.22 2.47-2.9 5.67-2.01 9.53.84 3.67 3.32 6.74 3.59 7.07.27-.33 2.75-3.4 3.59-7.07.89-3.86.21-7.06-2.01-9.53-.49-.55-1.02-1.06-1.58-1.51z"/>
                  <path d="M12 21.61c-.13 0-.25-.05-.34-.15-.04-.04-1.63-1.84-2.27-4.47-.64-2.6-.26-4.98 1.13-7.07a9.23 9.23 0 0 1 1.48-1.74c.1-.1.27-.1.37 0 .42.48.92 1.06 1.48 1.74 1.39 2.09 1.77 4.47 1.13 7.07-.64 2.63-2.23 4.43-2.27 4.47-.09.1-.21.15-.34.15zm-.1-.13h.2c.04-.04 1.53-1.75 2.14-4.24.59-2.43.24-4.62-1.04-6.55-.49-.6-.94-1.11-1.3-1.53-.36.42-.81.93-1.3 1.53-1.28 1.93-1.63 4.12-1.04 6.55.61 2.49 2.1 4.2 2.14 4.24z"/>
                  <path d="M12.28 23.83c-.09 0-.17-.03-.23-.1-.08-.08-.09-.2-.03-.29 2.18-3.08 3.56-6.66 4.1-10.66.52-3.82.02-7.25-1.48-10.22-.05-.1 0-.22.1-.28.1-.05.22 0 .28.1 1.54 3.05 2.06 6.57 1.52 10.51-.55 4.12-1.97 7.79-4.21 10.94-.05.07-.12.1-.19.1z"/>
                </svg>
              </TileWrapper>

              {/* TILE 5: Express.js (Small) */}
              <TileWrapper 
                onClick={() => setActiveModalTech('express')}
                className="aspect-square"
              >
                <svg className="w-[58%] h-[58%] text-white group-hover:text-primary transition-colors duration-300" viewBox="0 0 128 128" fill="currentColor">
                  <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/>
                </svg>
              </TileWrapper>

              {/* TILE 6: Tailwind CSS (Small) */}
              <TileWrapper 
                onClick={() => setActiveModalTech('tailwind')}
                className="aspect-square"
              >
                <svg className="w-[58%] h-[58%] text-white group-hover:text-primary transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/>
                </svg>
              </TileWrapper>

              {/* TILE 7: DaisyUI (Small) */}
              <TileWrapper 
                onClick={() => setActiveModalTech('daisyui')}
                className="aspect-square"
              >
                <svg className="w-[62%] h-[62%]" viewBox="0 0 450 450" fill="none">
                  <g opacity="0.7">
                    <path d="M148.425 40.1667C142.7 48.5988 138.15 58.3812 135.152 69.5141C126.533 101.527 101.527 126.533 69.5137 135.153C58.3806 138.15 48.5979 142.7 40.1656 148.426C28.2144 85.9133 85.9125 28.2153 148.425 40.1667Z" fill="#FFD819"/>
                    <path d="M40.1668 148.425C42.0807 158.436 45.7808 168.571 51.5333 178.563C68.0751 207.294 68.0751 242.658 51.5333 271.39C45.7806 281.382 42.0805 291.516 40.1667 301.528C-12.4873 265.775 -12.4872 184.178 40.1668 148.425Z" fill="#FFE029"/>
                    <path d="M148.425 409.786C142.7 401.354 138.15 391.571 135.152 380.438C126.533 348.425 101.527 323.419 69.5137 314.8C58.3806 311.802 48.5979 307.252 40.1656 301.526C28.2144 364.039 85.9125 421.737 148.425 409.786Z" fill="#FFC141"/>
                    <path d="M301.528 409.785C291.517 407.871 281.383 404.171 271.391 398.419C242.659 381.877 207.295 381.877 178.564 398.419C168.572 404.171 158.437 407.872 148.426 409.785C184.178 462.439 265.776 462.439 301.528 409.785Z" fill="#FFB655"/>
                    <path d="M409.787 301.527C401.355 307.253 391.573 311.802 380.44 314.8C348.427 323.419 323.421 348.425 314.801 380.439C311.804 391.571 307.254 401.354 301.528 409.786C364.04 421.737 421.738 364.039 409.787 301.527Z" fill="#FFB35B"/>
                    <path d="M409.787 148.426C407.873 158.437 404.173 168.571 398.42 178.563C381.879 207.294 381.879 242.658 398.42 271.39C404.173 281.382 407.873 291.516 409.787 301.527C462.44 265.775 462.44 184.179 409.787 148.426Z" fill="#FFB656"/>
                    <path d="M301.528 40.1664C307.254 48.5986 311.804 58.3811 314.801 69.5141C323.421 101.527 348.427 126.533 380.44 135.153C391.573 138.15 401.355 142.7 409.787 148.425C421.738 85.9132 364.04 28.216 301.528 40.1664Z" fill="#FFC042"/>
                    <path d="M148.426 40.1671C158.437 42.081 168.571 45.781 178.563 51.5336C207.295 68.0754 242.659 68.0755 271.39 51.5336C281.382 45.7812 291.516 42.0812 301.527 40.1673C265.774 -12.4858 184.178 -12.4858 148.426 40.1671Z" fill="#FFCE2A"/>
                  </g>
                  <path fillRule="evenodd" clipRule="evenodd" d="M135.155 69.5136C138.152 58.3808 142.702 48.5984 148.428 40.1662C158.438 42.0801 168.573 45.7802 178.564 51.5326C207.296 68.0744 242.66 68.0744 271.391 51.5326C281.383 45.78 291.518 42.0798 301.529 40.166C307.255 48.5982 311.805 58.3807 314.802 69.5136C323.422 101.527 348.428 126.533 380.441 135.152C391.573 138.15 401.356 142.699 409.788 148.425C407.874 158.436 404.174 168.571 398.421 178.562C381.879 207.294 381.879 242.658 398.421 271.39C404.174 281.381 407.874 291.516 409.788 301.527C401.356 307.253 391.573 311.802 380.441 314.8C348.428 323.419 323.422 348.425 314.802 380.438C311.805 391.571 307.255 401.354 301.529 409.786C291.518 407.872 281.383 404.172 271.391 398.419C242.66 381.878 207.296 381.878 178.564 398.419C168.573 404.172 158.438 407.872 148.428 409.786C142.702 401.354 138.152 391.571 135.155 380.438C126.535 348.425 101.529 323.419 69.5161 314.8C58.383 311.802 48.6003 307.252 40.168 301.526C42.0819 291.516 45.7819 281.381 51.5344 271.39C68.0762 242.658 68.0762 207.294 51.5344 178.562C45.7819 168.571 42.0819 158.437 40.168 148.426C48.6002 142.7 58.3829 138.15 69.5161 135.152C101.529 126.533 126.535 101.527 135.155 69.5136Z" fill="url(#daisy_disc_gradient_about)"/>
                    <rect x="313.369" y="252.866" width="31.3006" height="15.6503" rx="7.82514" transform="rotate(60 313.369 252.866)" fill="#FFA17A"/>
                    <rect x="293.808" y="252.866" width="31.3006" height="15.6503" rx="7.82514" transform="rotate(60 293.808 252.866)" fill="#FFA17A"/>
                    <rect x="154.911" y="252.866" width="31.3006" height="15.6503" rx="7.82514" transform="rotate(60 154.911 252.866)" fill="#FFAB89"/>
                    <rect x="135.348" y="252.866" width="31.3006" height="15.6503" rx="7.82514" transform="rotate(60 135.348 252.866)" fill="#FFAB89"/>
                    <g>
                      <rect x="296.044" y="164.833" width="31.3006" height="15.6503" rx="7.82514" transform="rotate(15 296.044 164.833)" fill="#FFA17A"/>
                    </g>
                    <g>
                      <rect x="123.752" y="172.934" width="31.3006" height="15.6503" rx="7.82514" transform="rotate(-15 123.752 172.934)" fill="#FFAB89"/>
                    </g>
                    <g data-name="mouth">
                      <path d="M207.872 252.866C211.999 257.438 219.319 260.691 225.479 260.691C231.638 260.691 238.958 257.438 243.085 252.866" stroke="#8B2C0C" strokeOpacity="0.05" strokeWidth="12" strokeLinecap="round"/>
                      <path d="M207.872 250.91C211.999 255.482 219.319 258.735 225.479 258.735C231.638 258.735 238.958 255.482 243.085 250.91" stroke="#D05B34" strokeWidth="12" strokeLinecap="round"/>
                    </g>
                    <g data-name="eye-open">
                      <g data-name="left">
                        <rect x="125.037" y="192.221" width="31.3006" height="15.6503" rx="7.82514" transform="rotate(45 125.037 192.221)" fill="black"/>
                        <rect x="117.882" y="196.134" width="58.6886" height="58.6886" rx="29.3443" fill="black"/>
                        <rect x="117.882" y="198.089" width="58.6886" height="58.6886" rx="29.3443" fill="black" fillOpacity="0.05"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M125.086 233.301C128.309 224.184 137.004 217.652 147.225 217.652C157.447 217.652 166.142 224.185 169.365 233.304C166.142 242.42 157.446 248.952 147.226 248.952C137.004 248.952 128.308 242.419 125.086 233.301Z" fill="#784012"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M166.831 238.399C169.279 234.693 170.704 230.252 170.704 225.478C170.704 212.513 160.193 202.002 147.228 202.002C134.263 202.002 123.753 212.513 123.753 225.478C123.753 229.758 124.898 233.771 126.899 237.226C131.1 230.867 138.311 226.671 146.502 226.671C155.187 226.671 162.771 231.388 166.831 238.399Z" fill="black" fillOpacity="0.35"/>
                        <rect x="133.532" y="211.784" width="27.388" height="27.388" rx="13.694" fill="black"/>
                        <circle cx="140.814" cy="211.609" r="11.7377" fill="white"/>
                        <circle cx="162.848" cy="227.64" r="5.86885" fill="white"/>
                        <circle cx="155.525" cy="239.853" r="3.91257" fill="white"/>
                      </g>
                      <g data-name="right">
                        <rect x="337.181" y="203.288" width="31.3006" height="15.6503" rx="7.82514" transform="rotate(135 337.181 203.288)" fill="black"/>
                        <rect x="274.385" y="198.09" width="58.6886" height="58.6886" rx="29.3443" fill="black" fillOpacity="0.05"/>
                        <rect x="274.385" y="196.134" width="58.6886" height="58.6886" rx="29.3443" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M281.629 233.41C284.664 223.959 293.525 217.12 303.984 217.12C314.166 217.12 322.833 223.602 326.086 232.664C323.051 242.114 314.189 248.954 303.731 248.954C293.549 248.954 284.881 242.472 281.629 233.41Z" fill="#784012"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M323.862 237.557C325.984 234.028 327.204 229.896 327.204 225.479C327.204 212.514 316.693 202.003 303.728 202.003C290.763 202.003 280.253 212.514 280.253 225.479C280.253 230.068 281.57 234.349 283.846 237.966C287.951 231.137 295.432 226.569 303.98 226.569C312.356 226.569 319.708 230.956 323.862 237.557Z" fill="black" fillOpacity="0.35"/>
                        <rect x="290.035" y="211.785" width="27.388" height="27.388" rx="13.694" fill="black"/>
                        <circle cx="297.318" cy="211.609" r="11.7377" fill="white"/>
                        <circle cx="319.352" cy="227.64" r="5.86885" fill="white"/>
                        <circle cx="312.029" cy="239.853" r="3.91257" fill="white"/>
                      </g>
                    </g>
                  <defs>
                    <radialGradient id="daisy_disc_gradient_about" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40.0037 40.0027) rotate(45) scale(522.888 522.888)">
                      <stop stopColor="#FFE600"/>
                      <stop offset="1" stopColor="#FFA573"/>
                    </radialGradient>
                  </defs>
                </svg>
              </TileWrapper>

              {/* TILE 10: Supabase (Large - spans 2 cols, 2 rows) */}
              <TileWrapper 
                onClick={() => setActiveModalTech('supabase')}
                className="col-span-2 row-span-2 aspect-square"
                rounded="rounded-[28px]"
                innerRounded="rounded-[26.5px]"
              >
                <svg className="w-[50%] h-[50%] text-white group-hover:text-[#3ecf8e] transition-colors duration-300" viewBox="0 0 64 64" fill="none">
                  <path d="m 37.41219,62.936701 c -1.634985,2.05896 -4.950068,0.93085 -4.989463,-1.69817 L 31.846665,22.786035 h 25.855406 c 4.683108,0 7.294967,5.409033 4.382927,9.07673 z" fill="url(#paint0_linear_supabase)" strokeWidth="0.57177" />
                  <path d="m 37.41219,62.936701 c -1.634985,2.05896 -4.950068,0.93085 -4.989463,-1.69817 L 31.846665,22.786035 h 25.855406 c 4.683108,0 7.294967,5.409033 4.382927,9.07673 z" fill="url(#paint1_linear_supabase)" fillOpacity="0.2" strokeWidth="0.57177" />
                  <path d="m 26.89694,1.0634102 c 1.634986,-2.05918508 4.950125,-0.93090008 4.989521,1.698149 L 32.138899,41.214003 H 6.607076 c -4.6832501,0 -7.29518376,-5.409032 -4.3830007,-9.07673 z" fill="#3ecf8e" strokeWidth="0.57177" />
                  <defs>
                    <linearGradient id="paint0_linear_supabase" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.57177,0,0,0.57177,0.9859,-0.1207)">
                      <stop stopColor="#249361" />
                      <stop offset="1" stopColor="#3ecf8e" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_supabase" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.57177,0,0,0.57177,0.9859,-0.1207)">
                      <stop />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </TileWrapper>

              {/* TILE 8: Docker (Small) */}
              <TileWrapper 
                onClick={() => setActiveModalTech('docker')}
                className="aspect-square"
              >
                <svg className="w-[58%] h-[58%] text-white group-hover:text-primary transition-colors duration-300" viewBox="0 0 1024 1024" fill="currentColor">
                  {/* Outer hollow frame ring */}
                  <circle cx="512" cy="512" r="490" stroke="currentColor" strokeWidth="35" fill="none"/>
                  {/* Whale and container grid */}
                  <path d="M827.3 461.5c-1.6-1.3-16.1-12.2-46.7-12.2-8.1 0-16.2.6-24.2 2.1-5.9-40.7-39.5-60.5-41-61.4l-8.2-4.8-5.4 7.8c-6.8 10.5-11.7 22-14.6 34.2-5.5 23.2-2.2 45 9.6 63.6-14.2 7.9-37.1 9.9-41.7 10H277c-9.9 0-17.9 8-17.9 17.9-.4 33.1 5.2 66 16.5 97.1 13 34.2 32.4 59.3 57.6 74.7 28.2 17.3 74.1 27.2 126.2 27.2 23.5.1 47-2.1 70.1-6.4 32.1-5.9 63-17.1 91.4-33.2 23.4-13.6 44.5-30.8 62.4-51.1 29.9-33.9 47.8-71.7 61.1-105.2h5.3c32.8 0 53-13.1 64.1-24.1 7.4-7 13.2-15.5 16.9-25l2.3-6.9-5.7-4.3zM312 489.9h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.4-2-4.4-4.4-4.5H312c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.5 2 4.4 4.4 4.4m69.9 0h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.4-2-4.4-4.4-4.5h-50.7c-2.5 0-4.5 2-4.5 4.5v45.1c0 2.5 2 4.4 4.5 4.4m70.8.1h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.4-2-4.4-4.4-4.5h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.4 2 4.3 4.4 4.4m70.1 0h50.7c2.4 0 4.4-2 4.5-4.4v-45.1c0-2.5-2-4.5-4.5-4.5h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.4 1.9 4.4 4.4 4.4m-141-65h50.7c2.4 0 4.4-2 4.4-4.5v-45.1c0-2.4-2-4.4-4.4-4.4h-50.7c-2.5 0-4.4 2-4.5 4.4v45.1c.1 2.5 2.1 4.5 4.5 4.5m70.9 0h50.7c2.4 0 4.4-2 4.4-4.5v-45.1c0-2.4-2-4.4-4.4-4.4h-50.7c-2.4 0-4.4 2-4.4 4.4v45.1c0 2.5 2 4.5 4.4 4.5m70.1 0h50.7c2.5 0 4.4-2 4.5-4.5v-45.1c0-2.5-2-4.4-4.5-4.4h-50.7c-2.4 0-4.4 2-4.4 4.4v45.1c0 2.5 1.9 4.5 4.4 4.5m0-64.9h50.7c2.5 0 4.5-2 4.5-4.5v-45.2c0-2.4-2-4.4-4.5-4.4h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.5 1.9 4.5 4.4 4.5M593.4 490h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.5-2-4.4-4.4-4.5h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.4 2 4.4 4.4 4.4"/>
                </svg>
              </TileWrapper>

              {/* TILE 9: Coolify (Small) */}
              <TileWrapper 
                onClick={() => setActiveModalTech('coolify')}
                className="aspect-square"
              >
                <svg className="w-[58%] h-[58%] text-white group-hover:text-primary transition-colors duration-300" viewBox="0 0 512 512" fill="none">
                  <path d="M63.7-161.7h-90.9v272.8h90.9zm0 363.7h363.7v-90.9H63.7zm0-363.7h363.7v-90.9H63.7z" fill="currentColor" fillOpacity={0.302} transform="translate(84.664 310.016)"/>
                  <path d="M48.2-177.1h-90.9V95.6h90.9zm0 363.6h363.7V95.6H48.2zm0-363.6h363.7V-268H48.2z" fill="currentColor" fillOpacity={0.502} transform="translate(71.406 296.758)"/>
                  <path d="M32.8-192.6h-90.9V80.2h90.9zm0 363.7h363.7V80.2H32.8zm0-363.7h363.7v-90.9H32.8z" fill="currentColor" transform="translate(58.147 283.5)"/>
                </svg>
              </TileWrapper>
            </div>
          </div>

        </div>

      </motion.div>

      {/* Premium Glassmorphism Modal Detail Viewer */}
      <AnimatePresence>
        {activeModalTech && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/75 backdrop-blur-md"
            onClick={() => setActiveModalTech(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-7 sm:p-8 max-w-md w-full relative shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_50px_rgba(255,85,0,0.04)] overflow-hidden select-none font-sans"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Soft internal gradient glows */}
              <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-primary/10 blur-[40px] pointer-events-none"></div>
              <div className="absolute -left-16 -bottom-16 w-36 h-36 rounded-full bg-amber-500/5 blur-[40px] pointer-events-none"></div>

              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/5">
                <div>
                  <span className="font-mono text-[9px] text-primary tracking-[0.2em] uppercase font-bold block mb-1">
                    TECHNICAL SPECIFICATION
                  </span>
                  <h3 className="text-white text-2xl font-black uppercase tracking-tight">
                    {TECH_INFO[activeModalTech].name}
                  </h3>
                </div>
                <button 
                  onClick={() => setActiveModalTech(null)}
                  className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-foreground-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Modal Core Contents */}
              <div className="space-y-6">
                
                {/* 2-Column Info Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/[0.02] border border-white/5 p-3.5 rounded-xl text-left">
                    <span className="text-foreground-muted uppercase block text-[9px] tracking-widest font-mono font-bold mb-1">CATEGORY</span>
                    <span className="text-primary uppercase tracking-wider font-extrabold text-[11px]">
                      {TECH_INFO[activeModalTech].category}
                    </span>
                  </div>

                  <div className="bg-white/[0.02] border border-white/5 p-3.5 rounded-xl text-left">
                    <span className="text-foreground-muted uppercase block text-[9px] tracking-widest font-mono font-bold mb-1">METRIC</span>
                    <span className="text-white font-black text-xs tracking-wide">
                      {TECH_INFO[activeModalTech].metric}
                    </span>
                  </div>
                </div>

                {/* Proficiency Visual Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[9px] font-mono text-foreground-muted uppercase tracking-wider">
                    <span>PROFICIENCY LEVEL</span>
                    <span className="text-primary font-bold">{TECH_INFO[activeModalTech].metric.split('%')[0]}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/[0.03]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${TECH_INFO[activeModalTech].metric.split('%')[0]}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-amber-500 shadow-[0_0_8px_#FF5500]"
                    />
                  </div>
                </div>

                {/* Capability Logs */}
                <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl space-y-2 text-left">
                  <span className="text-foreground-muted uppercase block text-[9px] tracking-widest font-mono font-bold">CAPABILITY LOGS</span>
                  <p className="text-[#C5C5C5] text-xs leading-relaxed font-light">
                    {TECH_INFO[activeModalTech].desc}
                  </p>
                </div>
              </div>

              {/* Footer Close Button */}
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setActiveModalTech(null)}
                  className="px-5 py-2.5 border border-white/10 bg-white/5 text-white hover:bg-primary hover:border-primary transition-all duration-200 rounded-lg text-xs font-bold tracking-widest uppercase cursor-pointer"
                >
                  CLOSE SPEC
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
