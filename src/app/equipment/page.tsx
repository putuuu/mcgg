"use client";

import { useState } from "react";
import { equipments } from "../data/equipment";
import Image from "next/image";
import type { CSSProperties } from "react";

export default function GogoCardPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    ...new Set(equipments.map((equipment) => equipment.category)),
  ];

  const filteredCards = equipments.filter((equipment) => {
    const matchFilter = !filter || equipment.category === filter;
    const matchSearch = equipment.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={titleStyle}>Equipment</h1>

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
        {filteredCards.map((equipment) => (
          <div
            key={equipment.id}
            className="gogo-card"
            style={{
              borderRadius: "16px",
              padding: "1rem",
              textAlign: "center",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              // backdropFilter: "blur(6px)",
            }}
          >
            <Image
              src={equipment.icon}
              alt={equipment.name}
              width={64}
              height={64}
              style={{ margin: "0 auto", borderRadius: "12px" }}
            />
            <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>
              {equipment.name}
            </h3>
            {/* <p style={{ fontSize: "0.75rem", opacity: 0.7 }}>
              {equipment.category}
            </p> */}

            {equipment.special && (
              <p style={{ fontSize: "0.75rem", color: "gold" }}>
                ⭐ {equipment.special}
              </p>
            )}

            {equipment.attribute.length > 0 && (
              <ul
                style={{
                  fontSize: "0.75rem",
                  padding: 0,
                  margin: 0,
                  listStyle: "none",
                }}
              >
                {equipment.attribute.map((attr, index) => (
                  <li key={index}>• {attr}</li>
                ))}
              </ul>
            )}

            {equipment.passive && (
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "0.5rem",
                  borderRadius: "8px",
                  fontSize: "0.75rem",
                }}
              >
                <strong>{equipment.passive}</strong>
                <p style={{ marginTop: "0.25rem" }}>{equipment.pdesc}</p>
              </div>
            )}
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
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "1rem",
};
