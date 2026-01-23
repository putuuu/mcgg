"use client";

import Image from "next/image";
import { commanders } from "../../../data/test/commanders";

interface DraftTopBarProps {
  homeLabel: string;
  awayLabel: string;
  homeBans: (number | null)[];
  awayBans: (number | null)[];
  phase: string;
  step: number;
  totalSteps: number;
  timer: number;
}

export default function DraftTopBar({
  homeLabel,
  awayLabel,
  homeBans,
  awayBans,
  phase,
  step,
  totalSteps,
  timer,
}: DraftTopBarProps) {
  return (
    <header
      className="
        relative z-20
        flex items-center justify-between
        px-4 sm:px-6 lg:px-10
        py-3 sm:py-4 lg:py-6
      "
    >
      {/* HOME BAN */}
      <BanPill label={homeLabel} bans={homeBans} align="left" />

      {/* CENTER */}
      <div
        className="
          flex flex-col items-center
          gap-1.5
          px-5 sm:px-7 lg:px-10
          py-3 sm:py-3.5 lg:py-5
          rounded-full
          bg-black/70
          border border-white/15
        "
      >
        <span className="text-[11px] sm:text-[12px] lg:text-[13px] uppercase tracking-widest text-slate-300">
          {phase}
        </span>

        <span
          className="
            text-3xl sm:text-4xl
            lg:text-5xl xl:text-6xl 2xl:text-7xl
            font-extrabold
            text-slate-100
            leading-none
          "
        >
          {timer > 0 ? timer : "—"}
        </span>

        <span className="text-[10px] sm:text-[11px] lg:text-[12px] text-slate-400">
          STEP {step} / {totalSteps}
        </span>
      </div>

      {/* AWAY BAN */}
      <BanPill label={awayLabel} bans={awayBans} align="right" />
    </header>
  );
}

/* ============================= */
/* BAN PILL */
/* ============================= */

function BanPill({
  label,
  bans,
  align,
}: {
  label: string;
  bans: (number | null)[];
  align: "left" | "right";
}) {
  return (
    <div
      className={`
        flex items-center gap-3 lg:gap-4
        px-4 sm:px-5 lg:px-7
        py-2.5 sm:py-3 lg:py-4
        rounded-full
        bg-black/70
        border border-white/15
        ${align === "right" ? "flex-row-reverse" : ""}
      `}
    >
      <span
        className="
          text-[11px] sm:text-[12px]
          lg:text-[13px] xl:text-[14px]
          uppercase tracking-widest
          text-slate-300
        "
      >
        {label}
      </span>

      <div className="flex gap-2 lg:gap-3">
        {Array(4)
          .fill(0)
          .map((_, i) => {
            const id = bans[i];
            const commander = commanders.find((c) => c.id === id);

            return (
              <div
                key={i}
                className="
                  relative
                  w-9 h-9
                  sm:w-10 sm:h-10
                  lg:w-12 lg:h-12
                  xl:w-14 xl:h-14
                  2xl:w-16 2xl:h-16
                  rounded-full
                  bg-slate-900
                  border border-white/20
                  overflow-hidden
                  flex items-center justify-center
                "
              >
                {commander ? (
                  <Image
                    src={commander.icon}
                    alt={commander.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-[12px] lg:text-[14px] text-slate-500">
                    —
                  </span>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
