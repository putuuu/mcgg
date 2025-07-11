import { commanders } from "@/app/data/commanders";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default function CommanderDetailPage({ params }: Props) {
  const commander = commanders.find(
    (c) => c.slug === params.slug.toLowerCase()
  );

  if (!commander) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{commander.name}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <Image
            src={commander.image}
            alt={commander.name}
            width={300}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold mt-4">Skills</h2>
            {commander.skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-lg p-3 flex gap-4 items-start"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="rounded"
                />
                <div>
                  <h3 className="font-bold text-base">{skill.name}</h3>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-gray-700 mt-4">{commander.description}</p>
    </div>
  );
}
