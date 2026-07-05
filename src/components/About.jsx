import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { highlights } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="bg-pearl text-ink">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="About"
            title="Modern front-end work with clean structure and thoughtful detail."
            copy="I am an Information Technology graduate with a strong interest in front-end development. I enjoy building responsive, modern, and user-friendly websites using React, JavaScript, HTML, CSS, and Git/GitHub. I am continuously improving my skills in React, Node.js, SQL, and modern development workflows."
          />

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Icon className="mb-4 text-ocean" size={28} />
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
