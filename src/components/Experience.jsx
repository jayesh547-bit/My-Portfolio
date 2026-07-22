import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  const Icon = experience.icon;
  return (
    <section id="experience" className="border-t border-cream/10 bg-ink">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <SectionHeader eyebrow="Journey / Experience" title="Learning by building real things." copy="I’m at the start of my professional journey, bringing curiosity, consistency, and an honest appetite to improve." />
          <motion.article initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border-t border-cream/20 pt-7">
            <div className="flex gap-5"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-acid text-ink"><Icon size={20} /></span><div><div className="flex flex-wrap items-center gap-3"><span className="font-mono text-[10px] uppercase tracking-[.15em] text-acid">{experience.duration}</span><span className="h-px w-8 bg-cream/20" /><span className="font-mono text-[10px] uppercase tracking-[.15em] text-cream/40">Training</span></div><h3 className="mt-4 font-display text-3xl font-semibold">{experience.title}</h3><p className="mt-2 text-coral">{experience.organization}</p><p className="mt-6 max-w-2xl text-sm leading-7 text-cream/55">{experience.description}</p></div></div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
