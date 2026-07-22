import { ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-7 text-cream sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 font-mono text-[9px] uppercase tracking-[.16em] text-cream/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name} / Designed & coded with care</p>
        <p>Jaipur, India · <span className="text-acid">Open to opportunities</span></p>
        <a href="#home" className="focus-ring flex items-center gap-2 text-cream transition hover:text-acid">Back to top <ArrowUp size={13} /></a>
      </div>
    </footer>
  );
}
