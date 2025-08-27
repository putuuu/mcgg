"use client";

import { useState } from "react";
import { equipments } from "../data/equipment";
import Image from "next/image";

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
    <main className="p-8">
      <h1 className="text-center text-3xl mb-4">Equipment</h1>

      {/* Search */}
      <div className="text-center mb-4">
        <input
          type="text"
          placeholder="Search Gogo Card..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded-full border border-white/30 bg-white/10 text-white w-full max-w-md backdrop-blur-md"
        />
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-full transition-colors ${
            filter === null
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === cat
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredCards.map((equipment) => (
          <div
            key={equipment.id}
            className="gogo-card rounded-2xl p-4 text-center text-white shadow-lg flex flex-col gap-2 
             bg-black/50 backdrop-blur-md border border-white/10"
          >
            <Image
              src={equipment.icon}
              alt={equipment.name}
              width={64}
              height={64}
              className="mx-auto rounded-xl"
            />
            <h3 className="text-base font-bold">{equipment.name}</h3>

            {equipment.special && (
              <p className="text-sm text-yellow-300">⭐ {equipment.special}</p>
            )}

            {equipment.attribute.length > 0 && (
              <ul className="text-sm p-0 m-0 list-none">
                {equipment.attribute.map((attr, index) => (
                  <li key={index}>• {attr}</li>
                ))}
              </ul>
            )}

            {equipment.passive && (
              <div className="bg-white/5 p-2 rounded-lg text-sm">
                <strong>{equipment.passive}</strong>
                <p className="mt-1">{equipment.pdesc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
