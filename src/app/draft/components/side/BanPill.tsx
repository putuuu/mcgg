"use client";

interface BanPillProps {
  team: "HOME" | "AWAY";
  label: string;
  ids: (number | null)[];
  reverse?: boolean;
}

export default function BanPill({
  team,
  label,
  ids,
  reverse = false,
}: BanPillProps) {
  const color = team === "HOME" ? "text-cyan-300" : "text-rose-300";

  return (
    <div
      className={`
        flex items-center
        gap-1 sm:gap-1.5 lg:gap-3
        px-2 sm:px-3 lg:px-5
        py-1 sm:py-1.5 lg:py-3
        rounded-full
        bg-black/60
        border border-white/10
        min-w-[120px] sm:min-w-[150px] lg:min-w-[220px]
        transition
        ${reverse ? "flex-row-reverse" : ""}
      `}
    >
      {/* LABEL */}
      <span
        className={`
          text-[8px]
          sm:text-[9px]
          lg:text-[11px]
          uppercase
          tracking-[0.25em]
          ${color}
        `}
      >
        {label}
      </span>

      {/* BAN SLOTS */}
      <div className="flex gap-1 sm:gap-1.5 lg:gap-2.5">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="
                w-5 h-5                 /* 📱 mobile */
                sm:w-6 sm:h-6
                md:w-7 md:h-7
                lg:w-10 lg:h-10         /* 💻 desktop */
                xl:w-11 xl:h-11
                2xl:w-12 2xl:h-12
                rounded-full
                bg-slate-900/80
                border border-white/15
                flex items-center justify-center
                text-[8px] sm:text-[9px] lg:text-[11px]
                text-slate-500
              "
            >
              {ids[i] ? "×" : "—"}
            </div>
          ))}
      </div>
    </div>
  );
}
