import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    id: "ui-ux-program",
    role: "UI/UX Program",
    company: "CipherSchools",
    year: "2023",
    icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
    points: [
      "Practiced converting vague feature ideas into clear user flows and information architecture before writing code.",
      "Used Figma to iterate on layouts and component hierarchies, then translated them into React + Tailwind implementations.",
      "Adjusted backend API shapes (list vs detail endpoints, filter parameters) so the UI could stay simple without extra round-trips.",
      "Ran informal usability tests with peers, leading to changes that reduced navigation friction and clarified empty states.",
    ],
  },
];

const ExperienceNode = ({ exp }: { exp: typeof experiences[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="relative pl-8 md:pl-16 py-8 group" ref={cardRef}>
      {/* Node Dot on Timeline */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        className="absolute left-[3px] md:left-[11px] top-12 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-500 z-10 group-hover:bg-emerald-500 transition-colors duration-300 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
      />

      <motion.article 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative border border-white/5 rounded-2xl p-6 md:p-8 bg-zinc-900/40 backdrop-blur-md hover:bg-zinc-900/60 transition-all duration-300"
      >
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-white/10 flex items-center justify-center shadow-inner">
              {exp.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-50 tracking-tight">
                {exp.role}
              </h3>
              <p className="text-emerald-500/80 font-medium text-sm mt-1">
                {exp.company}
              </p>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold tracking-widest text-emerald-400 md:self-start"
          >
            {exp.year}
          </motion.div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
           <ul className="space-y-4 text-sm text-zinc-300 leading-relaxed">
            {exp.points.map((point, i) => (
              <li key={i} className="flex gap-4 items-start">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0 mt-2 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                 <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </div>
  );
};

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="space-y-12">
      <SectionHeader
        label="Experience & Training"
        title="Engineering Journey"
        eyebrow="Bringing design discipline into backend-heavy projects so that the final product is usable, not just functional."
      />

      <div ref={containerRef} className="relative">
        {/* Background Timeline Track */}
        <div className="absolute left-[10px] md:left-[18px] top-4 bottom-4 w-[2px] bg-zinc-800/50 rounded-full" />
        
        {/* Animated Glowing Timeline Fill */}
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute left-[10px] md:left-[18px] top-4 w-[2px] bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.6)] origin-top z-0" 
        />

        {/* Experience Nodes */}
        <div className="flex flex-col">
          {experiences.map((exp) => (
            <ExperienceNode key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


