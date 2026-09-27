import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: '-105%', transition: { duration: .8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[120] grid place-items-center overflow-hidden bg-ink text-sand"
        >
          <div className="w-[min(86vw,720px)]">
            <div className="flex items-end justify-between"><p className="font-display text-[clamp(3.5rem,12vw,8rem)] font-black leading-none tracking-[-.08em]">JAYESH</p><span className="kicker mb-3 text-sand/45">Portfolio / 2026</span></div>
            <div className="mt-6 h-px overflow-hidden bg-sand/15"><motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }} className="h-full bg-acid" /></div>
            <div className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-[.16em] text-sand/35"><span>Loading experience</span><span>001 → 100</span></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
