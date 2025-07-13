"use client";

import { useState } from "react";
import { commanders } from "../data/commanders";
import CommanderCard from "../components/CommanderCard";
import type { CSSProperties } from "react";

const CommanderPage = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const types = ["All", ...Array.from(new Set(commanders.map((c) => c.type)))];

  const filteredCommanders = commanders.filter((c) => {
    const matchType = selectedType === "All" || c.type === selectedType;
    const matchSearch = c.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={titleStyle}>All Commanders</h1>

      {/* Search Bar */}
      <div style={searchContainer}>
        <input
          type="text"
          placeholder="Search commander..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={searchInput}
        />
      </div>

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

// === Styling ===
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

const searchContainer: CSSProperties = {
  textAlign: "center",
  marginBottom: "1rem",
};

const searchInput: CSSProperties = {
  padding: "0.5rem 1rem",
  borderRadius: "9999px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.1)",
  color: "white",
  width: "100%",
  maxWidth: "400px",
  backdropFilter: "blur(8px)",
};

export default CommanderPage;
