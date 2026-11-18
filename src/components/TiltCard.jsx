import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Modern, 60fps 3D Perspective Tilt Card with Dynamic Specular Glare.
 * - Layered 3D depth with perspective and transform-style: preserve-3d.
 * - Smooth pointer tracking using requestAnimationFrame to prevent micro-stutter.
 * - Dynamic specular glare highlight that follows the cursor.
 * - Full fallback for touch devices (@media (hover: none)) and prefers-reduced-motion.
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 7,
  perspective = 1100,
  glare = true,
  glareOpacity = 0.16,
  as: Component = 'div',
  ...rest
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const isTouchDevice = useRef(false);
  const reduceMotion = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    isTouchDevice.current = window.matchMedia('(hover: none)').matches;
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const handlePointerMove = useCallback(
    (e) => {
      if (isTouchDevice.current || reduceMotion.current || !cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Normalized coordinates from -1 to 1
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        // Subtle tilt calculations
        const rotateX = (-percentY * maxTilt).toFixed(2);
        const rotateY = (percentX * maxTilt).toFixed(2);

        setTransformStyle(
          `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`
        );

        if (glare) {
          const glareX = ((x / rect.width) * 100).toFixed(1);
          const glareY = ((y / rect.height) * 100).toFixed(1);
          setGlareStyle({
            opacity: glareOpacity,
            x: glareX,
            y: glareY,
          });
        }
      });
    },
    [maxTilt, perspective, glare, glareOpacity]
  );

  const handlePointerEnter = useCallback(() => {
    if (isTouchDevice.current || reduceMotion.current) return;
    setIsHovered(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setIsHovered(false);
    setTransformStyle(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  }, [perspective]);

  return (
    <Component
      ref={cardRef}
      onMouseMove={handlePointerMove}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
        transition: isHovered
          ? 'transform 0.12s ease-out, box-shadow 0.25s ease'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
        willChange: isHovered ? 'transform' : 'auto',
      }}
      {...rest}
    >
      {/* Dynamic Specular Glare Layer */}
      {glare && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            opacity: glareStyle.opacity,
            background: `radial-gradient(circle 320px at ${glareStyle.x}% ${glareStyle.y}%, rgba(255, 255, 255, 0.4) 0%, rgba(244, 255, 24, 0.1) 40%, transparent 80%)`,
          }}
        />
      )}

      {children}
    </Component>
  );
}
