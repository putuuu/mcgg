"use client";

import { useState } from "react";
import { commanders } from "../data/commanders";
import CommanderCard from "../components/CommanderCard";
import type { CSSProperties } from "react";

const CommanderPage = () => {
  const [selectedType, setSelectedType] = useState("All");

  const types = ["All", ...Array.from(new Set(commanders.map((c) => c.type)))];

  const filteredCommanders =
    selectedType === "All"
      ? commanders
      : commanders.filter((c) => c.type === selectedType);

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={titleStyle}>All Commanders</h1>

      {/* Filter Buttons */}
      <div className="filter-bar">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`filter-chip ${selectedType === type ? "active" : ""}`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Commander Grid */}
      <div style={gridStyle}>
        {filteredCommanders.map((commander) => (
          <CommanderCard key={commander.id} commander={commander} />
        ))}
      </div>
    </main>
  );
};
const titleStyle: CSSProperties = {
  textAlign: "center",
  fontSize: "2rem",
  marginBottom: "1rem",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "1.5rem",
  justifyItems: "center",
};

export default CommanderPage;
