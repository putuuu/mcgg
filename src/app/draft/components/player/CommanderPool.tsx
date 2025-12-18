"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { commanders } from "../../../data/commanders";

interface CommanderPoolProps {
  usedIds?: Set<number>;
  tempIds?: number[];
  canInteract?: boolean;
  onSelect?: (id: number) => void;
}

/* ROLE ORDER */
const ROLE_ORDER = ["All", "Combat", "Survival", "Resource", "Strategy"];

export default function CommanderPool({
  usedIds = new Set<number>(),
  tempIds = [],
  canInteract = false,
  onSelect,
}: CommanderPoolProps) {
  const [activeRole, setActiveRole] = useState("All");

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
                  shrink-0
                  px-4 py-1.5
                  rounded-full
                  text-[12px] lg:text-[13px]
                  transition
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
          flex-1 min-h-0
          overflow-y-auto
          overscroll-contain
          px-4 py-4
          touch-pan-y
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* ⬇️ INI KUNCI: BATASI LEBAR DESKTOP */}
        <div className="mx-auto max-w-[1200px]">
          <div
            className="
              grid
              grid-cols-4
              sm:grid-cols-5
              md:grid-cols-6
              lg:grid-cols-6
              xl:grid-cols-7
              2xl:grid-cols-8
              gap-4
            "
          >
            {filtered.map((cmd) => {
              const isUsed = usedIds.has(cmd.id);
              const isTemp = tempIds.includes(cmd.id);
              const disabled = isUsed || !canInteract;

              return (
                <button
                  key={cmd.id}
                  disabled={disabled}
                  onClick={() => onSelect?.(cmd.id)}
                  className={`
                    relative
                    flex flex-col items-center gap-2
                    rounded-xl p-2
                    transition
                    active:scale-95
                    ${
                      disabled
                        ? "opacity-30"
                        : isTemp
                        ? "ring-2 ring-emerald-400 scale-[1.03]"
                        : "hover:ring-1 hover:ring-white/40"
                    }
                  `}
                >
                  {/* AVATAR */}
                  <div
                    className="
                      relative
                      w-11 h-11
                      sm:w-12 sm:h-12      
                      md:w-14 md:h-14
                      lg:w-[72px] lg:h-[72px]
                      xl:w-[80px] xl:h-[80px]
                      rounded-full
                      overflow-hidden
                      bg-slate-900
                    "
                  >
                    <Image
                      src={cmd.icon}
                      alt={cmd.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />

                    {isUsed && <div className="absolute inset-0 bg-black/60" />}
                  </div>

                  {/* NAME */}
                  <span
                    className="
                      text-[10px]
                      sm:text-[11px]
                      md:text-[12px]
                      lg:text-[13px]
                      text-slate-200
                      truncate
                      max-w-[90px]
                      text-center
                    "
                  >
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
