/**
 * Single source of truth for every piece of copy on the site.
 *
 * Nothing here is duplicated in JSX — adding a project or a job means editing
 * this file only. Anything marked TODO is a real gap the site renders around
 * gracefully (links simply don't appear) rather than a placeholder that ships.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pratikc27.github.io/pratik-portfolio";

/**
 * Must match `basePath` in next.config.mjs.
 *
 * next/image prefixes basePath onto its own optimizer URLs, but NOT onto the
 * `src` of an unoptimized image — and `output: "export"` requires unoptimized.
 * So any path into public/ has to carry the prefix itself or it 404s on
 * GitHub Pages. Always wrap public/ paths in `asset()`.
 */
const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/pratik-portfolio" : "");

export const asset = (path: string) => `${BASE_PATH}${path}`;

/** Career start — used to derive years of experience so the copy never goes stale. */
const CAREER_START = "2023-06-01";

/**
 * Frozen at module-eval time so the server and the client render the identical
 * value. Reading the clock during render would risk a hydration mismatch.
 */
export const SITE_BUILD_DATE = new Date().toISOString();

/**
 * Whole years since CAREER_START, evaluated once at build time. The site is
 * rebuilt on every push, so this stays current with nobody editing copy.
 */
export function yearsOfExperience(now = new Date(SITE_BUILD_DATE)): number {
  const start = new Date(CAREER_START);
  let years = now.getFullYear() - start.getFullYear();
  const monthDelta = now.getMonth() - start.getMonth();
  if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < start.getDate())) years -= 1;
  return Math.max(years, 0);
}

export const profile = {
  name: "Pratik Choudhari",
  shortName: "Pratik",
  initials: "PC",
  role: "Full-Stack Developer",
  company: "TruScholar",
  companyUrl: "https://www.truscholar.io/",
  location: "Pune, Maharashtra, India",
  email: "pratikchoudharij@gmail.com",
  /**
   * Google Drive `uc?export=download` links break without warning and can't be
   * previewed in-browser. Prefer committing a PDF to public/ and pointing here.
   * TODO: replace with "/pratik-choudhari-resume.pdf" once the file is added.
   */
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1EpzP-JzlCi_IS68YGo_1O3k27P2lN9Ik",
  availableForWork: true,
} as const;

export const hero = {
  eyebrow: "Full-stack developer · Pune, India",
  /** Split so the accent span can be styled without dangerouslySetInnerHTML. */
  headline: ["I build web products", "that ship and", "keep working."],
  accentWordIndex: 2,
  intro:
    "I build web applications end to end — React and Next.js on the front, Node.js and MongoDB behind them. Three years of shipping features, designing REST APIs and making slow things fast on a production platform.",
} as const;

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a full-stack developer with three years on the MERN stack. Since June 2023 I've worked at TruScholar on their blockchain-backed digital credentialing platform, across both the front end and the back end.",
    "Most of that time went to the core credentialing product — shipping features, cutting API response times, and getting state management under control as the application grew. Since January 2026 I've been building a document-processing system that takes large, multi-page PDFs and turns them into structured data people can review before it lands.",
    "I came to software from engineering: a B.E. from P. R. Pote College of Engineering, then the PG-DAC programme at Sunbeam Institute in Pune under C-DAC, finished in March 2023. I work mainly in React, Next.js, Node.js and MongoDB, and I like the problems where the fix is architectural rather than cosmetic.",
  ],
  facts: [
    { label: "Based in", value: "Pune, Maharashtra, India" },
    { label: "Experience", value: "3+ years, full-stack" },
    { label: "Availability", value: "Open to new opportunities" },
  ],
} as const;

export type Education = {
  institution: string;
  qualification: string;
  completed: string;
};

export const education: readonly Education[] = [
  {
    institution: "Sunbeam Institute of Information Technology, Pune",
    qualification: "PG-DAC — Post Graduate Diploma in Advanced Computing (C-DAC)",
    completed: "Mar 2023",
  },
  {
    institution: "P. R. Pote College of Engineering, Amravati",
    qualification: "Bachelor of Engineering",
    completed: "Jun 2018",
  },
];

export type SkillGroup = { title: string; items: readonly string[] };

/**
 * Regrouped from the résumé's categories: Redis moved to Data and Bull Queue to
 * Backend, since neither is a DevOps tool — the taxonomy itself signals whether
 * you know what these things are.
 */
export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Bull Queue"],
  },
  { title: "Data", items: ["MongoDB", "MySQL", "Redis"] },
  {
    title: "Cloud & DevOps",
    items: ["AWS S3", "GCP", "Docker", "Git", "GitLab", "GitHub Actions"],
  },
  {
    title: "Blockchain",
    items: ["Polygon", "Hardhat", "Solidity", "Ethers.js"],
  },
  {
    title: "Also",
    items: ["OCR pipelines", "LLM-based extraction", "PDF processing", "Postman"],
  },
];

/** A distinct system or period of work inside a single role. */
export type Workstream = {
  name: string;
  period: string;
  summary: string;
  bullets: readonly string[];
  stack: readonly string[];
};

export type Role = {
  title: string;
  company: string;
  companyUrl?: string;
  start: string;
  end: string | null;
  summary: string;
  /** Most recent first. */
  workstreams: readonly Workstream[];
};

/**
 * DISCLOSURE NOTE — read before editing.
 *
 * This is a public, search-indexed page, not a résumé sent to a named recruiter.
 * Under TruScholar's public-content policy, internal product names, unreleased
 * features and implementation specifics stay off it. So:
 *
 *   • TruScholar and its public positioning as a blockchain credentialing
 *     platform are named — both are on truscholar.io.
 *   • The document-processing work is described by capability, not by its
 *     internal product name.
 *   • Deliberately absent: internal codenames, sub-product names, the email and
 *     queueing services behind these systems, and specific credential
 *     revocation rules.
 *
 * The line drawn here is attribution, not vocabulary: `skillGroups` above lists
 * technologies as Pratik's own competencies, which is ordinary résumé practice.
 * What this array must not do is state which of them run inside a named
 * employer's systems. Keep new entries to what the work *did*, not how it is
 * built internally.
 */
export const roles: readonly Role[] = [
  {
    title: "Full-Stack Developer",
    company: "TruScholar",
    companyUrl: "https://www.truscholar.io/",
    start: "Jun 2023",
    end: null,
    summary:
      "Full-stack development on a blockchain-backed digital credentialing platform — the product institutions use to issue and verify certificates, badges, marksheets and degrees.",
    workstreams: [
      {
        name: "Document processing & data extraction",
        period: "Jan 2026 — Present",
        summary:
          "Built a system that ingests large, multi-page PDF documents and returns structured data a person can check before it is committed.",
        bullets: [
          "Ran the research to find an extraction approach that stayed accurate on long, messy, inconsistently formatted documents, then took the chosen approach through to production.",
          "Built the ingestion and processing path behind well-defined REST APIs, so large uploads are handled in the background instead of blocking the request.",
          "Built the interface for it end to end: large-file upload, live processing status, a data preview step before anything is saved, and CSV export.",
        ],
        stack: ["Node.js", "Express.js", "React.js", "REST APIs", "PDF processing"],
      },
      {
        name: "Core credentialing platform",
        period: "Jun 2023 — Dec 2025",
        summary:
          "Feature development and performance work across the core product, on both the front end and the back end.",
        bullets: [
          "Cut API response times by up to 30% by replacing full-result-set fetches with proper pagination on record-heavy endpoints.",
          "Introduced Redux Toolkit in place of ad-hoc state passing, making shared state predictable and maintainable as the application grew.",
          "Shipped features across the credential issuing and verification workflows, working with cross-functional teams from specification through to release.",
          "Traced production bugs back to root cause rather than patching symptoms, and covered logic paths with white-box tests and Postman API tests before release.",
        ],
        stack: ["React.js", "Node.js", "MongoDB", "Redux Toolkit", "Express.js"],
      },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  blurb: string;
  /** Two or three sentences on the problem and the approach — the part that reads senior. */
  detail: string;
  stack: readonly string[];
  image: { src: string; width: number; height: number; alt: string };
  liveUrl: string | null;
  repoUrl: string | null;
  featured: boolean;
};

export const projects: readonly Project[] = [
  {
    slug: "furniture-dapp",
    title: "Blockchain Furniture Shop",
    year: "2024",
    blurb:
      "A decentralised storefront where orders and payments settle on-chain instead of through a payment processor.",
    detail:
      "Purchases are handled by a Solidity contract deployed to Polygon, so order state lives on-chain rather than in a database the seller controls. The React front end talks to the contract through Ethers.js and reads wallet state directly, and the contracts were developed, tested and deployed with Hardhat.",
    stack: ["React", "Solidity", "Hardhat", "Ethers.js", "Polygon"],
    image: {
      src: asset("/png/furniture.png"),
      width: 1746,
      height: 814,
      alt: "Blockchain Furniture Shop storefront showing a product grid and a connected wallet balance",
    },
    liveUrl: "https://resilient-torte-39dbf9.netlify.app/",
    repoUrl: "https://github.com/Pratikc27/FurnitureStore",
    featured: true,
  },
  {
    slug: "hospital-management",
    title: "Hospital Management System",
    year: "2023",
    blurb:
      "Role-based appointment system covering admin, doctor, receptionist and patient workflows.",
    detail:
      "Patients register and book appointments; admins assign them to doctors; doctors and receptionists each see only what their role allows. The permission model was the interesting part — four roles sharing one appointment record, each with a different view of it. Built on Spring Boot with a MySQL schema and a React front end.",
    stack: ["React", "Java", "Spring Boot", "MySQL"],
    image: {
      // Real file is a JPEG (it was misnamed .png) at its true 863×460.
      src: asset("/png/hms.jpg"),
      width: 863,
      height: 460,
      alt: "Hospital Management System dashboard listing patient appointments by doctor",
    },
    /**
     * TODO: no live demo or repo link is set for this project. Employer surveys
     * consistently put a working demo above everything else on a portfolio, so
     * this is the highest-value thing left to add. `project-frontend` and
     * `project-backend` on your GitHub look like this project's two halves —
     * confirm and fill them in below.
     */
    liveUrl: null,
    repoUrl: null,
    featured: true,
  },
  {
    slug: "cicd-pipeline",
    title: "CI/CD Pipeline",
    year: "2024",
    blurb:
      "GitHub Actions pipeline that builds, checks and deploys on every push to the release branch.",
    detail:
      "Set up to remove manual deploy steps: a push runs the build, fails the run on a broken build, and publishes the result without anyone touching a server. Cached dependencies between runs to keep the feedback loop short.",
    stack: ["GitHub Actions", "Node.js", "YAML"],
    image: {
      src: asset("/png/cicd.png"),
      width: 1910,
      height: 848,
      alt: "GitHub Actions workflow run showing build and deploy jobs completing successfully",
    },
    liveUrl: null,
    // TODO: link the repo that contains this pipeline.
    repoUrl: null,
    featured: false,
  },
  {
    slug: "portfolio",
    title: "This Portfolio",
    year: "2024",
    blurb:
      "Statically exported Next.js site, deployed to GitHub Pages by its own Actions workflow.",
    detail:
      "Server-rendered and exported to static HTML so there's no client-side JavaScript needed to read the page. All copy lives in one typed data file, the layout is a single responsive tree rather than separate desktop and mobile branches, and Lighthouse scores are kept green on every push.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    image: {
      src: asset("/png/portfolio.png"),
      width: 1882,
      height: 814,
      alt: "This portfolio site rendered on a dark background with the projects section in view",
    },
    liveUrl: SITE_URL,
    repoUrl: "https://github.com/Pratikc27/pratik-portfolio",
    featured: false,
  },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export const socials: readonly SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Pratikc27",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pratik-choudhari-073412295/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;
