"use client";

interface Props {
  started: boolean;
  phase: string;
  team: "HOME" | "AWAY";
  count: number;
  homeLabel: string;
  awayLabel: string;
  canStart?: boolean;
}

export default function CenterStatusPanel({
  started,
  phase,
  team,
  count,
  homeLabel,
  awayLabel,
  canStart,
}: Props) {
  if (!started) {
    return (
      <div className="text-center text-sm text-slate-300">
        {canStart
          ? "Host can start the draft"
          : "Waiting for both teams to join"}
      </div>
    );
  }

  const teamName = team === "HOME" ? homeLabel : awayLabel;
  const color = team === "HOME" ? "text-cyan-400" : "text-rose-400";

  return (
    <div className="text-center">
      <div className="text-xs uppercase tracking-widest text-slate-400">
        {phase}
      </div>
      <div className={`mt-1 text-lg font-bold ${color}`}>{teamName} TURN</div>
      <div className="mt-1 text-xs text-slate-400">Select {count}</div>
    </div>
  );
}
