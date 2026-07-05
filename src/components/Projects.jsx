import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects" className="bg-pearl text-ink">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work that shows responsive UI, reusable components, and practical problem solving."
          copy="A focused collection across React interfaces, Salesforce fundamentals, and C++ logic projects."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ocean/30 hover:shadow-2xl ${
                index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-8' : ''
              }`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.48, delay: index * 0.05 }}
            >
              <div
                className={`mb-6 flex min-h-48 items-end rounded-md border border-slate-200 bg-gradient-to-br from-ink via-ocean to-aqua p-5 text-white ${
                  index === 0 ? 'lg:mb-0' : ''
                }`}
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-aqua">Project</p>
                  <h3 className="mt-3 text-3xl font-extrabold">{project.title}</h3>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-7 text-slate-600">{project.description}</p>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.actions.map((action) => {
                    const Icon = action.icon || ArrowUpRight;
                    return (
                      <a
                        key={action.label}
                        href={action.href}
                        className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2.5 text-sm font-bold text-ink transition hover:border-ocean hover:bg-ocean hover:text-white"
                        target={action.href.startsWith('http') ? '_blank' : undefined}
                        rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        {action.label} <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
