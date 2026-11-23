"use client";

import { useEffect, useState } from "react";

type GitHubStarsProps = {
  repositoryUrl: string;
  initialCount: number;
};

export function GitHubStars({ repositoryUrl, initialCount }: GitHubStarsProps) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const controller = new AbortController();

    async function refreshCount() {
      try {
        const { pathname } = new URL(repositoryUrl);
        const response = await fetch(`https://api.github.com/repos${pathname}`, {
          signal: controller.signal,
        });
        if (!response.ok) return;

        const { stargazers_count: stars } = await response.json();
        if (Number.isSafeInteger(stars) && stars >= 0) setCount(stars);
      } catch {
        // Keep the last verified count when GitHub cannot be reached.
      }
    }

    void refreshCount();
    return () => controller.abort();
  }, [repositoryUrl]);

  const formattedCount = count.toLocaleString("en-US");

  return (
    <>
      {"\u00a0"}
      <span
        role="img"
        aria-label={`${formattedCount} stars`}
        className="inline-block rounded-md border border-link/20 bg-link/5 px-1.5 py-0.5 align-middle text-[0.95em] leading-none font-bold whitespace-nowrap text-link tabular-nums"
      >
        ★{"\u00a0"}{formattedCount}
      </span>
    </>
  );
}
