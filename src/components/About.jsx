import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDownRight, Code2, MapPin, Sparkles } from 'lucide-react';
import { sideStats } from '../data/portfolio.js';

const stats = [
  { value: '02', label: 'Featured live projects', icon: Code2 },
  { value: sideStats[1].value, label: 'B.Tech IT graduate', icon: Sparkles },
  { value: 'JPR', label: 'Based in Jaipur, India', icon: MapPin },
];

export default function About() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // Smooth, subtle spring physics that stay within container bounds
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.4,
  });

  return (
    <section id="story" className="relative overflow-hidden bg-sand lg:pl-[19rem]">
      <div className="section-pad">
        <div className="section-inner">
          <div className="grid gap-14 pb-16 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-20 lg:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[.28em] text-ink/75 sm:text-sm">
                01 / About Jayesh
              </p>
              <p className="mt-5 inline-flex rounded-full border-2 border-ink/40 px-3.5 py-1 font-display text-xs font-black uppercase leading-none tracking-[-.02em] text-ink sm:text-sm shadow-sm">
                Creative Frontend Developer · Jaipur, India
              </p>
              <h2 className="mt-8 font-display text-[clamp(2.75rem,8vw,5.2rem)] font-black leading-[.94] tracking-[-.065em] text-ink">
                <span className="block">
                  About Me <span className="text-ink/60">(&)</span>
                </span>
                <span className="block">My Approach</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:pt-14"
            >
              <p className="font-display text-[clamp(1.75rem,2.7vw,2.85rem)] font-semibold leading-[1.12] tracking-[-.04em] text-ink">
                I build responsive interfaces where clean React architecture meets modern visual detail and purposeful motion.
              </p>
              <div className="mt-8 flex items-start gap-5 border-t border-ink/15 pt-7">
                <ArrowDownRight className="mt-1 shrink-0 text-ink" size={24} />
                <div className="space-y-4 text-base font-medium leading-7 text-ink/75 lg:text-lg lg:leading-8">
                  <p>
                    I&apos;m an Information Technology graduate from Arya College of Engineering & IT in Jaipur, specializing in creative frontend development. My focus is crafting responsive web applications, modern landing pages, and interactive digital storefronts that engage visitors from the first screen.
                  </p>
                  <p>
                    For freelance clients, I provide dependable end-to-end frontend execution—turning brand requirements or visual references into fast, mobile-friendly websites. For teams and recruiters, I bring solid component architecture, predictable state flow, and hands-on experience building in modern React and Tailwind CSS.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <div ref={targetRef} className="grid border-y border-ink/15 sm:grid-cols-3">
            {stats.map(({ value, label, icon: Icon }, index) => {
              // Subtle controlled parallax shift that prevents cards from breaking container boundaries
              const y = useTransform(smoothScroll, [0, 1], [10 - index * 4, -10 + index * 4]);

              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ y }}
                  className="group bg-sand border-b border-ink/15 px-4 py-8 last:border-0 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-2 sm:last:border-r-0 transition duration-300 hover:bg-black/[0.02]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-display text-4xl font-black text-ink lg:text-5xl">{value}</p>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-acid shadow-sm transition duration-500 group-hover:rotate-12 group-hover:scale-105">
                      <Icon size={19} />
                    </span>
                  </div>
                  <p className="mt-4 font-mono text-xs font-semibold uppercase leading-5 tracking-[.14em] text-ink/75 lg:text-sm">
                    {label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
