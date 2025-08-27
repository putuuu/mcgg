"use client";
import React from "react";
import Image from "next/image";
import { Synergy } from "../../data/s3/sinergi";

interface ActiveSynergyListProps {
  activeSynergies: (Synergy & { count: number; nextRequired: number })[];
}

export function ActiveSynergyList({ activeSynergies }: ActiveSynergyListProps) {
  return (
    <div className="w-64 bg-gray-800/60 p-4 rounded-md">
      <h2 className="text-lg font-bold text-yellow-400 mb-2">
        Active Synergies
      </h2>
      {activeSynergies.length === 0 ? (
        <p className="text-gray-400">No synergies</p>
      ) : (
        <ul className="space-y-2">
          {activeSynergies.map((syn) => (
            <li
              key={syn.id}
              className="relative group flex items-center gap-2 cursor-pointer"
            >
              <div className="relative w-8 h-8">
                <Image
                  src={syn.icon}
                  alt={syn.name}
                  fill
                  className="object-cover object-top rounded"
                />
              </div>
              <span className="text-white">{syn.name}</span>
              <span className="text-green-400 ml-auto">
                {syn.count}/{syn.nextRequired}
              </span>
              <div className="absolute hidden group-hover:block z-50 left-10 top-0 w-72 bg-gray-900/95 text-white rounded-md shadow-lg p-3">
                <h3 className="font-bold text-yellow-300">{syn.name}</h3>
                <p className="text-sm text-gray-300 mb-2">{syn.description}</p>
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
          ))}
        </ul>
      )}
    </div>
  );
}
