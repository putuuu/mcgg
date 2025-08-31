"use client";
import React from "react";
import Image from "next/image";
import { Synergy } from "../../data/s3/sinergi";

interface ActiveSynergyListProps {
  activeSynergies: (Synergy & { count: number; nextRequired: number })[];
}

export function ActiveSynergyList({ activeSynergies }: ActiveSynergyListProps) {
  const sorted = [...activeSynergies].sort((a, b) => {
    if (a.name === "Metro Zero") return -1;
    if (b.name === "Metro Zero") return 1;
    if (b.count !== a.count) return b.count - a.count;
    return a.name.localeCompare(b.name);
  });

  // hitung synergies aktif (count > 1, exclude Metro Zero sendiri)
  const activeCount = activeSynergies.filter(
    (s) => s.name !== "Metro Zero" && s.count > 1
  ).length;

  return (
    <div className="w-64 bg-gray-800/60 p-4 rounded-md">
      <h2 className="text-lg font-bold text-yellow-400 mb-2">
        Active Synergies
      </h2>
      {sorted.length === 0 ? (
        <p className="text-gray-400">No synergies</p>
      ) : (
        <ul className="space-y-2">
          {sorted.map((syn) => {
            const isDimmed = syn.count === 1; // kalau cuma 1 unit
            return (
              <li
                key={syn.id}
                className={`relative group flex items-center gap-2 cursor-pointer ${
                  isDimmed ? "opacity-50" : ""
                }`}
              >
                <div className="relative w-8 h-8">
                  <Image
                    src={syn.icon}
                    alt={syn.name}
                    fill
                    className="object-cover object-top rounded"
                  />
                </div>
                <span className={isDimmed ? "text-gray-400" : "text-white"}>
                  {syn.name}
                </span>

                {/* Kalau Metro Zero, tampilkan info tambahan */}
                {syn.name === "Metro Zero" ? (
                  <span
                    className={`ml-auto ${
                      isDimmed ? "text-gray-400" : "text-green-400"
                    }`}
                  >
                    {syn.count}/{syn.nextRequired}{" "}
                    <span className="text-yellow-300 text-sm">
                      ({activeCount + 1})
                    </span>
                  </span>
                ) : (
                  <span
                    className={`ml-auto ${
                      isDimmed ? "text-gray-400" : "text-green-400"
                    }`}
                  >
                    {syn.count}/{syn.nextRequired}
                  </span>
                )}

                {/* Hover card */}
                <div className="absolute hidden group-hover:block z-50 left-10 top-0 w-72 bg-gray-900/95 text-white rounded-md shadow-lg p-3">
                  <h3 className="font-bold text-yellow-300">{syn.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    {syn.description}
                  </p>
                  <ul className="space-y-1">
                    {syn.effects.map((eff, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-gray-200 flex gap-2 items-start"
                      >
                        <span className="text-green-400 font-semibold">
                          {eff.units} Units:
                        </span>
                        <span>{eff.effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
