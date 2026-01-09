import Image from "next/image";
import { Synergy } from "../data/s5/sinergi";

export default function SynergyTierCard({ synergy }: { synergy: Synergy }) {
  return (
    <div className="relative w-12 h-12 rounded-md border border-white/20 bg-black/40">
      <Image
        src={synergy.icon}
        alt={synergy.name}
        fill
        className="object-contain p-1"
      />
    </div>
  );
}
