export interface Guide {
  slug: string;
  title: string;
  description: string;
  image: string; // tambahkan properti image
}

export const guides: Guide[] = [
  {
    slug: "metrogazer",
    title: "Beginner Guide: Metro Zero + Stargazer 4",
    description:
      "Learn how to build a solid foundation with Metro Zero and Stargazer.",
    image: "/guides/guide1.png", // contoh path image
  },
];
