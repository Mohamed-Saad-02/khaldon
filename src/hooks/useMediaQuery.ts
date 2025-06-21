"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to evaluate a media query.
 * Works safely with SSR environments.
 *
 * @param query - CSS media query string (e.g., '(max-width: 768px)')
 * @returns boolean - true if the query matches, false otherwise
 */
export function useMediaQuery(query: string): boolean {
  // Default state is false to avoid mismatch during SSR
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Return early if window is undefined (e.g. during SSR)
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Set initial value
    setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
