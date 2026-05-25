"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "./PrimaryButton";
import OutlineButton from "./OutlineButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    // Core GSAP Intro Sequence
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.fromTo(badgeRef.current, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 }
      );
      
      tl.fromTo(headingRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.45"
      );
      
      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.5"
      );
      
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );
      
      tl.fromTo(imageRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 1.0, ease: "power2.out" },
        "-=0.7"
      );

      // Desktop-Only ScrollTrigger Parallax for visual depth
      if (!isMobile && imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "THAT SCALE & ENGAGE.",
    "THAT USERS LOVE.",
    "THAT HANDLE MILLIONS.",
    "THAT CONVERT & GROW.",
    "THAT SHIP FAST."
  ];

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      // Delete smoothly character-by-character (40-60ms -> 50ms)
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      // Type character-by-character (70-90ms -> 80ms)
      timer = setTimeout(() => {
        setCurrentText((prev) => currentPhrase.slice(0, prev.length + 1));
      }, 80);
    }

    // Handles pauses and transition states
    if (!isDeleting && currentText === currentPhrase) {
      // Pause for 1.8 seconds upon completion
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden px-6 md:px-12 max-w-[1280px] mx-auto w-full z-10"
    >
      {/* Abstract premium background glow */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0"></div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center z-10">
        
        {/* Text Area */}
        <div className="flex flex-col items-start text-left">
          {/* Status Badge */}
          <div 
            ref={badgeRef}
            className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 px-3 py-1 rounded-sm mb-6 select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            <span className="font-mono text-[10px] text-primary font-bold tracking-widest uppercase">
              OPEN TO WORK
            </span>
          </div>

          {/* Heading */}
          <h1 
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-[62px] font-black text-white leading-[1.15] tracking-tight uppercase select-none"
          >
            <span className="block">I BUILD <span className="text-primary font-mono select-all">SYSTEMS</span></span>
            <span 
              className="text-primary font-mono block min-h-[1.2em] mt-1"
              aria-live="polite"
            >
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                className="ml-1 font-light text-primary"
              >
                |
              </motion.span>
            </span>
          </h1>

          {/* Subtext */}
          <p 
            ref={subtitleRef}
            className="text-foreground-muted text-base sm:text-lg mt-6 leading-relaxed max-w-lg font-light"
          >
            I am Pratik Barua — a Software Engineering student and MERN Stack Developer. Driven by high academic standards and programming excellence via Programming Hero, I build high-performance web platforms and design beautiful dark mode experiences.
          </p>

          {/* Buttons with touch target minimums built-in */}
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
          >
            <PrimaryButton onClick={handleScrollToProjects} className="w-full sm:w-auto">
              VIEW PROJECTS 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </PrimaryButton>
            <OutlineButton onClick={handleScrollToContact} className="w-full sm:w-auto">
              CONNECT NOW
            </OutlineButton>
          </div>
        </div>

        {/* Workspace Visual Container */}
        <div className="relative flex justify-center items-center w-full max-w-[480px] mx-auto md:max-w-[560px] lg:max-w-[620px] md:h-full select-none lg:-mr-8">
          <div 
            ref={imageRef}
            className="relative w-full aspect-square p-[1.5px] overflow-hidden group transition-all duration-300 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.95)] hover:shadow-[0_25px_65px_rgba(255,85,0,0.2)] active:scale-[0.99] border border-white/5 bg-[#080808]/40 backdrop-blur-md"
          >
            {/* Traveling Laser Border Light */}
            <div 
              className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_40%,#FF5500_50%,transparent_60%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
              style={{ transformOrigin: 'center' }}
            ></div>

            {/* Inner Content Block */}
            <div className="relative w-full h-full bg-[#080808]/95 p-2 rounded-[14.5px]">
              <img 
                src="/hero.png" 
                alt="Quantum Coder IDE Holographic Workspace" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
