import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import TechBadge from "./TechBadge";

interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectCardProps {
  name: string;
  role: string;
  timeframe?: string;
  problem: string;
  solution: string;
  technicalDecisions: string[];
  impact: string;
  architecture: string;
  metrics: string[];
  stack: string[];
  links: ProjectLink[];
  whenThingsBroke?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  role,
  timeframe,
  problem,
  solution,
  technicalDecisions,
  impact,
  architecture,
  metrics,
  stack,
  links,
  whenThingsBroke,
}) => {
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
    <motion.article 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="group relative border border-white/5 rounded-2xl p-6 md:p-8 bg-zinc-900/40 backdrop-blur-md hover:bg-zinc-900/60 transition-colors duration-300"
    >
      {/* Spotlight glow following mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseXSpring}px ${mouseYSpring}px,
              rgba(16, 185, 129, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Subtle top border gradient glow on hover */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/50 transition-all duration-500" />

      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 z-10" style={{ transform: "translateZ(20px)" }}>
        <div>
          <h3 className="text-2xl font-bold text-zinc-50 tracking-tight group-hover:text-emerald-400 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-zinc-400 mt-1">
            <span className="text-emerald-500/80 font-medium">{role}</span>
            {timeframe && <span className="opacity-60"> • {timeframe}</span>}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {/* Core Description Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
              The Problem
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{problem}</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
              The Solution
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{solution}</p>
          </div>
        </div>

        {/* Deep Dive Grid */}
        <div className="grid gap-6 bg-black/20 rounded-xl p-5 border border-white/5 md:grid-cols-2">
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Technical Decisions
            </h4>
            <ul className="space-y-2">
              {technicalDecisions.map((item, index) => (
                <li key={index} className="flex gap-3 text-sm text-zinc-300">
                  <span className="w-1 h-1 rounded-full bg-zinc-600 shrink-0 mt-2" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Architecture overview
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{architecture}</p>
          </div>
        </div>

        {/* Outcomes Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Impact
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{impact}</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Key Metrics
            </h4>
            <ul className="space-y-2">
              {metrics.map((m, index) => (
                <li key={index} className="flex gap-3 text-sm text-zinc-300">
                  <span className="text-emerald-500/80 font-mono flex-shrink-0">→</span>
                  <span className="leading-relaxed">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {whenThingsBroke && (
          <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-400/80">
              When things broke
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{whenThingsBroke}</p>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4">
        {links.map((link) => {
          const isGithub = link.href.includes("github.com");
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              {isGithub ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
              {link.label}
            </a>
          );
        })}
      </div>
    </motion.article>
  );
};

export default ProjectCard;

