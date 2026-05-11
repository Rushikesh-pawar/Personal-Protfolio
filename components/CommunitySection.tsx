import { Section } from "./Section";
import { community } from "@/content/community";

export function CommunitySection() {
  return (
    <Section
      id="community"
      eyebrow="07 · Community"
      title="Beyond the work"
      intro="Volunteering and community organizing I've been part of since 2018, alongside the technical work."
    >
      <div className="space-y-6">
        {community.map((role) => (
          <article
            key={role.org + role.role}
            className="rounded-lg border bg-card p-6 transition-colors hover:border-accent/40 sm:p-8"
          >
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold">{role.org}</h3>
                <p className="text-sm text-muted">
                  {role.role}
                  {role.location && (
                    <>
                      {" · "}
                      {role.location}
                    </>
                  )}
                </p>
              </div>
              <p className="font-mono text-xs text-muted">
                {role.start === role.end
                  ? role.start
                  : `${role.start} — ${role.end}`}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-muted">{role.summary}</p>

            {role.highlights && role.highlights.length > 0 && (
              <ul className="mt-4 space-y-2">
                {role.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="text-accent">›</span>
                    <span>{h}</span>
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
