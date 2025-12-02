import React, { useRef, useEffect } from "react";

/**
 * FloatingParticles
 * - Full-width canvas that paints subtle floating particles
 * - Lightweight: particles are small, few, and use requestAnimationFrame
 * - Respects dark/light by using CSS variables or fallback colors
 */
export default function FloatingParticles({
  particleCount = 40,
  color = "rgba(210, 180, 100, 0.9)", // warm gold-ish
  maxSize = 3.2,
  speed = 0.2,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let dpr = window.devicePixelRatio || 1;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    }

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function initParticles() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: rand(-0.15, 0.15) * (speed * 2),
          vy: rand(-0.02, -0.5) * speed, // gentle upward drift
          size: rand(0.6, maxSize),
          alpha: rand(0.15, 0.9),
          drift: rand(-0.2, 0.2),
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // subtle gradient background overlay (keeps page visible)
      // comment out if you already have full bg visuals
      // ctx.fillStyle = 'rgba(0,0,0,0)';
      // ctx.fillRect(0,0,w,h);

      particlesRef.current.forEach((p) => {
        // oscillate horizontally for a "float" feel
        p.x += p.vx + Math.sin((Date.now() / 1000) + p.phase) * (p.drift * 0.2);
        p.y += p.vy;

        // respawn at bottom if drifted out
        if (p.y < -20) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -50) p.x = w + 50;
        if (p.x > w + 50) p.x = -50;

        // paint
        ctx.beginPath();
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        // soft gold glow stops
        g.addColorStop(0, `rgba(255, 236, 179, ${p.alpha})`);
        g.addColorStop(0.5, `rgba(212, 175, 55, ${p.alpha * 0.6})`);
        g.addColorStop(1, `rgba(212, 175, 55, 0)`);
        ctx.fillStyle = g;
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function tick() {
      draw();
      rafRef.current = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [particleCount, maxSize, speed, color]);

  // Canvas container sits absolutely; parent should set relative positioning.
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          // keep canvas behind content but above background
          zIndex: 0,
        }}
      />
    </div>
  );
}
