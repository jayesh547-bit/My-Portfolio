import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, copy, dark = false, center = false }) {
  return (
    <motion.div className={center ? 'mx-auto max-w-4xl text-center' : ''} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .55 }}>
      <p className={`eyebrow ${dark ? '!text-ink/55' : ''}`}>{eyebrow}</p>
      <h2 className={`section-title ${dark ? '!text-ink' : ''} ${center ? 'mx-auto' : ''}`}>{title}</h2>
      {copy && <p className={`section-copy ${dark ? '!text-ink/60' : ''} ${center ? 'mx-auto' : ''}`}>{copy}</p>}
    </motion.div>
  );
}
