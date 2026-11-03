import { motion } from 'framer-motion';
import { education } from '../data/portfolio.js';
import RevealWords from './RevealWords.jsx';

export default function Education() {
  return (
    <div className="section-pad !pb-8">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="section-inner soft-card rounded-[2rem] p-5 sm:p-8 lg:p-10"
      >
        <div className="flex flex-col gap-4 border-b border-ink/15 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker">Credentials / Education</p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-[-.05em] text-ink sm:text-6xl">
              <RevealWords text="Academic Foundation." />
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-ink/70 sm:text-sm sm:text-right">
            Formal computer science and IT degree supported by deliberate frontend specialization and real-world project builds.
          </p>
        </div>

        <div className="mt-4">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.program}
                initial={{ opacity: 0, x: index % 2 ? 35 : -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group grid gap-4 border-b border-ink/10 py-6 transition last:border-0 sm:grid-cols-[50px_1.5fr_1fr_auto] sm:items-center"
              >
                <span className="font-mono text-xs font-semibold text-ink/40">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink sm:text-xl">{item.program}</h3>
                  <p className="mt-1 text-xs font-medium text-ink/65">{item.institution}</p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-ink/60">{item.highlight}</p>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-ink/50">{item.period}</span>
                <span className="flex items-center gap-2 rounded-xl bg-ink/5 px-3 py-2 font-display text-base font-black text-ink transition group-hover:bg-acid sm:text-lg">
                  <Icon size={16} />
                  {item.result}
                </span>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
