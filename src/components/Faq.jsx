import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const questions = [
  ['What kind of projects do you build?', 'Responsive React websites, landing pages and creative front-end experiences for brands, portfolios and growing businesses.'],
  ['Can you work from a design or reference?', 'Yes. I can translate Figma files, screenshots and visual references into responsive, reusable interfaces while keeping the final result original.'],
  ['Do you handle animation and responsiveness?', 'Yes. Motion, interaction, accessibility and mobile behaviour are considered as part of the build—not added at the end.'],
  ['Are you open to opportunities?', 'Yes. I am open to frontend roles, internships and selected freelance collaborations.'],
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-sand lg:pl-[19rem]">
      <div className="section-pad">
        <div className="section-inner grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div><p className="kicker">06 / FAQ</p><h2 className="mt-4 font-display text-6xl font-black leading-[.85] tracking-[-.07em]">Got any questions?</h2></div>
          <div className="border-t border-ink/15">{questions.map(([question, answer], index) => <div key={question} className="border-b border-ink/15"><button onClick={() => setOpen(open === index ? -1 : index)} className="focus-ring flex w-full items-center justify-between py-6 text-left font-display text-lg font-bold"><span>{question}</span><Plus className={`shrink-0 transition duration-300 ${open === index ? 'rotate-45' : ''}`} size={20} /></button><AnimatePresence initial={false}>{open === index && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="max-w-2xl overflow-hidden pb-6 text-sm leading-7 text-ink/55">{answer}</motion.p>}</AnimatePresence></div>)}</div>
        </div>
      </div>
    </section>
  );
}
