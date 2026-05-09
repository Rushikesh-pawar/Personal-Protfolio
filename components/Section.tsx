import { clsx } from "clsx";
import { Container } from "./Container";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx("py-20 sm:py-28", className)}>
      <Container>
        {(eyebrow || title || intro) && (
          <header className="mb-12 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-sm text-accent">{eyebrow}</p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && <div className="mt-4 text-muted">{intro}</div>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
