import { clsx } from "clsx";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-content px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}
