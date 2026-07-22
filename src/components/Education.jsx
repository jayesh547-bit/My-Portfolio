import { motion } from 'framer-motion';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <section id="education" className="bg-charcoal">
      <div className="section-shell !py-16 lg:!py-20">
        <div className="mb-8 flex items-end justify-between border-b border-cream/10 pb-5"><h2 className="font-display text-2xl font-semibold">Education</h2><span className="font-mono text-[10px] uppercase tracking-[.15em] text-cream/35">Foundation / Timeline</span></div>
        <div>
          {education.map((item, index) => {
            const Icon = item.icon;
            return <motion.article key={item.program} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="grid gap-4 border-b border-cream/10 py-6 sm:grid-cols-[55px_1.3fr_1fr_auto] sm:items-center"><span className="font-mono text-[10px] text-acid">0{index + 1}</span><div><h3 className="font-display text-lg font-semibold">{item.program}</h3><p className="mt-1 text-xs text-cream/40">{item.institution}</p></div><span className="font-mono text-[10px] uppercase tracking-wider text-cream/45">{item.period}</span><span className="flex items-center gap-2 font-display text-xl"><Icon size={16} className="text-coral" />{item.result}</span></motion.article>;
          })}
        </div>
      </div>
    </section>
  );
}
