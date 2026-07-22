import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Download, MapPin } from 'lucide-react';
import { heroBadges, profile } from '../data/portfolio.js';

const reveal = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section id="home" className="grid-lines relative min-h-screen overflow-hidden border-b border-cream/10 pt-20">
      <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-acid/[.08] blur-[120px]" />
      <div className="section-shell flex min-h-[calc(100vh-5rem)] flex-col justify-center pb-10 pt-16 lg:pb-16">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: .1 }}>
          <motion.div variants={reveal} className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-cream/10 py-3 font-mono text-[10px] uppercase tracking-[.18em] text-cream/50">
            <span className="flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-acid" /> Available for work</span>
            <span className="flex items-center gap-2"><MapPin size={13} /> Jaipur, India · Remote friendly</span>
          </motion.div>

          <motion.p variants={reveal} className="font-mono text-xs uppercase tracking-[.22em] text-acid">Frontend developer / Creative builder</motion.p>
          <motion.h1 variants={reveal} className="mt-5 max-w-7xl font-display text-[clamp(3rem,12vw,11rem)] font-semibold leading-[.8] tracking-[-.07em] text-cream">
            I BUILD<br /><span className="ml-[8vw] text-transparent [-webkit-text-stroke:1.5px_#f3efe4]">DIGITAL</span><br />EXPERIENCES<span className="text-acid">.</span>
          </motion.h1>

          <motion.div variants={reveal} className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div className="flex flex-wrap gap-2">
              {heroBadges.map((badge) => <span key={badge} className="rounded-full border border-cream/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[.12em] text-cream/70">{badge}</span>)}
            </div>
            <div>
              <p className="max-w-xl text-lg leading-8 text-cream/65 sm:text-xl">I’m {profile.name}. I turn ideas into fast, responsive websites with bold visuals, clean code, and interactions that feel alive.</p>
              <div className="mt-7 flex flex-wrap gap-6">
                <a href="#projects" className="focus-ring inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 font-mono text-xs font-medium uppercase tracking-[.12em] text-ink transition hover:scale-[1.03]">Explore work <ArrowDownRight size={17} /></a>
                <a href="/Jayesh-Mehra-Resume.pdf" download className="line-button text-cream">Resume <Download size={15} /></a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <a href="#about" className="focus-ring absolute bottom-8 left-5 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[.14em] text-cream/40 sm:flex lg:left-12">Scroll to discover <ArrowUpRight className="rotate-90" size={14} /></a>
    </section>
  );
}
