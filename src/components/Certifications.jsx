import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio.js';
import RevealWords from './RevealWords.jsx';

export default function Certifications() {
  return (
    <div className="section-pad !pt-10">
      <div className="section-inner grid gap-8 lg:grid-cols-[.55fr_1.45fr]">
        <div><p className="kicker">Certifications</p><h2 className="mt-4 font-display text-4xl font-black tracking-[-.04em]"><RevealWords text="Proof of curiosity." /></h2></div>
        <div className="grid gap-3 sm:grid-cols-2">{certifications.map((cert, index) => { const Icon = cert.icon; return <motion.div key={cert.title} initial={{ opacity: 0, y: 45, rotateY: index % 2 ? 8 : -8 }} whileInView={{ opacity: 1, y: 0, rotateY: 0 }} viewport={{ once: true }} transition={{ duration: .7, delay: index * .07, ease: [0.16,1,0.3,1] }} className="soft-card flex items-start gap-4 rounded-2xl p-5 transition duration-500 hover:-translate-y-2 hover:bg-acid"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-acid"><Icon size={17} /></span><div><h3 className="text-sm font-bold leading-6">{cert.title}</h3>{cert.detail && <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-ink/40">{cert.detail}</p>}</div></motion.div>; })}</div>
      </div>
    </div>
  );
}
