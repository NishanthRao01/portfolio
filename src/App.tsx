import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SystemDesign from "./components/SystemDesign";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 font-sans overflow-hidden">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Advanced Background Matrix/Gradient */}
      <div className="fixed inset-0 z-[-1] bg-zinc-950 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#05966915,transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_80%,#05966910,transparent)]"></div>
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      {/* Navigation placeholder */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <span className="text-xl font-black tracking-tighter text-zinc-50 flex items-center gap-2">
            Nishanth<span className="text-emerald-500">.</span>
          </span>
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-zinc-400">
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          </nav>
        </div>
      </header>

      <div className="mx-auto flex max-w-5xl flex-col px-6 pt-24 pb-12 md:pt-32 lg:pt-40">
        <Hero />
        <main className="space-y-24 mt-20">
          <Projects />
          <SystemDesign />
          <Skills />
          <Experience />
          <About />
          <Contact />
        </main>
        <footer className="mt-20 border-t border-white/10 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Nishanth Rao Annam. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React, Tailwind & Framer Motion.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
