import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { QuizSection } from "@/components/quiz-section";
import { FreeToolsSection } from "@/components/free-tools-section";
import { GuidesSection } from "@/components/guides-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <QuizSection />
      <FreeToolsSection />
      <GuidesSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
