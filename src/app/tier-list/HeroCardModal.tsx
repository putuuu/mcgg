"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { Hero } from "../data/s5/hero";
import Image from "next/image";
import ModalPortal from "./ModalPortal";

interface Props {
  hero: Hero;
  onClose: () => void;
}

const costColorMap: Record<number, string> = {
  1: "text-white",
  2: "text-green-400",
  3: "text-blue-400",
  4: "text-purple-400",
  5: "text-yellow-400",
};

const costBorderMap: Record<number, string> = {
  1: "border-white",
  2: "border-green-500",
  3: "border-blue-500",
  4: "border-purple-500",
  5: "border-yellow-400",
};

const HeroCardModal: React.FC<Props> = ({ hero, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm">
        <div
          ref={modalRef}
          className="
      fixed
      top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2

      bg-black/80 text-white rounded-xl
      max-w-[640px] w-[calc(100%-2rem)]
      p-5 md:p-6
      shadow-2xl backdrop-blur-md
      flex gap-6
      max-sm:flex-col max-sm:items-center
    "
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white/70 text-xl hover:text-white"
          >
            ×
          </button>

          {/* LEFT – HERO IMAGE */}
          <div className="flex-shrink-0">
            <div
              className={`rounded-lg overflow-hidden border-2
                        ${costBorderMap[hero.cost]}
                        bg-black/40`}
            >
              <Image
                src={hero.image}
                alt={hero.name}
                width={180}
                height={260}
                className="w-[180px] h-[260px] object-cover
                         max-sm:w-[96px] max-sm:h-[96px]
                         max-sm:object-top"
              />
            </div>
          </div>

          {/* RIGHT – INFO */}
          <div className="flex flex-col gap-4 flex-1 max-sm:w-full max-sm:items-center max-sm:text-center">
            {/* NAME & COST */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold leading-tight">
                {hero.name}
              </h2>
              <div
                className={`text-sm font-medium mt-1 ${
                  costColorMap[hero.cost]
                }`}
              >
                Cost {hero.cost}
              </div>
            </div>

            {/* SYNERGIES */}
            <div className="text-sm text-gray-300">
              <span className="opacity-70">Synergies:</span>{" "}
              {hero.synergies.faction} • {hero.synergies.roles.join(", ")}
            </div>

            {/* SKILL */}
            <div className="pt-2 w-full">
              <h3 className="text-sm uppercase tracking-wide text-yellow-400 mb-2">
                Skill
              </h3>

              <div className="flex items-start gap-3 max-sm:flex-col max-sm:items-center">
                <div className="max-sm:text-left">
                  <p className="font-medium">{hero.skill.name}</p>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {hero.skill.description}
                  </p>
                </div>
              </div>
            </div>

            {/* ATTRIBUTES */}
            {hero.attributes && (
              <div className="pt-2 w-full">
                <h3 className="text-sm uppercase tracking-wide text-yellow-400 mb-2">
                  Attributes
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-300">
                  {"hp" in hero.attributes && (
                    <div>HP: {hero.attributes.hp.join(" / ")}</div>
                  )}
                  {"physicalAtk" in hero.attributes && (
                    <div>ATK: {hero.attributes.physicalAtk.join(" / ")}</div>
                  )}
                  {"atkSpeed" in hero.attributes && (
                    <div>ATK SPD: {hero.attributes.atkSpeed.join(" / ")}</div>
                  )}
                  {"manaCap" in hero.attributes && (
                    <div>Mana: {hero.attributes.manaCap.join(" / ")}</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default HeroCardModal;
