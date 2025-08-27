"use client";

import { useState } from "react";
import { commanders } from "../data/commanders";
import CommanderCard from "../components/commander/CommanderCard";

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
    <main className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-center text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        All Commanders
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search commander..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedType === type
                ? "bg-yellow-400 text-black font-semibold border-yellow-400"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-600"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Commander Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCommanders.map((commander) => (
          <CommanderCard key={commander.id} commander={commander} />
        ))}
      </div>
    </main>
  );
};

export default CommanderPage;
