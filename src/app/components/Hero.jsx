"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const phrases = [
  "Computer Science student building cool things on the web.",
  "Java developer learning the full stack.",
  "Building my portfolio one project at a time.",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, deleting ? 40 : 60);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section id="hero-section" className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-accent text-sm font-medium tracking-widest uppercase mb-4"
      >
        Welcome to my portfolio
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-6xl font-bold mb-4 tracking-tight text-foreground"
      >
        Hi, I'm Marcelo
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-zinc-400 text-xl mb-8 max-w-xl min-h-[2rem]"
      >
        {text}<span className="animate-pulse text-accent">|</span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex gap-4"
      >
        <a href="#projects" className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-full transition-colors">
  See my work
</a>
        
         <a href="https://docs.google.com/document/d/1PYYj6k4m42hS5ZoIy5oVMwZgIYxiamCVOWhIPkJBRUc/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          style={{backgroundColor: '#09090b'}}
          className="border border-zinc-700 hover:border-zinc-400 text-foreground font-medium px-6 py-3 rounded-full transition-colors"
        >
          See my resume
        </a>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
    </section>
  );
}