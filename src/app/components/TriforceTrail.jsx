"use client";

import { useEffect } from "react";

export default function TriforceTrail() {
  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      if (
        e.clientX < rect.left || e.clientX > rect.right ||
        e.clientY < rect.top || e.clientY > rect.bottom
      ) return;

      if (Math.random() > 0.3) return;

      const triforce = document.createElement("div");
      const size = Math.random() * 16 + 8;
      const offsetX = (Math.random() - 0.5) * 120;
      const offsetY = (Math.random() - 0.5) * 120;

      triforce.style.cssText = `
        position: fixed;
        left: ${e.clientX + offsetX}px;
        top: ${e.clientY + offsetY}px;
        width: ${size}px;
        height: ${size}px;
        pointer-events: none;
        opacity: 0.4;
        animation: triforceFade 1.2s ease-out forwards;
        z-index: 10;
      `;

      triforce.innerHTML = `
        <svg viewBox="0 0 40 35" xmlns="http://www.w3.org/2000/svg">
          <polygon points="20,2 30,18 10,18" fill="#166534"/>
          <polygon points="10,18 20,34 0,34" fill="#166534"/>
          <polygon points="30,18 40,34 20,34" fill="#166534"/>
        </svg>
      `;

      document.body.appendChild(triforce);
      setTimeout(() => triforce.remove(), 1200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}