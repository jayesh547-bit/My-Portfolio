import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { skillGroups } from '../data/portfolio.js';

const ticker = ['RESPONSIVE UI', 'REACT', 'MOTION', 'ACCESSIBILITY', 'CLEAN CODE', 'CREATIVE DEVELOPMENT'];

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden border-y border-cream/10 bg-charcoal">
      <div className="border-b border-cream/10 py-4">
        <div className="marquee-track flex gap-8 pr-8 font-display text-2xl font-semibold text-acid/90">
          {[...ticker, ...ticker].map((item, i) => <span key={`${item}-${i}`} className="flex items-center gap-8 whitespace-nowrap">{item}<span className="text-coral">✦</span></span>)}
        </div>
      </div>
      <div className="section-shell">
        <SectionHeader eyebrow="Toolbox / 2026" title="Tools I use to move from idea to interface." copy="A front-end focused toolkit, with enough backend knowledge to understand the full journey of a modern web product." />
        <div className="mt-14 grid border-l border-t border-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article key={group.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="group min-h-72 border-b border-r border-cream/10 p-6 transition hover:bg-cream/[.04] sm:p-8">
                <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-cream/35">0{index + 1}</span><Icon size={22} className="text-acid transition group-hover:rotate-6" /></div>
                <h3 className="mt-12 font-display text-2xl font-semibold">{group.title}</h3>
                <ul className="mt-6 space-y-3">{group.skills.map((skill) => <li key={skill} className="flex items-center gap-3 text-sm text-cream/55"><span className="h-px w-4 bg-coral" />{skill}</li>)}</ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
