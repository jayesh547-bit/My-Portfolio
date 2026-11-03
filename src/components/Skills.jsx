import { motion } from 'framer-motion';
import { capabilities, skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="bg-sand lg:pl-[19rem]">
      <div className="section-pad">
        <div className="section-inner">
          {/* Section Header */}
          <div className="border-b border-ink/15 pb-10 text-center">
            <p className="kicker">04 / Capabilities & Toolkit</p>
            <h2 className="mx-auto mt-4 max-w-5xl font-display text-[clamp(2.75rem,7vw,7.5rem)] font-black leading-[.85] tracking-[-.075em] text-ink">
              Architecture, Interaction & Precision.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
              A breakdown of what I can build for your business or team, followed by the specific frontend technologies I use to deliver responsive, maintainable websites.
            </p>
          </div>

          {/* Capabilities List */}
          <div id="what-i-do" className="mt-12 scroll-mt-8">
            <div className="mb-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink/50">
                Core Engineering Capabilities
              </h3>
            </div>
            {capabilities.map(({ title, copy, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: index % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group grid gap-4 border-b border-ink/15 py-7 sm:grid-cols-[70px_1.2fr_1.8fr_60px] sm:items-center"
              >
                <span className="font-mono text-xs font-medium text-ink/40">0{index + 1}</span>
                <h4 className="font-display text-xl font-black tracking-[-.03em] text-ink sm:text-2xl">
                  {title}
                </h4>
                <p className="text-sm leading-relaxed text-ink/70">
                  {copy}
                </p>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-acid transition duration-500 group-hover:rotate-12 group-hover:scale-105">
                  <Icon size={20} />
                </span>
              </motion.article>
            ))}
          </div>

          {/* Toolkit Section */}
          <motion.div
            id="toolkit"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85 }}
            className="mt-20 scroll-mt-8 rounded-[2rem] bg-acid p-6 sm:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[.6fr_1.4fr]">
              <div>
                <p className="kicker text-ink/70">Frontend Toolkit</p>
                <h3 className="mt-3 font-display text-4xl font-black leading-[.92] tracking-[-.06em] text-ink sm:text-5xl">
                  Tools Behind The Code.
                </h3>
                <p className="mt-4 text-xs font-medium leading-relaxed text-ink/75 sm:text-sm">
                  Instead of an arbitrary list, here is how each layer supports the production websites I engineer—from structure and styling to fluid interactions.
                </p>
              </div>

              {/* Skill Groups Grid (Excludes Git & GitHub per instructions) */}
              <div className="grid gap-4 sm:grid-cols-2">
                {skillGroups.map(({ title, icon: Icon, purpose, skills }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex flex-col justify-between rounded-2xl border border-ink/15 bg-sand/85 p-5 shadow-sm transition hover:bg-sand"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-acid">
                          <Icon size={18} />
                        </span>
                        <h4 className="font-display text-base font-extrabold text-ink">{title}</h4>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-ink/70">{purpose}</p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-ink/10">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-paper px-2.5 py-1.5 font-mono text-[10px] font-bold text-ink"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
