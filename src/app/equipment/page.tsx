"use client";
import { useState } from "react";
import { equipments } from "../data/equipment";
import Image from "next/image";
import { motion } from "framer-motion";

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
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="relative w-full max-w-md mx-auto">
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
            className={`px-5 py-2.5 rounded-full border transition-all duration-300 ${
              filter === null
                ? "bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold border-green-500 shadow-lg shadow-green-500/20"
                : "bg-gray-800/60 backdrop-blur-md text-gray-300 hover:bg-gray-700/60 border-gray-700/50 hover:border-green-500/50"
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
              className={`px-5 py-2.5 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold border-green-500 shadow-lg shadow-green-500/20"
                  : "bg-gray-800/60 backdrop-blur-md text-gray-300 hover:bg-gray-700/60 border-gray-700/50 hover:border-green-500/50"
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {filteredCards.map((equipment, index) => (
            <motion.div
              key={equipment.id}
              className="gogo-card rounded-2xl p-4 text-center text-white flex flex-col gap-3 bg-gradient-to-br from-gray-900/70 to-black/80 backdrop-blur-md border border-green-500/20 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              {/* Efek cahaya pada card */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative">
                {/* Efek cahaya pada gambar */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl blur-md"></div>
                <Image
                  src={equipment.icon}
                  alt={equipment.name}
                  width={64}
                  height={64}
                  className="mx-auto rounded-xl relative z-10"
                />
              </div>

              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                {equipment.name}
              </h3>

              {equipment.special && (
                <div className="inline-block px-3 py-1 bg-yellow-900/30 rounded-lg border border-yellow-500/30">
                  <p className="text-sm font-semibold text-yellow-300 flex items-center gap-1">
                    <span>⭐</span> {equipment.special}
                  </p>
                </div>
              )}

              {equipment.attribute.length > 0 && (
                <ul className="text-sm p-0 m-0 list-none">
                  {equipment.attribute.map((attr, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-green-400">•</span>
                      <span className="text-gray-300">{attr}</span>
                    </li>
                  ))}
                </ul>
              )}

              {equipment.passive && (
                <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-3 rounded-lg border border-purple-500/30">
                  <p className="text-sm font-semibold text-purple-300 mb-1">
                    {equipment.passive}
                  </p>
                  <p className="text-xs text-gray-300 line-clamp-2">
                    {equipment.pdesc}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state jika tidak ada hasil */}
        {filteredCards.length === 0 && (
          <motion.div
            className="text-center py-12"
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
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              No Gogo Cards found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
