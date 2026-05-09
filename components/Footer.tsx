import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "./Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-fg"
          >
            <Github size={18} />
          </Link>
          <Link
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-fg"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href={`mailto:${site.links.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-fg"
          >
            <Mail size={18} />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
