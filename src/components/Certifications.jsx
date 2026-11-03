import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio.js';
import RevealWords from './RevealWords.jsx';

export default function Certifications() {
  return (
    <div className="section-pad !pt-4">
      <div className="section-inner grid gap-8 lg:grid-cols-[.55fr_1.45fr]">
        <div>
          <p className="kicker">Credentials / Certifications</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-[-.04em] text-ink sm:text-5xl">
            <RevealWords text="Verified Technical Credentials." />
          </h2>
          <p className="mt-4 text-xs font-medium leading-relaxed text-ink/70 sm:text-sm">
            Formal certifications and technical qualifications validating Linux systems administration, modern React development, and database concepts.
          </p>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="soft-card flex flex-col justify-between rounded-2xl p-5 transition duration-500 hover:-translate-y-1.5 hover:bg-acid"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-acid">
                      <Icon size={18} />
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink/60">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-sm font-bold leading-snug text-ink sm:text-base">
                    {cert.title}
                  </h3>

                  {cert.detail && (
                    <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink/60">
                      {cert.detail}
                    </p>
                  )}

                  <p className="mt-2 text-xs leading-relaxed text-ink/75">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
