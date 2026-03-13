import React from "react";

interface TechBadgeProps {
  label: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ label }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-400">
      {label}
    </span>
  );
};

export default TechBadge;


