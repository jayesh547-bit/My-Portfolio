import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import RevealWords from './RevealWords.jsx';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    if (!navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-sand lg:pl-[19rem]">
      <div className="section-pad relative">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="section-inner relative overflow-hidden rounded-[2rem] bg-acid p-6 shadow-float sm:p-10 lg:p-14"
        >
          {/* Subtle decorative watermark */}
          <div className="pointer-events-none absolute -right-16 -top-24 font-display text-[28rem] font-black leading-none text-ink/[.04] select-none" aria-hidden="true">
            J
          </div>

          <p className="kicker relative text-ink/70">Ready to build together?</p>
          <h2 className="relative mt-4 font-display text-[clamp(3.5rem,9vw,8.5rem)] font-black leading-[.8] tracking-[-.075em] text-ink">
            <RevealWords text="LET'S MAKE" />
            <br />
            <span className="text-transparent [-webkit-text-stroke:2px_#11110f]">
              <RevealWords text="IT REAL." delay={0.12} />
            </span>
          </h2>

          <p className="relative mt-6 max-w-xl text-xs font-semibold leading-relaxed text-ink/75 sm:text-base">
            Open for freelance client websites, interactive landing pages, and full-time frontend developer opportunities. Reach out via WhatsApp for a fast response or email me your project brief.
          </p>

          <div className="relative mt-12 grid gap-8 border-t border-ink/25 pt-8 lg:grid-cols-[1.1fr_.9fr]">
            {/* Primary Contact Actions */}
            <div className="space-y-6">
              {/* WhatsApp Primary Card */}
              <div className="rounded-2xl border border-ink/20 bg-ink p-5 text-sand sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/20 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#25D366]">
                    <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                    Fastest Response
                  </span>
                  <MessageCircle size={20} className="text-[#25D366]" />
                </div>
                <h3 className="mt-3 font-display text-xl font-black text-sand sm:text-2xl">
                  Chat on WhatsApp
                </h3>
                <p className="mt-1 text-xs text-sand/70">
                  Direct message for freelance inquiries, design translation, or quick project questions.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={profile.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-display text-xs font-black text-ink shadow-md transition hover:scale-105"
                    aria-label="Open WhatsApp conversation with Jayesh Mehra"
                  >
                    <span>Open WhatsApp ({profile.phoneDisplay})</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Direct Mailto */}
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-ink/60">
                  Email Me Directly
                </p>
                <a
                  href={profile.emailLink}
                  className="focus-ring group mt-2 inline-flex max-w-full items-center gap-3 break-all font-display text-[clamp(1.15rem,3.4vw,2.2rem)] font-black text-ink transition hover:text-ink/70"
                  aria-label="Send email to jayeshmehra547@gmail.com (opens default email client)"
                >
                  <span>{profile.email}</span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-acid transition group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </a>

                {/* Copy Button */}
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="focus-ring inline-flex items-center gap-2 rounded-lg bg-ink/10 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[.1em] text-ink transition hover:bg-ink/20"
                    aria-label="Copy email address to clipboard"
                  >
                    <span className="grid h-5 w-5 place-items-center">
                      {copied ? <Check size={14} className="text-ink" /> : <Copy size={14} />}
                    </span>
                    <span>{copied ? 'Copied to clipboard!' : 'Copy email address'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Action Links Grid */}
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  label: 'WhatsApp Message',
                  href: profile.whatsappLink,
                  icon: MessageCircle,
                  detail: profile.phoneDisplay,
                  external: true,
                },
                {
                  label: 'Email Draft',
                  href: profile.emailLink,
                  icon: Mail,
                  detail: profile.email,
                  external: false,
                },
                {
                  label: 'LinkedIn Profile',
                  href: profile.linkedin,
                  icon: Linkedin,
                  detail: 'Connect & Network',
                  external: true,
                },
                {
                  label: 'GitHub Repositories',
                  href: profile.github,
                  icon: Github,
                  detail: '@jayesh547-bit',
                  external: true,
                },
                {
                  label: 'Direct Phone Call',
                  href: `tel:${profile.phone.replace(/\s/g, '')}`,
                  icon: Phone,
                  detail: profile.phoneDisplay,
                  external: false,
                },
              ].map(({ label, href, icon: Icon, detail, external }, index) => (
                <motion.a
                  key={label}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between rounded-2xl border border-ink/20 bg-sand/40 p-4 font-display text-sm font-bold text-ink transition hover:bg-ink hover:text-acid"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink/10 text-ink group-hover:bg-acid/20 group-hover:text-acid">
                      <Icon size={16} />
                    </span>
                    <span>
                      <span className="block text-xs font-bold sm:text-sm">{label}</span>
                      <span className="block text-[11px] font-normal text-ink/60 group-hover:text-acid/80">
                        {detail}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight size={16} className="shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
