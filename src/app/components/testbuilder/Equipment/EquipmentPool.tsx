import { equipments } from "../../../data/s5/equipment";

export default function EquipmentPool() {
  return (
    <>
      <h4 className="text-xs font-semibold mb-2 text-gray-300 shrink-0">
        Equipment Pool
      </h4>

      <div className="flex-1 overflow-y-auto pr-1">
        <div className="grid grid-cols-4 gap-2">
          {equipments.map((eq) => (
            <div
              key={eq.id}
              className="h-[64px] rounded-lg bg-black/40
                         flex flex-col items-center justify-center
                         hover:bg-black/60 transition"
            >
              <img
                src={eq.icon}
                alt={eq.name}
                className="w-9 h-9 object-contain"
              />
              <span className="mt-1 text-[10px] text-gray-300 truncate">
                {eq.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
