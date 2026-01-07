import Image from "next/image";
import { Synergy } from "../../../data/s5/sinergi";
import { ActiveHeroFilter } from "./heroFilter";

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
      {["Role", "Faction"].map((type) => (
        <div key={type} className="mb-5">
          <p className="text-xs text-neutral-400 mb-2">{type}s</p>

          <div className="grid grid-cols-4 gap-4">
            {synergies
              .filter((s) => s.type === type)
              .map((s) => {
                const list = type === "Role" ? active.factions : active.roles;

                return (
                  <button
                    key={s.id}
                    onClick={() =>
                      toggle(type === "Faction" ? "factions" : "roles", s.name)
                    }
                    className={`
                      w-[56px] h-[56px]
                      rounded-xl
                      flex items-center justify-center
                      ${
                        list.includes(s.name)
                          ? "ring-2 ring-blue-400 bg-blue-500/10"
                          : "bg-neutral-800"
                      }
                    `}
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
      ))}
    </div>
  );
}
