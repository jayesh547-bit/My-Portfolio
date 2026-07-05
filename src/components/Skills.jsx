import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="relative bg-midnight">
      <div className="section-shell">
        <SectionHeader
          center
          eyebrow="Skills"
          title="A practical toolkit for building polished web interfaces."
          copy="A focused front-end foundation, supported by development workflows, platform basics, and tools used in real projects."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                className="glass-panel rounded-lg p-6 transition hover:-translate-y-1 hover:border-aqua/[0.35]"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-aqua/[0.12] text-aqua">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-xl font-bold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-white/10 bg-white/[0.08] px-3 py-2 text-sm text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
