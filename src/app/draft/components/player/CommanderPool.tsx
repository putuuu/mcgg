"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { commanders } from "../../../data/test/commanders";

interface CommanderPoolProps {
  usedIds: Set<number>;
  tempIds: number[];
  canInteract: boolean;
  onSelect: (id: number) => void;
  variant?: "default" | "solo";
}

/* ROLE ORDER */
const ROLE_ORDER = ["All", "Combat", "Survival", "Resource", "Strategy"];

export default function CommanderPool({
  usedIds = new Set<number>(),
  tempIds = [],
  canInteract = false,
  onSelect,
  variant = "default",
}: CommanderPoolProps) {
  const [activeRole, setActiveRole] = useState("All");
  const isSolo = variant === "solo";

  const filtered = useMemo(() => {
    if (activeRole === "All") return commanders;
    return commanders.filter((c) => c.type === activeRole);
  }, [activeRole]);

  return (
    <div className="flex flex-col h-full bg-black/40">
      {/* HEADER */}
      <div className="px-4 pt-3 pb-2 border-b border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-[12px] lg:text-[13px] uppercase tracking-widest text-slate-400">
            Commander Pool
          </span>
          <span className="text-[12px] lg:text-[13px] text-slate-500">
            {filtered.length}
          </span>
        </div>

        {/* ROLE TABS */}
        <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-none touch-pan-x">
          {ROLE_ORDER.map((role) => {
            const active = role === activeRole;
            return (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`
                  shrink-0 px-4 py-1.5 rounded-full
                  text-[12px] lg:text-[13px] transition
                  ${
                    active
                      ? "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40"
                      : "bg-white/5 text-slate-400 hover:bg-white/10"
                  }
                `}
              >
                {role}
              </button>
            );
          })}
        </div>
      </div>

      {/* SCROLL AREA */}
      <div
        className="
    flex-1 min-h-0 overflow-y-auto
    px-4 pt-4
    pb-[calc(6rem+env(safe-area-inset-bottom))]
    sm:pb-4
  "
      >
        <div
          className={isSolo ? "mx-auto max-w-none" : "mx-auto max-w-[1200px]"}
        >
          <div
            className={`
              grid
              ${
                isSolo
                  ? "grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10 gap-5"
                  : "grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4"
              }
            `}
          >
            {filtered.map((cmd) => {
              const isUsed = usedIds.has(cmd.id);
              const isTemp = tempIds.includes(cmd.id);
              const disabled = isUsed || !canInteract;

              return (
                <button
                  key={cmd.id}
                  disabled={disabled}
                  onClick={() => onSelect(cmd.id)}
                  className={`
                    flex flex-col items-center gap-2 rounded-xl p-2 transition
                    ${disabled ? "opacity-30" : isTemp ? "ring-2 ring-emerald-400 scale-[1.03]" : "hover:ring-1 hover:ring-white/40"}
                  `}
                >
                  <div
                    className={`
                      relative rounded-full overflow-hidden bg-slate-900
                      ${
                        isSolo
                          ? "w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] lg:w-[88px] lg:h-[88px]"
                          : "w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[72px] lg:h-[72px] xl:w-[80px] xl:h-[80px]"
                      }
                    `}
                  >
                    <Image
                      src={cmd.icon}
                      alt={cmd.name}
                      fill
                      className="object-cover"
                    />
                    {isUsed && <div className="absolute inset-0 bg-black/60" />}
                  </div>

                  <span className="text-[11px] text-slate-200 truncate max-w-[96px] text-center">
                    {cmd.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
