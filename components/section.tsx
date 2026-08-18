import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  /** Small monospace label above the heading, e.g. "01 / About". */
  index?: string;
  heading: string;
  children: ReactNode;
  className?: string;
};

/**
 * Consistent shell for every top-level section: the scroll offset that keeps
 * headings clear of the fixed header, the container width, and the heading
 * treatment. Sections don't reimplement any of this.
 */
export function Section({
  id,
  index,
  heading,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      // scroll-mt offsets the fixed header so anchored headings aren't hidden.
      className={`scroll-mt-24 border-t border-border py-20 sm:py-28 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <Reveal>
          <div className="mb-12 flex items-baseline gap-4">
            {index ? (
              <span className="font-mono text-xs text-accent" aria-hidden>
                {index}
              </span>
            ) : null}
            <h2
              id={`${id}-heading`}
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              {heading}
            </h2>
            <span className="h-px flex-1 bg-border" aria-hidden />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
