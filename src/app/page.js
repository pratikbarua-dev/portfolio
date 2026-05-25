"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Qualifications from "@/components/Qualifications";
import Projects from "@/components/Projects";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after 2.4 seconds, perfectly matching the high-tech progress loading duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden">
        {/* Sticky Premium Navigation */}
        <Navigation />

        {/* Main Page Flow */}
        <main className="flex-1 w-full flex flex-col items-center relative z-10">
          
          {/* Dynamic Colorful Glassmorphism Background Glow Blobs */}
          <div className="absolute top-[2%] left-[-15%] w-[450px] h-[450px] rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10"></div>
          <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] rounded-full bg-purple-600/5 blur-[140px] pointer-events-none -z-10"></div>
          <div className="absolute top-[40%] left-[-20%] w-[550px] h-[550px] rounded-full bg-amber-600/8 blur-[150px] pointer-events-none -z-10"></div>
          <div className="absolute top-[65%] right-[-15%] w-[500px] h-[500px] rounded-full bg-primary/6 blur-[120px] pointer-events-none -z-10"></div>
          <div className="absolute top-[85%] left-[-10%] w-[480px] h-[480px] rounded-full bg-purple-600/8 blur-[130px] pointer-events-none -z-10"></div>
          
          {/* Section 1: Hero Area with GSAP sequence */}
          <Hero />



          {/* Section 3: About & Skills Stack with Framer Motion reveal */}
          <About />

          {/* Section 4: Vertical Timeline for Education/Experience */}
          <Qualifications />

          {/* Section 5: Responsive Projects Grid */}
          <Projects />

          {/* Section 6: High-contrast Contact Form & Footer */}
          <ContactFooter />
        </main>
      </div>
    </>
  );
}
