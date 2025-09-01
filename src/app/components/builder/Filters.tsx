"use client";
import React from "react";
import { Synergy } from "../../data/s3/sinergi";
import { Equipment } from "../../data/equipment";

interface FiltersProps {
  search: string;
  setSearch: (v: string) => void;
  costFilter: number | null;
  setCostFilter: (v: number | null) => void;
  factionFilter: string | null;
  setFactionFilter: (v: string | null) => void;
  roleFilter: string | null;
  setRoleFilter: (v: string | null) => void;
  synergies: Synergy[];
  categoryFilter: string | null;
  setCategoryFilter: (v: string | null) => void;
  equipments: Equipment[];
}

export function Filters({
  search,
  setSearch,
  costFilter,
  setCostFilter,
  factionFilter,
  setFactionFilter,
  roleFilter,
  setRoleFilter,
  synergies,
  categoryFilter,
  setCategoryFilter,
  equipments,
}: FiltersProps) {
  const categories = Array.from(new Set(equipments.map((eq) => eq.category)));

  return (
    <div className="mt-6 w-full max-w-4xl bg-gray-800/40 p-3 rounded-md flex flex-wrap gap-2 justify-center">
      {/* Hero filters */}
      <input
        type="text"
        placeholder="Search hero..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-1 rounded bg-gray-700 text-white w-48"
      />
      <select
        value={costFilter ?? ""}
        onChange={(e) =>
          setCostFilter(e.target.value ? Number(e.target.value) : null)
        }
        className="px-2 py-1 rounded bg-gray-700 text-white"
      >
        <option value="">All Costs</option>
        {[1, 2, 3, 4, 5].map((c) => (
          <option key={c} value={c}>
            {c} Cost
          </option>
        ))}
      </select>
      <select
        value={factionFilter ?? ""}
        onChange={(e) => setFactionFilter(e.target.value || null)}
        className="px-2 py-1 rounded bg-gray-700 text-white"
      >
        <option value="">All Factions</option>
        {synergies
          .filter((s) => s.type === "Faction")
          .map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
      </select>
      <select
        value={roleFilter ?? ""}
        onChange={(e) => setRoleFilter(e.target.value || null)}
        className="px-2 py-1 rounded bg-gray-700 text-white"
      >
        <option value="">All Roles</option>
        {synergies
          .filter((s) => s.type === "Role")
          .map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
      </select>

      {/* Equipment filter */}
      <select
        value={categoryFilter ?? ""}
        onChange={(e) => setCategoryFilter(e.target.value || null)}
        className="px-2 py-1 rounded bg-gray-700 text-white"
      >
        <option value="">All Equipment</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
