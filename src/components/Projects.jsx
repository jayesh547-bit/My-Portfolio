import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import TiltCard from './TiltCard.jsx';

export default function Projects() {
  return (
    <section id="projects" className="relative bg-sand lg:pl-[19rem]">
      <div className="overflow-hidden rounded-t-[2.5rem] bg-ink text-sand sm:rounded-t-[4rem]">
        <div className="section-pad">
          <div className="section-inner">
            <div className="grid gap-6 border-b border-sand/15 pb-10 lg:grid-cols-[1fr_.75fr] lg:items-end">
              <div>
                <p className="kicker text-acid">03 / Featured Projects</p>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mt-4 font-display text-[clamp(3.5rem,7.5vw,7.5rem)] font-black leading-[.85] tracking-[-.075em] text-sand"
                >
                  Built to Perform.
                </motion.h2>
              </div>
              <p className="max-w-lg text-sm leading-relaxed text-sand/75">
                Two live web applications designed with distinct brand identities and engineered with React, Tailwind CSS, and modern interaction libraries.
              </p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.85, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <TiltCard
                    as="article"
                    maxTilt={6}
                    perspective={1200}
                    glare={true}
                    glareOpacity={0.14}
                    className="group flex h-full flex-col rounded-[2rem] border border-sand/15 bg-white/[0.035] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-colors duration-300 hover:border-sand/30 hover:bg-white/[0.055] sm:p-6 [transform-style:preserve-3d]"
                  >
                    {/* Project Image Preview with 3D Pop */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block overflow-hidden rounded-[1.35rem] focus-ring [transform:translateZ(18px)]"
                      aria-label={`View live site for ${project.title}`}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} — ${project.category}`}
                        width="2048"
                        height="1153"
                        className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                      <span className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-acid text-ink shadow-lg transition duration-500 group-hover:rotate-45 group-hover:scale-105">
                        <ArrowUpRight size={20} />
                      </span>
                    </a>

                    {/* Project Header */}
                    <div className="mt-6 [transform:translateZ(24px)]">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-acid">
                          {project.number} / {project.category}
                        </span>
                      </div>

                      <h3 className="mt-2 font-display text-3xl font-black tracking-[-.04em] text-sand sm:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-2 font-medium text-sm leading-relaxed text-sand/85">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Case Study Details */}
                    <div className="mt-6 flex-1 space-y-4 border-t border-sand/10 pt-5 [transform:translateZ(16px)]">
                      <div>
                        <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-sand/60">
                          The Need & Solution
                        </h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-sand/80">
                          {project.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-sand/60">
                          Technical Architecture
                        </h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-sand/80">
                          {project.technicalDetails}
                        </p>
                      </div>

                      {/* Features explore */}
                      <div>
                        <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-sand/60">
                          Key Implemented Features
                        </h4>
                        <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                          {project.exploreFeatures.map((feat) => (
                            <li key={feat} className="flex items-center gap-2 text-[11px] text-sand/75">
                              <CheckCircle2 size={13} className="shrink-0 text-acid" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech stack badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5 border-t border-sand/10 pt-5 [transform:translateZ(18px)]">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-sand/15 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-sand/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action CTAs with 3D Elevation */}
                    <div className="mt-6 flex flex-wrap gap-3 [transform:translateZ(26px)]">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring inline-flex items-center gap-2 rounded-xl bg-acid px-5 py-2.5 font-display text-xs font-black text-ink shadow-sm transition duration-200 hover:scale-105 hover:bg-acid/90 active:scale-95"
                      >
                        <span>Explore Live Site</span>
                        <ExternalLink size={14} />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring inline-flex items-center gap-2 rounded-xl border border-sand/25 bg-white/[0.02] px-5 py-2.5 font-display text-xs font-bold text-sand transition duration-200 hover:bg-sand/10 active:scale-95"
                      >
                        <Github size={14} />
                        <span>View GitHub Code</span>
                      </a>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
