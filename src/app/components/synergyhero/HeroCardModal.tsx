"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { Hero } from "../../data/s3/hero";
import Image from "next/image";

interface Props {
  hero: Hero;
  onClose: () => void;
}

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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[1000] p-4">
      <div
        ref={modalRef}
        className="relative bg-black/75 text-white rounded-xl max-w-[720px] w-full p-6 flex gap-8 shadow-2xl backdrop-blur-md 
        max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:gap-4"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
          onClick={onClose}
        >
          ×
        </button>

        {/* Left: Hero Image */}
        <div className="flex-shrink-0">
          <Image
            src={hero.image}
            alt={hero.name}
            width={220}
            height={330}
            className="rounded-md object-cover w-[220px] h-[330px] max-sm:w-[72px] max-sm:h-[72px] max-sm:object-top"
          />
        </div>

        {/* Right: Info */}
        <div className="flex flex-col gap-4 flex-1 max-sm:w-full">
          <h2 className="text-2xl font-bold mb-1 max-sm:text-xl">
            {hero.name}
          </h2>

          {/* Stats */}
          <div className="text-sm text-gray-300 max-sm:text-center">
            <p>
              <strong>Cost :</strong> {hero.cost}🟡
            </p>
          </div>

          {/* Skill */}
          <div>
            <h3 className="text-lg mb-2 text-yellow-400">Skill</h3>
            <div className="flex items-start gap-4 max-sm:flex-col max-sm:items-center">
              <Image
                src={hero.skill.icon}
                alt={hero.skill.name}
                title={hero.skill.name}
                width={64}
                height={64}
                className="rounded-md w-12 h-12"
              />
              <div>
                <strong>{hero.skill.name}</strong>
                <p className="text-sm text-gray-200 leading-relaxed max-sm:text-left">
                  {hero.skill.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardModal;
