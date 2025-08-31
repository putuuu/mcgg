import { commanders } from "@/app/data/commanders";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CommanderDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const index = commanders.findIndex(
    (c) => c.slug.toLowerCase() === slug.toLowerCase()
  );

  if (index === -1) return notFound();

  const commander = commanders[index];
  const prevCommander = commanders[index - 1] || null;
  const nextCommander = commanders[index + 1] || null;

  return (
    <div className="max-w-[1100px] mx-auto my-12 p-8 bg-black/50 rounded-xl text-white backdrop-blur-md shadow-xl">
      {/* Navigasi atas */}
      <div className="flex justify-between items-center mb-8 flex-wrap">
        <Link href="/commander" className="text-blue-500 mb-2">
          ⬅ Back to Commander List
        </Link>

        <div className="flex gap-4">
          {prevCommander && (
            <Link
              href={`/commander/${prevCommander.slug}`}
              className="text-blue-500"
            >
              ← {prevCommander.name}
            </Link>
          )}
          {nextCommander && (
            <Link
              href={`/commander/${nextCommander.slug}`}
              className="text-blue-500"
            >
              {nextCommander.name} →
            </Link>
          )}
        </div>
      </div>

      {/* Atas: foto + info */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0 w-[300px]">
          <div className="aspect-[3/4] relative">
            <Image
              src={commander.image}
              alt={commander.name}
              fill
              className="rounded-xl shadow-lg object-fill"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-yellow-400">
            {commander.name}
          </h1>
          <p className="text-gray-300 italic">{commander.type}</p>
          <p className="text-base bg-white/10 p-3 border-l-4 border-indigo-600 rounded-md">
            "{commander.sdescription}"
          </p>

          <h2 className="text-xl mt-6 text-purple-400">Skills</h2>
          <div className="flex flex-col gap-4">
            {commander.skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex gap-4 bg-white/5 p-4 rounded-lg items-start"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="rounded-md shadow-md"
                />
                <div>
                  <div className="flex gap-4 text-sm text-gray-200 mb-1">
                    <span className="font-bold text-yellow-300">
                      Lv. {skill.level}
                    </span>
                    <span className="bg-indigo-600 px-2 py-0.5 rounded text-xs font-bold">
                      {skill.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deskripsi Bawah */}
      <div className="mt-12 bg-white/5 p-6 rounded-lg">
        <h2 className="text-2xl mb-4 text-pink-400">Strategy</h2>
        <p className="leading-relaxed text-gray-200">{commander.description}</p>
      </div>
    </div>
  );
}
