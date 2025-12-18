"use client";

import Image from "next/image";
import { commanders } from "../../../data/test/commanders";

interface ShadowPickCardProps {
  team: "HOME" | "AWAY";
  tempIds: number[];
}

export default function ShadowPickCard({ team, tempIds }: ShadowPickCardProps) {
  if (tempIds.length === 0) return null;

  const ring = team === "HOME" ? "ring-cyan-400/50" : "ring-rose-400/50";

  return (
    <div
      className="
        pointer-events-none
        absolute inset-0
        z-30
        flex items-center justify-center
      "
    >
      {/* CONTAINER */}
      <div
        className={`
          flex items-center justify-center
          gap-4 md:gap-6
        `}
      >
        {tempIds.map((id) => {
          const commander = commanders.find((c) => c.id === id);
          if (!commander) return null;

          return (
            <div
              key={id}
              className={`
                relative
                w-[150px]           /* 📱 mobile */
                sm:w-[180px]
                md:w-[220px]
                lg:w-[260px]        /* 💻 desktop */
                aspect-[3/4]
                rounded-2xl
                overflow-hidden
                bg-black/70
                border border-white/15
                ring-2 ${ring}
                backdrop-blur-sm
              `}
            >
              {/* IMAGE */}
              <Image
                src={commander.image || commander.icon}
                alt={commander.name}
                fill
                sizes="260px"
                className="object-Fill"
                priority
              />

              {/* SOFT GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* NAME */}
              <div className="absolute bottom-2 inset-x-0 text-center">
                <span className="text-[12px] sm:text-[13px] text-slate-200 tracking-wide">
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
