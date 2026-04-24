export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center px-4 py-24 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Get In <span className="text-accent">Touch</span>
      </h2>
      <p className="text-zinc-400 text-center mb-12">
        Have an opportunity or just want to connect? My inbox is always open.
      </p>
      <form className="flex flex-col gap-4 w-full">
        <input
          type="text"
          placeholder="Your name"
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-foreground placeholder-zinc-500 focus:outline-none focus:border-accent transition-colors"
        />
        <input
          type="email"
          placeholder="Your email"
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-foreground placeholder-zinc-500 focus:outline-none focus:border-accent transition-colors"
        />
        <textarea
          rows={5}
          placeholder="Your message"
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-foreground placeholder-zinc-500 focus:outline-none focus:border-accent transition-colors resize-none"
        />
        <button
          type="submit"
          className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-full transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}