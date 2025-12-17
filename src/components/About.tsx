import React from "react";
import SectionHeader from "./SectionHeader";

const About: React.FC = () => {
  return (
    <section id="about" className="space-y-3">
      <SectionHeader label="About" title="What motivates my work" />
      <p className="text-sm text-zinc-300 max-w-3xl">
        I like working on problems where the data model, API design, and user
        experience all have to line up. On recent projects I owned schema design,
        authentication, and frontend flows, then iterated based on how students and
        coordinators actually used the systems. Most of my work has a small but
        real user base, which means I spend time debugging failures and fixing root
        causes, not just building demo UIs. I&apos;m preparing for backend-heavy
        SDE-1 roles where I can keep owning services end-to-end under strong code
        review.
      </p>
    </section>
  );
};

export default About;


