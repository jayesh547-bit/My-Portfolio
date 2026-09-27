import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, GraduationCap, Rocket, Sparkles } from 'lucide-react';
import { journey } from '../data/portfolio.js';

const icons = [GraduationCap, Code2, Sparkles, Rocket];

// Updated positions: spread the top percentages further apart so cards never overlap
const positions = [
  'lg:left-[4%] lg:top-[5%]', 
  'lg:right-[6%] lg:top-[25%]', 
  'lg:left-[18%] lg:top-[50%]', 
  'lg:right-[10%] lg:top-[80%]'
];

export default function Journey() {
  return (
    <section className="relative overflow-hidden bg-sand pb-24 lg:pl-[19rem]">
      <div className="section-pad !pt-4">
        <div className="section-inner">
          <div className="flex items-end justify-between border-b border-ink/15 pb-7">
            <div>
              <p className="kicker">02 / Timeline</p>
              <h2 className="mt-3 font-display text-5xl font-black tracking-[-.06em] sm:text-7xl">The path so far.</h2>
            </div>
            <p className="hidden max-w-xs text-right text-base leading-6 text-ink/50 sm:block">
              A practical journey from technical foundations to polished live experiences.
            </p>
          </div>
          
          {/* Increased container height from 1180px to 2000px to stop cards from crashing vertically */}
          <div className="relative mt-10 grid gap-5 lg:block lg:h-[2000px]">
            {/* ViewBox updated to match the new 2000px height */}
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1000 2000" preserveAspectRatio="none" aria-hidden="true">
              {/* Scaled the path's Y-coordinates mathematically to perfectly retain the curve shape */}
              <motion.path 
                initial={{ pathLength: 0 }} 
                whileInView={{ pathLength: 1 }} 
                viewport={{ once: true, amount: .1 }} 
                transition={{ duration: 2.1, ease: [0.16,1,0.3,1] }} 
                d="M80 120 C 730 30, 250 495, 820 525 S 820 975, 300 1020 S 180 1470, 860 1620" 
                fill="none" 
                stroke="#11110f" 
                strokeWidth="2" 
              />
              {/* Timeline dots matching the new stretched path anchor points */}
              {[
                { cx: 80, cy: 120 },
                { cx: 820, cy: 525 },
                { cx: 300, cy: 1020 },
                { cx: 860, cy: 1620 }
              ].map((dot, i) => (
                <motion.circle
                  key={i}
                  cx={dot.cx}
                  cy={dot.cy}
                  r="7"
                  fill="#b9ff45" 
                  stroke="#11110f"
                  strokeWidth="2.5"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: "some" }}
                  transition={{ delay: 0.8 + (i * 0.35), duration: 0.5, type: "spring" }}
                />
              ))}
            </svg>
            
            {journey.map((item, index) => {
              const Icon = icons[index];
              return (
                <motion.article 
                  key={item.year} 
                  initial={{ opacity: 0, y: 60, scale: .94 }} 
                  whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                  viewport={{ once: true, amount: .3 }} 
                  transition={{ duration: .75, delay: index * .08, ease: [0.16,1,0.3,1] }} 
                  className={`journey-card soft-card relative rounded-3xl p-6 lg:absolute lg:w-[min(42%,430px)] ${positions[index]}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-7xl font-black tracking-[-.08em] text-acid [text-shadow:1px_1px_0_#111]">&apos;{item.year}</span>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-acid"><Icon size={21} /></span>
                  </div>
                  <h3 className="mt-8 font-display text-3xl font-black tracking-[-.05em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{item.description}</p>
                  <div className="mt-7 flex items-center justify-between border-t border-ink/10 pt-5">
                    <span>
                      <strong className="block text-xs">{item.tag}</strong>
                      <small className="text-ink/45">{item.age}</small>
                    </span>
                    <ArrowUpRight size={17} />
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