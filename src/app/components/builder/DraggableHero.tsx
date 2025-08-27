"use client";
import React from "react";
import {
  useDraggable,
  DraggableAttributes,
  DraggableSyntheticListeners,
} from "@dnd-kit/core";
import Image from "next/image";
import { Hero } from "../../data/s3/hero";

// interface DraggableChildrenProps {
//   attributes: DraggableAttributes;
//   listeners: DraggableSyntheticListeners;
//   setNodeRef: (node: HTMLElement | null) => void;
//   transform: { x: number; y: number } | null;
//   isDragging: boolean;
// }

interface DraggableHeroProps {
  id: string;
  hero: Hero;
  source: "pool" | "board";
  index?: number;
}

export function DraggableHero({ id, hero, source, index }: DraggableHeroProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
      data: { hero, source, index },
    });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="relative group w-16 h-16 bg-gray-700 rounded-md flex items-center justify-center m-2"
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : "none",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <div className="relative w-16 h-16">
        <Image
          src={hero.image}
          alt={hero.name}
          fill
          className="object-cover object-top rounded"
        />
      </div>
      {/* Hover panel */}
      <div className="absolute z-50 hidden group-hover:block left-20 top-0 w-64 bg-gray-900/95 text-white rounded-md shadow-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <Image
            src={hero.skill.icon}
            alt="Skill Icon"
            width={20}
            height={20}
          />
          <h3 className="font-bold text-yellow-300">{hero.name}</h3>
          <span className="ml-auto text-sm text-gray-300">
            Cost {hero.cost}
          </span>
        </div>
        <p className="text-sm text-green-300 font-semibold">
          {hero.skill.name}
        </p>
        <p className="text-xs text-gray-300">{hero.skill.description}</p>
        <div className="flex gap-2 mt-2 text-xs text-blue-300 flex-wrap">
          {hero.synergies.faction && (
            <span className="bg-gray-700 px-2 py-0.5 rounded">
              {hero.synergies.faction}
            </span>
          )}
          {hero.synergies.roles.map((role) => (
            <span key={role} className="bg-gray-700 px-2 py-0.5 rounded">
              {role}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
