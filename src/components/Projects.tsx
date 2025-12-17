import React from "react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="space-y-5">
      <SectionHeader
        label="Projects"
        title="Systems I've designed and shipped"
        eyebrow="Selected projects that forced real architectural trade-offs: authentication, data modelling, performance, and reliability."
      />

      <div className="space-y-5">
        <ProjectCard
          name="CampusCollab (UniHub)"
          role="Full-Stack Engineer • Solo project"
          timeframe="2024"
          problem="University teams were relying on scattered WhatsApp groups and Google Docs, making it hard to track tasks, notes, and decisions across clubs and courses."
          solution="Built a web platform where students can create spaces for courses/clubs, share posts and files, track tasks, and search through discussions in seconds."
          technicalDecisions={[
            "Split the API into clearly defined resources (spaces, threads, tasks, members) with RESTful endpoints and JWT-based session handling.",
            "Used MongoDB with compound indexes on space, tags, and updatedAt to keep search + filters responsive under growing data.",
            "Implemented server-side pagination and query projection to avoid over-fetching and reduce payload size for feed and search APIs.",
            "Added caching and debounced client-side queries for heavy filters (tags, owners, date ranges) to minimise redundant network calls.",
            "Introduced per-space middleware that checks both JWT validity and membership before returning any space data, and logs unauthorised access attempts without leaking details in responses.",
          ]}
          impact="Used by ~120+ students across clubs and course groups to replace scattered chats and spreadsheets with a single shared space for tasks, notes, and announcements. Later additions like per-space roles and basic notifications were built on top of the original data model without breaking existing clients."
          architecture="React + TypeScript frontend talks to a Node.js/Express API. Auth uses HTTP-only cookies with short-lived JWTs and middleware that checks space-level access on each request. MongoDB stores users, spaces, threads, and tasks; list endpoints support cursor-based pagination, filters, and projections so that clients do not fetch large document bodies unnecessarily."
          metrics={[
            "~120+ student sign-ups across multiple clubs during internal testing.",
            "Median feed response stayed under ~120 ms on filtered queries after adding indexes and projections (measured via simple server-side timing logs).",
            "Search API remained under ~200 ms with combined tag and text filters on the test dataset.",
          ]}
          stack={[
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "Tailwind CSS",
          ]}
          links={[
            {
              label: "GitHub Repository",
              href: "https://github.com/nishanth-rao-annam/campus-collab",
            },
            {
              label: "Live Demo",
              href: "https://campus-collab.nishanthrao.dev",
            },
          ]}
          whenThingsBroke="After initial usage, feed queries slowed when active spaces crossed ~40–50 threads. I profiled the queries, found an unindexed filter field, added compound indexes on space + updatedAt + tags, and trimmed response payloads using MongoDB projections, bringing p95 feed latency back under ~150 ms."
        />

        <ProjectCard
          name="BlindChess"
          role="Backend-heavy Engineer • Solo project"
          timeframe="2024"
          problem="Visually impaired players often rely on physical boards or assistants to play chess online, which makes independent, real-time games difficult."
          solution="Created a voice-controlled chess experience with real-time multiplayer, where players can make moves and hear board state through audio feedback."
          technicalDecisions={[
            "Used Socket.io to maintain low-latency, event-driven communication between players and the server for moves, clocks, and game state.",
            "Implemented a server-side game engine responsible for validating moves, preventing illegal states, and acting as the single source of truth.",
            "Designed room and match lifecycle management (create, join, resign, disconnect) with clear state transitions to avoid ghost games.",
            "Separated latency-sensitive events (moves, timers) from less frequent events (chat, match history) to keep the critical path lean.",
          ]}
          impact="Enabled visually impaired users to play complete online games via voice commands with consistent, predictable behaviour, even on moderate network conditions."
          architecture="Frontend captures voice commands and sends parsed moves to a Node.js backend over Socket.io. The backend runs the chess engine, validates moves server-side, and broadcasts state updates to both players in each room. Game sessions are persisted so matches can be resumed, and the server logs move timestamps and room IDs so I can inspect slow or out-of-order events when debugging latency issues."
          metrics={[
            "Average move propagation time ~80–120 ms on typical broadband connections.",
            "Handled concurrent games in separate Socket.io rooms without observable cross-talk.",
            "No illegal board states observed across multiple test sessions with edge-case sequences.",
          ]}
          stack={[
            "React",
            "Node.js",
            "Socket.io",
            "TypeScript",
            "Web Speech APIs",
          ]}
          links={[
            {
              label: "GitHub Repository",
              href: "https://github.com/nishanth-rao-annam/blind-chess",
            },
          ]}
          whenThingsBroke="Early playtests exposed state desyncs when a player disconnected mid-game and rejoined. I fixed this by making the server authoritative, replaying the full board state and clocks on reconnect, and validating each move on the server before broadcasting it to both clients."
        />

        <ProjectCard
          name="Job Application Management System"
          role="Backend & Database Engineer"
          timeframe="2023"
          problem="Students and placement teams were tracking job applications in spreadsheets, making it slow to update statuses, filter candidates, or run basic reports."
          solution="Built a desktop-style system where admins and students can log applications, update stages, and generate structured views instead of manual filtering in Excel."
          technicalDecisions={[
            "Modelled core entities (students, companies, applications, stages) in MySQL with foreign keys to keep data consistent under concurrent updates.",
            "Used JDBC with connection pooling and prepared statements to avoid SQL injection and improve throughput under bursts of writes.",
            "Wrapped database operations in service methods with clear transaction boundaries for multi-step updates (e.g., stage + notes + timestamps).",
            "Added indexed columns on frequently queried fields (company, status, graduation year) to keep list views responsive.",
            "Added a small suite of integration tests that create applications, move them through stages, and assert on final database state to catch regressions in transaction or constraint handling.",
          ]}
          impact="Moved a real placement workflow off spreadsheets to a structured system, making it easier for staff to answer basic questions like 'who is at which stage for this company' without manual reconciliation."
          architecture="Java application layered into UI, service, and repository tiers. The service layer coordinates validation and transactions, while repositories encapsulate SQL. MySQL stores all core entities, and the schema is designed to support future reporting without breaking existing queries."
          metrics={[
            "Used by a batch of students and coordinators during placement season.",
            "Reduced time to look up candidate status for a given company from ~3–5 minutes of spreadsheet filtering to under 10 seconds using filtered views.",
            "No data integrity issues observed during coordinated testing, helped by foreign key constraints and wrapping multi-step updates in transactions.",
          ]}
          stack={["Java", "Swing / JavaFX", "MySQL", "JDBC"]}
          links={[
            {
              label: "GitHub Repository",
              href: "https://github.com/nishanth-rao-annam/job-application-management-system",
            },
          ]}
          whenThingsBroke="During early testing, partial updates left applications in inconsistent stages across tables. I fixed this by wrapping multi-table updates in JDBC transactions and enforcing foreign key constraints, which eliminated inconsistent states during the pilot run."
        />
      </div>
    </section>
  );
};

export default Projects;


