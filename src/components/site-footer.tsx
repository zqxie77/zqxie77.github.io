import { VisitorCounter } from "@/components/visitor-counter";
import { profile } from "@/data/profile";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

export function SiteFooter() {
  const year = profile.lastUpdated.slice(0, 4);

  return (
    <footer className="mt-14 border-t border-rule bg-[#fafafa]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-3 px-4 py-6 text-center text-[0.8rem] text-subtle">
        <VisitorCounter {...profile.visitorCounter} />
        <p>
          © {year} {profile.name} · Last updated:{" "}
          <time dateTime={profile.lastUpdated}>{formatDate(profile.lastUpdated)}</time>
        </p>
      </div>
    </footer>
  );
}
