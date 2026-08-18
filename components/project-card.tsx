import Image from "next/image";
import type { Project } from "@/content/site";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

/** Renders only the links that actually exist, so no dead buttons ever ship. */
function ProjectLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repoUrl) {
    return (
      <p className="mt-5 font-mono text-xs text-dim">Demo coming soon</p>
    );
  }

  return (
    <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
      {project.liveUrl ? (
        <li>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Live demo
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="sr-only">— {project.title} (opens in a new tab)</span>
          </a>
        </li>
      ) : null}
      {project.repoUrl ? (
        <li>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text"
          >
            <GitHubIcon className="h-4 w-4" />
            Source
            <span className="sr-only">
              code for {project.title} (opens in a new tab)
            </span>
          </a>
        </li>
      ) : null}
    </ul>
  );
}

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

/**
 * Full-width project row. `reversed` swaps which side the screenshot sits on at
 * desktop width via grid column order — the DOM order stays reading order, so
 * mobile and screen readers always get title-then-image.
 */
export function FeaturedProject({
  project,
  reversed = false,
}: {
  project: Project;
  reversed?: boolean;
}) {
  const { image } = project;
  const previewHref = project.liveUrl ?? project.repoUrl;

  const figure = (
    <Image
      src={image.src}
      width={image.width}
      height={image.height}
      alt={image.alt}
      sizes="(min-width: 1024px) 620px, 100vw"
      // Intrinsic ratio drives the height — no fixed pixel boxes to overflow.
      className="h-auto w-full rounded-lg border border-border transition-transform duration-500 group-hover:scale-[1.015]"
    />
  );

  return (
    <article className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={reversed ? "lg:order-2" : undefined}>
        <div className="flex items-baseline gap-3">
          <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-dim">{project.year}</span>
        </div>
        <p className="mt-3 text-base leading-relaxed text-text">{project.blurb}</p>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
          {project.detail}
        </p>
        <TechList stack={project.stack} />
        <ProjectLinks project={project} />
      </div>

      <div className={`overflow-hidden rounded-lg ${reversed ? "lg:order-1" : ""}`}>
        {previewHref ? (
          <a
            href={previewHref}
            target="_blank"
            rel="noopener noreferrer"
            // The visible links below carry the accessible name; this is a
            // convenience target and is hidden from the a11y tree.
            tabIndex={-1}
            aria-hidden
            className="block"
          >
            {figure}
          </a>
        ) : (
          figure
        )}
      </div>
    </article>
  );
}

/** Compact card for secondary projects — screenshot on top, text below. */
export function CompactProject({ project }: { project: Project }) {
  const { image } = project;

  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-surface p-5 transition-colors hover:border-border-strong hover:bg-surface-hover">
      <div className="overflow-hidden rounded-md border border-border">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          sizes="(min-width: 640px) 540px, 100vw"
          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-baseline gap-3">
          <h3 className="text-lg font-medium tracking-tight">{project.title}</h3>
          <span className="font-mono text-xs text-dim">{project.year}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.blurb}</p>
        <TechList stack={project.stack} />
        <div className="mt-auto">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
