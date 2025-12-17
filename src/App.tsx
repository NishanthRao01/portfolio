import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SystemDesign from "./components/SystemDesign";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <div className="mx-auto flex max-w-5xl flex-col px-6 py-8 md:py-10 lg:py-14">
        <Hero />
        <main className="space-y-10">
          <Projects />
          <SystemDesign />
          <Skills />
          <Experience />
          <About />
          <Contact />
        </main>
        <footer className="mt-8 border-t border-zinc-900 pt-4 text-xs text-zinc-600">
          <p>
            Designed and built by Nishanth Rao Annam — focused on backend-heavy,
            real-world systems.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
