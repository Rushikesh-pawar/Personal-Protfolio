import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/content/projects";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="03 · Projects"
      title="Selected work"
      intro="Personal projects spanning applied ML, deep learning, NLP, and full-stack engineering — each one shipped end-to-end with code on GitHub."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group flex flex-col rounded-lg border bg-card p-6 transition-colors hover:border-accent/40"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <p className="font-mono text-xs text-muted">{project.context}</p>
              {project.featured && (
                <span className="rounded border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent">
                  featured
                </span>
              )}
            </div>

            <h3 className="text-lg font-semibold leading-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-accent">{project.tagline}</p>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <ul className="mt-4 space-y-2">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-muted"
                >
                  <span className="text-accent">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border bg-subtle px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            {project.links && project.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3 border-t pt-4">
                {project.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-accent transition-opacity hover:opacity-80"
                  >
                    {link.label} <ArrowUpRight size={14} />
                  </Link>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
