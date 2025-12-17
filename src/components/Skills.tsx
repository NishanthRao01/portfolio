import React from "react";
import SectionHeader from "./SectionHeader";

const skills = {
  Backend: ["Node.js", "Express", "REST APIs", "Socket.io", "JWT auth", "Java", "C++"],
  Frontend: ["React", "TypeScript", "Tailwind CSS", "Component design", "State management"],
  Databases: ["MongoDB", "MySQL", "SQL", "Schema design", "Indexing & query optimisation"],
  Tools: ["Git & GitHub", "Postman", "Vite", "Figma", "Usability testing", "Linux basics"],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="space-y-4">
      <SectionHeader
        label="Skills"
        title="What I work with"
        eyebrow="Focused on technologies that help ship maintainable, observable systems rather than one-off demos."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="border border-zinc-800 rounded-lg p-4 bg-zinc-950/40"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
              {category}
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-zinc-300">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


