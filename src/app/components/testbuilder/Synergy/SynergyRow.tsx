import Image from "next/image";
import { ActiveSynergy } from "../logic/synergyCalculator";
import clsx from "clsx";

export default function SynergyRow({
  data,
  hasBlessing,
  onToggleBlessing,
}: {
  data: ActiveSynergy;
  hasBlessing: boolean;
  onToggleBlessing: () => void;
}) {
  const { synergy, count, activeEffect, isDisabled, activeSynergyCount } = data;

  const firstEffect = synergy.effects
    .slice()
    .sort((a, b) => a.units - b.units)[0];

  const next = synergy.effects.find((e) => e.units > count);

  const isActive = !!activeEffect && !isDisabled;
  const isPartial =
    !isDisabled && !activeEffect && count < (firstEffect?.units ?? Infinity);

  return (
    <div className="flex items-center gap-3 text-sm">
      {/* === SYNERGY CORE (IKUT STATE) === */}
      <div
        className={clsx(
          "flex items-center gap-3 flex-1 transition",
          (isPartial || isDisabled) && "opacity-40"
        )}
      >
        <Image
          src={synergy.icon}
          alt={synergy.name}
          width={28}
          height={28}
          unoptimized
        />

        <span>{synergy.name}</span>

        {/* 🔮 Mystic Meow extra info */}
        {synergy.slug === "mystic-meow" && activeSynergyCount !== undefined && (
          <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
            {activeSynergyCount} Synergy
          </span>
        )}
      </div>

      {/* === COUNT (IKUT STATE) === */}
      <span
        className={clsx(
          "w-[40px] text-right transition",
          isActive ? "text-green-400 font-semibold" : "text-neutral-500",
          (isPartial || isDisabled) && "opacity-40"
        )}
      >
        {count}
        {next ? `/${next.units}` : ""}
      </span>

      {/* === BLESSING (TERPISAH TOTAL) === */}
      <button
        onClick={onToggleBlessing}
        className={clsx(
          "w-6 h-6 rounded flex items-center justify-center shrink-0",
          hasBlessing
            ? "bg-yellow-500/20 ring-1 ring-yellow-400"
            : "bg-neutral-700/40 hover:bg-neutral-600/50"
        )}
        title="Blessing (+1 Synergy)"
      >
        <Image
          src="/images/synergy/9000.png"
          alt="Blessing"
          width={16}
          height={16}
          unoptimized
        />
      </button>
    </div>
  );
}
