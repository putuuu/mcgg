"use client";

import { commanders } from "../data/commanders";
import CommanderCard from "../components/CommanderCard";

export default function CommanderPage() {
  return (
    <div>
      <h1 style={{ marginBottom: "1rem" }}>All Commanders</h1>
      <div style={gridStyle}>
        {commanders.map((cmd) => (
          <CommanderCard key={cmd.id} commander={cmd} />
        ))}
      </div>
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "3rem",
};
