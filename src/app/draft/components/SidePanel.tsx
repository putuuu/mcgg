"use client";

import Image from "next/image";
import { findIcon, findImage } from "./sharedLookup";

interface SidePanelProps {
  ids: number[];
  label: string;
  className?: string;
}

interface SlotProps {
  id?: number | null;
  big?: boolean;
}

function Slot({ id, big }: SlotProps) {
  const cls = big ? "w-16 h-16" : "w-14 h-14";
  const src = id ? findImage(id) || findIcon(id) : "";

  return (
    <div
      className={`${cls} rounded-2xl bg-slate-900 border border-white/10 overflow-hidden flex items-center justify-center`}
    >
      {id && src ? (
        <div className="relative w-full h-full">
          <Image src={src} alt="" fill className="object-cover object-top" />
        </div>
      ) : (
        <span className="text-xs text-slate-500">?</span>
      )}
    </div>
  );
}

export function SidePanel({ ids, label, className }: SidePanelProps) {
  return (
    <div
      className={`md:w-40 w-full bg-[#05070d] rounded-3xl border border-white/5 flex flex-col items-center py-3 gap-2 ${
        className ?? ""
      }`}
    >
      <span className="text-[10px] text-slate-500 uppercase tracking-wide">
        {label}
      </span>
      <Slot id={ids[0]} big />
      {[1, 2, 3].map((i) => (
        <Slot key={i} id={ids[i]} />
      ))}
    </div>
  );
}
