import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects" className="relative bg-sand lg:pl-[19rem]">
      <div className="overflow-hidden rounded-t-[2.5rem] bg-ink text-sand sm:rounded-t-[4rem]">
        <div className="section-pad">
          <div className="section-inner">
            <div className="grid gap-8 border-b border-sand/15 pb-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
              <div><p className="kicker text-acid">03 / Selected work</p><motion.h2 initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }} className="mt-5 font-display text-[clamp(4rem,8vw,8rem)] font-black leading-[.8] tracking-[-.075em]">Built to perform.</motion.h2></div>
              <p className="max-w-lg text-sm leading-7 text-sand/55">Two brands with completely different energies, designed and developed as responsive React experiences.</p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article key={project.title} initial={{ opacity: 0, y: 90, rotateY: index ? 5 : -5 }} whileInView={{ opacity: 1, y: 0, rotateY: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .9, delay: index * .1, ease: [0.16,1,0.3,1] }} className="group overflow-hidden rounded-[2rem] border border-sand/15 bg-white/[.045] p-3 sm:p-5">
                  <a href={project.live} target="_blank" rel="noreferrer" className="relative block overflow-hidden rounded-[1.35rem]"><img src={project.image} alt={`${project.title} website`} className="aspect-[4/3] w-full object-cover transition duration-1000 group-hover:scale-105" /><span className="absolute right-4 top-4 grid h-14 w-14 place-items-center rounded-full bg-acid text-ink transition duration-500 group-hover:rotate-45"><ArrowUpRight size={21} /></span></a>
                  <div className="p-2 pb-1 pt-7"><p className="kicker text-sand/40">{project.number} / {project.category}</p><h3 className="mt-3 font-display text-4xl font-black tracking-[-.05em] sm:text-5xl">{project.title}</h3><p className="mt-4 text-sm leading-7 text-sand/55">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-sand/15 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider">{tech}</span>)}</div><div className="mt-7 flex gap-2"><a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-acid px-4 py-2.5 text-xs font-bold text-ink">Live site <ExternalLink size={14} /></a><a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-sand/20 px-4 py-2.5 text-xs font-bold">GitHub <Github size={14} /></a></div></div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
