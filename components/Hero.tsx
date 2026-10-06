'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, Code, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 relative bg-zinc-950"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-emerald-400 tracking-wide uppercase">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Name & Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
        >
          Building clean, performant <br className="hidden sm:inline" />
          <span className="text-zinc-400">
            & user-centered web applications.
          </span>
        </motion.h1>

        {/* Roles / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider"
        >
          <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800">
            Front-End Developer
          </span>
          <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800">
            UI/UX Designer
          </span>
          <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800">
            Branding
          </span>
        </motion.div>

        {/* Short Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed"
        >
          I combine UI/UX principles, branding identity, and modern front-end
          tech to craft fast, responsive, and intuitive digital experiences.
        </motion.p>

        {/* CTA Buttons & Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="flex items-center space-x-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400 transition-colors text-sm"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-zinc-800 text-zinc-300 font-semibold hover:bg-zinc-900 transition-colors text-sm"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center space-x-3 pt-2 sm:pt-0 sm:pl-4 sm:border-l sm:border-zinc-800">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Code size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Globe size={18} />
            </a>
            <a
              href="#contact"
              className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="Email Me"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-emerald-400 transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
