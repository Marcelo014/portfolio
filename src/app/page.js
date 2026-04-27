import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <FadeInSection><About /></FadeInSection>
      <FadeInSection><Projects /></FadeInSection>
      <FadeInSection><Skills /></FadeInSection>
      <FadeInSection><Contact /></FadeInSection>
      <FadeInSection><Footer /></FadeInSection>
    </main>
  );
}