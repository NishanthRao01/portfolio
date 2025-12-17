import React from "react";
import SectionHeader from "./SectionHeader";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="space-y-4">
      <SectionHeader
        label="Experience & Training"
        title="UI/UX and engineering training"
        eyebrow="Bringing design discipline into backend-heavy projects so that the final product is usable, not just functional."
      />

      <article className="border border-zinc-800 rounded-lg p-5 bg-zinc-950/40">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold text-zinc-50">
              UI/UX Program — CipherSchools
            </h3>
            <p className="text-xs text-zinc-400">
              Design fundamentals, Figma, usability testing
            </p>
          </div>
          <p className="text-[11px] text-zinc-500">2023</p>
        </div>

        <ul className="mt-3 space-y-1.5 text-sm text-zinc-300">
          <li>
            Practiced converting vague feature ideas into clear user flows and
            information architecture before writing code.
          </li>
          <li>
            Used Figma to iterate on layouts and component hierarchies, then
            translated them into React + Tailwind implementations and adjusted
            backend API shapes (list vs detail endpoints, filter parameters) so the
            UI could stay simple without extra round-trips.
          </li>
          <li>
            Ran informal usability tests with peers, leading to changes that reduced
            navigation friction and clarified empty states.
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Experience;


