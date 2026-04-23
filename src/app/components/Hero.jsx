export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
        Welcome to my portfolio
      </p>
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Marcelo
      </h1>
      <p className="text-zinc-400 text-xl mb-8 max-w-xl">
        Computer Science student building cool things on the web.
      </p>
      <div className="flex gap-4">
        <button className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-full transition-colors">
          See my work
        </button>
        <button className="border border-zinc-700 hover:border-zinc-400 text-foreground font-medium px-6 py-3 rounded-full transition-colors">
          Download resume
        </button>
      </div>
    </section>
  );
}