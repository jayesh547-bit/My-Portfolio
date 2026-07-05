import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { contactItems } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section id="contact" className="bg-ink">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title={"Let's build a clean, responsive web experience."}
              copy="Reach out for front-end developer roles, internships, project discussions, or collaboration."
            />

            <div className="mt-8 grid gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="focus-ring glass-panel flex items-center gap-4 rounded-lg p-4 transition hover:-translate-y-0.5 hover:border-aqua/40"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-aqua/[0.12] text-aqua">
                      <Icon size={21} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-400">{item.label}</span>
                      <span className="block break-words text-sm font-bold text-white sm:text-base">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <motion.form
            className="glass-panel rounded-lg p-5 sm:p-7"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Name
                <input
                  className="focus-ring rounded-md border border-white/[0.12] bg-white/[0.08] px-4 py-3 text-white placeholder:text-slate-500"
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Email
                <input
                  className="focus-ring rounded-md border border-white/[0.12] bg-white/[0.08] px-4 py-3 text-white placeholder:text-slate-500"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Message
                <textarea
                  className="focus-ring min-h-36 resize-y rounded-md border border-white/[0.12] bg-white/[0.08] px-4 py-3 text-white placeholder:text-slate-500"
                  name="message"
                  placeholder="Tell me about the role or project"
                />
              </label>
              <button
                type="submit"
                className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-aqua px-5 py-3 text-sm font-extrabold text-ink shadow-glow transition hover:bg-white"
              >
                Send Message <Send size={18} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
