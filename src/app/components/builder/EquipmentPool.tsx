// EquipmentPool.tsx
import { Equipment } from "../../data/equipment";

export function EquipmentPool({ equipments }: { equipments: Equipment[] }) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {equipments.map((eq) => (
        <div
          key={eq.id}
          draggable
          onDragStart={(e) =>
            e.dataTransfer.setData("equipment", JSON.stringify(eq))
          }
          className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center cursor-grab"
        >
          <img src={eq.icon} alt={eq.name} className="w-10 h-10" />
        </div>
      ))}
    </div>
  );
}
