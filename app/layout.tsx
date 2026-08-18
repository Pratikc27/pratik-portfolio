import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SITE_URL, education, profile, skillGroups, socials } from "@/content/site";
import "./globals.css";

/* Loaded as CSS variables so Tailwind's fontFamily tokens can reference them. */
const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const title = `${profile.name} — ${profile.role}`;
const description =
  "Full-stack developer in Pune building web applications with React, Next.js, Node.js and MongoDB. Currently at TruScholar.";

export const metadata: Metadata = {
  // Required for OpenGraph/Twitter image URLs to resolve to absolute paths.
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} — Portfolio`,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: [
    profile.name,
    "full-stack developer",
    "MERN stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "Pune",
    "India",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: profile.name,
    title,
    description,
    locale: "en_IN",
    images: [
      {
        // Absolute rather than relative: the site is served from a basePath
        // (/pratik-portfolio), and social scrapers need the fully-qualified URL.
        url: `${SITE_URL}/png/portfolio.png`,
        width: 1882,
        height: 814,
        alt: `${profile.name} — portfolio site`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE_URL}/png/portfolio.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0F14",
  colorScheme: "dark",
};

/**
 * Person schema so search engines can associate the name, role, employer and
 * profile links — this is what produces a knowledge-panel style result for a
 * name search rather than a bare blue link.
 */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: profile.company,
    url: profile.companyUrl,
  },
  alumniOf: education.map((entry) => ({
    "@type": "EducationalOrganization",
    name: entry.institution,
  })),
  knowsAbout: skillGroups.flatMap((group) => group.items),
  sameAs: socials
    .filter((social) => social.href.startsWith("http"))
    .map((social) => social.href),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        {/*
          Arms the scroll-reveal animation. Runs synchronously while the body is
          being parsed — before the .reveal elements below are painted — so
          there is no flash of visible-then-hidden content. Because the hidden
          state in globals.css is scoped to html[data-js="on"], nothing can end
          up permanently invisible if scripting is blocked or fails.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute("data-js","on")`,
          }}
        />
        {/* First tab stop — lets keyboard users skip the nav. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // Static object built at compile time — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
