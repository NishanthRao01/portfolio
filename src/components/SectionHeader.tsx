import React from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  eyebrow?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, eyebrow }) => {
  return (
    <div className="mb-6">
      <p className="text-xs font-medium tracking-[0.25em] text-zinc-500 uppercase">
        {label}
      </p>
      <div className="mt-2 flex flex-col gap-1">
        <h2 className="text-xl md:text-2xl font-semibold text-zinc-50">{title}</h2>
        {eyebrow && (
          <p className="text-sm text-zinc-400 max-w-2xl">{eyebrow}</p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;


