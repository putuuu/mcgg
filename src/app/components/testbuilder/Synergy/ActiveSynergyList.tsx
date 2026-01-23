import { ActiveSynergy } from "../logic/synergyCalculator";
import SynergyRow from "./SynergyRow";
import EquipmentPool from "../Equipment/EquipmentPool";

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
    <div className="panel h-full p-4 grid grid-rows-[40%_60%] gap-3 min-h-0">
      {/* ================= SYNERGY (40%) ================= */}
      <div className="flex flex-col min-h-0">
        <h3 className="text-sm font-semibold mb-2 text-yellow-400 shrink-0">
          Active Synergies
        </h3>

        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
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

      {/* ================= EQUIPMENT (60%) ================= */}
      <div className="flex flex-col min-h-0">
        <EquipmentPool />
      </div>
    </div>
  );
}
