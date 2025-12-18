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
        flex items-center gap-2
        px-2 sm:px-3
        py-1.5 sm:py-2
        rounded-full
        bg-black/60
        border border-white/10
        min-w-[130px] sm:min-w-[150px] md:min-w-[180px]
        transition
        ${reverse ? "flex-row-reverse" : ""}
      `}
    >
      {/* LABEL */}
      <span
        className={`
          text-[9px]
          sm:text-[10px]
          md:text-[11px]
          uppercase
          tracking-[0.25em]
          ${color}
        `}
      >
        {label}
      </span>

      {/* BAN SLOTS */}
      <div className="flex gap-1 sm:gap-1.5">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="
                w-6 h-6                 /* 📱 mobile */
                sm:w-7 sm:h-7
                md:w-8 md:h-8
                lg:w-9 lg:h-9           /* 💻 desktop */
                rounded-full
                bg-slate-900/80
                border border-white/15
                flex items-center justify-center
                text-[9px] md:text-[10px]
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
