import { ActiveFilters } from "./BuilderClient";
import { ROLES, FACTIONS } from "../../data/s5/sinergi";

type Props = {
  activeFilters: ActiveFilters;
  onChange: (filters: ActiveFilters) => void;
};

export default function FilterPanel({ activeFilters, onChange }: Props) {
  const toggleFilter = (type: "roles" | "factions", value: string) => {
    const current = activeFilters[type];
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    onChange({
      ...activeFilters,
      [type]: next,
    });
  };

  const clearAll = () => {
    onChange({ roles: [], factions: [] });
  };

  return (
    <div className="w-64 bg-neutral-900 rounded-lg p-3 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-sm">Filters</h3>
        <button
          onClick={clearAll}
          className="text-xs text-neutral-400 hover:text-white"
        >
          Reset
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {/* FACTIONS */}
        <FilterSection
          title="Factions"
          items={FACTIONS}
          active={activeFilters.factions}
          onClick={(v) => toggleFilter("factions", v)}
        />{" "}
        {/* ROLES */}
        <FilterSection
          title="Roles"
          items={ROLES}
          active={activeFilters.roles}
          onClick={(v) => toggleFilter("roles", v)}
        />
      </div>
    </div>
  );
}

type SectionProps = {
  title: string;
  items: string[];
  active: string[];
  onClick: (value: string) => void;
};

function FilterSection({ title, items, active, onClick }: SectionProps) {
  return (
    <div>
      <p className="text-xs text-neutral-400 mb-2">{title}</p>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => {
          const isActive = active.includes(item);

          return (
            <button
              key={item}
              onClick={() => onClick(item)}
              className={`text-xs px-2 py-1 rounded border transition
                ${
                  isActive
                    ? "bg-blue-600 border-blue-500"
                    : "bg-neutral-800 border-neutral-700 hover:bg-neutral-700"
                }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
