import Image from "next/image";
import { ActiveSynergy } from "../logic/synergyCalculator";

export default function SynergyRow({ data }: { data: ActiveSynergy }) {
  const next = data.synergy.effects.find((e) => e.units > data.count);

  return (
    <div className="flex items-center gap-3 text-sm">
      <Image
        src={data.synergy.icon}
        alt={data.synergy.name}
        width={28}
        height={28}
        unoptimized
      />

      <span className="flex-1">{data.synergy.name}</span>

      <span
        className={
          data.activeEffect
            ? "text-green-400 font-semibold"
            : "text-neutral-500"
        }
      >
        {data.count}
        {next ? `/${next.units}` : ""}
      </span>
    </div>
  );
}
