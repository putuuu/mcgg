"use client";

import Image from "next/image";
import { commanders } from "../../../data/test/commanders";

interface PickColumnProps {
  team: "HOME" | "AWAY";
  label: string;
  picks: (number | null)[];
  active?: boolean;
}

export default function PickColumn({
  team,
  label,
  picks,
  active = false,
}: PickColumnProps) {
  const ringColor = team === "HOME" ? "ring-cyan-400/60" : "ring-rose-400/60";

  return (
    <div
      className={`
        flex flex-col items-center
        gap-2 sm:gap-2.5 lg:gap-3
        w-14                    /* 📱 mobile (naik sedikit) */
        sm:w-16
        md:w-20
        lg:w-26
        xl:w-30                 /* 💻 desktop (naik dikit) */
        rounded-3xl
        bg-black/50
        border border-white/10
        py-2.5 sm:py-3 lg:py-4
        transition
        ${active ? `ring-2 ${ringColor}` : ""}
      `}
    >
      {/* LABEL */}
      <span
        className="
          text-[9px]
          sm:text-[10px]
          lg:text-[11px]
          text-slate-400
          uppercase
          tracking-widest
        "
      >
        {label}
      </span>

      {/* PICKS */}
      <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-3.5">
        {Array(4)
          .fill(0)
          .map((_, i) => {
            const id = picks[i];
            const commander = commanders.find((c) => c.id === id);

            return (
              <div
                key={i}
                className="
                  relative
                  w-11 h-11              /* 📱 mobile (naik dikit) */
                  sm:w-13 sm:h-13
                  md:w-15 md:h-15
                  lg:w-18 lg:h-18
                  xl:w-[76px] xl:h-[76px] /* 💻 desktop */
                  2xl:w-[84px] 2xl:h-[84px]
                  rounded-full
                  bg-slate-900
                  border border-white/15
                  overflow-hidden
                  flex items-center justify-center
                "
              >
                {commander ? (
                  <Image
                    src={commander.image || commander.icon}
                    alt={commander.name}
                    fill
                    sizes="84px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-[10px] sm:text-[11px] lg:text-sm text-slate-600">
                    ?
                  </span>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
