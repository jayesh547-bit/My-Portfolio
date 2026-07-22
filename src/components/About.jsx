import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { highlights } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="bg-paper text-ink">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader dark eyebrow="About / Approach" title="Design-minded. Code-driven. Always learning." copy="I’m an Information Technology graduate who enjoys the space where visual design meets engineering. I care about the small details—spacing, type, motion, speed—because together they shape how a website feels." />
            <p className="mt-8 max-w-xl border-l-2 border-coral pl-5 text-sm leading-7 text-ink/60">Currently sharpening my React ecosystem skills and building real projects that solve practical business problems.</p>
          </div>
          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .08 }} className="group grid gap-5 border-t border-ink/20 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-start">
                  <span className="font-mono text-xs text-ink/35">{item.number}</span>
                  <div><h3 className="font-display text-2xl font-semibold tracking-tight">{item.title}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-ink/60">{item.description}</p></div>
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 transition group-hover:rotate-6 group-hover:bg-ink group-hover:text-acid"><Icon size={20} /></span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
