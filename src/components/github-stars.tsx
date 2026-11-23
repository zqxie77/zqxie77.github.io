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

  return (
    <span className="whitespace-nowrap text-[0.85em] font-normal">
      {" "}<span aria-hidden="true">★ </span>{count.toLocaleString("en-US")}
      <span className="sr-only"> GitHub stars</span>
    </span>
  );
}
