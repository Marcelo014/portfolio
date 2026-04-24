export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-4 flex items-center justify-between border-b border-zinc-800 bg-background">
      <span className="text-accent font-bold text-xl">M.</span>
      <div className="flex gap-8 text-sm text-zinc-400">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
        <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
    </nav>
  );
}