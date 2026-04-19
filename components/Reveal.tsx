"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in ms before the element reveals, once in view. */
  delay?: number;
  /** Tailwind className applied to the wrapper. */
  className?: string;
  /** Render as a different element than div (e.g. "section"). */
  as?: "div" | "section" | "article" | "header" | "li";
};

/**
 * IntersectionObserver-based scroll reveal.
 * - Starts muted + translated (styled via [data-reveal] in globals.css)
 * - Flips `data-revealed="true"` once the element enters the viewport
 * - Respects prefers-reduced-motion (CSS handles the override)
 * - Reveals only once (element stays visible after leaving viewport)
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delay > 0) {
              const t = window.setTimeout(() => setRevealed(true), delay);
              return () => window.clearTimeout(t);
            }
            setRevealed(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Component = Tag as "div";
  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      data-reveal
      data-revealed={revealed ? "true" : "false"}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Component>
  );
}
