"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in ms, for revealing a list one item after another. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Reveals its children once they scroll into view.
 *
 * Deliberately tiny: one observer per element, disconnected after the first
 * intersection so nothing keeps running as the user scrolls past. The hidden
 * state lives in CSS (`.reveal` in globals.css), which also handles the
 * reduced-motion and no-scripting cases — so if this component never mounts,
 * the content is still visible.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Older browsers, and anything where the observer is unavailable: show it.
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.visible = "true";
        observer.disconnect();
      },
      // Fire a little before the element's top edge reaches the viewport bottom.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
