import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import TechBadge from "./TechBadge";
import type { ProjectData } from "../data/projects";

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none p-4 md:p-10">
      {/* Blurred background backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md pointer-events-auto cursor-pointer"
        onClick={onClose}
      />

      <motion.div
        layoutId={`project-container-${project.id}`}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl pointer-events-auto z-10 custom-scrollbar"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="sticky top-0 z-20 flex justify-end p-4 pointer-events-none">
          <button
            onClick={onClose}
            className="pointer-events-auto p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-zinc-400 hover:text-white hover:bg-black/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-10 -mt-10">
          <motion.div layoutId={`project-header-${project.id}`} className="mb-8">
            <motion.h3 
              layoutId={`project-title-${project.id}`}
              className="text-4xl md:text-5xl font-black text-zinc-50 tracking-tight mb-3"
            >
              {project.name}
            </motion.h3>
            <motion.p 
              layoutId={`project-role-${project.id}`}
              className="text-lg text-emerald-400 font-medium"
            >
              {project.role}
              {project.timeframe && <span className="text-zinc-500"> • {project.timeframe}</span>}
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {project.stack.map(item => (
              <TechBadge key={item} label={item} />
            ))}
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="grid gap-8 md:grid-cols-2"
            >
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  The Problem
                </h4>
                <p className="text-zinc-300 leading-relaxed text-lg">{project.problem}</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  The Solution
                </h4>
                <p className="text-zinc-300 leading-relaxed text-lg">{project.solution}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-black/30 rounded-2xl p-8 border border-white/5"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-500/80 mb-6">
                Architecture overview
              </h4>
              <p className="text-zinc-300 leading-relaxed text-lg">{project.architecture}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-4"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                Technical Decisions
              </h4>
              <ul className="space-y-3">
                {project.technicalDecisions.map((item, index) => (
                  <li key={index} className="flex gap-4 text-zinc-300 text-lg">
                    <span className="text-emerald-500 flex-shrink-0 mt-1">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid gap-8 md:grid-cols-2"
            >
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Impact</h4>
                <p className="text-zinc-300 leading-relaxed text-lg">{project.impact}</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Key Metrics</h4>
                <ul className="space-y-3">
                  {project.metrics.map((m, index) => (
                    <li key={index} className="flex gap-4 text-zinc-300 text-lg">
                      <span className="text-emerald-500 font-mono flex-shrink-0">→</span>
                      <span className="leading-relaxed">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {project.whenThingsBroke && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 space-y-4 relative overflow-hidden"
              >
                {/* Hazard stripes background */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ef4444 10px, #ef4444 20px)' }} />
                <h4 className="text-sm font-bold uppercase tracking-widest text-red-400 relative z-10">
                  When things broke
                </h4>
                <p className="text-zinc-300 leading-relaxed text-lg relative z-10">{project.whenThingsBroke}</p>
              </motion.div>
            )}

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="pt-8 border-t border-white/10 flex flex-wrap gap-4"
            >
              {project.links.map((link) => {
                const isGithub = link.href.includes("github.com");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all font-medium"
                  >
                    {isGithub ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                    {link.label}
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
