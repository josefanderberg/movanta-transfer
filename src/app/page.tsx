import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PrivateSection } from "@/components/PrivateSection";
import { BusinessSection } from "@/components/BusinessSection";
import { TrustSection } from "@/components/TrustSection";
import { DropsSection } from "@/components/DropsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { ImpactSection } from "@/components/ImpactSection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <PrivateSection />
        <BusinessSection />
        <TrustSection />
        <DropsSection />
        <CommunitySection />
        <ImpactSection />
        <WaitlistForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
