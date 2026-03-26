import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Aug 2024",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Coursera / Meta",
    date: "May 2023",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "Dec 2023",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    link: "#"
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
