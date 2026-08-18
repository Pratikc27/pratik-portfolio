import { about, skillGroups } from "@/content/site";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" index="01" heading={about.heading}>
      <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <Reveal className="space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}

          <dl className="grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
            {about.facts.map(({ label, value }) => (
              <div key={label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-dim">
                  {label}
                </dt>
                <dd className="mt-1.5 text-sm text-text">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={80}>
          <h3 className="font-mono text-xs uppercase tracking-wider text-dim">
            Toolkit
          </h3>
          <div className="mt-5 space-y-6">
            {skillGroups.map(({ title, items }) => (
              <div key={title}>
                <p className="text-sm font-medium text-text">{title}</p>
                <ul className="mt-2.5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
