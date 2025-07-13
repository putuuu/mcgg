"use client";

import { useState } from "react";
import { heroes } from "../data/hero";
import HeroCard from "../components/HeroCard";
import type { CSSProperties } from "react";

export default function HeroPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [factionFilter, setFactionFilter] = useState<string | null>(null);

  const factions = [...new Set(heroes.map((hero) => hero.synergies.faction))];

  const filteredHeroes = heroes.filter((hero) => {
    const matchesSearch = hero.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFaction =
      !factionFilter || hero.synergies.faction === factionFilter;
    return matchesSearch && matchesFaction;
  });

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={titleStyle}>Heroes</h1>

      {/* Search */}
      <div style={searchContainer}>
        <input
          type="text"
          placeholder="Search hero..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          style={searchInput}
        />
      </div>

      {/* Filter */}
      <div className="filter-bar">
        <button
          className={`filter-chip ${factionFilter === null ? "active" : ""}`}
          onClick={() => setFactionFilter(null)}
        >
          All
        </button>
        {factions.map((faction) => (
          <button
            key={faction}
            className={`filter-chip ${
              factionFilter === faction ? "active" : ""
            }`}
            onClick={() => setFactionFilter(faction)}
          >
            {faction}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={cardGridStyle}>
        {filteredHeroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </main>
  );
}

// === Styles ===
const titleStyle: CSSProperties = {
  textAlign: "center",
  fontSize: "2rem",
  marginBottom: "1rem",
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

const cardGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
  gap: "1rem",
};
