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
        gap-2
        w-14                /* 📱 mobile */
        sm:w-16
        md:w-20
        lg:w-24
        xl:w-28             /* 💻 desktop */
        rounded-3xl
        bg-black/50
        border border-white/10
        py-3
        md:py-4
        transition
        ${active ? `ring-2 ${ringColor}` : ""}
      `}
    >
      {/* LABEL */}
      <span
        className="
          text-[9px]
          sm:text-[10px]
          md:text-[11px]
          text-slate-400
          uppercase
          tracking-widest
        "
      >
        {label}
      </span>

      {/* PICKS */}
      <div className="flex flex-col gap-2 md:gap-3">
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
                  w-10 h-10           /* 📱 mobile */
                  sm:w-12 sm:h-12
                  md:w-14 md:h-14
                  lg:w-16 lg:h-16
                  xl:w-[72px] xl:h-[72px]  /* 💻 desktop */
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
                    sizes="72px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-xs md:text-sm text-slate-600">?</span>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
