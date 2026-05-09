import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { Container } from "./Container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <Container className="relative py-24 sm:py-32">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 font-mono text-xs text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.status}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Hi, I&apos;m {site.name.split(" ")[0]}.
            <span className="block text-muted">{site.role}.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted">{site.tagline}</p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin size={14} />
            <span>{site.location}</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
            <Link
              href={site.links.resume}
              className="inline-flex items-center gap-2 rounded-md border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-subtle"
            >
              <Download size={16} /> Resume
            </Link>
            <Link
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-subtle"
            >
              <Github size={16} /> GitHub
            </Link>
            <Link
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-subtle"
            >
              <Linkedin size={16} /> LinkedIn
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
