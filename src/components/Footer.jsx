import { ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return <footer className="border-t border-ink/10 bg-sand px-5 py-7 text-ink lg:pl-[20.25rem] lg:pr-12"><div className="mx-auto flex max-w-[1320px] flex-col gap-4 font-mono text-[9px] uppercase tracking-[.15em] text-ink/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {profile.name} / designed & coded with care</p><p>Jaipur, India · <span className="font-bold text-ink">Open to opportunities</span></p><a href="#home" className="focus-ring flex items-center gap-2 text-ink transition hover:text-ink/50">Back to top <ArrowUp size={13} /></a></div></footer>;
}
