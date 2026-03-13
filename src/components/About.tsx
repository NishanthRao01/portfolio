import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const About: React.FC = () => {
  return (
    <section id="about" className="space-y-6">
      <SectionHeader label="About" title="What motivates my work" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="relative border border-white/5 rounded-2xl p-6 md:p-10 bg-zinc-900/40 backdrop-blur-sm overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full point-events-none" />
        
        <p className="relative z-10 text-base md:text-lg text-zinc-300 max-w-4xl leading-relaxed">
          I like working on problems where the data model, API design, and user
          experience all have to line up. On recent projects I owned schema design,
          authentication, and frontend flows, then iterated based on how students and
          coordinators actually used the systems. 
          <br /><br />
          Most of my work has a small but real user base, which means I spend time debugging failures and fixing root
          causes, not just building demo UIs. I'm preparing for backend-heavy
          SDE-1 roles where I can keep owning services end-to-end under strong code review.
        </p>
      </motion.div>
    </section>
  );
};

export default About;


