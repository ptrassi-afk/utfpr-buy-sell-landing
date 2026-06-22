import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { VideoSection } from "@/components/landing/VideoSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { DesignSprintSection } from "@/components/landing/DesignSprintSection";
import { TeamSection } from "@/components/landing/TeamSection";
import { PrototypeSection } from "@/components/landing/PrototypeSection";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UTFPR Buy e Sell — Marketplace da UTFPR Campo Mourão" },
      {
        name: "description",
        content:
          "Marketplace para estudantes da UTFPR-CM comprarem, venderem e divulgarem produtos e serviços. Projeto de IHC.",
      },
      { property: "og:title", content: "UTFPR Buy e Sell" },
      {
        property: "og:description",
        content:
          "Compre, venda e divulgue produtos entre estudantes da UTFPR Campo Mourão.",
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
