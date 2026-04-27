"use client";

import { useEffect, useRef } from "react";

export default function ParticleNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let mouse = { x: null, y: null };
    let inHero = false;
    let scrollY = window.scrollY;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", () => { scrollY = window.scrollY; });

    const dots = Array.from({ length: 60 }, () => ({
      // Store as page coordinates
      pageX: Math.random() * window.innerWidth,
      pageY: Math.random() * document.body.scrollHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5,
    }));

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const hero = document.getElementById("hero-section");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        inHero = e.clientY >= rect.top && e.clientY <= rect.bottom;
      }
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const hero = document.getElementById("hero-section");
      const heroBottom = hero ? hero.getBoundingClientRect().bottom + scrollY : 0;

      dots.forEach((p) => {
        // Keep dots out of hero page area
        if (p.pageY < heroBottom) {
          p.pageY = heroBottom + 10;
          p.vy = Math.abs(p.vy);
        }

        p.pageX += p.vx;
        p.pageY += p.vy;

        if (p.pageX < 0 || p.pageX > window.innerWidth) p.vx *= -1;
        if (p.pageY > document.body.scrollHeight) p.vy *= -1;
        if (p.pageY < heroBottom) { p.pageY = heroBottom; p.vy = Math.abs(p.vy); }

        // Convert page coords to viewport coords for drawing
        const vx = p.pageX;
        const vy = p.pageY - scrollY;

        // Only draw if visible in viewport
        if (vy < -10 || vy > canvas.height + 10) return;

        ctx.beginPath();
        ctx.arc(vx, vy, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 197, 94, 0.25)";
        ctx.fill();

        dots.forEach((p2) => {
          const vx2 = p2.pageX;
          const vy2 = p2.pageY - scrollY;
          if (vy2 < -10 || vy2 > canvas.height + 10) return;

          const dx = vx - vx2;
          const dy = vy - vy2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100 && dist > 0) {
            ctx.beginPath();
            ctx.moveTo(vx, vy);
            ctx.lineTo(vx2, vy2);
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        });

        if (mouse.x && mouse.y && !inHero) {
          const dx = vx - mouse.x;
          const dy = vy - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(vx, vy);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.2 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}