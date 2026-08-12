import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";
import { Projects } from "../components/projects";
import { Skills } from "../components/skills";
import { projects, skillCategories } from "../lib/portfolio-data";

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial opacity-100" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/8 blur-3xl" />
      <Navbar />
      <Hero />
      <About />
      <Skills categories={skillCategories} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </main>
  );
}