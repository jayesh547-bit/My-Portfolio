import { useRef, useState, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ArrowUpRight,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';
import { qualities } from '../data/portfolio.js';

const leftLinks = [
  ['Home', '#home'],
  ['About me', '#story'],
  ['Projects', '#projects'],
];

const rightLinks = [
  ['What I do', '#what-i-do'],
  ['Toolkit', '#toolkit'],
  ['Contact', '#contact'],
];

const heroTitle = ['Frontend,', 'Applied', 'Differently.'];

// Staggered Framer Motion Typing Effect
function TypingText({ textLines, className, delay = 0 }) {
  return (
    <div className={className}>
      {textLines.map((line, lineIndex) => {
        const previousCharsCount = textLines.slice(0, lineIndex).join('').length;
        const lineDelay = delay + previousCharsCount * 0.03 + lineIndex * 0.2;

        return (
          <motion.span
            key={lineIndex}
            className="block whitespace-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.03,
                  delayChildren: lineDelay,
                },
              },
            }}
          >
            {line.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const portraitRotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], reduceMotion ? [0, 0] : [-2.5, 2.5]),
    { stiffness: 105, damping: 24 },
  );

  const portraitRotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], reduceMotion ? [0, 0] : [1.8, -1.8]),
    { stiffness: 105, damping: 24 },
  );

  const foregroundX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], reduceMotion ? [0, 0] : [-18, 18]),
    { stiffness: 90, damping: 26 },
  );

  const backgroundX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], reduceMotion ? [0, 0] : [11, -11]),
    { stiffness: 80, damping: 28 },
  );

  const orbY = useSpring(
    useTransform(pointerY, [-0.5, 0.5], reduceMotion ? [0, 0] : [-16, 16]),
    { stiffness: 80, damping: 25 },
  );

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 88,
    damping: 31,
    mass: 0.34,
  });

  const sceneScale = useTransform(progress, [0, 0.72, 1], [1, 0.992, 0.955]);
  const sceneY = useTransform(progress, [0, 1], [0, -20]);
  const sceneRadius = useTransform(progress, [0, 0.74, 1], ['0px', '0px', '30px']);
  const nameScale = useTransform(progress, [0, 1], [1, 1.035]);
  const nameY = useTransform(progress, [0, 1], [0, -32]);
  const portraitScale = useTransform(progress, [0, 1], [1, 1.085]);
  const portraitY = useTransform(progress, [0, 1], [0, 34]);
  const portraitOpacity = useTransform(progress, [0, 0.8, 1], [1, 1, 0.88]);
  const contentY = useTransform(progress, [0, 1], [0, -52]);
  const contentScale = useTransform(progress, [0, 1], [1, 0.96]);
  const cardsOpacity = useTransform(progress, [0, 0.68, 1], [1, 0.94, 0]);
  const detailsOpacity = useTransform(progress, [0, 0.55, 0.9], [1, 0.8, 0]);
  const hintOpacity = useTransform(progress, [0, 0.18, 0.48], [1, 1, 0]);
  const progressWidth = useTransform(progress, [0, 1], ['0%', '100%']);

  const floatCard = (delay = 0, distance = 8) => (
    reduceMotion
      ? {}
      : {
          y: [0, -distance, 0],
          rotate: [0, 0.5, 0],
          transition: {
            y: { duration: 5.5, delay, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 5.5, delay, repeat: Infinity, ease: 'easeInOut' },
          },
        }
  );

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return;

    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section ref={heroRef} id="home" className="relative bg-sand lg:h-[190svh]">
      {/* Mobile Hero */}
      <div className="relative h-[100svh] min-h-[720px] overflow-hidden bg-sand lg:hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_27%,rgba(244,255,24,.22),transparent_21rem)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-ink/[.16] to-transparent" />

        <header className="fixed inset-x-0 top-0 z-[100] flex h-16 items-center gap-2 px-3 pt-[env(safe-area-inset-top)]">
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            href="#home"
            className="focus-ring grid h-11 w-[6.5rem] shrink-0 place-items-center rounded-xl bg-acid font-display text-sm font-black shadow-[0_10px_30px_rgba(17,17,15,.12)]"
          >
            JM
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            href="mailto:jayeshmehra547@gmail.com"
            className="focus-ring ml-auto inline-flex h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl bg-acid px-4 font-display text-sm font-black shadow-[0_10px_30px_rgba(17,17,15,.12)]"
          >
            Let&apos;s talk <ArrowUpRight size={16} />
          </motion.a>

          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="focus-ring grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/70 bg-sand/75 text-ink shadow-[0_10px_30px_rgba(17,17,15,.12)] backdrop-blur-xl"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={21} />}
          </motion.button>
        </header>

        <motion.div
          initial={false}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            y: mobileMenuOpen ? 0 : -16,
            scale: mobileMenuOpen ? 1 : 0.98,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed inset-x-3 top-[4.5rem] z-[90] rounded-2xl border border-white/60 bg-sand/95 p-3 shadow-[0_24px_65px_rgba(17,17,15,.18)] backdrop-blur-2xl ${
            mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          <nav className="grid gap-1.5">
            {[...leftLinks, ...rightLinks].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="focus-ring rounded-lg bg-white/45 px-3 py-3 font-display text-sm font-black uppercase"
              >
                {label}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Animated Background Text - Outer layer separates scroll from entrance */}
        <div className="pointer-events-none absolute inset-x-0 top-[6.3rem] z-10 whitespace-nowrap text-center font-display text-[18vw] font-black leading-[.78] tracking-[-.07em] text-acid">
          <motion.div
            initial={{ x: '15vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            JAYESH
          </motion.div>
        </div>

        {/* Typing Texts */}
        <div className="absolute inset-x-4 top-[18.5%] z-50 flex items-start justify-between gap-4">
          <TypingText
            textLines={["The frontend builder.", "That's Jayesh."]}
            className="w-max font-display text-[13px] font-black leading-[1.15rem] text-ink"
            delay={2.8}
          />
          <TypingText
            textLines={["Building bold experiences", "where clean code meets", "creative detail."]}
            className="w-max text-right font-display text-[12px] font-black leading-[1.05rem] text-ink"
            delay={3.2}
          />
        </div>

        {/* Portrait - Blur Entrance */}
        <div className="pointer-events-none absolute inset-x-0 top-[8.4rem] z-20 mx-auto h-[calc(100svh-8.4rem)] w-full">
          <motion.img
            initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.05 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 1.2, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
            src="/assets/jayesh-cutout.webp"
            alt="Jayesh Mehra"
            fetchPriority="high"
            draggable="false"
            className="hero-portrait-shadow h-full w-full origin-bottom scale-[1.12] object-contain object-bottom"
          />
        </div>

        {/* Cards Wrapper */}
        <div className="absolute left-3 top-[32%] z-40 w-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div animate={floatCard(0.45, 8)}>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-md">
                <div className="space-y-3">
                  {qualities.map((quality, index) => (
                    <p key={quality} className="flex items-center gap-3 whitespace-nowrap font-display text-[13px] font-black text-white">
                      <span className="text-acid text-[12px]">
                        {['●', '✦', '◆', '■', '✕'][index]}
                      </span>
                      {quality}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute right-3 top-[39%] z-40 w-[8.6rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div animate={floatCard(0.7, 10)}>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-center shadow-xl backdrop-blur-md">
                <p className="font-display text-5xl font-black leading-none text-acid">25</p>
                <p className="mt-2 font-display text-[12px] whitespace-nowrap font-black leading-[1rem] text-white">B.Tech graduate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute left-3 top-[59%] z-50 w-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a href="#projects" className="focus-ring block" animate={floatCard(0.95, 8)}>
              <span className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 shadow-xl backdrop-blur-md">
                <span className="font-display text-4xl font-black leading-none text-acid">02</span>
                <span className="font-display text-[13px] font-black leading-[1.1rem] text-white whitespace-nowrap">Live<br />projects</span>
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Main Heading */}
        <div className="absolute inset-x-4 bottom-[9.4rem] z-50 flex justify-center">
          <h1 className="text-left font-display text-[clamp(2.45rem,10.8vw,3.15rem)] font-black leading-[1.05] tracking-[-.065em] text-white">
            {heroTitle.map((line, index) => (
              <span key={line} className="block overflow-hidden pb-[.08em]">
                <motion.span
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 2.3 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Mobile CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 bottom-6 z-50 flex justify-center gap-3 px-3"
        >
          <a href="#projects" className="focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-acid px-7 font-display text-[13px] font-black text-ink shadow-float">
            See my work
          </a>
          <a href="/Jayesh-Mehra-Resume.pdf" download className="focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-acid px-7 font-display text-[13px] font-black text-ink shadow-float">
            My resume
          </a>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-[60] h-1 bg-acid" />
      </div>

      {/* Desktop Hero */}
      <div className="sticky top-0 hidden h-[100svh] overflow-hidden [perspective:1600px] lg:block">
        <motion.div
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          style={{ scale: sceneScale, y: sceneY, borderRadius: sceneRadius, transformStyle: 'preserve-3d' }}
          className="relative h-full w-full origin-center overflow-hidden bg-sand"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_31%,rgba(244,255,24,.24),transparent_29rem)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-ink/[.12] to-transparent" />

          {/* Background Name - Outer controls scroll, Inner controls entry slide */}
          <motion.div
            style={{ scale: nameScale, y: nameY }}
            className="pointer-events-none absolute inset-x-1 top-[2.5svh] z-10 select-none whitespace-nowrap text-center font-display text-[23.5vw] font-black leading-[.72] tracking-[-.095em] text-acid"
          >
            <motion.div style={{ x: backgroundX }}>
              <motion.div
                initial={{ x: '15vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              >
                JAYESH
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Nav Links */}
          <motion.div
            style={{ opacity: detailsOpacity }}
            className="absolute inset-x-12 top-[44%] z-30 flex items-center justify-between"
          >
            <motion.nav
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-0"
            >
              {leftLinks.map(([label, href], index) => (
                <a key={label} href={href} className="hero-nav-link font-black">
                  {label}
                  {index < leftLinks.length - 1 && <span aria-hidden="true" className="mx-2">|</span>}
                </a>
              ))}
            </motion.nav>

            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-0"
            >
              {rightLinks.map(([label, href], index) => (
                <a key={label} href={href} className="hero-nav-link font-black">
                  {label}
                  {index < rightLinks.length - 1 && <span aria-hidden="true" className="mx-2">|</span>}
                </a>
              ))}
            </motion.nav>
          </motion.div>

          {/* Character Cutout - Outer controls 3D Parallax, Inner controls Blur entry */}
          <motion.div
            style={{
              x: foregroundX, y: portraitY, scale: portraitScale, opacity: portraitOpacity,
              rotateX: portraitRotateX, rotateY: portraitRotateY, transformStyle: 'preserve-3d',
            }}
            className="pointer-events-none absolute inset-x-0 bottom-[-62svh] z-20 mx-auto h-[162svh] w-[min(102vw,1540px)] origin-bottom"
          >
            <motion.img
              initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.05 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 1.2, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
              src="/assets/jayesh-cutout.webp"
              alt="Jayesh Mehra"
              fetchPriority="high"
              draggable="false"
              className="hero-portrait-shadow h-full w-full object-contain object-bottom"
            />
          </motion.div>

          {/* Card 1: Live Projects */}
          <motion.div
            style={{ opacity: cardsOpacity }}
            className="absolute top-[50%] left-[5%] xl:left-[7%] z-30 w-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div animate={floatCard(0.45, 9)}>
                <div className="flex items-center gap-5 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 shadow-xl backdrop-blur-md">
                  <p className="font-display text-5xl font-black leading-none text-acid">02</p>
                  <p className="font-display text-sm font-black leading-[1.2rem] text-white whitespace-nowrap">Live<br />projects</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Card 2: B.Tech graduate */}
          <motion.div
            style={{ opacity: cardsOpacity }}
            className="absolute top-[69%] left-[5%] xl:left-[7%] z-30 w-auto min-w-[150px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div animate={floatCard(0.8, 10)}>
                <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-5 text-center shadow-xl backdrop-blur-md">
                  <p className="font-display text-5xl font-black leading-none text-acid">25</p>
                  <p className="mt-2 whitespace-nowrap font-display text-sm font-black text-white">B.Tech graduate</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Card 3: What I Bring */}
          <motion.div
            style={{ opacity: cardsOpacity }}
            className="absolute top-[50%] right-[5%] xl:right-[7%] z-30 w-auto min-w-[180px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div animate={floatCard(0.62, 9)}>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md">
                  <div className="space-y-4">
                    {qualities.map((quality, index) => (
                      <p key={quality} className="flex items-center gap-4 whitespace-nowrap font-display text-[15px] font-black text-white">
                        <span className="text-acid text-[14px]">
                          {['●', '✦', '◆', '■', '✕'][index]}
                        </span>
                        {quality}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Center Heading & CTAs */}
          <div className="absolute bottom-[6.25rem] left-1/2 z-50 w-max -translate-x-1/2">
            <motion.div style={{ y: contentY, scale: contentScale }}>
              <h1 className="text-left font-display text-[clamp(2.6rem,4.4vw,5rem)] font-black leading-[1.05] tracking-[-.02em] text-white">
                {heroTitle.map((line, index) => (
                  <span key={line} className="block overflow-hidden pb-[.08em]">
                    <motion.span
                      initial={{ y: '110%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.9, delay: 2.3 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      className="block"
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex justify-start gap-4"
              >
                <a href="#projects" className="focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-acid px-9 font-display text-sm font-black text-ink shadow-float transition hover:-translate-y-1">
                  See my work
                </a>
                <a href="/Jayesh-Mehra-Resume.pdf" download className="focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-acid px-9 font-display text-sm font-black text-ink shadow-float transition hover:-translate-y-1">
                  My resume
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Typing Effect Desktop */}
          <motion.div
            style={{ opacity: detailsOpacity }}
            className="absolute bottom-10 left-[5%] xl:left-[7%] z-30 w-max text-left font-display text-[15px] font-black leading-snug text-ink"
          >
            <TypingText textLines={["The frontend builder.", "That's Jayesh."]} delay={2.8} />
          </motion.div>

          <motion.div
            style={{ opacity: detailsOpacity }}
            className="absolute bottom-10 right-[5%] xl:right-[7%] z-30 w-max text-right font-display text-[15px] font-black leading-snug text-ink"
          >
            <TypingText textLines={["Building bold experiences", "where clean code meets", "creative detail."]} delay={3.2} />
          </motion.div>

          {/* Scroll Hint */}
          <motion.div
            style={{ opacity: hintOpacity, y: orbY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="pointer-events-none absolute right-8 top-6 z-40 flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sand"
          >
            <Sparkles size={13} className="text-acid" />
            <span className="kicker">Scroll to explore</span>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 z-[60] h-1 bg-ink/10">
            <motion.div style={{ width: progressWidth }} className="h-full bg-acid" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}