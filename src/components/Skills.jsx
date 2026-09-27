import { motion } from 'framer-motion';
import { capabilities, skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="bg-sand lg:pl-[19rem]">
      <div className="section-pad">
        <div className="section-inner">
          <div className="border-b border-ink/15 pb-10 text-center"><p className="kicker">04 / What you get</p><h2 className="mx-auto mt-5 max-w-5xl font-display text-[clamp(4rem,9vw,9rem)] font-black leading-[.78] tracking-[-.08em]">Strategy, precision & development.</h2></div>
          <div id="what-i-do" className="mt-10 scroll-mt-8">
            {capabilities.map(({ title, copy, icon: Icon }, index) => <motion.article key={title} initial={{ opacity: 0, x: index % 2 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .7 }} className="group grid gap-5 border-b border-ink/15 py-7 sm:grid-cols-[70px_1fr_1fr_60px] sm:items-center"><span className="font-mono text-xs text-ink/35">0{index + 1}</span><h3 className="font-display text-2xl font-black tracking-[-.04em] sm:text-3xl">{title}</h3><p className="max-w-md text-sm leading-7 text-ink/55">{copy}</p><span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-acid transition duration-500 group-hover:rotate-12 group-hover:scale-110"><Icon size={20} /></span></motion.article>)}
          </div>
          <motion.div id="toolkit" initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .9 }} className="mt-20 scroll-mt-8 rounded-[2rem] bg-acid p-6 sm:p-10"><div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr]"><div><p className="kicker">My toolkit / 2026</p><h3 className="mt-4 font-display text-5xl font-black leading-[.9] tracking-[-.06em]">Tools behind the experience.</h3></div><div className="grid gap-3 sm:grid-cols-2">{skillGroups.map(({ title, icon: Icon, skills }, index) => <motion.div key={title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .07 }} className="rounded-2xl border border-ink/15 bg-sand/80 p-5"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-acid"><Icon size={18} /></span><h4 className="font-display text-sm font-extrabold">{title}</h4></div><div className="mt-5 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-lg bg-paper px-3 py-2 text-[10px] font-bold">{skill}</span>)}</div></motion.div>)}</div></div></motion.div>
        </div>
      </div>
    </section>
  );
}
