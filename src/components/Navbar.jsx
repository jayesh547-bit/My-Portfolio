import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navItems, profile } from '../data/portfolio.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHidden(window.scrollY > window.innerHeight * 0.9);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -70,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.85,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`fixed inset-x-0 top-0 z-[70] p-3 transition duration-500 sm:p-4 lg:px-8 ${
        hidden
          ? 'pointer-events-none -translate-y-28 opacity-0'
          : ''
      }`}
    >
      <nav className="nav-pill mx-auto flex h-16 max-w-[1440px] items-center justify-between rounded-[1.35rem] px-4 sm:h-[4.5rem] sm:px-5">
        <a
          href="#home"
          className="focus-ring flex items-center gap-3 rounded-lg"
        >
          <span className="grid h-10 w-16 place-items-center rounded-xl bg-acid font-display text-sm font-black">
            JM
          </span>

          <span className="hidden font-display text-sm font-extrabold uppercase sm:block">
            Jayesh Mehra
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="focus-ring font-display text-[11px] font-extrabold uppercase transition hover:text-black/45"
            >
              {item.label}

              {index < navItems.length - 1 && (
                <span className="ml-5 text-black/25">
                  |
                </span>
              )}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="acid-button hidden !rounded-xl !px-5 !py-3 lg:inline-flex"
        >
          Let&apos;s talk
          <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          className="focus-ring grid h-10 w-10 place-items-center rounded-xl bg-ink text-sand lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -14,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            transition={{
              duration: 0.28,
            }}
            className="nav-pill mx-auto mt-2 grid max-w-[1440px] rounded-2xl p-3 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 px-3 py-3 font-display text-lg font-bold last:border-0"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}