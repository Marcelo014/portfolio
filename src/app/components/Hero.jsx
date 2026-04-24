"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
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
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm Marcelo
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-zinc-400 text-xl mb-8 max-w-xl"
      >
        Computer Science student building cool things on the web.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex gap-4"
      >
        <button className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-full transition-colors">
          See my work
        </button>
        <button
          style={{backgroundColor: '#09090b'}}
          className="border border-zinc-700 hover:border-zinc-400 text-foreground font-medium px-6 py-3 rounded-full transition-colors"
        >
          Download resume
        </button>
      </motion.div>
    </section>
  );
}