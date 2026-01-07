"use client";
import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import Image from "next/image";
import { Hero } from "../../data/s5/hero";

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

  const [hovered, setHovered] = useState(false);
  const [panelPos, setPanelPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let left = rect.right + 8;
    const top = rect.top;

    if (left + 260 > window.innerWidth) {
      left = rect.left - 260 - 8;
    }

    setPanelPos({ top, left });
    setHovered(true);
  };

  const handleMouseLeave = () => setHovered(false);

  return (
    <>
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className="relative w-16 h-16 bg-gray-700 rounded-md flex items-center justify-center"
        style={{
          transform: transform
            ? `translate(${transform.x}px, ${transform.y}px)`
            : "none",
          opacity: isDragging ? 0.5 : 1,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-16 h-16">
          <Image
            src={hero.image}
            alt={hero.name}
            fill
            className="object-cover rounded-md object-top"
          />
        </div>
      </div>

      {/* {hovered && !isDragging && (
        <div
          className="fixed z-50 w-64 bg-black/80 text-white rounded-xl shadow-lg p-4 pointer-events-none"
          style={{ top: panelPos.top, left: panelPos.left }}
        >
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
      )} */}
    </>
  );
}
