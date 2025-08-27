"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { guides } from "../data/s3/guide";

export default function GuideListPage() {
  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-yellow-300 mb-6">
        Magic Chess GoGo Guides
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guide/slug/${guide.slug}`}
            className="group bg-gray-800/60 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <div className="relative w-full h-48">
              <Image
                src={guide.image}
                alt={guide.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-yellow-300 mb-2">
                {guide.title}
              </h2>
              <p className="text-gray-300 text-sm">{guide.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
