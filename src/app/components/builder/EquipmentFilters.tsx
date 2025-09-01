"use client";
import React from "react";
import { Equipment } from "../../data/equipment";

interface EquipmentFiltersProps {
  categoryFilter: string | null;
  setCategoryFilter: (v: string | null) => void;
  equipments: Equipment[];
}

export function EquipmentFilters({
  categoryFilter,
  setCategoryFilter,
  equipments,
}: EquipmentFiltersProps) {
  // Ambil list category unik
  const categories = Array.from(new Set(equipments.map((eq) => eq.category)));

  return (
    <div className="mt-2 w-full max-w-4xl bg-gray-800/40 p-3 rounded-md">
      <div className="flex items-center gap-4 justify-center">
        <select
          value={categoryFilter ?? ""}
          onChange={(e) => setCategoryFilter(e.target.value || null)}
          className="px-2 py-1 rounded bg-gray-700 text-white"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
