export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  body: string;
  tags?: string[];
};

export const posts: Post[] = [
  {
    slug: "hello",
    title: "Hello, world",
    date: "2026-05-08",
    description:
      "A short note on why I built this site and what I plan to write about.",
    tags: ["Meta"],
    body: `I built this site to give recruiters and collaborators a single place to read about my work — without forcing them to pick through a LinkedIn feed.

Going forward, I plan to use this space for short technical write-ups: things I learn while working on LLM systems, evaluation harnesses, and the kind of glue work that makes ML actually ship.

If any of that sounds interesting, feel free to reach out — links in the footer.`,
  },
];
