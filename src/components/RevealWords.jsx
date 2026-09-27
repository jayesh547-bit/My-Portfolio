import { motion } from 'framer-motion';

export default function RevealWords({ text, className = '', delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`inline ${className}`}
    >
      {text}
    </motion.span>
  );
}
