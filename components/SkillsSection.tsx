import { Section } from "./Section";
import { skills } from "@/content/skills";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="05 · Skills"
      title="Tools & capabilities"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.name}
            className="rounded-lg border bg-card p-6"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
              {group.name}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border bg-subtle px-2.5 py-1 text-xs text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
