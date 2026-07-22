import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { miniProjects, projects } from '../data/portfolio.js';

const accentClasses = { coral: 'bg-coral', lime: 'bg-acid', blue: 'bg-electric' };

function ProjectVisual({ project, index }) {
  return (
    <div className={`project-window relative min-h-[300px] overflow-hidden rounded-[1.25rem] ${accentClasses[project.accent]} p-5 text-ink sm:min-h-[390px]`}>
      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[.16em]"><span>Jayesh / Selected work</span><span>{project.number}</span></div>
      <div className="absolute inset-x-5 bottom-5 top-14 overflow-hidden rounded-xl border border-ink/20 bg-ink p-4 text-cream">
        <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-coral" /><span className="h-2 w-2 rounded-full bg-acid" /><span className="h-2 w-2 rounded-full bg-electric" /></div>
        {index === 0 ? (
          <div className="mt-8"><p className="font-serif text-sm italic text-coral">freshly baked</p><p className="mt-2 font-display text-4xl font-semibold leading-none sm:text-6xl">BAKED<br />WITH LOVE.</p><div className="mt-8 grid grid-cols-3 gap-2">{['CROISSANT', 'SOURDOUGH', 'TARTS'].map((x, i) => <div key={x} className={`rounded-lg p-3 ${i === 1 ? 'bg-coral text-ink' : 'bg-cream/[.06]'}`}><div className="mb-8 aspect-square rounded-full border border-current/30" /><p className="font-mono text-[7px]">{x}</p></div>)}</div></div>
        ) : index === 1 ? (
          <div className="mt-8"><p className="font-mono text-[8px] tracking-[.2em] text-acid">BUILD YOUR STRONGEST SELF</p><p className="mt-3 font-display text-5xl font-bold italic leading-[.85] sm:text-7xl">NO<br />EXCUSES.</p><div className="absolute bottom-4 right-4 grid h-24 w-24 place-items-center rounded-full border border-acid/40 font-mono text-[8px] text-acid">START TODAY</div></div>
        ) : (
          <div className="mt-7 grid gap-3 sm:grid-cols-[.7fr_1fr]"><div className="rounded-lg bg-electric p-4 text-ink"><p className="font-mono text-[8px]">TOTAL PROPERTIES</p><p className="mt-2 font-display text-5xl font-bold">128</p></div><div className="grid gap-2">{['New client inquiry', 'Property visit', 'Deal closed'].map((x, i) => <div key={x} className="flex items-center justify-between rounded-lg bg-cream/[.06] p-3 text-xs"><span>{x}</span><span className="text-electric">0{i + 1}</span></div>)}</div></div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-paper text-ink">
      <div className="section-shell">
        <SectionHeader dark eyebrow="Selected work" title="Projects built to be used, not just viewed." copy="Each project pushed a different skill—from visual storytelling and responsive composition to component architecture and structured data." />
        <div className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .6 }} className="group grid gap-8 border-t border-ink/20 pt-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
              <ProjectVisual project={project} index={index} />
              <div className="flex flex-col justify-between py-1">
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.16em] text-ink/45"><span>{project.type}</span><span>{project.number} / 03</span></div>
                  <h3 className="mt-8 font-display text-4xl font-semibold tracking-[-.04em] sm:text-6xl">{project.title}</h3>
                  <p className="mt-2 font-display text-xl text-ink/45">{project.subtitle}</p>
                  <p className="mt-7 max-w-xl text-base leading-8 text-ink/60">{project.description}</p>
                  <ul className="mt-7 grid gap-2 sm:grid-cols-3">{project.features.map((feature) => <li key={feature} className="border-l border-ink/20 pl-3 text-xs leading-5 text-ink/55">{feature}</li>)}</ul>
                  <div className="mt-7 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-ink/15 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.1em]">{tech}</span>)}</div>
                </div>
                {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="line-button mt-10 w-fit text-ink">View on GitHub <Github size={15} /></a>}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 grid gap-4 sm:grid-cols-2">
          {miniProjects.map(({ title, detail, icon: Icon }) => <div key={title} className="group flex items-center justify-between border border-ink/15 p-5 transition hover:bg-ink hover:text-cream"><div className="flex items-center gap-4"><Icon size={20} /><div><h4 className="font-display text-lg font-semibold">{title}</h4><p className="mt-1 text-xs opacity-55">{detail}</p></div></div><ArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" size={19} /></div>)}
        </div>
      </div>
    </section>
  );
}
