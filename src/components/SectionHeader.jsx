import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, copy, center = false }) {
  return (
    <motion.div
      className={center ? 'mx-auto max-w-3xl text-center' : ''}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`section-title ${center ? 'mx-auto' : ''}`}>{title}</h2>
      {copy ? <p className={`section-copy ${center ? 'mx-auto' : ''}`}>{copy}</p> : null}
    </motion.div>
  );
}
