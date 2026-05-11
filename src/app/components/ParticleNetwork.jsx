"use client";

import { useEffect, useRef } from "react";

const GRID_SIZE = 40;

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

      const heroEl = document.getElementById("hero-section");
      const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom + scrollY : 0;
      const cols = Math.ceil(canvas.width / GRID_SIZE) + 1;
      const rows = Math.ceil(canvas.height / GRID_SIZE) + 1;
      const offsetY = scrollY % GRID_SIZE;

      for (let j = 0; j < rows; j++) {
        const viewY = j * GRID_SIZE - offsetY;
        const pageY = viewY + scrollY;
        if (pageY < heroBottom) continue;

        for (let i = 0; i < cols; i++) {
          const x = i * GRID_SIZE;
          const mouseInfluence = mouse.x && mouse.y && !inHero
            ? Math.max(0, 1 - Math.sqrt(Math.pow(mouse.x - x, 2) + Math.pow(mouse.y - viewY, 2)) / 120)
            : 0;

          if (mouseInfluence > 0) {
            ctx.beginPath();
            ctx.arc(x, viewY, 1.2 + mouseInfluence * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(34, 197, 94, ${0.1 + mouseInfluence * 0.08})`;
            ctx.shadowColor = "#22c55e";
            ctx.shadowBlur = 2 * mouseInfluence;
            ctx.fill();
            ctx.shadowBlur = 0;
          } else {
            ctx.beginPath();
            ctx.arc(x, viewY, 1, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(34, 197, 94, 0.18)";
            ctx.fill();
          }
        }
      }

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