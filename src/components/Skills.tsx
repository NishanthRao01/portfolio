import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skills = {
  Backend: ["Node.js", "Express", "REST APIs", "Socket.io", "JWT Auth", "Java", "C++"],
  Frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "State Management"],
  Databases: ["MongoDB", "MySQL", "SQL", "Schema Design", "Query Optimisation"],
  Tools: ["Git & GitHub", "Postman", "Vite", "Linux Basics"],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="space-y-12">
      <SectionHeader
        label="Expertise"
        title="What I work with"
        eyebrow="Focused on technologies that help ship maintainable, observable systems rather than one-off demos."
      />

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            variants={item}
            key={category}
            className="group border border-white/5 rounded-2xl p-6 md:p-8 bg-zinc-900/40 backdrop-blur-md hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden"
          >
            {/* Soft background glow */}
            <div className="absolute -inset-20 bg-emerald-500/10 opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-700 pointer-events-none" />

            <h3 className="text-sm font-black tracking-widest text-emerald-500 uppercase mb-6 pb-4 border-b border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500/50 group-hover:animate-pulse" />
              {category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {items.map((tech) => (
                <motion.div 
                  key={tech} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm font-medium text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-colors cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;


