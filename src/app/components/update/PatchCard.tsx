import React from "react";
import { PatchUpdate } from "../../data/patches";
import { heroes } from "../../data/s3/hero";
import { synergies } from "../../data/s3/sinergi";
import { commanders } from "../../data/commanders";
import Image from "next/image";

const getImage = (type: string, name: string) => {
  if (type === "hero")
    return (
      heroes.find((h) => h.name === name)?.image || "/images/placeholder.png"
    );
  if (type === "synergy")
    return (
      synergies.find((s) => s.name === name)?.icon || "/images/placeholder.png"
    );
  if (type === "commander")
    return (
      commanders.find((c) => c.name === name)?.image ||
      "/images/placeholder.png"
    );
  return "/images/placeholder.png";
};

type Props = {
  update: PatchUpdate & { patch: string };
};

export const PatchCard: React.FC<Props> = ({ update }) => {
  const imgSrc = getImage(update.type, update.name);

  return (
    <div className="w-[800px] mx-auto p-4 mb-5 border rounded-md bg-gray-700/80 shadow-md">
      <div className="flex items-start gap-4">
        <div className="w-[60px] h-[60px] flex-shrink-0 relative">
          <Image
            src={imgSrc}
            alt={update.name}
            fill
            className="rounded-md object-cover object-top"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <div className="text-base font-semibold text-white">
              {update.name} ({update.type})
            </div>
            <div
              className={`text-xs px-2 py-0.5 rounded ${
                update.change === "buff"
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {update.change.toUpperCase()}
            </div>
          </div>
          <ul className="list-disc ml-5 mt-1 text-sm text-gray-200 space-y-1">
            {update.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
