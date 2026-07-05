import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <section id="education" className="bg-pearl text-ink">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation in Information Technology."
          copy="A clear education timeline for recruiters to quickly scan qualifications and outcomes."
        />

        <div className="mt-12 border-l border-slate-200 pl-5 sm:pl-8">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={`${item.institution}-${item.program}`}
                className="relative mb-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm last:mb-0"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <span className="absolute -left-[2.95rem] top-5 grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-ocean shadow-sm sm:-left-[3.35rem]">
                  <Icon size={18} />
                </span>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-ink">{item.institution}</h3>
                    <p className="mt-1 font-semibold text-slate-700">{item.program}</p>
                  </div>
                  {item.period ? (
                    <span className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-700">{item.period}</span>
                  ) : null}
                </div>
                <p className="mt-4 text-sm font-semibold text-ocean">{item.result}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
