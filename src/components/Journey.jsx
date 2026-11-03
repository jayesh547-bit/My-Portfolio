import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, GraduationCap, Rocket, Sparkles } from 'lucide-react';
import { journey } from '../data/portfolio.js';

const icons = [GraduationCap, Code2, Sparkles, Rocket];

const positions = [
  'lg:left-[4%] lg:top-[5%]',
  'lg:right-[6%] lg:top-[27%]',
  'lg:left-[16%] lg:top-[52%]',
  'lg:right-[8%] lg:top-[78%]',
];

export default function Journey() {
  return (
    <section className="relative overflow-hidden bg-sand pb-24 lg:pl-[19rem]">
      <div className="section-pad !pt-6">
        <div className="section-inner">
          <div className="flex flex-col justify-between gap-4 border-b border-ink/15 pb-7 sm:flex-row sm:items-end">
            <div>
              <p className="kicker">02 / Timeline</p>
              <h2 className="mt-3 font-display text-4xl font-black tracking-[-.06em] text-ink sm:text-6xl">
                The Path So Far.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-ink/70 sm:text-right">
              From foundational computer science coursework to shipping live, interactive React websites.
            </p>
          </div>

          <div className="relative mt-12 grid gap-6 lg:block lg:h-[1900px]">
            {/* SVG Curve for Desktop */}
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 1000 1900"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 2.1, ease: [0.16, 1, 0.3, 1] }}
                d="M80 120 C 730 30, 250 495, 820 525 S 820 975, 300 1020 S 180 1470, 860 1560"
                fill="none"
                stroke="#11110f"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {[
                { cx: 80, cy: 120 },
                { cx: 820, cy: 525 },
                { cx: 300, cy: 1020 },
                { cx: 860, cy: 1560 },
              ].map((dot, i) => (
                <motion.circle
                  key={i}
                  cx={dot.cx}
                  cy={dot.cy}
                  r="7"
                  fill="#f4ff18"
                  stroke="#11110f"
                  strokeWidth="2.5"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ delay: 0.8 + i * 0.3, duration: 0.5, type: 'spring' }}
                />
              ))}
            </svg>

            {journey.map((item, index) => {
              const Icon = icons[index];
              return (
                <motion.article
                  key={item.year}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`journey-card soft-card relative rounded-3xl p-6 lg:absolute lg:w-[min(44%,450px)] ${positions[index]}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-6xl font-black tracking-[-.08em] text-acid [text-shadow:1px_1px_0_#111]">
                      &apos;{item.year.slice(2)}
                    </span>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-acid">
                      <Icon size={21} />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-black tracking-[-.04em] text-ink sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                    <span>
                      <strong className="block font-mono text-xs text-ink">{item.tag}</strong>
                      <small className="text-xs text-ink/60">{item.age}</small>
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-ink/10 text-ink">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
