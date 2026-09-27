import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
      wheelMultiplier: 0.88,
      touchMultiplier: 1,
      overscroll: true,
      anchors: {
        duration: 1.15,
        easing: (time) => 1 - Math.pow(1 - time, 4),
        offset: 0,
        lock: false,
      },
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
