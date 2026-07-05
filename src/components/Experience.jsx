import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  const Icon = experience.icon;

  return (
    <section id="experience" className="bg-ink">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Experience"
            title="Salesforce training with hands-on platform fundamentals."
            copy="A fresher-friendly training experience focused on learning the platform honestly and applying the basics in a small working application."
          />

          <motion.article
            className="glass-panel rounded-lg p-6 sm:p-8"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-champagne/[0.14] text-champagne">
                <Icon size={28} />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-aqua">{experience.duration}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{experience.title}</h3>
                <p className="mt-1 text-lg font-semibold text-champagne">{experience.organization}</p>
                <p className="mt-5 text-base leading-8 text-slate-300">{experience.description}</p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
