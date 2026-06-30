import { AboutSection } from "@/components/landing/AboutSection";
import { DesignSprintSection } from "@/components/landing/DesignSprintSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PrototypeSection } from "@/components/landing/PrototypeSection";
import { TeamSection } from "@/components/landing/TeamSection";
import { VideoSection } from "@/components/landing/VideoSection";

export function App() {
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
