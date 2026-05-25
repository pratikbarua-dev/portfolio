"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    title: 'AI Call Center (Probaho)',
    category: 'TELEPHONY VOICE INTELLIGENCE',
    description: 'An automated, high-concurrency outbound and inbound support console integrating real-time speech-to-text transcription, large language model (LLM) conversational agents, and WebSocket duplex audio streaming.',
    tags: ['Node.js', 'Express', 'LLM Agents', 'WebSockets', 'Twilio Voice', 'React'],
    link: 'https://github.com/pratikbarua-dev/probaho_final_v2',
    repo: 'https://github.com/pratikbarua-dev/probaho_final_v2'
  },
  {
    title: 'Doctease Client Portal',
    category: 'FULL-STACK WEB',
    description: 'A premium medical specialist discovery and multi-step doctor appointment booking platform built on Next.js. Features category filtering, guided scheduling wizards, and state-aware navigation layouts.',
    tags: ['Next.js 15', 'React 19', 'better-auth', 'Tailwind CSS', 'DaisyUI', 'Framer Motion'],
    link: 'https://a-09-frontend.vercel.app',
    repo: 'https://github.com/pratikbarua-dev/a-09-frontend'
  },
  {
    title: 'Doctease Backend API',
    category: 'BACKEND SYSTEM',
    description: 'A robust, modular Node.js backend API featuring Better Auth session tokens, Google OAuth integration, role-based route guards, and high-performance MongoDB connection pooling.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Better Auth', 'JWT', 'JOSE'],
    link: 'https://a-09-frontend.vercel.app',
    repo: 'https://github.com/pratikbarua-dev/a-09-backend'
  },
  {
    title: 'MoRPH CRM cPanel Workflow',
    category: 'DEVOPS / CI-CD',
    description: 'High-fidelity continuous deployment action syncing CRM source updates securely from GitHub to cPanel host roots. Features automatic node building, SSH key validation, and transmission log feeds.',
    tags: ['GitHub Actions', 'YAML', 'cPanel API', 'Bash', 'SSH Keys', 'CI/CD'],
    link: 'https://morphbangladesh.org',
    repo: 'https://github.com/pratikbarua-dev/github-cpanel-workflow'
  },
  {
    title: 'Bookish Library System',
    category: 'WEB PORTAL',
    description: 'A full-stack book borrowing and inventory dashboard featuring session-based credential authentication, search query indexes, and instant one-click borrow tracking.',
    tags: ['Next.js 14', 'React', 'Tailwind CSS', 'API Routes', 'JSON Datastore'],
    link: 'https://ph-b13-a08-mu.vercel.app',
    repo: 'https://github.com/pratikbarua-dev/ph-b13-a08'
  }
];

export default function Projects() {
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
      id="projects" 
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
            ENGINEERING ARCHIVE
          </h2>
          <p className="text-foreground-muted text-sm mt-4 leading-relaxed font-light">
            A selection of highly optimized, complex, and beautiful web products I have crafted from first principles.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              category={project.category}
              description={project.description}
              tags={project.tags}
              link={project.link}
              repo={project.repo}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
