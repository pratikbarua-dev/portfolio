"use client";
import React from 'react';

export default function ProjectCard({ title, category, description, tags, image, link, repo }) {
  return (
    <div className="group relative min-h-[440px] bg-[#0A0A0A]/35 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between p-8 transition-all duration-300 ease-in-out hover:border-primary/40 hover:scale-[1.01] hover:shadow-[0_25px_60px_rgba(255,85,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)] select-none">
      
      {/* Background Image Accent */}
      {image && (
        <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-5 group-hover:scale-105 transition-all duration-500 ease-out pointer-events-none">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* #FF5500 Primary Color Translucent Frosted Glass Hover Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,85,0,0.94),rgba(255,40,0,0.94))] backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10 flex flex-col justify-between p-8 pointer-events-none group-hover:pointer-events-auto shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
        <div className="flex flex-col">
          <span className="self-start font-mono text-[10px] text-white font-bold uppercase tracking-widest bg-white/15 border border-white/20 px-2.5 py-0.5 rounded-full">
            {category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white mt-4 tracking-tight leading-tight uppercase font-sans">
            {title}
          </h3>
          <p className="text-white/95 text-xs sm:text-sm mt-3 leading-relaxed font-light">
            {description}
          </p>
        </div>
        
        <div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tags && tags.map((tag) => (
              <span key={tag} className="font-mono text-[9px] text-white border border-white/20 bg-white/10 px-2 py-0.5 rounded-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="w-full h-10 bg-white text-primary font-mono text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-200 hover:bg-neutral hover:text-white active:scale-[0.97] cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.25)]">
                Live Demo
              </button>
            </a>
            {repo && (
              <a 
                href={repo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="w-full h-10 bg-transparent text-white border border-white/30 font-mono text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-200 hover:bg-white/15 hover:border-white active:scale-[0.97] cursor-pointer">
                  Code
                </button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Default (Non-Hovered) Visual State */}
      <div className="relative z-0 flex flex-col h-full justify-between group-hover:opacity-0 group-hover:invisible transition-all duration-300">
        <div>
          <div className="flex justify-between items-start">
            <span className="font-mono text-[10px] text-primary font-bold uppercase tracking-wider bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
              {category}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white mt-4 tracking-tight uppercase group-hover:text-primary transition-colors duration-200 font-sans">
            {title}
          </h3>
          
          <p className="text-foreground-muted text-xs sm:text-sm mt-3 leading-relaxed font-light">
            {description}
          </p>
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags && tags.slice(0, 4).map((tag) => (
              <span key={tag} className="font-mono text-[9px] text-foreground-muted bg-[#111]/40 border border-[#222] px-2 py-0.5 rounded-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[10px] text-primary font-bold uppercase tracking-wider">
            EXPLORE PROJECT
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}
