"use client";

import React, { useState } from "react";
import { patches } from "../data/patches";
import { heroes } from "../data/s3/hero";
import { synergies } from "../data/s3/sinergi";
import { commanders } from "../data/commanders";
import Image from "next/image";

type FilterType = "all" | "hero" | "synergy" | "commander";

const getImage = (type: string, name: string) => {
  if (type === "hero")
    return (
      heroes.find((h) => h.name === name)?.image || "/images/placeholder.png"
    );
  if (type === "synergy")
    return (
      synergies.find((s) => s.name === name)?.icon || "/images/placeholder.png"
    );
  if (type === "commander")
    return (
      commanders.find((c) => c.name === name)?.image ||
      "/images/placeholder.png"
    );
  return "/images/placeholder.png";
};

export default function PatchPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  // Filter updates per patch
  const filteredPatches = patches
    .map((patch) => ({
      ...patch,
      updates: patch.updates.filter((u) =>
        filter === "all" ? true : u.type === filter
      ),
    }))
    .filter((p) => p.updates.length > 0);

  return (
    <div className="min-h-screen ">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        MCGG Patch Notes
      </h1>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-3 mb-6">
        {(["all", "hero", "synergy", "commander"] as FilterType[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded-md border font-medium ${
              filter === f
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-200 border-gray-700"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Patch List */}
      <div className="flex flex-col gap-4">
        {filteredPatches.map((patch, i) => (
          <div
            key={i}
            className="max-w-4xl mx-auto p-5 mb-6 rounded-lg bg-gray-900/30 border border-gray-700 shadow-lg"
          >
            <h2 className="text-xl font-bold text-white mb-4">
              {patch.patch} — {patch.date}
            </h2>
            <div className="flex flex-col gap-3">
              {patch.updates.map((update, j) => {
                const imgSrc = getImage(update.type, update.name);
                return (
                  <div
                    key={j}
                    className="flex items-start gap-3 p-2 rounded-md bg-gray-800/70"
                  >
                    <div className="w-[60px] h-[60px] flex-shrink-0 relative">
                      <Image
                        src={imgSrc}
                        alt={update.name}
                        fill
                        className="rounded-md object-cover object-top"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-base font-semibold text-white">
                          {update.name} ({update.type})
                        </div>
                        <div
                          className={`text-xs px-2 py-0.5 rounded ${
                            update.change === "buff"
                              ? "bg-green-600 text-white"
                              : "bg-red-600 text-white"
                          }`}
                        >
                          {update.change.toUpperCase()}
                        </div>
                      </div>
                      <ul className="list-disc ml-5 text-sm text-gray-200 space-y-1">
                        {update.description.map((desc, k) => (
                          <li key={k}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
