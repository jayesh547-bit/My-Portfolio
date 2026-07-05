import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-midnight px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold text-white">{profile.name}</p>
          <p>{profile.role}</p>
          <p className="mt-2">Built with React, Vite and Tailwind CSS</p>
        </div>

        <div className="flex items-center gap-3">
          <a className="focus-ring rounded-md p-2 text-slate-300 transition hover:bg-white/[0.08] hover:text-aqua" href={`mailto:${profile.email}`} aria-label="Email Jayesh Mehra">
            <Mail size={20} />
          </a>
          <a className="focus-ring rounded-md p-2 text-slate-300 transition hover:bg-white/[0.08] hover:text-aqua" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={20} />
          </a>
          <a className="focus-ring rounded-md p-2 text-slate-300 transition hover:bg-white/[0.08] hover:text-aqua" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={20} />
          </a>
        </div>

        <p>Copyright {year} Jayesh Mehra. All rights reserved.</p>
      </div>
    </footer>
  );
}
