import { Section } from "./Section";
import { education } from "@/content/education";

export function EducationSection() {
  return (
    <Section
      id="education"
      eyebrow="06 · Education"
      title="Where I've studied"
    >
      <div className="space-y-6">
        {education.map((ed) => (
          <article
            key={ed.school}
            className="rounded-lg border bg-card p-6 sm:p-8"
          >
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{ed.school}</h3>
              <p className="font-mono text-xs text-muted">
                {ed.start} — {ed.end}
              </p>
            </div>
            <p className="text-muted">
              {ed.degree} · {ed.field}
              {ed.grade && (
                <>
                  {" "}
                  ·{" "}
                  <span className="font-mono text-xs">
                    {ed.grade}
                  </span>
                </>
              )}
            </p>
            {ed.notes && ed.notes.length > 0 && (
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                {ed.notes.map((note, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">›</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
