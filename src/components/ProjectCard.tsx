import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import TechBadge from "./TechBadge";
import type { ProjectData } from "../data/projects";

interface ProjectCardProps {
  project: ProjectData;
  onClick: () => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX);
  const mouseYSpring = useSpring(mouseY);
  
  const rotateX = useTransform(y, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={ref}
      layoutId={`project-container-${project.id}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="group cursor-pointer relative border border-white/10 rounded-3xl p-8 bg-zinc-900/60 backdrop-blur-xl hover:bg-zinc-800/80 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20"
    >
      {/* Spotlight glow following mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseXSpring}px ${mouseYSpring}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Subtle top border gradient glow on hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/80 transition-all duration-500 rounded-t-3xl" />

      <div className="relative z-10 h-full flex flex-col justify-between" style={{ transform: "translateZ(30px)" }}>
        <motion.div layoutId={`project-header-${project.id}`} className="mb-6">
          <motion.h3 
            layoutId={`project-title-${project.id}`}
            className="text-3xl font-black text-zinc-50 tracking-tight group-hover:text-emerald-400 transition-colors mb-2"
          >
            {project.name}
          </motion.h3>
          <motion.p 
            layoutId={`project-role-${project.id}`}
            className="text-sm text-zinc-400 font-medium"
          >
            <span className="text-emerald-500/80">{project.role}</span>
          </motion.p>
        </motion.div>

        <p className="text-zinc-300 leading-relaxed mb-8 flex-grow">
          {project.problem}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.slice(0, 4).map((item) => (
            <TechBadge key={item} label={item} />
          ))}
          {project.stack.length > 4 && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400 self-center">
              +{project.stack.length - 4} more
            </span>
          )}
        </div>
      </div>
      
      {/* "View Details" hint */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/30 group-hover:bg-emerald-500/30">
          <span className="text-xl leading-none">↗</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
