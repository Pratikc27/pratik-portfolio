import { SITE_BUILD_DATE, profile } from "@/content/site";

export function Footer() {
  // Evaluated at build time; the site rebuilds on every push, so it stays right.
  const year = new Date(SITE_BUILD_DATE).getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-content flex-col gap-3 px-6 text-sm text-dim sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {profile.name}
        </p>
        <p className="font-mono text-xs">
          Built with Next.js &amp; Tailwind ·{" "}
          <a
            href="https://github.com/Pratikc27/pratik-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            source
          </a>
        </p>
      </div>
    </footer>
  );
}
