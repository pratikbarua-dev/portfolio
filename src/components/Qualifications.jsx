"use client";
import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';

const ITEMS = [
  {
    year: '2024 - PRESENT',
    title: 'FOUNDER & CEO / SOFTWARE ENGINEER',
    company: 'SELF-HOSTED OPERATIONS & DEVELOPMENT',
    description: 'I manage self-hosted operations on an Ubuntu Linux mini home server running Docker, Coolify, and Supabase database instances. I build robust MERN stack and Next.js platforms utilizing clean, framework-independent JS/JSX codebase architectures.'
  },
  {
    year: '2026 (JAN - JUN)',
    title: 'MERN STACK LEVEL 1 CERTIFIED',
    company: 'PROGRAMMING HERO WEB DEVELOPMENT',
    description: 'I completed a comprehensive MERN Stack certification covering complete React, Express, Node.js, and MongoDB architectures to engineer highly-scalable web assets.'
  },
  {
    year: '2025 - PRESENT',
    title: 'B.SC. IN SOFTWARE ENGINEERING',
    company: 'DAFFODIL INTERNATIONAL UNIVERSITY (DIU)',
    description: 'I maintain a near-perfect academic track with a 1st Semester CGPA of 4.00, 2nd Semester CGPA of 3.94, and 3rd Semester CGPA of 4.00. I was honored as a recipient of the prestigious MoRPH Fellowship.'
  },
  {
    year: '2026',
    title: 'HULT PRIZE 2026 (DIU) FINALIST',
    company: 'HULT PRIZE FOUNDATION',
    description: 'I advanced to the campus finals at Daffodil International University, showcasing high-impact social entrepreneurship, advanced business models, and high-fidelity technical presentations.'
  },
  {
    year: '2025',
    title: 'DIU AI COMPETITION PARTICIPANT',
    company: 'DAFFODIL INTERNATIONAL UNIVERSITY',
    description: 'I built and successfully presented the "AI Call Center" project, integrating real-time speech synthesis and LLM processing nodes to automate inbound and outbound support operations.'
  }
];

export default function Qualifications() {
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
      id="qualifications" 
      className="py-20 md:py-28 px-6 md:px-12 max-w-[1280px] mx-auto w-full border-t border-border-color z-10 relative"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="w-full"
      >
        {/* Title */}
        <div className="flex flex-col items-start text-left mb-16 max-w-xl">

          <h2 className="text-3xl md:text-4xl font-black uppercase mt-2 tracking-tight">
            QUALIFICATIONS & LOG
          </h2>
          <p className="text-foreground-muted text-sm mt-4 leading-relaxed font-light">
            A log of my architectural accomplishments, academic qualifications, and operational engineering milestones.
          </p>
        </div>

        {/* Timeline flow */}
        <div className="relative w-full flex flex-col items-center">
          {/* Background vertical center line for desktop (handles any spacing gaps) */}
          <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#1A1A1A] -translate-x-1/2 z-0 hidden md:block"></div>

          {ITEMS.map((item, idx) => (
            <TimelineItem
              key={idx}
              index={idx}
              year={item.year}
              title={item.title}
              company={item.company}
              description={item.description}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
