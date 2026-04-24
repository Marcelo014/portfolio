"use client";

import { useEffect } from "react";

export default function ButtonGlow() {
  useEffect(() => {
    const handleMouseMove = (e) => {
const buttons = document.querySelectorAll("button, a, .glow-target");
      buttons.forEach((btn) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );
        const maxDistance = 150;
        const intensity = Math.max(0, 1 - distance / maxDistance);
        btn.style.boxShadow = intensity > 0
          ? `0 0 ${intensity * 20}px rgba(34, 197, 94, ${intensity * 0.6}), 0 4px 6px rgba(0,0,0,0.4)`
          : "0 4px 6px rgba(0,0,0,0.4)";
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}