// HeroCard.tsx
"use client";
import Image from "next/image";
import { BoardHero } from "../../data/types";
import { Equipment } from "../../data/equipment";

export function HeroCard({
  hero,
  handleEquipHero,
}: {
  hero: BoardHero;
  handleEquipHero: (heroId: number, eq: Equipment) => void;
  handleDragRemove: (heroId: number, eqId: number) => void;
}) {
  return (
    <div className="relative">
      {/* Hero */}
      <div className="relative w-20 h-20 rounded-lg border border-gray-700 overflow-hidden">
        <Image
          src={hero.image}
          alt={hero.name}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Equipment bar (muncul kalau ada item) */}
      {hero.equipments.length > 0 && (
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const data = e.dataTransfer.getData("equipment");
            if (data) {
              const eq = JSON.parse(data) as Equipment;
              handleEquipHero(hero.id, eq);
            }
          }}
        >
          {hero.equipments.map((eq) => (
            <div
              key={eq.id}
              className="w-6 h-6 bg-black/50 rounded overflow-hidden cursor-grab"
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "removeEquipment",
                  JSON.stringify({ heroId: hero.id, eqId: eq.id })
                )
              }
            >
              <Image
                src={eq.icon}
                alt={eq.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
