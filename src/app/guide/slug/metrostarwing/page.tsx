import { useMemo } from "react";
import { guideData } from "./data";
import { synergies, Synergy } from "@/app/data/s3/sinergi";
import { Board } from "@/app/components/builder/Board";
import { ActiveSynergyList } from "@/app/components/builder/ActiveSynergyList";

export default function GuidePage() {
  const board = guideData.fixedBoard ?? Array(21).fill(null);

  const activeSynergies = useMemo(() => {
    const counts: Record<string, number> = {};
    const uniqueHeroes = new Set<number>();

    board.forEach((hero) => {
      if (!hero || uniqueHeroes.has(hero.id)) return;
      uniqueHeroes.add(hero.id);

      if (hero.synergies.faction)
        counts[hero.synergies.faction] =
          (counts[hero.synergies.faction] || 0) + 1;
      hero.synergies.roles.forEach(
        (role) => (counts[role] = (counts[role] || 0) + 1)
      );
    });

    return synergies
      .map((syn) => {
        const count = counts[syn.name] || 0;
        if (count === 0) return null;
        const sortedEffects = [...syn.effects].sort(
          (a, b) => a.units - b.units
        );
        const nextEffect =
          sortedEffects.find((e) => e.units > count) ??
          sortedEffects[sortedEffects.length - 1];
        return { ...syn, count, nextRequired: nextEffect.units };
      })
      .filter(Boolean) as (Synergy & { count: number; nextRequired: number })[];
  }, [board]);

  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gray-900/80">
      <div className="bg-black/60 p-8 rounded-lg shadow-lg w-full max-w-7xl">
        {/* Judul */}
        <h1 className="text-3xl font-extrabold text-yellow-300 mb-6">
          Beginner Guide: Metro Zero + 6 Starwing
        </h1>

        {/* Deskripsi */}
        <div className="bg-gray-800/70 p-4 rounded-md shadow-md mb-6">
          <p className="text-gray-200">
            This guide explains how to combine{" "}
            <span className="text-yellow-300 font-semibold">Metro Zero</span>{" "}
            with{" "}
            <span className="text-yellow-300 font-semibold">6 Starwing</span>.
            By leveraging{" "}
            <span className="text-yellow-300 font-semibold">Harley</span> as the
            main damage dealer and{" "}
            <span className="text-yellow-300 font-semibold">Saber</span> as
            crowd control, this setup grants +20% extra damage and +1200 HP for
            all Starwing heroes. The composition requires a{" "}
            <span className="text-yellow-300 font-semibold">
              Starwing blessing{" "}
            </span>
            to reach 6 Starwing from only 5 base heroes. Using Commander{" "}
            <span className="text-yellow-300 font-semibold">Fanny</span> is
            highly recommended for extra capacity at level 9, enabling 10
            synergies.
          </p>
        </div>

        {/* Board dan Active Synergies */}
        <div className="flex gap-6 w-full max-w-6xl mb-8">
          <Board board={board} />
          <ActiveSynergyList activeSynergies={activeSynergies} />
        </div>

        {/* Isi Guide */}
        <div className="space-y-6">
          <div className="bg-gray-800/70 p-4 rounded-md shadow-md">
            <p className="text-gray-200">
              In this composition,{" "}
              <span className="text-yellow-300 font-semibold">Metro Zero</span>{" "}
              provides scaling Hybrid ATK based on the number of different
              synergies activated. Reaching 8 and 10 synergies gives the team
              powerful damage reduction. This makes it an ideal core synergy to
              pair with the burst potential of Starwing.
            </p>

            <p className="text-gray-200">
              <span className="text-yellow-300 font-semibold">6 Starwing</span>{" "}
              is the highlight synergy, offering +20% extra damage and +1200 HP
              to Starwing heroes. With{" "}
              <span className="text-yellow-300 font-semibold">Harley</span>{" "}
              acting as the main DPS and{" "}
              <span className="text-yellow-300 font-semibold">Saber</span>{" "}
              providing reliable CC, this synergy ensures both offense and
              control across fights.
            </p>

            <p className="text-gray-200">
              Since there are only 5 natural Starwing heroes,{" "}
              <span className="text-yellow-300 font-semibold">a blessing</span>{" "}
              is mandatory to unlock the 6-Starwing bonus. Without it, the
              composition loses its core strength and is not recommended.
            </p>

            <p className="text-gray-200">
              To make this composition realistic,
              <span className="text-yellow-300 font-semibold">
                {" "}
                Commander Fanny
              </span>{" "}
              is the safest option. Her extra slot at level 9 allows you to
              comfortably field 10 heroes, enabling both Metro Zero and 6
              Starwing. While it is possible to run other commanders, you would
              need an{" "}
              <span className="text-yellow-300 font-semibold">
                extra capacity
              </span>{" "}
              from Gogo Auction or Gogo Box, which makes the build unreliable.
            </p>
          </div>

          <div className="bg-gray-800/70 p-4 rounded-md shadow-md">
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>
                Metro Zero: Hybrid ATK scaling + DMG Reduction (8–10 synergies)
              </li>
              <li>Starwing 6: +20% extra damage and +1200 HP</li>
              <li>Harley: Core damage dealer</li>
              <li>Saber: Crowd control specialist</li>
              <li>Commander Fanny: +1 capacity at level 9 for 10 heroes</li>
              <li>
                Blessing required to reach 6 Starwing (only 5 base heroes)
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/70 p-4 rounded-md shadow-md">
            <p className="text-gray-200">
              Recommended placement: keep Saber and frontline tanks at the
              front, Harley positioned safely in the backline to maximize his
              burst damage, and spread Starwing heroes to optimize
              survivability. Prioritize reaching 6 Starwing with blessing, then
              push for 8–10 synergies with Metro Zero.
            </p>

            <p className="text-gray-200">
              This setup is stronger in mid to late game, rewarding proper
              positioning and synergy management. Without blessing or capacity,
              the build becomes risky, so it is mainly recommended when the
              requirements are met.
            </p>
          </div>
        </div>

        {/* Credit (opsional, bisa diganti nanti) */}
        <div className="mt-8 text-sm text-gray-400">Credit:</div>
      </div>
    </div>
  );
}
