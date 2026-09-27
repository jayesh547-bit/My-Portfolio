import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for the trailing shadow effect
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Offset by 200px to perfectly center the 400px glow on the mouse
      cursorX.set(e.clientX - 200);
      cursorY.set(e.clientY - 200);
    };
    
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 h-[400px] w-[400px] rounded-full bg-[#11110f]/10 blur-[80px]"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    />
  );
}