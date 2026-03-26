import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

// Helper for magnetic buttons
const MagneticButton = ({ children, className, href, target, rel }: any) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

// Character reveal variants
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 12, stiffness: 200 },
  },
  hidden: {
    opacity: 0,
    y: 30,
    transition: { type: "spring" as const, damping: 12, stiffness: 200 },
  },
};

const Hero: React.FC = () => {
  const titleWords = "I build scalable, real-world systems.".split(" ");

  return (
    <section id="hero" className="flex flex-col items-start justify-center min-h-[90vh] gap-8 relative">
      {/* Dynamic blurred element */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500 blur-[120px] rounded-full point-events-none -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10"
      >
        <p className="text-emerald-400 font-mono tracking-widest text-sm mb-6 flex items-center gap-3">
          <span className="w-12 h-[1px] bg-emerald-500/50"></span>
          HI, MY NAME IS
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-zinc-50 tracking-tighter mb-4">
          Nishanth Rao.
        </h1>

        {/* Staggered Word Reveal */}
        <motion.div
          className="flex flex-wrap text-4xl md:text-6xl font-black tracking-tighter mb-8 text-zinc-500"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {titleWords.map((word, index) => (
            <motion.span variants={child} key={index} className="mr-3 mt-1">
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed font-light z-10"
      >
        I'm a Full-Stack Engineer who ships backend-heavy applications. I enjoy designing REST APIs, modeling complex data, and resolving performance bottlenecks to create seamless user experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-wrap items-center gap-6 mt-10 z-10"
      >
        <MagneticButton
          href="#projects"
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-wide uppercase rounded-full bg-emerald-500 text-zinc-950 overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
          <span className="relative z-10 flex items-center gap-2">
            Explore My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </MagneticButton>

        <MagneticButton
          href="/NishanthCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wide uppercase rounded-full border border-zinc-700 bg-transparent text-zinc-300 hover:text-zinc-50 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
        >
          <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          Resume
        </MagneticButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex items-center gap-8 mt-16 text-zinc-500 z-10"
      >
        <a href="https://github.com/NishanthRao01" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-emerald-400 hover:-translate-y-1 transition-all">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/nishanthraoannam/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-emerald-400 hover:-translate-y-1 transition-all">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:nishanthraoannam@gmail.com" aria-label="Email" className="hover:text-emerald-400 hover:-translate-y-1 transition-all">
          <Mail className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
