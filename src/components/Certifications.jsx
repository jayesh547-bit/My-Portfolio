import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { certifications } from '../data/portfolio.js';

export default function Certifications() {
  return (
    <section id="certifications" className="bg-midnight">
      <div className="section-shell">
        <SectionHeader
          center
          eyebrow="Certifications"
          title="Certifications that support front-end growth and technical breadth."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.article
                key={cert.title}
                className="glass-panel rounded-lg p-5 transition hover:-translate-y-1 hover:border-champagne/40"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Icon className="mb-5 text-champagne" size={30} />
                <h3 className="text-base font-bold leading-7 text-white">{cert.title}</h3>
                {cert.detail ? <p className="mt-2 text-sm text-slate-400">{cert.detail}</p> : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
