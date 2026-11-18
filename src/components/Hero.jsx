import { useRef, useState, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import {
  ArrowUpRight,
  Download,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';
import { profile, qualities } from '../data/portfolio.js';
import Hero3DCanvas from './Hero3DCanvas.jsx';

const leftLinks = [
  ['Home', '#home'],
  ['About', '#story'],
  ['Projects', '#projects'],
];

const rightLinks = [
  ['What I Do', '#what-i-do'],
  ['Toolkit', '#toolkit'],
  ['Credentials', '#credentials'],
  ['Contact', '#contact'],
];

const heroTitle = ['Frontend,', 'Applied', 'Differently.'];

// Staggered Framer Motion Typing Effect
function TypingText({ textLines, className, delay = 0 }) {
  return (
    <div className={className}>
      {textLines.map((line, lineIndex) => {
        const previousCharsCount = textLines.slice(0, lineIndex).join('').length;
        const lineDelay = delay + previousCharsCount * 0.025 + lineIndex * 0.15;

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
                  staggerChildren: 0.025,
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
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Close resume modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  const pointerRaf = useRef(null);

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return;

    const rect = event.currentTarget.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;

    if (pointerRaf.current) cancelAnimationFrame(pointerRaf.current);
    pointerRaf.current = requestAnimationFrame(() => {
      pointerX.set(nx);
      pointerY.set(ny);
    });
  };

  const resetPointer = () => {
    if (pointerRaf.current) cancelAnimationFrame(pointerRaf.current);
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section ref={heroRef} id="home" className="relative bg-sand lg:h-[190svh]">
      {/* Mobile Hero */}
      <div className="relative h-[100svh] min-h-[720px] overflow-hidden bg-sand lg:hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_27%,rgba(244,255,24,.22),transparent_21rem)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-ink/[.45] via-ink/[.2] to-transparent" />

        <header className="fixed inset-x-0 top-0 z-[100] flex h-16 items-center justify-between px-4 pt-[env(safe-area-inset-top)]">
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            href="#home"
            className="focus-ring grid h-11 w-14 shrink-0 place-items-center rounded-xl bg-acid font-display text-sm font-black text-ink shadow-[0_10px_30px_rgba(17,17,15,.12)]"
            aria-label="Jayesh Mehra - Home"
          >
            JM
          </motion.a>

          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="focus-ring grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/70 bg-sand/75 text-ink shadow-[0_10px_30px_rgba(17,17,15,.12)] backdrop-blur-xl"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
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
          <nav className="grid gap-1.5" aria-label="Mobile navigation">
            {[...leftLinks, ...rightLinks].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="focus-ring rounded-lg bg-white/45 px-3 py-3 font-display text-sm font-black uppercase text-ink"
              >
                {label}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Animated Background Text */}
        <div className="pointer-events-none absolute inset-x-0 top-[5.8rem] z-10 whitespace-nowrap text-center font-display text-[18vw] font-black leading-[.78] tracking-[-.07em] text-acid">
          <motion.div
            initial={{ x: '15vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            JAYESH
          </motion.div>
        </div>

        {/* Typing Texts */}
        <div className="absolute inset-x-4 top-[10.2rem] z-50 flex items-start justify-between gap-2">
          <TypingText
            textLines={['Creative Frontend Dev', 'Jaipur, India']}
            className="font-display text-[11px] font-black leading-[1.15rem] tracking-tight text-ink sm:text-[13px]"
            delay={1.4}
          />
          <TypingText
            textLines={['Building responsive React UI', 'where clean structure meets', 'purposeful motion.']}
            className="text-right font-display text-[10.5px] font-black leading-[1.1rem] tracking-tight text-ink sm:text-[12px]"
            delay={1.7}
          />
        </div>

        {/* Portrait */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[9rem] z-20 mx-auto w-full">
          <motion.img
            initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.05 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 1.1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            src="/assets/jayesh-cutout.webp"
            alt="Jayesh Mehra — Creative Frontend Developer"
            width="883"
            height="1782"
            fetchPriority="high"
            decoding="async"
            draggable="false"
            className="hero-portrait-shadow h-full w-full origin-bottom scale-[1.12] object-contain object-bottom"
          />
        </div>

        {/* Mobile Info Cards (Translucent Creamy-White / Soft Warm-Yellow Frosted Glass) */}
        <div className="absolute left-3 top-[13.2rem] z-40 w-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div animate={floatCard(0.45, 8)}>
              <div className="rounded-2xl border border-[#fffae8]/50 bg-gradient-to-br from-[#fdfbf3]/65 via-[#f8f3e2]/50 to-[#f2ecda]/40 p-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),0_14px_30px_rgba(17,17,15,0.06)] backdrop-blur-md">
                <div className="space-y-2">
                  {qualities.slice(0, 3).map((quality, index) => (
                    <p key={quality} className="flex items-center gap-2.5 whitespace-nowrap font-display text-[11px] font-black text-ink">
                      <span className="grid h-4 w-4 place-items-center rounded bg-ink text-acid text-[9px] font-bold">
                        {['●', '✦', '◆'][index]}
                      </span>
                      <span>{quality}</span>
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute right-3 top-[18.5rem] z-40 w-[8.4rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div animate={floatCard(0.7, 9)}>
              <div className="rounded-2xl border border-[#fffae8]/50 bg-gradient-to-br from-[#fdfbf3]/65 via-[#f8f3e2]/50 to-[#f2ecda]/40 px-4 py-3 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),0_14px_30px_rgba(17,17,15,0.06)] backdrop-blur-md">
                <p className="font-display text-4xl font-black leading-none text-ink">2025</p>
                <p className="mt-1.5 whitespace-nowrap font-display text-[11px] font-black text-ink">B.Tech IT Graduate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute left-3 top-[26rem] z-50 w-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a href="#projects" className="focus-ring block" animate={floatCard(0.95, 8)}>
              <span className="flex items-center gap-3.5 rounded-2xl border border-[#fffae8]/50 bg-gradient-to-br from-[#fdfbf3]/65 via-[#f8f3e2]/50 to-[#f2ecda]/40 px-4 py-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),0_14px_30px_rgba(17,17,15,0.06)] backdrop-blur-md">
                <span className="font-display text-3xl font-black leading-none text-ink">02</span>
                <span className="whitespace-nowrap font-display text-[12px] font-black leading-[1.1rem] text-ink">Live<br />Projects</span>
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Main Heading Mobile */}
        <div className="absolute inset-x-4 bottom-[7.2rem] z-50 flex justify-center text-left">
          <h1 className="font-display text-[clamp(2.15rem,9.5vw,3.15rem)] font-black leading-[1.05] tracking-[-.05em] text-white drop-shadow-[0_4px_18px_rgba(17,17,15,0.7)] [text-shadow:0_2px_12px_rgba(17,17,15,0.65)]">
            {heroTitle.map((line, index) => (
              <span key={line} className="block overflow-hidden pb-[.08em]">
                <motion.span
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 1.1 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Mobile CTAs: Only 2 Primary Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 bottom-5 z-50 flex justify-center gap-3 px-4"
        >
          <a
            href="#projects"
            className="focus-ring inline-flex h-11 flex-1 max-w-[155px] items-center justify-center rounded-xl bg-acid px-5 font-display text-xs font-black text-ink shadow-float transition active:scale-95"
          >
            See my work
          </a>
          <button
            type="button"
            onClick={() => setIsResumeOpen(true)}
            className="focus-ring inline-flex h-11 flex-1 max-w-[155px] items-center justify-center rounded-xl bg-ink px-5 font-display text-xs font-black text-sand shadow-float transition active:scale-95"
          >
            My resume
          </button>
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
          <Hero3DCanvas />

          {/* Background Name */}
          <motion.div
            style={{ scale: nameScale, y: nameY }}
            className="pointer-events-none absolute inset-x-1 top-[2.5svh] z-10 select-none whitespace-nowrap text-center font-display text-[23.5vw] font-black leading-[.72] tracking-[-.095em] text-acid"
          >
            <motion.div style={{ x: backgroundX }}>
              <motion.div
                initial={{ x: '15vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                JAYESH
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Nav Links Desktop */}
          <motion.div
            style={{ opacity: detailsOpacity }}
            className="absolute inset-x-12 top-[44%] z-30 flex items-center justify-between"
          >
            <motion.nav
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-0"
              aria-label="Desktop hero navigation left"
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
              transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-0"
              aria-label="Desktop hero navigation right"
            >
              {rightLinks.map(([label, href], index) => (
                <a key={label} href={href} className="hero-nav-link font-black">
                  {label}
                  {index < rightLinks.length - 1 && <span aria-hidden="true" className="mx-2">|</span>}
                </a>
              ))}
            </motion.nav>
          </motion.div>

          {/* Character Cutout */}
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
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              src="/assets/jayesh-cutout.webp"
              alt="Jayesh Mehra — Creative Frontend Developer"
              width="883"
              height="1782"
              fetchPriority="high"
              decoding="async"
              draggable="false"
              className="hero-portrait-shadow h-full w-full object-contain object-bottom"
            />
          </motion.div>

          {/* Card 1: Live Projects (Translucent Creamy-White / Soft Warm-Yellow Frosted Glass) */}
          <motion.div
            style={{ opacity: cardsOpacity }}
            className="absolute top-[50%] left-[5%] xl:left-[7%] z-30 w-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div animate={floatCard(0.45, 9)}>
                <a href="#projects" className="focus-ring block rounded-2xl">
                  <div className="flex items-center gap-5 rounded-2xl border border-[#fffae8]/55 bg-gradient-to-br from-[#fdfbf3]/60 via-[#f8f3e2]/45 to-[#f2ecda]/35 px-6 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),0_18px_40px_rgba(17,17,15,0.06)] backdrop-blur-md transition hover:from-[#fdfbf3]/75 hover:to-[#f5eed6]/55 hover:scale-105">
                    <p className="font-display text-5xl font-black leading-none text-ink">02</p>
                    <p className="whitespace-nowrap font-display text-sm font-black leading-[1.2rem] text-ink">
                      Live<br />Projects
                    </p>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Card 2: B.Tech Graduate (Translucent Creamy-White / Soft Warm-Yellow Frosted Glass) */}
          <motion.div
            style={{ opacity: cardsOpacity }}
            className="absolute top-[69%] left-[5%] xl:left-[7%] z-30 w-auto min-w-[150px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div animate={floatCard(0.8, 10)}>
                <div className="rounded-2xl border border-[#fffae8]/55 bg-gradient-to-br from-[#fdfbf3]/60 via-[#f8f3e2]/45 to-[#f2ecda]/35 px-6 py-5 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),0_18px_40px_rgba(17,17,15,0.06)] backdrop-blur-md transition hover:from-[#fdfbf3]/75 hover:to-[#f5eed6]/55">
                  <p className="font-display text-5xl font-black leading-none text-ink">2025</p>
                  <p className="mt-2 whitespace-nowrap font-display text-sm font-black text-ink">
                    B.Tech IT Graduate
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Card 3: Architecture & Disciplines (Translucent Creamy-White / Soft Warm-Yellow Frosted Glass) */}
          <motion.div
            style={{ opacity: cardsOpacity }}
            className="absolute top-[50%] right-[5%] xl:right-[7%] z-30 w-auto min-w-[210px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div animate={floatCard(0.62, 9)}>
                <div className="rounded-2xl border border-[#fffae8]/55 bg-gradient-to-br from-[#fdfbf3]/60 via-[#f8f3e2]/45 to-[#f2ecda]/35 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),0_18px_40px_rgba(17,17,15,0.06)] backdrop-blur-md transition hover:from-[#fdfbf3]/75 hover:to-[#f5eed6]/55">
                  <div className="space-y-3.5">
                    {qualities.map((quality, index) => (
                      <p key={quality} className="flex items-center gap-3.5 whitespace-nowrap font-display text-[14px] font-black text-ink">
                        <span className="grid h-5 w-5 place-items-center rounded-md bg-ink text-acid text-[10px] font-bold">
                          {['●', '✦', '◆', '■', '✕'][index]}
                        </span>
                        <span>{quality}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Center Heading & CTAs (Only 2 Primary Buttons: See My Work & My Resume) */}
          <div className="absolute bottom-[6.25rem] left-1/2 z-50 w-max -translate-x-1/2">
            <motion.div style={{ y: contentY, scale: contentScale }}>
              <h1 className="text-left font-display text-[clamp(2.6rem,4.4vw,5rem)] font-black leading-[1.05] tracking-[-.02em] text-white drop-shadow-[0_4px_24px_rgba(17,17,15,0.65)] [text-shadow:0_2px_18px_rgba(17,17,15,0.55)]">
                {heroTitle.map((line, index) => (
                  <span key={line} className="block overflow-hidden pb-[.08em]">
                    <motion.span
                      initial={{ y: '110%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.9, delay: 1.1 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
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
                transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex justify-start gap-4"
              >
                <a
                  href="#projects"
                  className="focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-acid px-9 font-display text-sm font-black text-ink shadow-float transition duration-200 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]"
                >
                  See my work
                </a>

                <button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  className="focus-ring inline-flex h-12 items-center justify-center rounded-xl border border-ink/20 bg-ink px-9 font-display text-sm font-black text-sand shadow-float transition duration-200 hover:-translate-y-1 hover:text-acid active:scale-[0.98]"
                >
                  My resume
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Typing Effect Desktop */}
          <motion.div
            style={{ opacity: detailsOpacity }}
            className="absolute bottom-10 left-[5%] xl:left-[7%] z-30 w-max text-left font-display text-[15px] font-black leading-snug text-ink"
          >
            <TypingText textLines={['Creative Frontend Developer', 'Jaipur, India · Open for work']} delay={1.5} />
          </motion.div>

          <motion.div
            style={{ opacity: detailsOpacity }}
            className="absolute bottom-10 right-[5%] xl:right-[7%] z-30 w-max text-right font-display text-[15px] font-black leading-snug text-ink"
          >
            <TypingText textLines={['Building responsive React websites', 'where clean code meets', 'purposeful visual detail.']} delay={1.8} />
          </motion.div>

          {/* Scroll Hint */}
          <motion.div
            style={{ opacity: hintOpacity, y: orbY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
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

      {/* Accessible Resume Modal Popup */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#11110f]/80 p-4 backdrop-blur-sm"
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-sand shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-ink/10 p-4">
                <div>
                  <h3 id="resume-modal-title" className="font-display text-lg font-black text-ink">
                    Jayesh Mehra — Resume
                  </h3>
                  <p className="text-xs text-ink/60">Creative Frontend Developer · B.Tech in IT</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={profile.resumeUrl}
                    download="Jayesh-Mehra-Resume.pdf"
                    className="focus-ring inline-flex items-center gap-1.5 rounded-xl bg-acid px-3.5 py-2 font-display text-xs font-black text-ink transition hover:scale-105"
                  >
                    <Download size={14} />
                    Download PDF
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsResumeOpen(false)}
                    className="focus-ring rounded-full bg-ink/10 p-2 text-ink transition hover:bg-ink/20"
                    aria-label="Close resume modal"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* PDF Renderer */}
              <iframe
                src={`${profile.resumeUrl}#view=FitH`}
                className="h-full w-full flex-1 bg-white"
                title="Jayesh Mehra Resume Document"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
