import { ActiveSynergy } from "../logic/synergyCalculator";
import SynergyRow from "./SynergyRow";

export default function ActiveSynergyList({
  synergies,
  blessing,
  onToggleBlessing,
}: {
  synergies: ActiveSynergy[];
  blessing: string | null;
  onToggleBlessing: (slug: string) => void;
}) {
  return (
    <div className="panel p-5">
      <h3 className="text-sm font-semibold mb-4 text-yellow-400">
        Active Synergies
      </h3>

      <div className="max-h-[300px] overflow-y-auto space-y-3">
        {synergies.map((s) => (
          <SynergyRow
            key={s.synergy.id}
            data={s}
            hasBlessing={blessing === s.synergy.slug}
            onToggleBlessing={() => onToggleBlessing(s.synergy.slug)}
          />
        ))}
      </div>
    </div>
  );
}
