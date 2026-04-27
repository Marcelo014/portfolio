"use client";

import { useEffect, useRef } from "react";

const RUNES = ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛊ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ"];

const TECH_LOGOS = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
];

const drawTriforce = (ctx, x, y, size, alpha) => {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = "rgba(134, 239, 172, 0.9)";
  ctx.beginPath();
  ctx.moveTo(x, y - size);
  ctx.lineTo(x + size * 0.866, y + size * 0.5);
  ctx.lineTo(x - size * 0.866, y + size * 0.5);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x - size * 0.866, y + size * 0.5);
  ctx.lineTo(x, y + size * 2);
  ctx.lineTo(x - size * 1.732, y + size * 2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x + size * 0.866, y + size * 0.5);
  ctx.lineTo(x + size * 1.732, y + size * 2);
  ctx.lineTo(x, y + size * 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

export default function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const logoImages = TECH_LOGOS.map((src) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;
      return img;
    });

    const particles = Array.from({ length: 80 }, () => {
      const rand = Math.random();
      const isTech = rand < 0.35;
      const isTriforce = rand >= 0.35 && rand < 0.40;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        rune: RUNES[Math.floor(Math.random() * RUNES.length)],
        isTech,
        isTriforce,
        logoImg: isTech ? logoImages[Math.floor(Math.random() * logoImages.length)] : null,
        size: Math.random() * 10 + 10,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.01,
        brightness: 0,
      };
    });

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Gentle mouse attraction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            p.vx += dx * 0.00008;
            p.vy += dy * 0.00008;
            p.brightness = Math.max(p.brightness, 1 - dist / 200);
          } else {
            p.brightness *= 0.95;
          }
        } else {
          p.brightness *= 0.95;
        }

        // Repel from nearby particles to prevent clumping
        particles.forEach((p2) => {
          if (p === p2) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 40 && dist > 0) {
            const force = (40 - dist) / 40 * 0.03;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        });

        // Speed cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.2) { p.vx *= 0.95; p.vy *= 0.95; }

        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Connections
        particles.forEach((p2) => {
          if (p === p2) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(134, 239, 172, ${0.35 * (1 - dist / 160)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        });

        // Mouse connections
        if (mouse.x && mouse.y) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(134, 239, 172, ${0.35 * (1 - dist / 200)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        const alpha = 0.2 + p.brightness * 0.6;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.isTriforce) {
          ctx.restore();
          drawTriforce(ctx, p.x, p.y, p.size * 0.4, alpha);
        } else if (p.isTech && p.logoImg && p.logoImg.complete) {
          const s = p.size * 1.8;
          if (p.brightness > 0.1) {
            ctx.shadowColor = "#22c55e";
            ctx.shadowBlur = 15 * p.brightness;
          }
          ctx.globalAlpha = alpha;
          ctx.drawImage(p.logoImg, -s / 2, -s / 2, s, s);
          ctx.globalCompositeOperation = "source-atop";
          ctx.fillStyle = `rgba(134, 239, 172, 0.3)`;
          ctx.fillRect(-s / 2, -s / 2, s, s);
          ctx.globalCompositeOperation = "source-over";
          ctx.globalAlpha = 1;
          ctx.restore();
        } else {
          if (p.brightness > 0.1) {
            ctx.shadowColor = "#22c55e";
            ctx.shadowBlur = 15 * p.brightness;
          }
          ctx.font = `${p.size}px serif`;
          ctx.fillStyle = `rgba(134, 239, 172, ${alpha})`;
          ctx.fillText(p.rune, 0, 0);
          ctx.restore();
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}