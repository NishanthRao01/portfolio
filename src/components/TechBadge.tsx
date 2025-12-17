import React from "react";

interface TechBadgeProps {
  label: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ label }) => {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 px-2.5 py-0.5 text-[11px] font-medium text-zinc-300">
      {label}
    </span>
  );
};

export default TechBadge;


