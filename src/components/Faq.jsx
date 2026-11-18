import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqs } from '../data/portfolio.js';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-sand lg:pl-[19rem]">
      <div className="section-pad">
        <div className="section-inner grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="kicker">05 / Frequently Asked Questions</p>
            <h2 className="mt-4 font-display text-4xl font-black leading-[.88] tracking-[-.06em] text-ink sm:text-6xl">
              Got Questions? Here Are The Answers.
            </h2>
            <p className="mt-4 text-xs font-semibold leading-relaxed text-ink/75 sm:text-sm">
              Clear information for both freelance clients planning a project and recruiters evaluating my technical and communication skills.
            </p>
          </div>

          <div className="border-t border-ink/15">
            {faqs.map(({ question, answer }, index) => {
              const isOpen = open === index;
              return (
                <div key={question} className="border-b border-ink/15 transition-colors duration-200 hover:bg-black/[0.015] px-2 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-btn-${index}`}
                    className="focus-ring flex w-full items-center justify-between py-6 text-left font-display text-base font-bold text-ink sm:text-lg"
                  >
                    <span className="pr-4">{question}</span>
                    <Plus
                      className={`shrink-0 transition duration-300 ${
                        isOpen ? 'rotate-45 text-ink' : 'text-ink/70'
                      }`}
                      size={20}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-btn-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 text-xs leading-relaxed text-ink/80 sm:text-sm sm:leading-7">
                          {answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
