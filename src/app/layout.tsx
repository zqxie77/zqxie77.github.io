import type { Metadata, Viewport } from "next";

import { profile } from "@/data/profile";
import "./globals.css";

const title = `${profile.name} (${profile.nativeName}) - Homepage`;
const description = `${profile.name} is a master's student at ${profile.affiliation}. Research interests: ${profile.researchSummary}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  keywords: [
    profile.name,
    profile.nativeName,
    "Zhejiang University",
    "Agentic Reinforcement Learning",
    "Tool Use",
    "Deep Research",
    "Code Agents",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  openGraph: {
    type: "profile",
    url: profile.siteUrl,
    title,
    description,
    images: [{ url: profile.avatar, width: 460, height: 460 }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [profile.avatar],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
