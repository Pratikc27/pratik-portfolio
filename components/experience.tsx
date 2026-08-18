import { education, roles } from "@/content/site";
import { ArrowUpRightIcon } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

function TechList({ stack }: { stack: readonly string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

export function Experience() {
  return (
    <Section id="experience" index="02" heading="Experience">
      <ol className="space-y-16">
        {roles.map((role, roleIndex) => (
          <li key={`${role.company}-${role.title}`}>
            <Reveal delay={roleIndex * 80}>
              {/*
                Dates sit in a left column at desktop width and above the title
                on mobile — one tree reordered by grid, not two copies of it.
              */}
              <div className="grid gap-x-10 gap-y-3 sm:grid-cols-[10rem_1fr]">
                <p className="font-mono text-xs uppercase tracking-wider text-dim sm:pt-1.5">
                  {role.start} — {role.end ?? "Present"}
                </p>

                <div>
                  <h3 className="text-lg font-medium">
                    {role.title}
                    <span className="text-muted"> · </span>
                    {role.companyUrl ? (
                      <a
                        href={role.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-accent transition-colors hover:text-accent-hover"
                      >
                        {role.company}
                        <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <span className="text-accent">{role.company}</span>
                    )}
                  </h3>

                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
                    {role.summary}
                  </p>

                  {/*
                    Workstreams: the distinct systems owned inside one role.
                    A left rule ties them visually to the role above without
                    needing another heading level.
                  */}
                  <ol className="mt-8 space-y-9 border-l border-border pl-6">
                    {role.workstreams.map((workstream) => (
                      <li key={workstream.name} className="relative">
                        <span
                          className="absolute -left-[1.8125rem] top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-bg"
                          aria-hidden
                        />
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h4 className="text-base font-medium">
                            {workstream.name}
                          </h4>
                          <span className="font-mono text-xs text-dim">
                            {workstream.period}
                          </span>
                        </div>

                        <p className="mt-2 max-w-prose text-sm leading-relaxed text-text">
                          {workstream.summary}
                        </p>

                        <ul className="mt-4 space-y-2.5">
                          {workstream.bullets.map((bullet) => (
                            <li
                              key={bullet.slice(0, 24)}
                              className="flex gap-3 text-sm leading-relaxed text-muted"
                            >
                              <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong"
                                aria-hidden
                              />
                              {bullet}
                            </li>
                          ))}
                        </ul>

                        <TechList stack={workstream.stack} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={80}>
        <div className="mt-20 border-t border-border pt-10">
          <h3 className="font-mono text-xs uppercase tracking-wider text-dim">
            Education
          </h3>
          <ol className="mt-6 space-y-6">
            {education.map((entry) => (
              <li
                key={entry.institution}
                className="grid gap-x-10 gap-y-1 sm:grid-cols-[10rem_1fr]"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-dim sm:pt-1">
                  {entry.completed}
                </p>
                <div>
                  <p className="font-medium">{entry.institution}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    {entry.qualification}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Section>
  );
}
