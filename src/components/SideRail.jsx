import { useEffect, useState } from 'react';
import {
  Check,
  Copy,
  GraduationCap,
  Github,
  HelpCircle,
  Home,
  Linkedin,
  Mail,
  MessageCircle,
  PanelsTopLeft,
  Sparkles,
  UserRound,
  Wrench,
} from 'lucide-react';
import { profile, sideStats } from '../data/portfolio.js';

const railNav = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#story', icon: UserRound },
  { label: 'Projects', href: '#projects', icon: PanelsTopLeft },
  { label: 'What I Do', href: '#what-i-do', icon: Sparkles },
  { label: 'Toolkit', href: '#toolkit', icon: Wrench },
  { label: 'Credentials', href: '#credentials', icon: GraduationCap },
  { label: 'FAQ', href: '#faq', icon: HelpCircle },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function SideRail() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.95);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const copyEmail = async (e) => {
    e.preventDefault();
    e.stopPropagation();
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
    <aside
      aria-label="Sidebar quick navigation and contact"
      className={`fixed bottom-4 left-4 top-4 z-40 hidden w-[18.5rem] flex-col gap-3.5 overflow-y-auto rounded-[2rem] transition duration-500 lg:flex ${
        visible
          ? 'translate-x-0 opacity-100'
          : 'pointer-events-none -translate-x-8 opacity-0'
      }`}
    >
      {/* 1. Profile Block */}
      <div className="rounded-[1.75rem] bg-black/[0.05] p-5">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="focus-ring rounded-xl bg-acid px-3.5 py-1.5 font-display text-[16px] font-black tracking-tight text-ink"
            aria-label="Jayesh Mehra - Top"
          >
            JM
          </a>
          <div className="flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-sand transition hover:scale-105"
              aria-label="Jayesh Mehra on GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-sand transition hover:scale-105"
              aria-label="Jayesh Mehra on LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
        <h2 className="mt-4 font-display text-sm font-extrabold text-ink">
          {profile.name}
        </h2>
        <p className="mt-1 text-xs text-ink/70">
          Creative Frontend Developer · B.Tech IT
        </p>
        <p className="mt-3 text-[13px] font-medium leading-relaxed text-ink/80">
          Building responsive React websites where clean component architecture meets polished visual detail.
        </p>
      </div>

      {/* 2. Stats Block */}
      <div className="grid grid-cols-2 rounded-[1.75rem] bg-black/[0.05] p-4">
        {sideStats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center p-2 text-center ${
              i === 0 ? 'border-r border-ink/10' : ''
            }`}
          >
            <p className="font-display text-3xl font-black text-ink">
              {stat.value}
            </p>
            <p className="mt-1 font-display text-[11px] font-bold text-ink/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* 3. Navigation Block */}
      <nav className="flex flex-col items-start gap-1.5 rounded-[1.75rem] bg-black/[0.05] p-4" aria-label="Sidebar navigation">
        {railNav.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className="focus-ring inline-flex w-full items-center gap-3 rounded-xl bg-white/60 px-3.5 py-2 font-display text-xs font-black uppercase tracking-tight text-ink transition hover:bg-acid"
          >
            <Icon size={15} strokeWidth={2.5} />
            {label}
          </a>
        ))}
      </nav>

      {/* 4. Contact & Primary WhatsApp CTA */}
      <div className="mt-auto flex flex-col gap-2.5 rounded-[1.75rem] bg-black/[0.05] p-4">
        {/* Email Mailto & Copy */}
        <div className="flex items-center justify-between gap-2 rounded-xl bg-white/70 px-3.5 py-2.5 text-xs font-bold text-ink">
          <a
            href={profile.emailLink}
            className="focus-ring truncate transition hover:text-ink/70"
            title="Open email in default mail app"
          >
            {profile.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="focus-ring ml-auto grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-ink/5 text-ink transition hover:bg-ink/15"
            aria-label="Copy email address"
            title="Copy email to clipboard"
          >
            {copied ? <Check size={13} className="text-ink" /> : <Copy size={13} className="text-ink/70" />}
          </button>
        </div>

        {/* Primary CTA: Chat on WhatsApp */}
        <a
          href={profile.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl bg-acid py-3.5 font-display text-sm font-black text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-acid/90"
        >
          <MessageCircle size={16} />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
