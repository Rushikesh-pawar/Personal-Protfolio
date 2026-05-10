import Link from "next/link";
import { FileText, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { publications } from "@/content/publications";

export function PublicationsSection() {
  return (
    <Section
      id="publications"
      eyebrow="04 · Publications"
      title="Peer-reviewed papers"
      intro="Both presented at SAEINDIA's Road to Virtual World Conference 2024."
    >
      <div className="space-y-4">
        {publications.map((pub) => (
          <article
            key={pub.title}
            className="flex gap-4 rounded-lg border bg-card p-6 transition-colors hover:border-accent/40"
          >
            <div className="hidden shrink-0 sm:block">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-subtle text-accent">
                <FileText size={18} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold leading-snug">
                {pub.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">
                {pub.venue} · {pub.date}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pub.summary}
              </p>
              {pub.link && (
                <Link
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-accent transition-opacity hover:opacity-80"
                >
                  Read paper <ArrowUpRight size={14} />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
