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
        px-2 sm:px-3 md:px-4
        py-2 sm:py-3
      "
    >
      {/* HOME BAN */}
      <BanPill label={homeLabel} bans={homeBans} align="left" />

      {/* CENTER */}
      <div
        className="
          flex flex-col items-center
          gap-0.5 sm:gap-1
          px-3 sm:px-4 md:px-6
          py-2 sm:py-2.5
          rounded-full
          bg-black/60
          border border-white/10
        "
      >
        <span
          className="
            text-[9px]
            sm:text-[10px]
            md:text-[11px]
            uppercase tracking-widest
            text-slate-400
          "
        >
          {phase}
        </span>

        <span
          className="
            text-xl
            sm:text-2xl
            md:text-3xl
            font-bold
            text-slate-100
            leading-none
          "
        >
          {timer > 0 ? timer : "—"}
        </span>

        <span
          className="
            text-[9px]
            sm:text-[10px]
            md:text-[11px]
            text-slate-500
          "
        >
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
        flex items-center gap-2
        px-2 sm:px-3
        py-1.5 sm:py-2
        rounded-full
        bg-black/60
        border border-white/10
        ${align === "right" ? "flex-row-reverse" : ""}
      `}
    >
      <span
        className="
          text-[9px]
          sm:text-[10px]
          md:text-[11px]
          uppercase tracking-widest
          text-slate-400
        "
      >
        {label}
      </span>

      <div className="flex gap-1 sm:gap-1.5">
        {Array(3)
          .fill(0)
          .map((_, i) => {
            const id = bans[i];
            const commander = commanders.find((c) => c.id === id);

            return (
              <div
                key={i}
                className="
                  relative
                  w-7 h-7
                  sm:w-8 sm:h-8
                  md:w-9 md:h-9
                  lg:w-10 lg:h-10
                  rounded-full
                  bg-slate-900
                  border border-white/15
                  overflow-hidden
                  flex items-center justify-center
                "
              >
                {commander ? (
                  <Image
                    src={commander.icon}
                    alt={commander.name}
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-[10px] md:text-[11px] text-slate-600">
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
