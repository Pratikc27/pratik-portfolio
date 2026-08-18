import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-svh max-w-content flex-col justify-center px-6 sm:px-8">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-prose text-muted">
        The link may be out of date, or the page may have moved.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
      >
        Back to home
        <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </main>
  );
}
