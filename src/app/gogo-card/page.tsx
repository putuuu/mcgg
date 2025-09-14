"use client";
import { useState } from "react";
import { cards } from "../data/s3/cards";
import Image from "next/image";
import { motion } from "framer-motion";

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

  // Warna untuk setiap kategori
  const categoryColors: Record<
    string,
    { border: string; bg: string; text: string }
  > = {
    Orange: {
      border: "border-orange-500",
      bg: "from-orange-900/30 to-orange-800/30",
      text: "text-orange-300",
    },
    Purple: {
      border: "border-purple-500",
      bg: "from-purple-900/30 to-purple-800/30",
      text: "text-purple-300",
    },
    Blue: {
      border: "border-blue-500",
      bg: "from-blue-900/30 to-blue-800/30",
      text: "text-blue-300",
    },
  };

  return (
    <main className="px-4 py-8 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header dengan efek futuristik */}
        <div className="text-center mb-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Gogo Cards
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Discover powerful Gogo Cards to enhance your gameplay strategy
          </motion.p>
        </div>

        {/* Search */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search Gogo Card..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-full border border-green-500/30 bg-gray-900/60 backdrop-blur-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 pl-12"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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

        {/* Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === null
                ? "bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold shadow-lg shadow-green-500/30"
                : "bg-gray-800/60 backdrop-blur-sm text-gray-300 hover:bg-gray-700/60 border border-gray-700/50 hover:border-green-500/50"
            }`}
            onClick={() => setFilter(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold shadow-lg shadow-green-500/30"
                  : "bg-gray-800/60 backdrop-blur-sm text-gray-300 hover:bg-gray-700/60 border border-gray-700/50 hover:border-green-500/50"
              }`}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {filteredCards.map((card, index) => {
            const colors = categoryColors[card.category] || categoryColors.Blue;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className={`rounded-2xl p-4 text-center text-white flex flex-col gap-3 
                  bg-gradient-to-br ${colors.bg} backdrop-blur-md border ${colors.border} 
                  shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {/* Efek cahaya */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="mx-auto rounded-lg"
                  />
                  {/* Efek border neon */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-green-400/50 transition-all duration-300 pointer-events-none"></div>
                </div>

                <h3 className={`font-bold text-lg ${colors.text} mb-1`}>
                  {card.name}
                </h3>
                <p className="text-sm text-gray-300">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty state */}
        {filteredCards.length === 0 && (
          <motion.div
            className="text-center py-12 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="inline-block p-4 bg-gray-800/40 backdrop-blur-md rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-400"
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
            <p className="text-lg font-semibold text-gray-200 mb-2">
              No cards found
            </p>
            <p className="text-gray-500">
              Try a different search or filter criteria
            </p>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
