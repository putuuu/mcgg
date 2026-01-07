import { ActiveSynergy } from "../logic/synergyCalculator";
import SynergyRow from "./SynergyRow";

export default function ActiveSynergyList({
  synergies,
}: {
  synergies: ActiveSynergy[];
}) {
  // const list = synergies.filter((s) => s.count > 0);

  return (
    <div className="panel p-5">
      <h3 className="text-sm font-semibold mb-4 text-yellow-400">
        Active Synergies
      </h3>

      <div className="max-h-[300px] overflow-y-auto space-y-3">
        {synergies
          .filter((s) => s.count > 0)
          .map((s) => (
            <SynergyRow key={s.synergy.id} data={s} />
          ))}
      </div>
    </div>
  );
}
