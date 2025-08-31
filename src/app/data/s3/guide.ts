export interface Guide {
  slug: string;
  title: string;
  description: string;
  image: string; // tambahkan properti image
}

export const guides: Guide[] = [
  {
    slug: "metrogazer",
    title: "Beginner Guide: Metro Zero + 4 Stargazer",
    description:
      "A beginner-friendly strategy focusing on Metro Zero’s economy power combined with 4 Stargazers for consistent scaling into mid game.",
    image: "/guides/guide1.png",
  },
  {
    slug: "metrostarwing",
    title: "Beginner Guide: Metro Zero + 6 Starwing",
    description:
      "Learn how to push for a strong late-game composition with Metro Zero and 6 Starwings, turning your team into a powerful carry squad.",
    image: "/guides/guide1.png",
  },
];
