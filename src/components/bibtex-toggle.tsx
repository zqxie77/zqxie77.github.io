"use client";

import { useEffect, useState } from "react";

function copyWithTextarea(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(textarea);
  return ok;
}

/** Copies the BibTeX on click instead of rendering it on the page. */
export function BibtexToggle({ bibtex }: { bibtex: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = window.setTimeout(() => setState("idle"), 1500);
    return () => window.clearTimeout(timer);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(bibtex);
      setState("copied");
    } catch {
      setState(copyWithTextarea(bibtex) ? "copied" : "failed");
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title="Copy BibTeX"
      className="prose-link cursor-pointer font-bold"
    >
      {state === "copied" ? "Copied!" : state === "failed" ? "Copy failed" : "BibTeX"}
      <span className="sr-only" aria-live="polite">
        {state === "copied" ? "BibTeX copied to clipboard" : ""}
      </span>
    </button>
  );
}
