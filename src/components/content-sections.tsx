import { Fragment } from "react";

import { BibtexToggle } from "@/components/bibtex-toggle";
import {
  type LinkKind,
  type Publication,
  SELF_NAME,
  advisors,
  authorName,
  education,
  isCoFirst,
  news,
  profile,
  publications,
  service,
} from "@/data/profile";

const LINK_LABELS: Record<LinkKind, string> = {
  paper: "Paper",
  code: "Code",
  website: "Website",
  productHunt: "Product Hunt",
};

const LINK_ORDER: LinkKind[] = ["paper", "code", "website", "productHunt"];

function SectionTitle({ id, emoji, children }: { id: string; emoji: string; children: React.ReactNode }) {
  return (
    <h1
      id={`${id}-title`}
      className="mt-8 mb-3 border-b border-rule pb-2 text-[1.4rem] leading-tight font-bold"
    >
      <span aria-hidden="true" className="mr-1.5">
        {emoji}
      </span>
      {children}
    </h1>
  );
}

function ExternalLink({ href, children, className = "prose-link" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

/** Renders `**bold**` markers used in the data file. */
function RichText({ text }: { text: string }) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>,
  );
}

function AdvisorList() {
  return advisors.map((advisor, i) => (
    <Fragment key={advisor.name}>
      {i > 0 ? " and " : null}
      <ExternalLink href={advisor.href}>
        {advisor.title} {advisor.name}
      </ExternalLink>
    </Fragment>
  ));
}

export function AboutSection() {
  const venues = new Intl.ListFormat("en").format(profile.highlightVenues);
  const school = education[0];

  return (
    <section id="about-me" aria-label="About me" className="flex flex-col gap-2.5">
      <p>
        I am currently a master&apos;s student at the {school.department},{" "}
        <ExternalLink href={school.schoolUrl}>{school.school}</ExternalLink>, advised by{" "}
        <AdvisorList />.
      </p>
      <p>
        My research interests include <strong>Agentic Reinforcement Learning</strong> in
        complex interactive environments, with applications in tool-use, deep research,
        and code agents.
      </p>
      <p>{`I have published in venues including ${venues}.`}</p>
      <p>
        Find my daily notes and updates on{" "}
        <ExternalLink href={profile.xiaohongshu}>Xiaohongshu</ExternalLink>. Feel free to
        reach out at{" "}
        <a href={`mailto:${profile.email}`} className="prose-link">
          {profile.email}
        </a>
        .
      </p>
    </section>
  );
}

export function NewsSection() {
  if (news.length === 0) return null;
  return (
    <section id="news" aria-labelledby="news-title">
      <SectionTitle id="news" emoji="🔥">
        News
      </SectionTitle>
      <ul className="list-disc space-y-1 pl-6">
        {news.map((item, i) => (
          <li key={i}>
            <em>{item.date}</em>: &nbsp;
            <RichText text={item.text} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Authors({ authors }: { authors: string[] }) {
  return authors.map((author, i) => {
    const name = authorName(author);
    return (
      <Fragment key={`${name}-${i}`}>
        {i > 0 ? ", " : null}
        {name === SELF_NAME ? <strong className="text-[#2f3437]">{name}</strong> : name}
        {isCoFirst(author) ? <sup>†</sup> : null}
      </Fragment>
    );
  });
}

function PublicationEntry({ pub }: { pub: Publication }) {
  const links = LINK_ORDER.filter((kind) => pub.links[kind]);
  const badge = [pub.venue, pub.year, pub.track].filter(Boolean).join(" ");
  const titleHref = pub.url ?? pub.links.paper;

  return (
    <li className="pl-0.5">
      <span className="venue-badge">{badge}</span>{" "}
      {pub.highlight ? <span className="text-award">({pub.highlight}) </span> : null}
      {titleHref ? (
        <ExternalLink href={titleHref}>{pub.title}</ExternalLink>
      ) : (
        <span className="font-medium text-[#2f3437]">{pub.title}</span>
      )}
      , <Authors authors={pub.authors} />
      {links.length > 0 || pub.bibtex ? (
        <>
          {" "}
          <span className="inline-block max-w-full">
            {links.map((kind, index) => (
              <Fragment key={kind}>
                {index > 0 ? " " : null}|&nbsp;
                <ExternalLink href={pub.links[kind]!} className="prose-link font-bold">
                  {LINK_LABELS[kind]}
                </ExternalLink>
              </Fragment>
            ))}
            {pub.bibtex ? (
              <>
                {links.length > 0 ? " " : null}|&nbsp;
                <BibtexToggle bibtex={pub.bibtex} />
              </>
            ) : null}
          </span>
        </>
      ) : null}
    </li>
  );
}

export function PublicationsSection() {
  return (
    <section id="publications" aria-labelledby="publications-title">
      <SectionTitle id="publications" emoji="📝">
        Publications
      </SectionTitle>
      <p className="mb-3 text-[0.93rem] text-subtle">
        <sup>†</sup> denotes equal contribution. Full list on{" "}
        <ExternalLink href={profile.scholar}>Google Scholar</ExternalLink>.
      </p>
      <ul className="list-disc space-y-2.5 pl-6">
        {publications.map((pub) => (
          <PublicationEntry key={pub.title} pub={pub} />
        ))}
      </ul>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-title">
      <SectionTitle id="education" emoji="📖">
        Education
      </SectionTitle>
      <ul className="list-disc space-y-1 pl-6">
        {education.map((item) => (
          <li key={`${item.school}-${item.start}`}>
            <em>
              {item.start} - {item.end}
            </em>
            , {item.degree}, {item.department},{" "}
            <ExternalLink href={item.schoolUrl}>{item.school}</ExternalLink>. Advised by{" "}
            <AdvisorList />.
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ServiceSection() {
  return (
    <section id="service" aria-labelledby="service-title">
      <SectionTitle id="service" emoji="🤝">
        Academic Service
      </SectionTitle>
      <ul className="list-disc space-y-1 pl-6">
        {service.map((item) => (
          <li key={item.role}>
            <strong>{item.role}</strong>:{" "}
            {item.venues.map((venue, i) => (
              <Fragment key={venue}>
                {/* Venue names contain commas, so keep each one whole and separate with "·". */}
                <span className="whitespace-nowrap">
                  {venue}
                  {i < item.venues.length - 1 ? <span className="text-subtle"> ·</span> : null}
                </span>{" "}
              </Fragment>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
}
