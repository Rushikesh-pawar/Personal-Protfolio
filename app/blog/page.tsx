import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { posts } from "@/content/posts";

export const metadata = {
  title: "Blog",
  description: "Notes on data science, ML systems, and engineering practice.",
};

export default function BlogIndex() {
  return (
    <Section
      eyebrow="Blog"
      title="Notes & writing"
      intro="Short write-ups on data, ML systems, and the engineering work that surrounds them."
    >
      <ul className="divide-y rounded-lg border bg-card">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-baseline justify-between gap-6 p-6 transition-colors hover:bg-subtle"
            >
              <div className="flex-1">
                <p className="font-mono text-xs text-muted">{post.date}</p>
                <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{post.description}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-muted transition-colors group-hover:text-accent"
              />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
