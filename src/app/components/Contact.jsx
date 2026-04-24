"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="flex flex-col items-center px-4 py-24 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Get In <span className="text-accent">Touch</span>
      </h2>
      <p className="text-zinc-400 text-center mb-12">
        Have an opportunity or just want to connect? My inbox is always open.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-foreground placeholder-zinc-500 focus:outline-none focus:border-accent transition-colors"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-foreground placeholder-zinc-500 focus:outline-none focus:border-accent transition-colors"
        />
        <textarea
          rows={5}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          required
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-foreground placeholder-zinc-500 focus:outline-none focus:border-accent transition-colors resize-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-full transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-accent text-center text-sm">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center text-sm">Something went wrong. Try again.</p>
        )}
      </form>
    </section>
  );
}