import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Ultra-smooth, GPU-accelerated ambient cursor glow.
 * - Only mounts on devices with fine pointer input (e.g. desktop mice/trackpads).
 * - Full fallback for prefers-reduced-motion.
 * - Throttled via requestAnimationFrame to eliminate main-thread lag.
 */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const cursorX = useMotionValue(-500);
  const cursorY = useMotionValue(-500);

  // Smooth spring physics for fluid trailing effect
  const springConfig = { damping: 28, stiffness: 140, mass: 0.4 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasPointer || reduceMotion) return;

    setEnabled(true);
    let rafId = null;

    const moveCursor = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        // Center the 360px ambient glow on cursor
        cursorX.set(e.clientX - 180);
        cursorY.set(e.clientY - 180);
      });
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[35] h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-acid/15 via-sand/20 to-ink/5 blur-[95px]"
      style={{
        x: smoothX,
        y: smoothY,
        willChange: 'transform',
      }}
    />
  );
}
