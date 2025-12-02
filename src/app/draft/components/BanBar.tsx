"use client";

import Image from "next/image";
import { findIcon } from "./sharedLookup";

interface BanBarProps {
  title: string;
  ids: number[];
  reverse?: boolean;
}

export function BanBar({ title, ids, reverse }: BanBarProps) {
  return (
    <div
      className={`flex items-center gap-3 bg-white/5 rounded-full px-4 py-2 min-w-[220px] ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <span className="text-[10px] md:text-xs uppercase tracking-wide text-slate-300">
        {title}
      </span>
      <div className="flex gap-2">
        {Array(3)
          .fill(0)
          .map((_, i) => {
            const id = ids[i];
            const src = id ? findIcon(id) : "";
            return (
              <div
                key={i}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-900 border border-white/10 overflow-hidden flex items-center justify-center"
              >
                {id && src ? (
                  <div className="relative w-full h-full">
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ) : (
                  <span className="text-xs text-slate-500">?</span>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
