"use client";

import React, { useEffect, useRef } from "react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  radius: number;
  color: string;
  name: string;
  role: string;
  pulsePhase: number;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  alpha: number;
}

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isRunning = true;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Mouse coordinates (interpolated)
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left - rect.width / 2;
      const clientY = e.clientY - rect.top - rect.height / 2;
      mouse.targetX = clientX * 0.0008;
      mouse.targetY = clientY * 0.0008;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement?.getBoundingClientRect() || {
        width: 800,
        height: 600,
      };
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // 5 Founder Nodes positioned in 3D geometric harmony
    // Forming a pentagonal neural prism that outlines an abstract 'A'
    const nodes: Node3D[] = [
      {
        x: 0,
        y: -140,
        z: 0,
        baseX: 0,
        baseY: -140,
        baseZ: 0,
        radius: 7,
        color: "#00F0FF",
        name: "Mind 01",
        role: "Vision & Architecture",
        pulsePhase: 0,
      },
      {
        x: -120,
        y: -20,
        z: 60,
        baseX: -120,
        baseY: -20,
        baseZ: 60,
        radius: 6,
        color: "#38bdf8",
        name: "Mind 02",
        role: "Engineering & Scale",
        pulsePhase: 1.2,
      },
      {
        x: 120,
        y: -20,
        z: -60,
        baseX: 120,
        baseY: -20,
        baseZ: -60,
        radius: 6,
        color: "#3b82f6",
        name: "Mind 03",
        role: "Cloud & Reliability",
        pulsePhase: 2.4,
      },
      {
        x: -150,
        y: 130,
        z: -50,
        baseX: -150,
        baseY: 130,
        baseZ: -50,
        radius: 6.5,
        color: "#6366f1",
        name: "Mind 04",
        role: "AI & Intelligence",
        pulsePhase: 3.6,
      },
      {
        x: 150,
        y: 130,
        z: 50,
        baseX: 150,
        baseY: 130,
        baseZ: 50,
        radius: 6.5,
        color: "#a855f7",
        name: "Mind 05",
        role: "Design & Experience",
        pulsePhase: 4.8,
      },
    ];

    // Background floating data particles
    const particleCount = 45;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 500,
        y: (Math.random() - 0.5) * 450,
        z: (Math.random() - 0.5) * 350,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    // Packet pulses traveling between nodes
    interface Packet {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      color: string;
    }
    const packets: Packet[] = [
      { fromIndex: 0, toIndex: 1, progress: 0.1, speed: 0.012, color: "#00F0FF" },
      { fromIndex: 0, toIndex: 2, progress: 0.5, speed: 0.014, color: "#38bdf8" },
      { fromIndex: 1, toIndex: 3, progress: 0.2, speed: 0.016, color: "#6366f1" },
      { fromIndex: 2, toIndex: 4, progress: 0.7, speed: 0.011, color: "#a855f7" },
      { fromIndex: 3, toIndex: 4, progress: 0.4, speed: 0.015, color: "#00F0FF" },
      { fromIndex: 1, toIndex: 2, progress: 0.8, speed: 0.013, color: "#38bdf8" },
    ];

    let angleY = 0;
    let angleX = 0;
    const fov = 340;

    const render = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReducedMotion) {
        angleY += 0.0035;
        angleX = Math.sin(angleY * 0.5) * 0.1;
      }

      const effectiveAngleY = angleY + mouse.x * 2.5;
      const effectiveAngleX = angleX + mouse.y * 1.5;

      const cosY = Math.cos(effectiveAngleY);
      const sinY = Math.sin(effectiveAngleY);
      const cosX = Math.cos(effectiveAngleX);
      const sinX = Math.sin(effectiveAngleX);

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Draw subtle background particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.z += p.vz;

          if (p.x < -280) p.x = 280;
          if (p.x > 280) p.x = -280;
          if (p.y < -240) p.y = 240;
          if (p.y > 240) p.y = -240;
          if (p.z < -200) p.z = 200;
          if (p.z > 200) p.z = -200;
        }

        // 3D rotation
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const scale = fov / (fov + z2 + 150);
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y1 * scale;

        if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
          ctx.beginPath();
          ctx.arc(screenX, screenY, p.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha * 0.6})`;
          ctx.fill();
        }
      }

      // 2. Project 5 Founder Nodes
      interface ProjectedNode {
        x: number;
        y: number;
        z: number;
        scale: number;
        node: Node3D;
      }

      const projectedNodes: ProjectedNode[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.pulsePhase += 0.03;

        // Apply 3D rotation
        const x1 = node.baseX * cosY - node.baseZ * sinY;
        const z1 = node.baseZ * cosY + node.baseX * sinY;
        const y1 = node.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.baseY * sinX;

        const scale = fov / (fov + z2 + 140);
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y1 * scale;

        projectedNodes.push({
          x: screenX,
          y: screenY,
          z: z2,
          scale,
          node,
        });
      }

      // 3. Draw Interconnecting Geometric Energy Web (All-to-all or pentagram connections)
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];

          const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          grad.addColorStop(0, "rgba(0, 240, 255, 0.22)");
          grad.addColorStop(0.5, "rgba(59, 130, 246, 0.35)");
          grad.addColorStop(1, "rgba(99, 102, 241, 0.22)");

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.2 * Math.min(p1.scale, p2.scale);
          ctx.stroke();
        }
      }

      // 4. Update and Draw Dynamic Traveling Data Packets
      for (let i = 0; i < packets.length; i++) {
        const pkt = packets[i];
        if (!prefersReducedMotion) {
          pkt.progress += pkt.speed;
          if (pkt.progress > 1) {
            pkt.progress = 0;
            // Swap to a random next connection
            pkt.fromIndex = Math.floor(Math.random() * nodes.length);
            pkt.toIndex = (pkt.fromIndex + 1 + Math.floor(Math.random() * 4)) % nodes.length;
          }
        }

        const pFrom = projectedNodes[pkt.fromIndex];
        const pTo = projectedNodes[pkt.toIndex];

        if (pFrom && pTo) {
          const curX = pFrom.x + (pTo.x - pFrom.x) * pkt.progress;
          const curY = pFrom.y + (pTo.y - pFrom.y) * pkt.progress;
          const curScale = pFrom.scale + (pTo.scale - pFrom.scale) * pkt.progress;

          ctx.beginPath();
          ctx.arc(curX, curY, 3.2 * curScale, 0, Math.PI * 2);
          ctx.fillStyle = pkt.color;
          ctx.shadowColor = pkt.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      }

      // 5. Draw the 5 Founder Nodes (ordered by depth)
      projectedNodes.sort((a, b) => b.z - a.z);

      for (let i = 0; i < projectedNodes.length; i++) {
        const p = projectedNodes[i];
        const pulse = Math.sin(p.node.pulsePhase) * 0.25 + 1;
        const currentRadius = p.node.radius * p.scale * pulse;

        // Outer Aura / Glow Ring
        const auraGrad = ctx.createRadialGradient(
          p.x,
          p.y,
          currentRadius * 0.4,
          p.x,
          p.y,
          currentRadius * 3.5
        );
        auraGrad.addColorStop(0, "rgba(0, 240, 255, 0.45)");
        auraGrad.addColorStop(0.6, "rgba(59, 130, 246, 0.18)");
        auraGrad.addColorStop(1, "rgba(99, 102, 241, 0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = auraGrad;
        ctx.fill();

        // Node Solid Sphere
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.node.color;
        ctx.shadowColor = "#00F0FF";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Core White Hotspot
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();

        // Node Label Pill
        const labelY = p.y + currentRadius + 14 * p.scale;
        ctx.font = `${Math.max(9, 11 * p.scale)}px 'Space Grotesk', -apple-system, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(226, 232, 240, 0.9)";
        ctx.fillText(p.node.name, p.x, labelY);

        ctx.font = `${Math.max(7, 8.5 * p.scale)}px 'Inter', sans-serif`;
        ctx.fillStyle = "rgba(0, 240, 255, 0.75)";
        ctx.fillText(p.node.role, p.x, labelY + 12 * p.scale);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Pause animation when tab is inactive to preserve battery and CPU
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isRunning = true;
        render();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className="relative w-full h-[450px] sm:h-[540px] lg:h-[620px] flex items-center justify-center pointer-events-none select-none"
      aria-label="Interactive 3D constellation visual representing the five founders of AVAPSTER Technologies"
      role="img"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ pointerEvents: "auto" }}
      />
    </div>
  );
};

