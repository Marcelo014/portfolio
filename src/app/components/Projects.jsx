"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Site",
    description: "The site you're on now. Built using Next.js, Tailwind, Framer Motion, and Resend.",
    status: "Live",
    tags: ["Next.js", "Tailwind", "Framer Motion", "Resend"],
    link: "#",
    linkLabel: "This site",
  },
  {
    title: "Meridian",
    description: "Paper trading platform with real-time market data, AI-powered briefings, and an adaptive AI tutor that calibrates to your investing knowledge level.",
    status: "Live",
    tags: ["Next.js", "Clerk", "Anthropic API", "Alpaca"],
    link: "https://meridian-q41d01mqd-marcelo014s-projects.vercel.app/",
    linkLabel: "Visit Meridian",
  },
  {
    title: "Cats vs Vacuums",
    description: "A browser-based tower defense game built in Phaser.js with pixel art visuals.",
    status: "Coming Soon",
    tags: ["Phaser.js", "JavaScript", "Pixel Art"],
    link: null,
    linkLabel: null,
  },
  {
    title: "Full-Stack Web App",
    description: "A full-stack app tackling a different problem space than Meridian.",
    status: "Coming Soon",
    tags: ["Next.js", "Supabase", "Clerk"],
    link: null,
    linkLabel: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center px-4 py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        My <span className="text-accent">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            style={{backgroundColor: '#09090b'}}
            className="glow-target border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-accent transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="text-xs px-3 py-1 rounded-full border border-zinc-700 text-zinc-400">
                {project.status}
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} className="text-xs text-accent hover:text-accent-hover transition-colors whitespace-nowrap ml-4">
                  {project.linkLabel} &rarr;
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}