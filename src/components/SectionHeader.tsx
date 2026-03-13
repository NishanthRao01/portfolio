import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  eyebrow?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, eyebrow }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="text-emerald-500 font-medium tracking-widest text-sm uppercase mb-3">
        {label}
      </p>
      <div className="flex items-center gap-4 mb-3">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 tracking-tight">
          {title}
        </h2>
        <div className="h-px bg-zinc-800 flex-grow" />
      </div>
      {eyebrow && (
        <p className="text-base text-zinc-400 max-w-2xl">{eyebrow}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
