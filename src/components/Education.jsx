import { motion } from 'framer-motion';
import { education } from '../data/portfolio.js';
import RevealWords from './RevealWords.jsx';

export default function Education() {
  return (
    <div className="section-pad !pb-10">
      <motion.div initial={{ opacity: 0, y: 70, scale: .97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .9, ease: [0.16,1,0.3,1] }} className="section-inner soft-card rounded-[2rem] p-5 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 border-b border-ink/15 pb-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="kicker">Credentials / education</p><h2 className="mt-3 font-display text-5xl font-black tracking-[-.05em] sm:text-7xl"><RevealWords text="The foundation." /></h2></div><p className="max-w-sm text-xs leading-6 text-ink/50">Formal education supported by constant self-learning and practical frontend builds.</p></div>
        <div>{education.map((item, index) => { const Icon = item.icon; return <motion.article key={item.program} initial={{ opacity: 0, x: index % 2 ? 45 : -45 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .65, delay: index * .08 }} className="group grid gap-4 border-b border-ink/10 py-6 transition last:border-0 sm:grid-cols-[50px_1.4fr_1fr_auto] sm:items-center"><span className="font-mono text-[10px] text-ink/40">0{index + 1}</span><div><h3 className="font-display text-lg font-bold">{item.program}</h3><p className="mt-1 text-xs text-ink/45">{item.institution}</p></div><span className="font-mono text-[10px] uppercase tracking-wider text-ink/45">{item.period}</span><span className="flex items-center gap-2 rounded-xl px-3 py-2 font-display text-xl font-black transition group-hover:bg-acid"><Icon size={16} />{item.result}</span></motion.article>; })}</div>
      </motion.div>
    </div>
  );
}
