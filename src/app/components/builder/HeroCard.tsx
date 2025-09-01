// HeroCard.tsx
import { BoardHero } from "../../data/types";
import { Equipment } from "../../data/equipment";

export function HeroCard({
  hero,
  handleEquipHero,
  handleDragRemove,
}: {
  hero: BoardHero;
  handleEquipHero: (heroId: number, eq: Equipment) => void;
  handleDragRemove: (heroId: number, eqId: number) => void;
}) {
  return (
    <div className="relative">
      {/* Hero */}
      <img
        src={hero.image}
        alt={hero.name}
        className="w-20 h-20 rounded-lg border border-gray-700"
      />

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
              className="w-6 h-6 bg-black/50 rounded"
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "removeEquipment",
                  JSON.stringify({ heroId: hero.id, eqId: eq.id })
                )
              }
            >
              <img src={eq.icon} alt={eq.name} className="w-full h-full" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
