import { commanders } from "@/app/data/commanders";

export async function generateStaticParams() {
  return commanders.map((commander) => ({
    slug: commander.slug,
  }));
}
