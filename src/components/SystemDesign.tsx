import React from "react";
import SectionHeader from "./SectionHeader";

const SystemDesign: React.FC = () => {
  return (
    <section className="space-y-3">
      <SectionHeader
        label="How I Design Systems"
        title="What I pay attention to beyond happy paths"
      />
      <ul className="space-y-1.5 text-sm text-zinc-300">
        <li>
          <span className="font-medium text-zinc-200">APIs:</span> RESTful endpoints
          with pagination, filtering, and stable response shapes so clients are not
          broken by new fields or refactors.
        </li>
        <li>
          <span className="font-medium text-zinc-200">Auth:</span> JWT-based
          authentication with middleware-enforced permissions at the resource level
          (space, game, application) rather than only at login.
        </li>
        <li>
          <span className="font-medium text-zinc-200">Data:</span> Explicit schemas,
          indexes on hot query paths, and transactions where consistency between
          tables or collections matters.
        </li>
        <li>
          <span className="font-medium text-zinc-200">Realtime:</span>{" "}
          server-authoritative state (for games and rooms) with validation before
          broadcasting updates to connected clients.
        </li>
        <li>
          <span className="font-medium text-zinc-200">Debugging:</span> log slow or
          failing paths, reproduce them locally with the same inputs, then adjust
          queries, indexes, or logic before re-testing.
        </li>
        <li>
          <span className="font-medium text-zinc-200">Testing:</span> add focused
          integration tests around critical flows (login, feed queries, move
          validation) after bugs so regressions are caught by the suite instead of
          only by manual testing.
        </li>
      </ul>
    </section>
  );
};

export default SystemDesign;


