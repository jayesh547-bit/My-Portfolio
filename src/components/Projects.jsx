import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mouse drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll > 0) {
      const progress = (scrollLeft / maxScroll) * 100;
      setScrollProgress(progress);

      const index = Math.round((scrollLeft / maxScroll) * (projects.length - 1)) + 1;
      setActiveIndex(Math.min(Math.max(index, 1), projects.length));

      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < maxScroll - 10);
    } else {
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      container.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.querySelector('article');
    const scrollAmount = card ? card.offsetWidth + 24 : 420;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const onMouseDown = (e) => {
    if (e.target.closest('a, button')) return;
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.35;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section id="projects" className="relative bg-sand lg:pl-[19rem]">
      <div className="overflow-hidden rounded-t-[2.5rem] bg-ink text-sand sm:rounded-t-[4rem]">
        <div className="section-pad">
          <div className="section-inner">
            {/* Header with Navigation Controls */}
            <div className="flex flex-col gap-6 border-b border-sand/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="kicker text-acid">03 / Featured Projects</p>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mt-4 font-display text-[clamp(3rem,7vw,7rem)] font-black leading-[.88] tracking-[-.075em] text-sand"
                >
                  Built to Perform.
                </motion.h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-sand/70 sm:text-base">
                  Four live web applications designed with distinct brand identities and engineered with modern React frameworks, Tailwind CSS, and interactive UI systems.
                </p>
              </div>

              {/* Side Scroll Controls */}
              <div className="flex items-center gap-4 self-start lg:self-end">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-sand/70">
                  <span className="text-acid">0{activeIndex}</span>
                  <span className="text-sand/30">/</span>
                  <span>0{projects.length}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    aria-label="Previous project card"
                    className="focus-ring grid h-11 w-11 place-items-center rounded-xl border border-sand/20 bg-white/[0.04] text-sand transition hover:border-acid hover:bg-white/[0.1] hover:text-acid active:scale-95 disabled:pointer-events-none disabled:opacity-30"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    aria-label="Next project card"
                    className="focus-ring grid h-11 w-11 place-items-center rounded-xl border border-sand/20 bg-white/[0.04] text-sand transition hover:border-acid hover:bg-white/[0.1] hover:text-acid active:scale-95 disabled:pointer-events-none disabled:opacity-30"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Side-by-Side Horizontal Scroll Track */}
            <div
              ref={scrollRef}
              data-lenis-prevent
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
              className={`no-scrollbar mt-10 flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory sm:gap-6 ${
                isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
              }`}
            >
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex w-[82vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-sand/15 bg-white/[0.035] p-4 shadow-lg transition-all duration-300 hover:border-sand/30 hover:bg-white/[0.05] sm:w-[350px] md:w-[380px] lg:w-[410px] xl:w-[430px] sm:p-5 sm:rounded-[1.6rem]"
                >
                  {/* Project Image */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring relative block overflow-hidden rounded-xl sm:rounded-2xl"
                    aria-label={`View live site for ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category}`}
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <span className="absolute right-3 top-3 grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full bg-acid text-ink shadow-md transition duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>

                  {/* Project Header */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-acid">
                        {project.number} / {project.category}
                      </span>
                    </div>

                    <h3 className="mt-1.5 font-display text-xl sm:text-2xl font-black tracking-[-.03em] text-sand">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-xs sm:text-[13px] font-medium leading-relaxed text-sand/80 line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Case Study Details */}
                  <div className="mt-4 flex-1 space-y-3 border-t border-sand/10 pt-3.5">
                    <div>
                      <p className="text-xs leading-relaxed text-sand/70 line-clamp-2 sm:line-clamp-3">
                        {project.solution}
                      </p>
                    </div>

                    {/* Features explore */}
                    <div className="space-y-1.5">
                      {project.exploreFeatures.slice(0, 3).map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-[11px] text-sand/75">
                          <CheckCircle2 size={13} className="shrink-0 text-acid" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5 border-t border-sand/10 pt-3.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-sand/15 bg-white/[0.04] px-2 py-0.5 font-mono text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-sand/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="mt-4 flex flex-wrap items-center gap-2.5">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-1.5 rounded-xl bg-acid px-3.5 py-2 font-display text-xs font-black text-ink shadow-sm transition hover:scale-[1.03]"
                    >
                      <span>Explore Live</span>
                      <ExternalLink size={13} />
                    </a>

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring inline-flex items-center gap-1.5 rounded-xl border border-sand/25 px-3.5 py-2 font-display text-xs font-bold text-sand transition hover:bg-sand/10"
                      >
                        <Github size={13} />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-xl border border-sand/15 bg-white/[0.02] px-3 py-2 font-mono text-[10.5px] text-sand/50">
                        <ShieldCheck size={13} className="text-acid" aria-hidden="true" />
                        <span>Client Project</span>
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Bottom Progress Bar & Hint */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-sand/10 pt-6">
              <div className="flex h-1.5 w-44 overflow-hidden rounded-full bg-sand/15 sm:w-64">
                <div
                  className="h-full bg-acid transition-all duration-300"
                  style={{ width: `${Math.max(scrollProgress, 100 / projects.length)}%` }}
                />
              </div>

              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sand/50">
                <Sparkles size={13} className="text-acid" />
                <span className="hidden sm:inline">Scroll or drag horizontally to explore</span>
                <span className="sm:hidden">Swipe sideways to browse</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
