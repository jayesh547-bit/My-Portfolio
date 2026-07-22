import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { contactItems, profile } from '../data/portfolio.js';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-acid text-ink">
      <div className="absolute -right-24 top-0 font-display text-[22rem] font-bold leading-none text-ink/[.035]">J</div>
      <div className="section-shell relative">
        <p className="font-mono text-xs uppercase tracking-[.2em]">Have an idea? Let’s make it real.</p>
        <motion.h2 initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 max-w-6xl font-display text-[clamp(3.7rem,10vw,9rem)] font-semibold leading-[.82] tracking-[-.07em]">LET’S BUILD<br />SOMETHING<br /><span className="text-transparent [-webkit-text-stroke:1.5px_#10100f]">MEMORABLE.</span></motion.h2>

        <div className="mt-14 grid gap-10 border-t border-ink/25 pt-8 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <a href={`mailto:${profile.email}?subject=Project enquiry for Jayesh`} className="focus-ring group inline-flex max-w-full items-center gap-3 break-all font-display text-[clamp(1.1rem,4vw,2.25rem)] font-semibold">{profile.email}<span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-acid transition group-hover:rotate-45"><ArrowUpRight size={20} /></span></a>
            <button onClick={copyEmail} className="focus-ring mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.14em]"><span className="grid h-7 w-7 place-items-center rounded-full border border-ink/25">{copied ? <Check size={13} /> : <Copy size={13} />}</span>{copied ? 'Copied to clipboard' : 'Copy email address'}</button>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            {contactItems.slice(1).map((item) => { const Icon = item.icon; const content = <><Icon size={16} /><span><span className="block font-mono text-[9px] uppercase tracking-[.14em] text-ink/50">{item.label}</span><span className="mt-1 block text-xs font-semibold sm:text-sm">{item.value}</span></span></>; return item.href ? <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="focus-ring flex items-start gap-3 transition hover:opacity-60">{content}</a> : <div key={item.label} className="flex items-start gap-3">{content}</div>; })}
          </div>
        </div>
      </div>
    </section>
  );
}
