import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDownRight, Code2, MapPin, Sparkles } from 'lucide-react';
import { sideStats } from '../data/portfolio.js';

const stats = [
  { value: '02', label: 'Live experiences', icon: Code2 },
  { value: sideStats[1].value, label: 'B.Tech graduate', icon: Sparkles },
  { value: 'JPR', label: 'Building from Jaipur', icon: MapPin },
];

export default function About() {
  // 1. Container ko track karne ke liye Ref create kiya hai
  const targetRef = useRef(null);

  // 2. Window scroll position ko track karta hai jab ye section screen par aata hai
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // 3. Scroll animation ko smooth aur bouncy banane ke liye spring physics
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.5
  });

  return (
    <section id="story" className="relative overflow-hidden bg-sand lg:pl-[19rem]">
      <div className="section-pad">
        <div className="section-inner">
          <div className="grid gap-14 pb-16 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-20 lg:pb-20">
            <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .9, ease: [0.16,1,0.3,1] }}>
              <p className="font-mono text-xs font-medium uppercase tracking-[.28em] text-ink/60 sm:text-sm">
                01 / About Me
              </p>
              <p className="mt-5 inline-flex rounded-full border-2 border-ink/30 px-3 py-1 font-display text-xs font-black uppercase leading-none tracking-[-.02em] sm:text-sm">
                Start small. Grow big.
              </p>
              <h2 className="mt-8 font-display text-[clamp(2.75rem,12.8vw,5rem)] font-black leading-[.94] tracking-[-.065em] lg:text-[clamp(4.2rem,5.5vw,6rem)]">
                <span className="block whitespace-nowrap">
                  About Me <span className="text-ink/70">(&)</span>
                </span>
                <span className="block whitespace-nowrap">My Journey</span>
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .95, delay: .12, ease: [0.16,1,0.3,1] }} className="lg:pt-16">
              <p className="max-w-[15ch] font-display text-[clamp(2.05rem,2.9vw,3.35rem)] font-semibold leading-[1.08] tracking-[-.045em]">I learn by building, breaking, refining—and making the next version feel better.</p>
              <div className="mt-10 flex items-start gap-5 border-t border-ink/15 pt-7">
                <ArrowDownRight className="mt-1 shrink-0" size={24} />
                <p className="max-w-2xl text-base font-medium leading-8 text-ink/65 lg:text-lg lg:leading-9">
                  I&apos;m an Information Technology graduate from Jaipur focused on creative front-end development. React gives me structure; design and motion give the work personality.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Target Ref ko is container mein add kiya jismein aapke 3 tabs hain */}
          <div ref={targetRef} className="grid border-y border-ink/15 sm:grid-cols-3">
            {stats.map(({ value, label, icon: Icon }, index) => {
              // 4. Scroll progress ko pixel values (y-axis) mein convert karta hai.
              // index se multiply kiya gaya hai taki teeno tabs ki speed thodi alag ho (staggered effect).
              const y = useTransform(smoothScroll, [0, 1], [80 + index * 30, -80 - index * 30]);

              return (
                <motion.div 
                  key={label} 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                  style={{ y }} // Ye style tab ki vertical position ko directly scroll se link karti hai
                  className="group bg-sand border-b border-ink/15 px-3 py-9 last:border-0 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-2 sm:last:border-r-0"
                >
                  <div className="flex items-center justify-between gap-5">
                    <p className="font-display text-5xl font-black text-ink lg:text-6xl">{value}</p>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-acid transition duration-500 group-hover:rotate-12">
                      <Icon size={19} />
                    </span>
                  </div>
                  <p className="mt-6 font-mono text-xs font-medium uppercase leading-5 tracking-[.14em] text-ink/60 lg:text-sm">{label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}