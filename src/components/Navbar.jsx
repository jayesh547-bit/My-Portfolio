import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '../data/portfolio.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getHref = (item) => (item === 'Home' ? '#home' : `#${item.toLowerCase()}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink/[0.82] shadow-2xl shadow-black/20 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="focus-ring group flex items-center gap-3 rounded-md">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-sm font-extrabold text-ink shadow-glow">
            JM
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-white">{profile.name}</span>
            <span className="block text-xs text-slate-400">{profile.role}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={getHref(item)}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="focus-ring hidden rounded-md border border-aqua/50 px-4 py-2 text-sm font-semibold text-aqua transition hover:bg-aqua hover:text-ink lg:inline-flex"
        >
          Hire Me
        </a>

        <button
          type="button"
          className="focus-ring inline-grid h-11 w-11 place-items-center rounded-md border border-white/[0.12] bg-white/[0.06] text-white lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-y border-white/10 bg-ink/[0.96] px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={getHref(item)}
                className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08]"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
