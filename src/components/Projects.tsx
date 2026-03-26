import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projectsData, type ProjectData } from "../data/projects";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="space-y-10 relative z-10">
      <SectionHeader
        label="Projects"
        title="Systems I've designed and shipped"
        eyebrow="Selected projects that forced real architectural trade-offs: authentication, data modelling, performance, and reliability."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={() => setSelectedProject(project)} 
            index={index}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
