import { hero, profile, socials, yearsOfExperience } from "@/content/site";
import { ArrowDownIcon, ArrowUpRightIcon, socialIcons } from "./icons";

/**
 * Typographic hero — no illustration.
 *
 * The two Lottie-exported SVGs this replaced were 198KB and 91KB and were
 * inlined into the JS bundle by svgr, so ~290KB of markup had to parse before
 * anything painted. Type carries the same weight for free.
 */
export function Hero() {
  const years = yearsOfExperience();

  return (
    <section
      id="top"
      className="mx-auto flex min-h-[92svh] max-w-content flex-col justify-center px-6 pb-20 pt-32 sm:px-8"
      aria-labelledby="hero-heading"
    >
      {profile.availableForWork ? (
        <p className="mb-8 flex animate-fade-up items-center gap-2.5 font-mono text-xs text-muted">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inset-0 animate-pulse-dot rounded-full bg-accent" />
            <span className="absolute inset-0 rounded-full bg-accent/40" />
          </span>
          Open to new opportunities
        </p>
      ) : null}

      <p
        className="animate-fade-up font-mono text-sm text-accent [animation-delay:60ms]"
        aria-hidden
      >
        {hero.eyebrow}
      </p>

      <h1
        id="hero-heading"
        className="mt-5 max-w-4xl animate-fade-up text-4xl font-semibold leading-[1.08] tracking-tight [animation-delay:120ms] sm:text-6xl lg:text-7xl"
      >
        {/* Visible to screen readers as one sentence; the line breaks are visual. */}
        <span className="sr-only">
          {profile.name} — {hero.headline.join(" ")}
        </span>
        <span aria-hidden>
          {hero.headline.map((line, i) => (
            <span key={line} className="block">
              {i === hero.accentWordIndex ? (
                <span className="text-accent">{line}</span>
              ) : (
                line
              )}
            </span>
          ))}
        </span>
      </h1>

      <p className="mt-8 max-w-prose animate-fade-up text-lg leading-relaxed text-muted [animation-delay:180ms]">
        {hero.intro}
      </p>

      <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:240ms]">
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
        >
          View my work
          <ArrowDownIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
        >
          Résumé
          <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <ul className="ml-1 flex items-center gap-1">
          {socials.map(({ label, href, icon }) => {
            const Icon = socialIcons[icon];
            const isExternal = href.startsWith("http");
            return (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex rounded-md p-2.5 text-muted transition-colors hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Only facts that are true and verifiable — no invented metrics. */}
      <dl className="mt-16 grid animate-fade-up grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 [animation-delay:300ms] sm:grid-cols-3 sm:gap-x-12">
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-dim">
            Experience
          </dt>
          <dd className="mt-2 text-2xl font-semibold tabular-nums">
            {years}
            <span className="text-accent">+</span>{" "}
            <span className="text-base font-normal text-muted">years</span>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-dim">
            Currently
          </dt>
          <dd className="mt-2">
            <a
              href={profile.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium transition-colors hover:text-accent"
            >
              {profile.company}
            </a>
            <span className="block text-sm text-muted">{profile.role}</span>
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <dt className="font-mono text-xs uppercase tracking-wider text-dim">
            Core stack
          </dt>
          <dd className="mt-2 text-lg font-medium">
            React · Node.js · MongoDB
            <span className="block text-sm font-normal text-muted">
              with Next.js and TypeScript
            </span>
          </dd>
        </div>
      </dl>
    </section>
  );
}
