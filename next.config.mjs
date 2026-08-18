/**
 * Static export, deployed to GitHub Pages at /pratik-portfolio.
 *
 * basePath is set explicitly here rather than injected by the
 * `configure-pages` action's `static_site_generator: next` option — that option
 * has been removed from the workflow so this file is the single source of truth
 * and local prod builds match CI. Override with NEXT_PUBLIC_BASE_PATH (set it
 * to an empty string when serving from a domain root, e.g. a custom domain).
 */
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/pratik-portfolio" : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  // Emits directory-style routes (out/404.html, out/index.html) which is what
  // GitHub Pages serves correctly without rewrite rules.
  trailingSlash: true,
  images: {
    // The Next.js image optimizer needs a server; static export has none.
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
