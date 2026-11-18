import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-sand px-5 py-8 text-ink lg:pl-[20.25rem] lg:pr-12">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-black text-ink">
            {profile.name} — Creative Frontend Developer
          </p>
          <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[.15em] text-ink/75">
            Jaipur, Rajasthan, India · B.Tech in IT · © {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 font-mono text-xs font-semibold text-ink/75">
          <a
            href={profile.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-1.5 transition hover:text-ink"
          >
            <MessageCircle size={14} className="text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          <span className="text-ink/20">|</span>

          <a
            href={profile.emailLink}
            className="focus-ring flex items-center gap-1.5 transition hover:text-ink"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>

          <span className="text-ink/20">|</span>

          <a
            href="#home"
            className="focus-ring flex items-center gap-1.5 text-ink transition hover:text-ink/60"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
