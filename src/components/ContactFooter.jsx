"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PrimaryButton from './PrimaryButton';
import BrandLogo from './BrandLogo';

export default function ContactFooter() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SENDING');

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
    
    // Format a beautifully structured Markdown message for Telegram
    const telegramMessage = `📬 *New Portfolio Message Submission*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📧 *Email:* ${form.email}\n\n` +
      `💬 *Message:*\n${form.message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      });

      if (response.ok) {
        setStatus('SENT');
        setShowSuccessModal(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error('Telegram dispatch error:', error);
      setStatus('ERROR');
    } finally {
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <footer className="w-full bg-[#050505] relative z-10">
      
      {/* Contact Form Section wrapped in a majestic Bento Glass console */}
      <section 
        id="contact" 
        className="py-20 md:py-28 px-6 md:px-12 max-w-[1280px] mx-auto w-full border-t border-white/5"
      >
        <div className="bg-[#0A0A0A]/35 backdrop-blur-xl border border-white/5 hover:border-primary/20 p-8 sm:p-12 md:p-16 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[0_35px_80px_rgba(255,85,0,0.08)] relative overflow-hidden transition-all duration-300 select-none">
          {/* Futuristic internal ambient glow circles */}
          <div className="absolute top-[-80px] right-[-80px] w-72 h-72 rounded-full bg-primary/3 blur-[90px] pointer-events-none"></div>
          <div className="absolute bottom-[-80px] left-[-80px] w-72 h-72 rounded-full bg-primary/2 blur-[90px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            
            {/* Informational Column (spans 5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <h2 className="text-3xl md:text-4xl font-black uppercase mt-2 tracking-tight text-white">
                GET IN TOUCH
              </h2>
              <p className="text-foreground-muted text-sm mt-4 leading-relaxed font-light max-w-md">
                Have a complex technical project, an open engineering position, or just want to chat about performance architectures? Drop me a line. I'll get back to you as soon as possible.
              </p>

              <div className="mt-8 flex flex-col gap-5 w-full font-sans text-sm text-foreground-muted">
                {/* Email Row */}
                <div className="flex items-center gap-4 border-b border-white/5 pb-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-foreground-muted/50 uppercase block mb-0.5">Email Address</span>
                    <a href="mailto:baruaprathik06@gmail.com" className="text-white hover:text-primary transition-colors duration-200 font-medium">
                      baruaprathik06@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone & WhatsApp Row */}
                <div className="flex items-center gap-4 border-b border-white/5 pb-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-foreground-muted/50 uppercase block mb-0.5">Phone & WhatsApp</span>
                    <a href="https://wa.me/8801851407301" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors duration-200 font-medium">
                      +8801851407301
                    </a>
                  </div>
                </div>

                {/* GitHub Row */}
                <div className="flex items-center gap-4 border-b border-white/5 pb-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-foreground-muted/50 uppercase block mb-0.5">GitHub Profile</span>
                    <a href="https://github.com/pratikbarua-dev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors duration-200 font-medium">
                      github.com/pratikbarua-dev
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column - Holographic inputs (spans 7 cols) */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 w-full flex flex-col gap-6 select-text">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {/* Name field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs text-foreground-muted uppercase tracking-wider font-semibold text-left">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="h-12 w-full bg-black/40 border border-white/10 focus:border-primary/50 focus:outline-none px-4 rounded-xl text-sm text-white placeholder:text-foreground-muted/30 transition-all duration-300 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(255,85,0,0.05)] font-sans"
                  />
                </div>
                {/* Email field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs text-foreground-muted uppercase tracking-wider font-semibold text-left">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="h-12 w-full bg-black/40 border border-white/10 focus:border-primary/50 focus:outline-none px-4 rounded-xl text-sm text-white placeholder:text-foreground-muted/30 transition-all duration-300 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(255,85,0,0.05)] font-sans"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs text-foreground-muted uppercase tracking-wider font-semibold text-left">
                  Message
                </label>
                <textarea 
                  name="message" 
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full bg-black/40 border border-white/10 focus:border-primary/50 focus:outline-none p-4 rounded-xl text-sm text-white placeholder:text-foreground-muted/30 transition-all duration-300 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(255,85,0,0.05)] resize-none font-sans"
                />
              </div>

              <PrimaryButton 
                type="submit" 
                disabled={status === 'SENDING' || status === 'SENT'}
                className="w-full sm:self-start select-none"
              >
                {status === 'SENDING' ? 'Sending...' : status === 'SENT' ? 'Message Sent Successfully' : status === 'ERROR' ? 'Submission Failed. Try again.' : 'Send Message'}
              </PrimaryButton>
            </form>

          </div>
        </div>
      </section>

      {/* Minimalist Pure Black Footer */}
      <div className="w-full bg-black py-16 flex flex-col items-center justify-center gap-6 select-none border-t border-[#111] select-none">
        <BrandLogo className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
        
        {/* Social Links */}
        <div className="flex items-center justify-center gap-8 text-white/60">
          <a 
            href="https://github.com/pratikbarua-dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-all duration-300 hover:text-primary hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://wa.me/8801851407301" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-all duration-300 hover:text-primary hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]"
            aria-label="WhatsApp"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.21 1.454 4.857 1.455 5.425 0 9.839-4.417 9.843-9.843.002-2.63-1.023-5.101-2.886-6.967C16.635 1.83 14.161.806 11.536.806 6.113.806 1.701 5.218 1.697 10.643c-.001 1.734.485 3.426 1.402 4.933l-.973 3.553 3.642-.955H6.647zM17.11 14.6c-.28-.14-1.657-.818-1.914-.912-.258-.094-.446-.14-.633.14-.188.28-.728.912-.89 1.092-.162.18-.323.2-.603.06-.28-.14-1.18-.435-2.247-1.393-.83-.74-1.39-1.655-1.552-1.935-.163-.28-.017-.43.123-.57.127-.127.28-.327.42-.49.14-.163.18-.28.28-.467.094-.188.047-.35-.023-.49-.07-.14-.633-1.528-.867-2.09-.228-.547-.46-.473-.633-.482-.163-.008-.35-.01-.54-.01-.19 0-.498.07-.758.35-.26.28-1 .98-1 2.394 0 1.414 1.029 2.78 1.17 2.97.14.19 2.025 3.093 4.907 4.335.685.295 1.22.472 1.637.604.688.218 1.314.187 1.81.113.552-.082 1.657-.677 1.89-1.332.234-.655.234-1.218.163-1.332-.07-.113-.258-.19-.54-.33z"/>
            </svg>
          </a>
          <a 
            href="mailto:baruaprathik06@gmail.com" 
            className="transition-all duration-300 hover:text-primary hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]"
            aria-label="Email"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
            </svg>
          </a>
        </div>

        <p className="font-mono text-[9px] text-foreground-muted/40 mt-2 uppercase tracking-widest">
          © {new Date().getFullYear()} PRATIK BARUA. ALL RIGHTS RESERVED.
        </p>
      </div>

      {/* Premium Glassmorphism Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 max-w-sm w-full relative shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_50px_rgba(255,85,0,0.04)] overflow-hidden select-none font-sans text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Soft ambient glow blobs inside card */}
              <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-primary/10 blur-[40px] pointer-events-none"></div>

              {/* Glowing Checked Icon */}
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 border border-primary flex items-center justify-center text-primary mb-6 shadow-[0_0_15px_rgba(255,85,0,0.15)]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Title & Subtext */}
              <h3 className="text-white text-xl font-black uppercase tracking-tight mb-2">
                MESSAGE DISPATCHED
              </h3>
              <p className="text-foreground-muted text-xs leading-relaxed font-light mb-6">
                Thank you for reaching out. Your transmission was securely routed. Pratik will respond as soon as possible.
              </p>

              {/* Close Action Button */}
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 border border-white/10 bg-white/5 hover:bg-primary hover:border-primary text-white transition-all duration-200 rounded-lg text-xs font-bold tracking-widest uppercase cursor-pointer"
              >
                DISMISS
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
}
