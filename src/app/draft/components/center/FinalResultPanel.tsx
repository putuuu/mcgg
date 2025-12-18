"use client";

import Image from "next/image";
import { commanders } from "../../../data/test/commanders";

interface FinalResultPanelProps {
  homeLabel: string;
  awayLabel: string;
  homePicks: (number | null)[];
  awayPicks: (number | null)[];
}

export default function FinalResultPanel({
  homeLabel,
  awayLabel,
  homePicks,
  awayPicks,
}: FinalResultPanelProps) {
  return (
    <div className="w-full h-full flex items-center justify-center pb-20">
      <div
        className="
          w-full
          max-w-[900px]
          flex
          items-start
          justify-center
          gap-10
          px-3
        "
      >
        {/* HOME */}
        <TeamGrid side="HOME" label={homeLabel} picks={homePicks} />

        {/* AWAY */}
        <TeamGrid side="AWAY" label={awayLabel} picks={awayPicks} />
      </div>
    </div>
  );
}

/* ============================= */
/* TEAM GRID 2x2 */
/* ============================= */

function TeamGrid({
  side,
  label,
  picks,
}: {
  side: "HOME" | "AWAY";
  label: string;
  picks: (number | null)[];
}) {
  const ring = side === "HOME" ? "ring-cyan-400/40" : "ring-rose-400/40";

  return (
    <div className="flex flex-col items-center gap-3">
      {/* LABEL */}
      <span
        className={`
          text-[11px]
          uppercase tracking-widest
          ${side === "HOME" ? "text-cyan-300" : "text-rose-300"}
        `}
      >
        {label}
      </span>

      {/* GRID 2x2 */}
      <div className="grid grid-cols-2 gap-3">
        {picks.slice(0, 4).map((id, i) => {
          const commander = commanders.find((c) => c.id === id);
          if (!commander) return null;

          return (
            <div
              key={i}
              className={`
                relative
                w-[72px]          /* 📱 mobile */
                sm:w-[82px]
                md:w-[92px]
                lg:w-[104px]     /* 💻 desktop */
                aspect-[3/4]
                rounded-xl
                overflow-hidden
                bg-black/70
                border border-white/15
                ring-2 ${ring}
              `}
            >
              <Image
                src={commander.image || commander.icon}
                alt={commander.name}
                fill
                sizes="104px"
                className="object-fill"
              />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* NAME */}
              <div className="absolute bottom-1 inset-x-0 text-center">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-200">
                  {commander.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
