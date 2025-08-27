import { guideData } from "./data";
import { Board } from "../../../components/builder/Board";
import { ActiveSynergyList } from "../../../components/builder/ActiveSynergyList";
import { synergies, Synergy } from "../../../data/s3/sinergi";
import { useMemo } from "react";
import Image from "next/image";

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
          Beginner Guide: Metro Zero + Stargazer 4
        </h1>

        {/* Deskripsi */}
        <div className="bg-gray-800/70 p-4 rounded-md shadow-md mb-6">
          <p className="text-gray-200">
            This guide explains how to use{" "}
            <span className="text-yellow-300 font-semibold">Metro Zero</span>{" "}
            synergy combined with{" "}
            <span className="text-yellow-300 font-semibold">Stargazer 4</span>,
            using <span className="text-yellow-300 font-semibold">Ruby</span> as
            a defensive anchor. Level 9 with Commander{" "}
            <span className="text-yellow-300 font-semibold">Fanny</span> can
            reach 10 synergies.
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
              is the core synergy. All allied heroes gain Hybrid ATK based on
              the number of activated Synergy types. Upon activating 8
              Synergies, all allies gain Damage Reduction, which increases
              further at 10 Synergies.
            </p>

            <p className="text-gray-200">
              <span className="text-yellow-300 font-semibold">Stargazer 4</span>{" "}
              is added to provide continuous mana recovery for all allies, with
              Stargazer heroes recovering extra mana per second. This
              combination ensures both sustainability and damage output
              throughout the match.
            </p>

            <p className="text-gray-200">
              <span className="text-yellow-300 font-semibold">Ruby</span> serves
              as the primary anchor, protecting your board from early aggression
              and remaining a tank into the late game. Its presence allows your
              carries to freely deal damage without being threatened.
            </p>

            <p className="text-gray-200">
              Using Commander{" "}
              <span className="text-yellow-300 font-semibold">Fanny</span> at
              level 9 grants an additional capacity, allowing the board to hold
              more heroes and reach a maximum of 10 synergies. This makes it
              possible to maximize both Metro Zero and Stargazer effects
              simultaneously.
            </p>
          </div>

          <div className="bg-gray-800/70 p-4 rounded-md shadow-md">
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>Metro Zero: Hybrid ATK & DMG Reduction (8–10 synergies)</li>
              <li>
                Stargazer 4: Mana regen for all allies, extra for Stargazers
              </li>
              <li>Ruby, Yu Zhong and X.Borg: Defensive anchor</li>
              <li>Commander Fanny: +1 capacity, enabling 10 synergies</li>
            </ul>
          </div>

          <div className="bg-gray-800/70 p-4 rounded-md shadow-md">
            <p className="text-gray-200">
              Recommended hero placement: keep Ruby, Yu Zhong (Exorcist), and
              X.Borg in the front line, spread carries behind, and ensure
              Stargazers are positioned to maximize mana regen. Prioritize
              activating Metro Zero first for hybrid damage bonus.
            </p>

            <p className="text-gray-200">
              This setup is realistic and ideal for beginners aiming for a
              balanced approach, combining defense, sustain, and offensive power
              for both early and late game.
            </p>
          </div>
        </div>
        {/* Credit */}
        <div className="mt-8 text-sm text-gray-400">
          Credit: Video by{" "}
          <a
            href="https://youtu.be/TL943jqEVR4?si=NazPUPVScZ_dDZx2&t=132"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            KBGGWP
          </a>
        </div>
      </div>
    </div>
  );
}
