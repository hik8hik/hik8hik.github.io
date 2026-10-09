"use client";

import { useTheme } from "next-themes";
import { type ReactNode, useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
};

const ParticleBackground = ({ children }: { children: ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    let raf = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
        });
      }
    };

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const fill = resolvedTheme === "dark" ? "#ffffff" : "#1c1c22";
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = fill;
        ctx.fill();
      }
      raf = requestAnimationFrame(updateParticles);
    };

    resizeCanvas();
    createParticles();
    updateParticles();

    const onResize = () => {
      resizeCanvas();
      createParticles();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [resolvedTheme]);

  return (
    <div className="relative w-full min-h-screen">
      <canvas
        ref={canvasRef}
        id="dustCanvas"
        className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
};

export default ParticleBackground;
