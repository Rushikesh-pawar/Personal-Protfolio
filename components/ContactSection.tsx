import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Section } from "./Section";
import { site } from "@/content/site";

export function ContactSection() {
  const items = [
    {
      icon: Mail,
      label: "Email",
      value: site.links.email,
      href: `mailto:${site.links.email}`,
    },
    {
      icon: Mail,
      label: "School Email",
      value: site.links.schoolEmail,
      href: `mailto:${site.links.schoolEmail}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: site.links.phone,
      href: `tel:${site.links.phone.replace(/[^+\d]/g, "")}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rushikesh-p-173091b8",
      href: site.links.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Rushikesh-pawar",
      href: site.links.github,
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="08 · Contact"
      title="Let's talk"
      intro="Open to Summer 2026 internships, Fall 2026 co-ops, and full-time data science / ML engineering roles starting May 2027. The fastest way to reach me is email."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 lg:col-span-2">
          <ul className="divide-y">
            {items.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 py-4 transition-colors"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border bg-subtle text-accent">
                    <Icon size={16} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-mono text-xs uppercase tracking-wider text-muted">
                      {label}
                    </span>
                    <span className="block text-sm transition-colors group-hover:text-accent">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted transition-colors group-hover:text-accent"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-6 rounded-lg border bg-card p-6">
          <div>
            <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
              Resume
            </h3>
            <p className="text-sm text-muted">
              The latest PDF of my resume — print-friendly and ATS-friendly.
            </p>
          </div>
          <Link
            href={site.links.resume}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            <Download size={16} /> Download resume
          </Link>
        </div>
      </div>
    </Section>
  );
}
