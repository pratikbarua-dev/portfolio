"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from './BrandLogo';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'TIMELINE', href: '#qualifications' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we are at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPos = window.scrollY + 120;
      let detectedSection = null;

      for (const item of NAV_ITEMS) {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = el.offsetHeight;

          if (item.href === '#about') {
            if (scrollPos >= top && scrollPos < top + height * 0.4) {
              detectedSection = 'about';
            }
          } else if (item.href === '#skills') {
            const aboutEl = document.querySelector('#about');
            if (aboutEl) {
              const aRect = aboutEl.getBoundingClientRect();
              const aTop = aRect.top + window.scrollY;
              const aHeight = aboutEl.offsetHeight;
              if (scrollPos >= aTop + aHeight * 0.4 && scrollPos < aTop + aHeight) {
                detectedSection = 'skills';
              }
            }
          } else {
            if (scrollPos >= top && scrollPos < top + height) {
              detectedSection = item.href.replace('#', '');
            }
          }
        }
      }

      if (detectedSection) {
        setActiveSection(detectedSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 glass-nav z-50 flex items-center justify-between px-6 md:px-12 select-none">
        {/* Brand / Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')} 
          className="font-sans text-xl font-black tracking-tight text-white flex items-center gap-2.5 cursor-pointer uppercase select-none"
        >
          <BrandLogo className="w-7 h-7" />
          <span>PRATIK <span className="text-primary">BARUA</span></span>
        </a>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-8 py-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="font-mono text-[11px] tracking-widest uppercase transition-all duration-200 relative py-1 cursor-pointer select-none"
              >
                <span className={`transition-colors duration-200 ${isActive ? 'text-primary font-bold' : 'text-foreground-muted hover:text-white'}`}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full shadow-[0_0_8px_#FF5500]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
            <button className="h-9 px-4 border border-primary text-primary hover:bg-primary hover:text-white font-mono text-[10px] font-bold tracking-widest uppercase transition-all duration-200 active:scale-[0.97] cursor-pointer rounded-sm">
              GET IN TOUCH
            </button>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden flex flex-col justify-center items-end w-8 h-8 gap-1.5 z-50 focus:outline-none cursor-pointer"
        >
          <span className={`h-0.5 bg-white transition-all duration-300 rounded-full ${isMenuOpen ? 'w-6 translate-y-[8px] rotate-45' : 'w-6'}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 rounded-full ${isMenuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 rounded-full ${isMenuOpen ? 'w-6 translate-y-[-8px] -rotate-45' : 'w-5'}`} />
        </button>
      </nav>

      {/* Mobile Drawer (frosted backdrop blur) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#050505]/75 backdrop-blur-xl border-b border-white/5 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`font-mono text-lg tracking-widest uppercase transition-all duration-200 ${
                    isActive ? 'text-primary font-bold' : 'text-foreground-muted hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
