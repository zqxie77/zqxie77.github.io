import { AuthorProfile } from "@/components/author-profile";
import {
  AboutSection,
  EducationSection,
  HonorsAndAwardsSection,
  NewsSection,
  PublicationsSection,
  ServiceSection,
} from "@/components/content-sections";
import { Masthead } from "@/components/masthead";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Masthead />
      <div className="mx-auto w-full max-w-[1280px] flex-1 px-4 pt-6 lg:flex lg:gap-14 lg:pt-8">
        <AuthorProfile />
        <main className="min-w-0 flex-1 pt-5 lg:pt-0">
          <AboutSection />
          <NewsSection />
          <PublicationsSection />
          <EducationSection />
          <HonorsAndAwardsSection />
          <ServiceSection />
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
