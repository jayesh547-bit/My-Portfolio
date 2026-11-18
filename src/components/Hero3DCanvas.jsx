import { useEffect, useRef } from 'react';

/**
 * High-performance, lightweight interactive 3D particle & geometric depth canvas.
 * - Renders depth-projected floating geometric nodes and connection lines in 3D perspective.
 * - Interacts smoothly with pointer movement for natural parallax depth.
 * - Pauses execution completely via IntersectionObserver when scrolled out of view (0% CPU impact).
 * - Full prefers-reduced-motion support (renders a static ambient field).
 */
export default function Hero3DCanvas({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId = null;
    let isVisible = true;
    let lastTime = performance.now();
    let width = 0;
    let height = 0;

    // Pointer target and interpolated smoothed position
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    // Node count optimized for high FPS and low power usage
    const nodeCount = 38;
    const nodes = [];
    const fov = 380; // Field of view / perspective depth factor

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    // Initialize 3D nodes
    const spreadX = 700;
    const spreadY = 460;
    const spreadZ = 400;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * spreadX,
        y: (Math.random() - 0.5) * spreadY,
        z: (Math.random() - 0.5) * spreadZ,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2.4 + 1.2,
        isAccent: i % 4 === 0, // Accent color matching portfolio palette
      });
    }

    const handlePointerMove = (e) => {
      if (reduceMotion) return;
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = nx * 0.45; // Yaw
      targetRotX = -ny * 0.35; // Pitch
    };

    const handlePointerLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    // Pause animation when hero is offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationFrameId && !reduceMotion) {
          lastTime = performance.now();
          render();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave, { passive: true });

    resize();

    const render = () => {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation (lerp)
      currentRotX += (targetRotX - currentRotX) * 0.06;
      currentRotY += (targetRotY - currentRotY) * 0.06;

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      const centerX = width / 2;
      const centerY = height * 0.42;

      const projected = [];

      // Transform and project each 3D node
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (!reduceMotion) {
          n.x += n.vx * dt * 60;
          n.y += n.vy * dt * 60;
          n.z += n.vz * dt * 60;

          // Boundary bouncing
          if (Math.abs(n.x) > spreadX * 0.55) n.vx *= -1;
          if (Math.abs(n.y) > spreadY * 0.55) n.vy *= -1;
          if (Math.abs(n.z) > spreadZ * 0.55) n.vz *= -1;
        }

        // 3D Rotation matrices
        // 1. Rotate Y (yaw)
        const x1 = n.x * cosY + n.z * sinY;
        const z1 = -n.x * sinY + n.z * cosY;

        // 2. Rotate X (pitch)
        const y2 = n.y * cosX - z1 * sinX;
        const z2 = n.y * sinX + z1 * cosX;

        // Perspective projection
        const depth = z2 + fov;
        if (depth <= 20) continue;

        const scale = fov / depth;
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;
        const pSize = Math.max(0.6, n.size * scale);
        const alpha = Math.min(1, Math.max(0.12, (scale - 0.4) * 0.9));

        projected.push({
          x: px,
          y: py,
          size: pSize,
          alpha,
          isAccent: n.isAccent,
          scale,
        });
      }

      // Draw subtle connective geometry lines between nearby 3D points
      ctx.lineWidth = 0.85;
      const maxDist = 135;

      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.16 * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = `rgba(17, 17, 15, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw 3D projected nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        if (p.isAccent) {
          // Acid-accent node with subtle glow
          ctx.fillStyle = `rgba(244, 255, 24, ${p.alpha * 0.95})`;
          ctx.shadowColor = 'rgba(244, 255, 24, 0.45)';
          ctx.shadowBlur = 8 * p.scale;
        } else {
          // Warm ink node
          ctx.fillStyle = `rgba(17, 17, 15, ${p.alpha * 0.45})`;
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }

      // Reset shadow for next frame
      ctx.shadowBlur = 0;

      if (!reduceMotion && isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (reduceMotion) {
      render(); // Single static frame
    } else {
      render();
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60 transition-opacity duration-700 ${className}`}
    />
  );
}
