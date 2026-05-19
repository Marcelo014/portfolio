const skills = [
  { category: "Languages", items: [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ]},
  { category: "Frontend", items: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
  ]},
  { category: "Backend & Database", items: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  ]},
  { category: "Auth & AI", items: [
    { name: "Clerk", icon: "https://avatars.githubusercontent.com/u/49538330?s=200&v=4" },
{ name: "Anthropic API", icon: "https://avatars.githubusercontent.com/u/76263028?s=200&v=4" },
  ]},
  { category: "Tools", items: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  ]},
];

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center px-4 py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-col gap-10 w-full">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-zinc-400 text-sm font-medium tracking-widest uppercase mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  style={{backgroundColor: '#1c1c1c'}}
                  className="glow-target glow-dim flex flex-col items-center gap-2 border border-zinc-700 px-5 py-4 rounded-2xl hover:border-accent transition-colors cursor-pointer w-24"
                >
                  <img src={skill.icon} alt={skill.name} width={36} height={36} />
                  <span className="text-zinc-300 text-xs text-center leading-tight">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}