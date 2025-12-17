import React from "react";
import SectionHeader from "./SectionHeader";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="space-y-4 border-t border-zinc-800 pt-6 mt-6">
      <SectionHeader
        label="Contact"
        title="Let’s talk"
        eyebrow="Best way to reach me is email. I reply with concrete details about systems I’ve built and how I can help."
      />
      <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
        <a
          href="mailto:hello@nishanthrao.dev"
          className="underline underline-offset-4 decoration-zinc-600 hover:text-zinc-50"
        >
          hello@nishanthrao.dev
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 decoration-zinc-600 hover:text-zinc-50"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 decoration-zinc-600 hover:text-zinc-50"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;


