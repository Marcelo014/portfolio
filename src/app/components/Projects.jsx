"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Site",
    description: "This site — built with Next.js, Tailwind, and Framer Motion.",
    status: "In Progress",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Data Dashboard",
    description: "Interactive stock dashboard for beginner investors.",
    status: "Coming Soon",
    tags: ["React", "Chart.js", "Polygon.io"],
  },
  {
    title: "Browser Game",
    description: "A browser-based game built with Phaser.js or Canvas.",
    status: "Coming Soon",
    tags: ["JavaScript", "Phaser.js", "Canvas"],
  },
  {
    title: "Full-Stack Web App",
    description: "A full-stack app with auth, database, and real users.",
    status: "Coming Soon",
    tags: ["Next.js", "Supabase", "Clerk"],
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
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}