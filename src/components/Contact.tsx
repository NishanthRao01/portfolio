import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-10">
      <SectionHeader
        label="Contact"
        title="Let's build together"
        eyebrow="Feel free to reach out if you're looking for an engineer, have a question, or just want to connect."
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="border border-emerald-500/20 rounded-2xl p-8 bg-emerald-500/5 backdrop-blur-sm flex flex-col justify-center items-center text-center group hover:bg-emerald-500/10 transition-colors">
          <Mail className="w-10 h-10 text-emerald-400 mb-4" />
          <h3 className="text-xl font-bold text-zinc-50 mb-2">Email Me</h3>
          <p className="text-sm text-zinc-400 mb-6 max-w-xs mx-auto">
            I respond quickly to inquiries about open roles or system design challenges.
          </p>
          <a
            href="mailto:hello@nishanthrao.dev"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-950 font-semibold rounded-full hover:bg-emerald-400 transition-colors"
          >
            Say Hello <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col gap-4">
           {/* Social Connect Cards */}
           <a
            href="https://linkedin.com/in/nishanthrao01"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between border border-white/5 rounded-2xl p-6 bg-zinc-900/40 hover:bg-zinc-900/80 transition-all flex-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2]">
                 <Linkedin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-zinc-50 group-hover:text-[#0A66C2] transition-colors">LinkedIn</h3>
                <p className="text-xs text-zinc-400">Connect professionally</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-[#0A66C2] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <a
            href="https://github.com/NishanthRao01"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between border border-white/5 rounded-2xl p-6 bg-zinc-900/40 hover:bg-zinc-900/80 transition-all flex-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zinc-300">
                 <Github className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-zinc-50 group-hover:text-emerald-400 transition-colors">GitHub</h3>
                <p className="text-xs text-zinc-400">Review my code</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;


