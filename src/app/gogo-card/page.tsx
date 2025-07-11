"use client";

import { useState } from "react";
import { cards } from "../data/cards";
import Image from "next/image";

export default function GogoCardPage() {
  const [filter, setFilter] = useState<string | null>(null);

  const categories = [...new Set(cards.map((card) => card.category))];

  const filteredCards = filter
    ? cards.filter((card) => card.category === filter)
    : cards;

  return (
    <main style={{ padding: "2rem" }}>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Gogo Cards
      </h1>

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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "1rem",
        }}
      >
        {filteredCards.map((card) => (
          <div
            key={card.id}
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "1rem",
              textAlign: "center",
              backdropFilter: "blur(6px)",
            }}
          >
            <Image
              src={card.image}
              alt={card.name}
              width={120}
              height={120}
              style={{ marginBottom: "0.5rem", borderRadius: "8px" }}
            />
            <h3>{card.name}</h3>
            <p style={{ fontSize: "0.8rem", color: "#ccc" }}>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
