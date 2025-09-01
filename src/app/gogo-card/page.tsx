"use client";

import { useState } from "react";
import { cards } from "../data/s3/cards";
import Image from "next/image";

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
  const categoryBorderColor: Record<string, string> = {
    Orange: "border-orange-400",
    Purple: "border-purple-500",
    Blue: "border-blue-400",
  };

  return (
    <main className="p-8 min-h-screen ">
      <h1 className="text-center text-3xl font-bold mb-6 text-white">
        Gogo Cards
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Gogo Card..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded-full border border-white/30 bg-white/10 text-white w-full max-w-md backdrop-blur-md placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        />
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          className={`px-4 py-2 rounded-full transition-all duration-200 ${
            filter === null
              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
              : "bg-gray-700/80 text-gray-300 hover:bg-gray-600/80 backdrop-blur-sm"
          }`}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              filter === cat
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-gray-700/80 text-gray-300 hover:bg-gray-600/80 backdrop-blur-sm"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredCards.map((card) => {
          const borderColorClass =
            categoryBorderColor[card.category] || "border-white/10";
          return (
            <div
              key={card.id}
              className={`gogo-card rounded-2xl p-4 text-center text-white shadow-lg flex flex-col gap-2 
         bg-black/50 backdrop-blur-md border ${borderColorClass} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <Image
                src={card.image}
                alt={card.name}
                width={120}
                height={120}
                loading="lazy"
                className="mx-auto mb-2 rounded-lg"
              />
              <h3 className="font-semibold text-white mb-1">{card.name}</h3>
              <p className="text-sm text-gray-300">{card.description}</p>
            </div>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredCards.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>No cards found. Try a different search or filter.</p>
        </div>
      )}
    </main>
  );
}
