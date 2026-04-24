export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center min-h-screen px-4 py-24 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        About <span className="text-accent">Me</span>
      </h2>
      <div className="flex flex-col gap-6 text-zinc-400 text-lg leading-relaxed text-center">
        <p>
I’m a senior Computer Science student with a strong interest in front-end development and a growing focus on full-stack applications. I enjoy building clean, intuitive user experiences while understanding how everything works behind the scenes. Lately, I’ve been exploring areas like game design and interactive systems, driven by curiosity about how engaging digital experiences are created.        </p>
        <p>
          My current projects reflect that curiosity, including a paper trading platform with an AI-based learning tool to help users better understand the stock market, as well as a browser-based game. I’m also planning a full-stack web application to continue expanding my technical range. Overall, I’m motivated by the process of turning ideas into functional, well-designed products.
        </p>
      </div>
    </section>
  );
}