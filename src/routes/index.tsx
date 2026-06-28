import { createFileRoute } from "@tanstack/react-router";

import { AboutSection } from "@/components/landing/AboutSection";
import { DesignSprintSection } from "@/components/landing/DesignSprintSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PrototypeSection } from "@/components/landing/PrototypeSection";
import { TeamSection } from "@/components/landing/TeamSection";
import { VideoSection } from "@/components/landing/VideoSection";
import { SITE } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: SITE.name },
      {
        property: "og:description",
        content: `Compre, venda e divulgue produtos entre estudantes da ${SITE.campus}.`,
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <AboutSection />
        <DesignSprintSection />
        <TeamSection />
        <PrototypeSection />
      </main>
      <Footer />
    </div>
  );
}
