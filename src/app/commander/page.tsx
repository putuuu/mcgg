"use client";
import { useState } from "react";
import { commanders } from "../data/commanders";
import CommanderCard from "../components/commander/CommanderCard";
import { motion } from "framer-motion";

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
    <main className="px-4 py-6 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header dengan efek futuristik */}
        <div className="text-center mb-6">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            All Commanders
          </motion.h1>
          <motion.p
            className="text-base text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Discover the powerful commanders of Magic Chess: Go-Go
          </motion.p>
        </div>

        {/* Search Bar dengan efek futuristik */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search commander..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-cyan-500/30 bg-gray-900/60 backdrop-blur-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 pl-10 text-sm"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Filter Buttons dengan efek futuristik */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {types.map((type) => (
            <motion.button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1.5 rounded-full border transition-all duration-300 text-sm ${
                selectedType === type
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold border-cyan-500 shadow-lg shadow-cyan-500/20"
                  : "bg-gray-800/60 backdrop-blur-md text-gray-300 hover:bg-gray-700/60 border-gray-700/50 hover:border-cyan-500/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type}
            </motion.button>
          ))}
        </motion.div>

        {/* Commander Grid dengan efek futuristik */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {filteredCommanders.map((commander, index) => (
            <motion.div
              key={commander.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <CommanderCard commander={commander} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state jika tidak ada hasil */}
        {filteredCommanders.length === 0 && (
          <motion.div
            className="text-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="inline-block p-3 bg-gray-800/40 backdrop-blur-md rounded-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-200 mb-1">
              No commanders found
            </h3>
            <p className="text-gray-400 text-sm">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
};

export default CommanderPage;
