"use client";
import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Particles
    const COUNT = 60;
    type Particle = { x: number; y: number; vx: number; vy: number; r: number; alpha: number };
    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.15,
    }));

    const LINK_DIST = 160;

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      // Move + wrap
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      // Draw connections
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const opacity = (1 - dist / LINK_DIST) * 0.18;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(168,85,247,${opacity})`;
            ctx!.lineWidth = 0.8;
            ctx!.stroke();
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(168,85,247,${p.alpha})`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {/* Dark base */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Neural canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Purple orb — top left */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "orb1 14s ease-in-out infinite alternate",
        }}
      />

      {/* Green orb — bottom right */}
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "orb2 18s ease-in-out infinite alternate",
        }}
      />

      {/* Blue orb — center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "orb3 22s ease-in-out infinite alternate",
        }}
      />

      <style>{`
        @keyframes orb1 {
          0%   { transform: translate(0,0) scale(1); }
          50%  { transform: translate(80px, 60px) scale(1.15); }
          100% { transform: translate(30px, 120px) scale(0.92); }
        }
        @keyframes orb2 {
          0%   { transform: translate(0,0) scale(1); }
          50%  { transform: translate(-60px,-80px) scale(1.1); }
          100% { transform: translate(-120px,-30px) scale(0.95); }
        }
        @keyframes orb3 {
          0%   { transform: translate(-50%,-50%) scale(1); }
          50%  { transform: translate(calc(-50% + 50px), calc(-50% - 40px)) scale(1.2); }
          100% { transform: translate(calc(-50% - 30px), calc(-50% + 60px)) scale(0.88); }
        }
      `}</style>
    </div>
  );
}
