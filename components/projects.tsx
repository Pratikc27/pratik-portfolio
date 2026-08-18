import { projects } from "@/content/site";
import { CompactProject, FeaturedProject } from "./project-card";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <Section id="work" index="03" heading="Selected work">
      <div className="space-y-20 lg:space-y-28">
        {featured.map((project, index) => (
          <Reveal key={project.slug}>
            {/* Alternate sides so consecutive rows don't read as a template. */}
            <FeaturedProject project={project} reversed={index % 2 === 1} />
          </Reveal>
        ))}
      </div>

      {rest.length > 0 ? (
        <div className="mt-24">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-wider text-dim">
              Other things I&apos;ve built
            </h3>
          </Reveal>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {rest.map((project, index) => (
              <li key={project.slug} className="h-full">
                <Reveal delay={index * 80} className="h-full">
                  <CompactProject project={project} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}
