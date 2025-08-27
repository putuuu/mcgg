"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { Synergy } from "../../data/sinergi";
import Image from "next/image";

interface Props {
  synergy: Synergy;
  onClose: () => void;
}

const SynergyCardModal: React.FC<Props> = ({ synergy, onClose }) => {
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-[999] p-4">
      <div
        ref={modalRef}
        className="bg-black/80 text-white rounded-xl max-w-[720px] w-full p-6 relative shadow-2xl flex flex-col gap-4 backdrop-blur-lg sm:p-5 sm:gap-3"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        >
          ×
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 flex-wrap sm:flex-col sm:items-start sm:gap-2">
          <Image
            src={synergy.icon}
            alt={synergy.name}
            title={synergy.name}
            width={48}
            height={48}
            className="rounded-lg w-12 h-12 sm:w-10 sm:h-10"
          />
          <h2 className="text-xl font-bold sm:text-lg">{synergy.name}</h2>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300">{synergy.description}</p>

        {/* Effects */}
        <div className="text-sm">
          <h3 className="text-base mb-2 text-yellow-400 font-semibold">
            Effects
          </h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            {synergy.effects.map((effect, index) => (
              <li key={index}>
                <strong>{effect.units} units:</strong> {effect.effect}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SynergyCardModal;
