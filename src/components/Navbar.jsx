import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navItems, profile } from '../data/portfolio.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled || open ? 'border-cream/10 bg-ink/90 backdrop-blur-xl' : 'border-transparent'}`}>
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-sm" aria-label="Jayesh Mehra — home">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 font-display text-sm font-bold text-acid">JM</span>
          <span className="hidden font-mono text-[10px] uppercase leading-4 tracking-[.16em] text-cream/55 sm:block">Jayesh Mehra<br /><span className="text-cream">Frontend Developer</span></span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item, index) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="focus-ring group font-mono text-[11px] uppercase tracking-[.14em] text-cream/55 transition hover:text-cream">
              <span className="mr-1 text-acid/60">0{index + 1}.</span> {item}
            </a>
          ))}
        </div>

        <a href={`mailto:${profile.email}`} className="focus-ring hidden items-center gap-2 rounded-full bg-acid px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[.12em] text-ink transition hover:scale-[1.03] lg:flex">
          Start a project <ArrowUpRight size={15} />
        </a>
        <button type="button" onClick={() => setOpen(!open)} className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-cream/20 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream/10 bg-ink px-5 py-6 lg:hidden">
          {navItems.map((item, index) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="flex border-b border-cream/10 py-4 font-display text-2xl text-cream">
              <span className="mr-4 font-mono text-xs text-acid">0{index + 1}</span>{item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
