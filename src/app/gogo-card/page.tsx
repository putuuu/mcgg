"use client";

import { useState } from "react";
import { cards } from "../data/cards";
import Image from "next/image";
import type { CSSProperties } from "react";

export default function GogoCardPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [...new Set(cards.map((card) => card.category))];

  const filteredCards = cards.filter((card) => {
    const matchFilter = !filter || card.category === filter;
    const matchSearch = card.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={titleStyle}>Gogo Cards</h1>

      {/* Search */}
      <div style={searchContainer}>
        <input
          type="text"
          placeholder="Search Gogo Card..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={searchInput}
        />
      </div>

      {/* Filter */}
      <div className="filter-bar">
        <button
          className={`filter-chip ${filter === null ? "active" : ""}`}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-chip ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div style={cardGridStyle}>
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className={`gogo-card ${card.category.toLowerCase()}`}
          >
            <Image
              src={card.image}
              alt={card.name}
              width={100}
              height={100}
              loading="lazy"
              style={{ marginBottom: "0.5rem", borderRadius: "8px" }}
            />
            <h3>{card.name}</h3>
            <p style={{ fontSize: "0.8rem", color: "#ddd" }}>
              {card.description}
            </p>
          </div>
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
