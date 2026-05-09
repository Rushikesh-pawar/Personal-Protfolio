import { Section } from "./Section";
import { site } from "@/content/site";

export function AboutSection() {
  return (
    <Section id="about" eyebrow="01 · About" title="A bit about me">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          {site.about.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="rounded-lg border bg-card p-6">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
            Quick facts
          </h3>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-muted">Currently</dt>
              <dd>MS Computer Science, Northeastern University</dd>
            </div>
            <div>
              <dt className="text-muted">Previously</dt>
              <dd>Data Scientist, FEV India · 2.5 years</dd>
            </div>
            <div>
              <dt className="text-muted">Based in</dt>
              <dd>{site.location}</dd>
            </div>
            <div>
              <dt className="text-muted">Looking for</dt>
              <dd>Summer 2026 internships, Fall 2026 co-ops, full-time roles</dd>
            </div>
            <div>
              <dt className="text-muted">Focus areas</dt>
              <dd>Applied ML, LLM systems, multimodal data pipelines</dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  );
}
