// EquipmentPool.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Equipment } from "../../data/equipment";

interface EquipmentPoolProps {
  equipments: Equipment[];
}

export function EquipmentPool({ equipments }: EquipmentPoolProps) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {equipments.map((eq) => (
        <DraggableEquipment key={eq.id} equipment={eq} />
      ))}
    </div>
  );
}

// DraggableEquipment.tsx
interface DraggableEquipmentProps {
  equipment: Equipment;
}

export function DraggableEquipment({ equipment }: DraggableEquipmentProps) {
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
        className="relative w-16 h-16 cursor-grab"
        draggable
        onDragStart={(e) =>
          e.dataTransfer.setData("equipment", JSON.stringify(equipment))
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-16 h-16">
          <Image
            src={equipment.icon}
            alt={equipment.name}
            fill
            className="object-contain rounded-md"
          />
        </div>
      </div>

      {hovered && (
        <div
          className="fixed z-50 w-64 bg-black/80 text-white rounded-xl shadow-lg p-4 pointer-events-none"
          style={{ top: panelPos.top, left: panelPos.left }}
        >
          <div className="flex flex-col gap-2 text-sm">
            <h3 className="font-bold text-yellow-300 text-base">
              {equipment.name}
            </h3>

            {equipment.special && (
              <p className="text-yellow-300">⭐ {equipment.special}</p>
            )}

            {equipment.attribute.length > 0 && (
              <ul className="list-disc ml-4">
                {equipment.attribute.map((attr, index) => (
                  <li key={index}>{attr}</li>
                ))}
              </ul>
            )}

            {equipment.passive && (
              <div className="bg-white/5 p-2 rounded-lg text-sm">
                <strong>{equipment.passive}</strong>
                <p className="mt-1">{equipment.pdesc}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
