"use client";

import Image from "next/image";
import { commanders } from "../../data/commanders";

interface CommanderPoolProps {
  usedIds?: Set<number>;
  tempIds?: number[];
  canInteract: boolean;
  onSelect: (id: number) => void;
}

const TABS = ["ALL", "Resource", "Survival", "Strategy", "Combat"];

export default function CommanderPool({
  usedIds = new Set<number>(),
  tempIds = [],
  canInteract,
  onSelect,
}: CommanderPoolProps) {
  return (
    <div className="flex h-full flex-col bg-transparent">
      {/* Top tab bar style mirip mobadraft */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2 bg-black/60 border-b border-white/10">
        <div className="flex gap-2 text-xs">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`px-3 py-1.5 rounded-full border text-[11px] ${
                i === 0
                  ? "bg-white text-slate-900 border-transparent"
                  : "bg-black/40 text-slate-300 border-white/10"
              }`}
              disabled
            >
              {tab}
            </button>
          ))}
        </div>
        <span className="text-[10px] text-slate-400 border border-white/10 rounded-full px-2 py-1">
          {commanders.length} commanders
        </span>
      </div>

      {/* Pool grid */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 pb-4 pt-2">
        <div className="grid grid-cols-6 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-9 gap-2.5">
          {commanders.map((c) => {
            const isUsed = usedIds.has(c.id);
            const isTemp = tempIds.includes(c.id);
            const disabled = isUsed || !canInteract;

            return (
              <button
                key={c.id}
                onClick={() => !disabled && onSelect(c.id)}
                className={`flex flex-col items-center gap-1 text-[10px] transition-transform ${
                  disabled
                    ? "opacity-30 cursor-not-allowed"
                    : isTemp
                    ? "scale-110"
                    : "hover:scale-105"
                }`}
              >
                <div
                  className={`relative 
                    w-10 h-10 
                    sm:w-11 sm:h-11 
                    md:w-12 md:h-12 
                    rounded-full bg-slate-900 border border-white/15 overflow-hidden`}
                >
                  <Image
                    src={c.icon}
                    alt={c.name}
                    fill
                    className="object-fill object-top"
                  />
                  {isTemp && (
                    <div className="absolute inset-0 ring-2 ring-cyan-300" />
                  )}
                </div>
                <span className="truncate max-w-[64px] text-slate-200">
                  {c.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
