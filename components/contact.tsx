import { profile, socials } from "@/content/site";
import { ArrowUpRightIcon, MailIcon, socialIcons } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Contact() {
  return (
    <Section id="contact" index="04" heading="Get in touch">
      <Reveal className="max-w-prose">
        <p className="text-lg leading-relaxed text-muted">
          I&apos;m currently at {profile.company} and open to hearing about
          interesting full-stack work. The fastest way to reach me is email —
          I read everything and reply to anything specific.
        </p>

        {/* The address is written out rather than hidden behind an icon, so it
            can be read, copied, and picked up by a recruiter skimming. */}
        <a
          href={`mailto:${profile.email}`}
          className="group mt-8 inline-flex items-center gap-3 rounded-md border border-border-strong px-5 py-3.5 text-base font-medium transition-colors hover:border-accent hover:text-accent"
        >
          <MailIcon className="h-5 w-5 shrink-0" />
          <span className="break-all">{profile.email}</span>
          <ArrowUpRightIcon className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          {socials
            .filter((social) => social.icon !== "mail")
            .map(({ label, href, icon }) => {
              const Icon = socialIcons[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              );
            })}
          <li>
            <span className="font-mono text-xs text-dim">
              {profile.location}
            </span>
          </li>
        </ul>
      </Reveal>
    </Section>
  );
}
