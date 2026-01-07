import Image from "next/image";
import { Synergy } from "../../../data/s5/sinergi";
import { ActiveHeroFilter } from "./heroFilter";
import clsx from "clsx";

export default function HeroFilter({
  synergies,
  active,
  onChange,
}: {
  synergies: Synergy[];
  active: ActiveHeroFilter;
  onChange: (f: ActiveHeroFilter) => void;
}) {
  const toggle = (type: "factions" | "roles", name: string) => {
    const list = active[type];
    onChange({
      ...active,
      [type]: list.includes(name)
        ? list.filter((v) => v !== name)
        : [...list, name],
    });
  };

  return (
    <div className="panel p-3">
      {/* === FACTIONS (DITARUH DI ATAS) === */}
      <div className="mb-6">
        <p className="text-xs text-neutral-400 mb-2">Factions</p>

        <div className="grid grid-cols-5 gap-3">
          {synergies
            .filter((s) => s.type === "Faction")
            .map((s) => {
              const isActive = active.factions.includes(s.name);

              return (
                <button
                  key={s.id}
                  onClick={() => toggle("factions", s.name)}
                  className={clsx(
                    `
                      w-[56px] h-[56px]
                      rounded-xl
                      flex items-center justify-center
                      transition
                    `,
                    isActive
                      ? "ring-2 ring-blue-400 bg-blue-500/10"
                      : "bg-neutral-800 hover:bg-neutral-700"
                  )}
                  title={s.name}
                >
                  <Image
                    src={s.icon}
                    alt={s.name}
                    width={32}
                    height={32}
                    unoptimized
                  />
                </button>
              );
            })}
        </div>
      </div>

      {/* === ROLES (DITARUH DI BAWAH) === */}
      <div>
        <p className="text-xs text-neutral-400 mb-2">Roles</p>

        <div className="grid grid-cols-5 gap-3">
          {synergies
            .filter((s) => s.type === "Role")
            .map((s) => {
              const isActive = active.roles.includes(s.name);

              return (
                <button
                  key={s.id}
                  onClick={() => toggle("roles", s.name)}
                  className={clsx(
                    `
                      w-[56px] h-[56px]
                      rounded-xl
                      flex items-center justify-center
                      transition
                    `,
                    isActive
                      ? "ring-2 ring-blue-400 bg-blue-500/10"
                      : "bg-neutral-800 hover:bg-neutral-700"
                  )}
                  title={s.name}
                >
                  <Image
                    src={s.icon}
                    alt={s.name}
                    width={32}
                    height={32}
                    unoptimized
                  />
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}
