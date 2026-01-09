"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Synergy } from "../data/s5/sinergi";
import { Hero } from "../data/s5/hero";
import ModalPortal from "./ModalPortal";

interface Props {
  synergy: Synergy;
  heroes: Hero[];
  heroTiers: { heroName: string; tier: string }[];
  onClose: () => void;
}

const tierPriority: Record<string, number> = {
  S: 0,
  A: 1,
  B: 2,
  C: 3,
  F: 4,
};

const SynergyModal: React.FC<Props> = ({
  synergy,
  heroes,
  heroTiers,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  /* ================= CLICK OUTSIDE ================= */
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  /* ================= CORE HERO LOGIC ================= */
  const coreHeroes = heroes
    .filter((h) =>
      synergy.type === "Faction"
        ? h.synergies.faction.includes(synergy.name)
        : h.synergies.roles.includes(synergy.name)
    )
    .map((hero) => ({
      hero,
      tier: heroTiers.find((t) => t.heroName === hero.name)?.tier ?? "F",
    }))
    .sort((a, b) => tierPriority[a.tier] - tierPriority[b.tier])
    .slice(0, 3);

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div
          ref={modalRef}
          className="
          relative bg-black/80 text-white rounded-xl
          max-w-[560px] w-full
          p-5 md:p-6
          shadow-2xl backdrop-blur-md
          flex flex-col gap-4
        "
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white/70 text-xl hover:text-white"
          >
            ×
          </button>

          {/* HEADER */}
          <div className="flex items-center gap-3">
            <Image
              src={synergy.icon}
              alt={synergy.name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-md"
            />

            <div className="flex flex-col">
              <h2 className="text-lg md:text-xl font-bold leading-tight">
                {synergy.name}
              </h2>
              <span className="text-[11px] uppercase tracking-wide text-gray-400">
                {synergy.type}
              </span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-300 leading-relaxed">
            {synergy.description}
          </p>

          {/* EFFECTS */}
          <div>
            <h3 className="text-sm uppercase tracking-wide text-yellow-400 mb-2">
              Effects
            </h3>

            <div className="flex flex-col gap-2">
              {synergy.effects.map((effect, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/5 rounded-md px-3 py-2"
                >
                  {/* UNITS BADGE */}
                  <div
                    className="
                    flex-shrink-0 w-9 h-9 rounded-md
                    bg-black/50 border border-white/10
                    flex items-center justify-center
                    text-sm font-bold text-yellow-400
                  "
                  >
                    {effect.units}
                  </div>

                  {/* EFFECT TEXT */}
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {effect.effect}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CORE HERO */}
          {coreHeroes.length > 0 && (
            <div>
              <h3 className="text-sm uppercase tracking-wide text-blue-400 mb-2">
                Core Heroes
              </h3>

              <div className="flex gap-3">
                {coreHeroes.map(({ hero }) => (
                  <div
                    key={hero.name}
                    className="relative w-12 h-12 rounded-md overflow-hidden border border-white/10"
                  >
                    <Image
                      src={hero.image}
                      alt={hero.name}
                      fill
                      sizes="48px"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </ModalPortal>
  );
};

export default SynergyModal;
