export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center min-h-screen px-4 py-24 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        About <span className="text-accent">Me</span>
      </h2>
      <div className="flex flex-col gap-6 text-zinc-400 text-lg leading-relaxed text-center">
        <p>
          I'm a Computer Science senior with a passion for building things on the web. 
          I love combining clean design with solid engineering to create experiences 
          people actually enjoy using.
        </p>
        <p>
          When I'm not coding I'm probably playing video games, which is also why 
          my portfolio looks like this.
        </p>
      </div>
    </section>
  );
}