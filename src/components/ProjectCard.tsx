import React from "react";
import TechBadge from "./TechBadge";

interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectCardProps {
  name: string;
  role: string;
  timeframe?: string;
  problem: string;
  solution: string;
  technicalDecisions: string[];
  impact: string;
  architecture: string;
  metrics: string[];
  stack: string[];
  links: ProjectLink[];
  whenThingsBroke?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  role,
  timeframe,
  problem,
  solution,
  technicalDecisions,
  impact,
  architecture,
  metrics,
  stack,
  links,
  whenThingsBroke,
}) => {
  return (
    <article className="border border-zinc-800 rounded-lg p-5 md:p-6 bg-zinc-950/40">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-zinc-50">{name}</h3>
          <p className="text-xs text-zinc-400">
            {role}
            {timeframe ? ` • ${timeframe}` : null}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3 text-sm text-zinc-300 md:grid-cols-2 md:gap-4">
        <div className="space-y-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Problem
            </p>
            <p className="mt-1 text-zinc-200">{problem}</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Solution
            </p>
            <p className="mt-1">{solution}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Technical decisions
            </p>
            <ul className="mt-1 space-y-1.5">
              {technicalDecisions.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Architecture
            </p>
            <p className="mt-1 text-zinc-300">{architecture}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] md:gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Impact
          </p>
          <p className="mt-1 text-sm text-zinc-200">{impact}</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Metrics
          </p>
          <ul className="mt-1 space-y-1.5 text-sm text-zinc-300">
            {metrics.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </div>

      {whenThingsBroke && (
        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            When things broke
          </p>
          <p className="mt-1 text-sm text-zinc-300">{whenThingsBroke}</p>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800 pt-3">
        <div className="flex flex-wrap gap-3 text-xs">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-zinc-300 hover:text-zinc-50"
            >
              <span className="h-[3px] w-[3px] rounded-full bg-emerald-400" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;


