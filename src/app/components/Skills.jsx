const skills = [
  { category: "Languages", items: ["Java", "JavaScript", "HTML", "CSS", "Python"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel"] },
];

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center px-4 py-24 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-col gap-10 w-full">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-zinc-400 text-sm font-medium tracking-widest uppercase mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="border border-zinc-700 text-foreground text-sm px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}