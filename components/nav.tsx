"use client";

import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/content/site";
import { CloseIcon, MenuIcon } from "./icons";

/**
 * The only interactive component on the page — everything else is server
 * rendered. Keeping "use client" scoped to here means the HTML for the whole
 * site arrives complete, which is what search engines and a cold cache see.
 */
export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Show a border + stronger blur only once the page has moved.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section currently owns the upper half of the viewport.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      // Top offset clears the header; bottom offset limits matching to the
      // upper part of the viewport so the highlight tracks what's being read.
      { rootMargin: "-80px 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Escape closes the panel and returns focus to the button that opened it.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Don't let the page scroll behind an open panel.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Widening past the mobile breakpoint would otherwise leave a stuck panel.
  useEffect(() => {
    if (!isOpen) return;
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = () => query.matches && setIsOpen(false);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [isOpen]);

  const linkClass = (id: string) =>
    `rounded px-3 py-2 text-sm transition-colors ${
      activeId === id ? "text-accent" : "text-muted hover:text-text"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || isOpen
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-bg/60 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8"
      >
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-text transition-colors hover:text-accent"
        >
          <span className="text-accent">&lt;</span>
          {profile.shortName}
          <span className="text-accent"> /&gt;</span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={linkClass(id)}
                aria-current={activeId === id ? "true" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border-strong px-3 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent"
            >
              Résumé
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-text transition-colors hover:text-accent md:hidden"
        >
          {isOpen ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/*
        Rendered but hidden rather than unmounted, so the links stay in the
        accessibility tree order and the collapse can be animated.
      */}
      <div
        id="mobile-nav"
        hidden={!isOpen}
        className="border-t border-border bg-bg md:hidden"
      >
        <ul className="mx-auto max-w-content px-6 py-3">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-base transition-colors ${
                  activeId === id ? "text-accent" : "text-muted hover:text-text"
                }`}
                aria-current={activeId === id ? "true" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base text-accent"
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
