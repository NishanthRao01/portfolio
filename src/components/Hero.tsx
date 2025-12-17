import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="flex flex-col gap-4 border-b border-zinc-800 pb-8 mb-10">
      <p className="text-xs font-medium tracking-[0.2em] text-zinc-400 uppercase">
        Nishanth Rao Annam
      </p>
      <h1 className="text-3xl md:text-4xl font-semibold text-zinc-50">
        Full-Stack Engineer focused on building scalable, real-world systems.
      </h1>
      <p className="max-w-2xl text-sm md:text-base text-zinc-400">
        Final-year BTech CSE student who has shipped backend-heavy systems for real
        student workflows — designing REST APIs, modelling data, wiring
        authentication, and fixing performance issues based on real usage.
      </p>
      <p className="text-xs text-zinc-500">
        Built and maintained 3 systems with real users, authentication, and
        persistent data.
      </p>
      <div className="flex flex-wrap gap-3 pt-1">
        <a
          href="#projects"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-zinc-700 rounded-md text-zinc-100 hover:bg-zinc-900"
        >
          View Projects
        </a>
        <a
          href="/Nishanth-Rao-Annam-Resume.pdf"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
        >
          Download Resume
        </a>
      </div>
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-zinc-500">
        <span>React · Node.js · Express · MongoDB · Socket.io · TypeScript</span>
        <span className="hidden md:inline text-zinc-700">/</span>
        <span>Java · C++ · SQL · System design fundamentals</span>
      </div>
    </header>
  );
};

export default Hero;


