import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import RevealWords from './RevealWords.jsx';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => { if (!navigator.clipboard) return; await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); };
  return (
    <section id="contact" className="relative overflow-hidden bg-sand lg:pl-[19rem]">
      <div className="section-pad relative">
        <motion.div initial={{ opacity: 0, y: 80, scale: .96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .15 }} transition={{ duration: 1, ease: [0.16,1,0.3,1] }} className="section-inner relative overflow-hidden rounded-[2rem] bg-acid p-6 shadow-float sm:p-10 lg:p-14">
          <div className="absolute -right-16 -top-24 font-display text-[28rem] font-black leading-none text-ink/[.04]">J</div>
          <p className="kicker relative">Have something in mind?</p>
          <h2 className="relative mt-6 font-display text-[clamp(4rem,10vw,9rem)] font-black leading-[.78] tracking-[-.075em]"><RevealWords text="LET'S MAKE" /><br /><span className="text-transparent [-webkit-text-stroke:2px_#11110f]"><RevealWords text="IT REAL." delay={.12} /></span></h2>
          <div className="relative mt-16 grid gap-10 border-t border-ink/25 pt-8 lg:grid-cols-[1.2fr_.8fr]">
            <div><a href={`mailto:${profile.email}?subject=Project enquiry for Jayesh`} className="focus-ring group inline-flex max-w-full items-center gap-3 break-all font-display text-[clamp(1.15rem,4vw,2.5rem)] font-black">{profile.email}<span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-acid transition group-hover:rotate-45"><ArrowUpRight size={21} /></span></a><button onClick={copyEmail} className="focus-ring mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.14em]"><span className="grid h-8 w-8 place-items-center rounded-lg border border-ink/25">{copied ? <Check size={13} /> : <Copy size={13} />}</span>{copied ? 'Copied' : 'Copy email address'}</button></div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">{[[Linkedin,'LinkedIn',profile.linkedin],[Github,'GitHub',profile.github],[Mail,'Email me',`mailto:${profile.email}`]].map(([Icon,label,href], index) => <motion.a key={label} initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-ink/20 p-4 font-display text-sm font-bold transition hover:bg-ink hover:text-acid"><span className="flex items-center gap-3"><Icon size={17} />{label}</span><ArrowUpRight size={16} /></motion.a>)}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
