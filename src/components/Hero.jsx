import { motion } from 'framer-motion';
import { ArrowDownRight, Download, Mail, Sparkles } from 'lucide-react';
import { heroBadges, profile } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(7,17,31,0.78),rgba(11,23,40,0.96)),url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
      <div className="absolute left-[8%] top-28 -z-10 h-56 w-56 rounded-full bg-aqua/20 blur-3xl" />
      <div className="absolute bottom-16 right-[12%] -z-10 h-64 w-64 rounded-full bg-champagne/[0.16] blur-3xl" />

      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur">
            <Sparkles size={16} className="text-champagne" />
            Available for front-end opportunities
          </div>
          <h1 className="mt-8 text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-aqua">Jayesh Mehra</span>
          </h1>
          <p className="mt-5 text-2xl font-semibold text-champagne sm:text-3xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            I build clean, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, React, and modern
            front-end tools.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-aqua px-5 py-3 text-sm font-bold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
            >
              View Projects <ArrowDownRight size={18} />
            </a>
            <a
              href="/Jayesh-Mehra-Resume.pdf"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/[0.14] bg-white/[0.08] px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[0.14]"
            >
              Download Resume <Download size={18} />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-champagne/50 px-5 py-3 text-sm font-bold text-champagne transition hover:-translate-y-0.5 hover:bg-champagne hover:text-ink"
            >
              Contact Me <Mail size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 text-sm text-slate-200">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
          className="glass-panel relative mx-auto w-full max-w-md rounded-lg p-5"
        >
          <div className="rounded-md border border-white/10 bg-ink/[0.72] p-5">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-champagne" />
              <span className="h-3 w-3 rounded-full bg-aqua" />
            </div>
            <div className="space-y-4 font-mono text-sm leading-7 text-slate-300">
              <p><span className="text-aqua">const</span> developer = {'{'}</p>
              <p className="pl-4">name: <span className="text-white">&apos;Jayesh Mehra&apos;</span>,</p>
              <p className="pl-4">role: <span className="text-white">&apos;Front-End Developer&apos;</span>,</p>
              <p className="pl-4">focus: <span className="text-white">&apos;Responsive React UI&apos;</span>,</p>
              <p className="pl-4">location: <span className="text-white">&apos;Jaipur&apos;</span></p>
              <p>{'};'}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
