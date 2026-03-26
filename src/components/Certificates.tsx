import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

const certificates = [
  {
    title: "UI/UX Training",
    issuer: "Cipher Schools",
    date: "Dec 2025",
    image: "https://imgs.search.brave.com/GOXQamerL5IJ1Ro47ZTqtXuF3TFFVR0iGRc1JM6FD9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi91aS11/eC1kZXNpZ24tZGV2/ZWxvcG1lbnQtY29u/Y2VwdC1sYXB0b3At/c2NyZWVuLWlzb2xh/dGVkLWNvbXB1dGVy/LXdoaXRlLWJhY2tn/cm91bmQtYWxsLWNv/bnRlbnQtZGVzaWdu/ZWQtbWUtMTQwOTc2/MTQzLmpwZw?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.cipherschools.com/certificate/preview?id=68918eaecec61f8eee56677c"
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Coursera / Meta",
    date: "May 2023",
    image: "https://imgs.search.brave.com/9uy4XrMI2LCgTrbzMtRGcbKgJWEcQW3Joo35CNOijiY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/cmlidXRlLmZyZWVj/b2RlY2FtcC5vcmcv/aW1hZ2VzL2JyYW5k/aW5nL2Jhbm5lci5w/bmc?q=80&w=2072&auto=format&fit=crop",
    link: "https://drive.google.com/file/d/14S38-qmVss8TGX9VR1OnXiTJ7yVro6I8/view"
  },
  {
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "Dec 2023",
    image: "https://imgs.search.brave.com/0M8eqxev1q9bHx9FIl-gNAoNmnj0apVgjYmMBFgAT70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODIw/NDQ5NDcyL3Bob3Rv/L2J1c2luZXNzLXBy/ZXNlbnRhdGlvbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Nm5fVGR4anVwRDIx/a0R5aEItQkdHZjRh/U1pXRnl5eGRSRWxY/R0tVYzFwVT0?q=80&w=2070&auto=format&fit=crop",
    link: "https://drive.google.com/file/d/1KEVZi7NmOJulAIC0ZrPfqd5GbPKcQedU/view"
  }
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="space-y-10 relative">
      <SectionHeader
        label="Certificates"
        title="Continuous Learning"
        eyebrow="Validating skills through industry-recognized certifications and intensive courses."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-colors shadow-2xl hover:shadow-emerald-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/90 to-transparent z-10 pointer-events-none" />
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-56 object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 blur-[2px] group-hover:blur-none"
            />

            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
              <div className="flex items-center gap-2 mb-2 opacity-80">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">{cert.issuer}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-emerald-300 transition-colors">
                {cert.title}
              </h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs font-medium border border-white/10 bg-white/5 rounded-full px-3 py-1.5 text-zinc-300 backdrop-blur-md">
                  {cert.date}
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 group-hover:border-emerald-500 transition-all hover:scale-110"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/50 transition-all duration-500 z-30" />
            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/30 transition-all duration-500 z-30" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/50 transition-all duration-500 z-30" />
            <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/30 transition-all duration-500 z-30" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
