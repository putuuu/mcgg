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
    <div className="max-w-[1100px] mx-auto my-8 p-6 bg-gradient-to-br from-gray-900/70 to-black/80 backdrop-blur-md rounded-2xl text-white shadow-xl">
      {/* Efek cahaya */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 rounded-2xl blur-sm opacity-30"></div>

      <div className="relative z-10">
        {/* Navigasi atas */}
        <div className="flex justify-between items-center mb-6 flex-wrap">
          <Link
            href="/commander"
            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Commander List
          </Link>
          <div className="flex gap-3">
            {prevCommander && (
              <Link
                href={`/commander/${prevCommander.slug}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {prevCommander.name}
              </Link>
            )}
            {nextCommander && (
              <Link
                href={`/commander/${nextCommander.slug}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
              >
                {nextCommander.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>

        {/* Atas: foto + info */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 w-[280px]">
            <div className="aspect-[3/4] relative">
              {/* Efek cahaya pada gambar */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl blur-md"></div>
              <Image
                src={commander.image}
                alt={commander.name}
                fill
                className="rounded-xl shadow-lg object-fill relative z-10"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              {commander.name}
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <p className="text-gray-300">{commander.type}</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-3 border-l-4 border-indigo-500 rounded-md">
              <p className="text-base italic text-gray-200">
                "{commander.sdescription}"
              </p>
            </div>

            <h2 className="text-xl mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Skills
            </h2>
            <div className="flex flex-col gap-3">
              {commander.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 bg-gradient-to-br from-gray-800/40 to-black/40 p-3 rounded-lg items-start border border-gray-700/30"
                >
                  <div className="relative">
                    {/* Efek cahaya pada ikon skill */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-md blur-md"></div>
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={56}
                      height={56}
                      className="rounded-md shadow-md relative z-10"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-3 text-sm text-gray-200 mb-1">
                      <span className="font-bold text-yellow-300 bg-yellow-900/30 px-2 py-0.5 rounded">
                        Lv. {skill.level}
                      </span>
                      <span className="bg-indigo-600 px-2 py-0.5 rounded text-xs font-bold">
                        {skill.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-100">
                      {skill.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deskripsi Bawah */}
        <div className="mt-8 bg-gradient-to-br from-gray-800/30 to-black/30 p-5 rounded-lg border border-gray-700/30">
          <h2 className="text-xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500">
            Strategy
          </h2>
          <p className="leading-relaxed text-gray-200">
            {commander.description}
          </p>
        </div>
      </div>
    </div>
  );
}
