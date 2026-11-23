import {
  BuildingIcon,
  GraduationCapIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";
import Image from "next/image";

import { GitHubIcon, XiaohongshuAppIcon } from "@/components/brand-icons";
import { profile } from "@/data/profile";

const LINKS = [
  { label: "Email", href: `mailto:${profile.email}`, icon: MailIcon },
  { label: "GitHub", href: profile.github, icon: GitHubIcon },
  { label: "Google Scholar", href: profile.scholar, icon: GraduationCapIcon },
  { label: "Xiaohongshu", href: profile.xiaohongshu, icon: XiaohongshuAppIcon },
];

function externalProps(href: string) {
  return href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}

export function AuthorProfile() {
  const displayName = `${profile.name} (${profile.nativeName})`;

  return (
    <aside
      aria-label="Profile"
      className="lg:sticky lg:top-[4.5rem] lg:w-[220px] lg:shrink-0 lg:self-start"
    >
      {/* Small screens: compact row like AcadHomepage's mobile header. */}
      <div className="flex items-center gap-4 border-b border-rule pb-5 lg:hidden">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={160}
          height={160}
          priority
          className="size-[76px] shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0">
          <h2 className="text-[1.2rem] leading-tight font-bold">{displayName}</h2>
          <p className="mt-0.5 text-[0.87rem] text-subtle">
            {profile.affiliation} · {profile.location}
          </p>
          <ul className="mt-2 flex items-center gap-1">
            {LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...externalProps(href)}
                  aria-label={label}
                  className="flex size-8 items-center justify-center rounded-md text-text transition-colors hover:bg-rule"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Large screens: classic left sidebar. */}
      <div className="hidden lg:block">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={350}
          height={350}
          priority
          className="size-[175px] rounded-full border border-rule object-cover p-[5px]"
        />
        <h2 className="mt-3 mb-2.5 text-[1.3rem] leading-snug font-bold">
          {displayName}
        </h2>
        <p className="mb-5 text-[0.93rem] leading-relaxed">{profile.bio}</p>
        <ul className="flex flex-col gap-1.5 text-[0.93rem]">
          <li className="flex items-center gap-2.5">
            <MapPinIcon className="size-4 shrink-0" aria-hidden="true" />
            {profile.location}
          </li>
          <li className="flex items-center gap-2.5">
            <BuildingIcon className="size-4 shrink-0" aria-hidden="true" />
            {profile.affiliation}
          </li>
          {LINKS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                {...externalProps(href)}
                className="flex items-center gap-2.5 hover:underline"
              >
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
