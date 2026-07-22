import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio.js';

export default function Certifications() {
  return (
    <section id="certifications" className="border-y border-cream/10 bg-charcoal">
      <div className="section-shell !py-16 lg:!py-20">
        <div className="grid gap-8 lg:grid-cols-[.5fr_1.5fr]"><div><p className="eyebrow">Credentials</p><h2 className="mt-3 font-display text-3xl font-semibold">Proof of curiosity.</h2></div><div className="grid gap-3 sm:grid-cols-2">
          {certifications.map((cert, index) => { const Icon = cert.icon; return <motion.div key={cert.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className="flex items-start gap-4 border border-cream/10 p-4"><Icon size={18} className="mt-1 shrink-0 text-acid" /><div><h3 className="text-sm font-semibold leading-6">{cert.title}</h3>{cert.detail && <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-cream/35">{cert.detail}</p>}</div></motion.div>; })}
        </div></div>
      </div>
    </section>
  );
}
