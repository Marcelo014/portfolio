"use client";

import { useEffect } from "react";

export default function ButtonGlow() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const buttons = document.querySelectorAll("button:not(.no-glow), .glow-target");
      const navLinks = document.querySelectorAll("nav a");

      buttons.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const nearestX = Math.max(rect.left, Math.min(e.clientX, rect.right));
        const nearestY = Math.max(rect.top, Math.min(e.clientY, rect.bottom));
        const distance = Math.sqrt(
          Math.pow(e.clientX - nearestX, 2) + Math.pow(e.clientY - nearestY, 2)
        );
        const intensity = Math.max(0, 1 - distance / 120);
        el.style.boxShadow = intensity > 0
          ? `0 0 ${intensity * 20}px rgba(34, 197, 94, ${intensity * 0.6}), 0 4px 6px rgba(0,0,0,0.4)`
          : "";
      });

      navLinks.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const nearestX = Math.max(rect.left, Math.min(e.clientX, rect.right));
        const nearestY = Math.max(rect.top, Math.min(e.clientY, rect.bottom));
        const distance = Math.sqrt(
          Math.pow(e.clientX - nearestX, 2) + Math.pow(e.clientY - nearestY, 2)
        );
        const intensity = Math.max(0, 1 - distance / 120);
        el.style.filter = intensity > 0
          ? `drop-shadow(0 0 ${intensity * 6}px rgba(34, 197, 94, ${intensity * 0.8}))`
          : "";
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}