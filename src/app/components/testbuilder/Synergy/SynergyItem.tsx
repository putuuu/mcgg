import Image from "next/image";
import { ActiveSynergy } from "../logic/synergyCalculator";

type Props = {
  data: ActiveSynergy;
};

export default function SynergyItem({ data }: Props) {
  const { synergy, count, activeEffect } = data;

  const maxRequirement =
    synergy.effects[synergy.effects.length - 1]?.units ?? 0;

  const isActive = !!activeEffect;

  return (
    <div
      className={`rounded border p-2 transition
        ${
          isActive
            ? "border-blue-500 bg-blue-500/10"
            : "border-neutral-700 bg-neutral-800/50"
        }`}
    >
      <div className="flex items-center gap-2">
        import Image from "next/image";
        <Image
          src={synergy.icon}
          alt={synergy.name}
          width={32}
          height={32}
          unoptimized
          className={isActive ? "" : "opacity-40"}
        />
        <div className="flex-1">
          <p
            className={`text-sm font-medium ${
              isActive ? "" : "text-neutral-400"
            }`}
          >
            {synergy.name}
          </p>

          <p className="text-xs text-neutral-400">
            {count} / {maxRequirement}
          </p>
        </div>
      </div>

      {/* EFFECT */}
      <div className="mt-2 text-xs">
        {activeEffect ? (
          <p className="text-neutral-200">{activeEffect.effect}</p>
        ) : (
          <p className="text-neutral-500 italic">Inactive</p>
        )}
      </div>

      {/* TIERS */}
      <div className="flex gap-1 mt-2">
        {synergy.effects.map((effect) => {
          const active = count >= effect.units;

          return (
            <div
              key={effect.units}
              className={`text-[10px] px-1.5 py-0.5 rounded border
                ${
                  active
                    ? "border-blue-400 bg-blue-500/20"
                    : "border-neutral-600 text-neutral-500"
                }`}
            >
              {effect.units}
            </div>
          );
        })}
      </div>
    </div>
  );
}
