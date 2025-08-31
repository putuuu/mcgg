import { Commander } from "../../data/commanders";
import Image from "next/image";
import Link from "next/link";

export default function CommanderCard({ commander }: { commander: Commander }) {
  return (
    <div
      className="
        group w-[210px] aspect-[3/4] relative overflow-hidden rounded-xl 
        bg-white shadow-md transition-transform duration-300 
        hover:scale-105 hover:shadow-xl
      "
    >
      <Link
        href={`/commander/${commander.slug}`}
        className="block w-full h-full relative"
      >
        {/* Image */}
        <div className="w-[210px] aspect-[3/4] relative rounded-xl overflow-hidden">
          <Image
            src={commander.icon}
            alt={commander.name}
            fill
            className="object-fill rounded-xl"
          />
        </div>

        {/* Overlay */}
        <div
          className="
            absolute bottom-0 left-0 right-0 p-2 
            bg-black/60 text-white text-center flex flex-col items-center 
            transition-all duration-300 h-16 
            group-hover:h-full group-hover:justify-center
          "
        >
          <h3 className="text-base font-bold">{commander.name}</h3>
          <p className="text-xs opacity-80">{commander.type}</p>
          <p className="text-sm mt-2 px-2 hidden group-hover:block">
            "{commander.sdescription}"
          </p>
        </div>
      </Link>
    </div>
  );
}
