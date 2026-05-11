import { Section } from "./Section";
import { experience } from "@/content/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="02 · Experience"
      title="Where I've worked"
      intro="3.5 years of industry experience in data science and analytics which includes automotive AI at FEV and analytics at Compserv Consultancy."
    >
      <div className="space-y-8">
        {experience.map((job) => (
          <article
            key={job.company + job.role}
            className="rounded-lg border bg-card p-6 transition-colors hover:border-accent/40 sm:p-8"
          >
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-muted">
                  {job.company} · {job.type} · {job.location}
                </p>
              </div>
              <p className="font-mono text-xs text-muted">
                {job.start} — {job.end} · {job.duration}
              </p>
            </div>

            <p className="mb-5 text-muted">{job.summary}</p>

            <ul className="mb-6 space-y-3">
              {job.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span
                    className="mt-2 h-1 w-3 shrink-0 rounded bg-accent"
                    aria-hidden
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border bg-subtle px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
