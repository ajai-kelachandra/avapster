"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  hueShift: number;
}

export const HeroAmbientCanvas: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Pause animation when hero is offscreen for 100% Core Web Vitals performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Respect user prefers-reduced-motion setting
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Interactive mouse glow
    const mouse = { x: width * 0.7, y: height * 0.4, targetX: width * 0.7, targetY: height * 0.4 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Create organic constellation of quantum particles (no harsh grid lines)
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.35 + 0.15,
        alpha: 0.2,
        hueShift: Math.random() > 0.4 ? 255 : 265, // Violet tone variations
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 1. Soft Dynamic Radial Glow Orbs (Fluid Ambient Aura in Violet)
      const grad1 = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.min(width * 0.45, 380)
      );
      grad1.addColorStop(0, "rgba(167, 139, 250, 0.12)");
      grad1.addColorStop(0.5, "rgba(196, 181, 253, 0.04)");
      grad1.addColorStop(1, "rgba(8, 10, 9, 0)");

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Secondary floating subtle orb on bottom-left
      const floatX = width * 0.25 + Math.sin(time * 0.6) * 60;
      const floatY = height * 0.65 + Math.cos(time * 0.5) * 45;
      const grad2 = ctx.createRadialGradient(
        floatX,
        floatY,
        0,
        floatX,
        floatY,
        Math.min(width * 0.35, 300)
      );
      grad2.addColorStop(0, "rgba(138, 141, 255, 0.08)");
      grad2.addColorStop(0.6, "rgba(167, 139, 250, 0.02)");
      grad2.addColorStop(1, "rgba(8, 10, 9, 0)");

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Floating Luminous Data Nodes (organic drifting particles)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Distance from interactive mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseFactor = Math.max(0, 1 - dist / 220);

        p.alpha = p.baseAlpha + mouseFactor * 0.5 + Math.sin(time + i) * 0.1;

        // Draw glowing particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 + mouseFactor * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${Math.min(p.alpha, 0.85)})`;
        ctx.fill();
      }

      if (!isVisible) return;
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};

