import { useEffect, useState } from 'react';
import {
  Copy,
  Github,
  Home,
  Linkedin,
  Mail,
  PanelsTopLeft,
  Sparkles,
  UserRound,
  Wrench,
} from 'lucide-react';
import { profile, sideStats } from '../data/portfolio.js';

const railNav = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About me', href: '#story', icon: UserRound },
  { label: 'Projects', href: '#projects', icon: PanelsTopLeft },
  { label: 'What I do', href: '#what-i-do', icon: Sparkles },
  { label: 'Toolkit', href: '#toolkit', icon: Wrench },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function SideRail() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.05);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <aside
      className={`fixed bottom-4 left-4 top-4 z-40 hidden w-[18.5rem] flex-col gap-4 overflow-y-auto transition duration-500 lg:flex ${
        visible
          ? 'translate-x-0 opacity-100'
          : 'pointer-events-none -translate-x-8 opacity-0'
      }`}
    >
      {/* 1. Profile Block */}
      <div className="rounded-[1.75rem] bg-black/[0.05] p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-xl bg-acid px-4 py-2 font-display text-[17px] font-black tracking-tight text-ink">
            JM®
          </span>
          <div className="flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-sand transition hover:scale-105"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-sand transition hover:scale-105"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
        <p className="mt-6 text-[14px] font-medium leading-relaxed text-ink/80">
          Building responsive React experiences that merge visual ambition, practical
          structure, and thoughtful motion.
        </p>
      </div>

      {/* 2. Stats Block */}
      <div className="grid grid-cols-2 rounded-[1.75rem] bg-black/[0.05] p-5">
        {sideStats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center p-2 text-center ${
              i === 0 ? 'border-r border-ink/10' : ''
            }`}
          >
            <p className="font-display text-4xl font-black text-acid [text-shadow:1px_1px_0_#111]">
              {stat.value}
              {i === 0 && <span>+</span>}
            </p>
            <p className="mt-2 font-display text-[12px] font-bold text-ink">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* 3. Navigation Block */}
      <nav className="flex flex-col items-start gap-2.5 rounded-[1.75rem] bg-black/[0.05] p-6">
        {railNav.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className="focus-ring inline-flex w-max items-center gap-3 rounded-xl bg-white/60 px-4 py-2.5 font-display text-[13px] font-black uppercase text-ink transition hover:bg-acid"
          >
            <Icon size={16} strokeWidth={2.5} />
            {label}
          </a>
        ))}
      </nav>

      {/* 4. Contact & CTA Block */}
      <div className="mt-auto flex flex-col gap-3 rounded-[1.75rem] bg-black/[0.05] p-5">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-3.5 text-[13px] font-bold text-ink transition hover:bg-white/80"
        >
          <span className="truncate">{profile.email}</span>
          <Copy className="shrink-0 text-ink/70" size={15} />
        </a>

        <a
          href={`mailto:${profile.email}`}
          className="flex w-full items-center justify-center rounded-xl bg-acid py-4 font-display text-base font-black text-ink transition hover:-translate-y-1"
        >
          Book a Call
        </a>
      </div>
    </aside>
  );
}