"use client";

import { useState } from "react";

export function VisitorCounter({ href, src }: { href: string; src: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
      {/* eslint-disable-next-line @next/next/no-img-element -- third-party counter must load on every visit */}
      <img
        src={src}
        alt="Visitor counter"
        width={90}
        height={20}
        loading="lazy"
        ref={(img) => {
          // The image may already have failed before hydration attached onError.
          if (img?.complete && img.naturalWidth === 0) setFailed(true);
        }}
        onError={() => setFailed(true)}
      />
    </a>
  );
}
