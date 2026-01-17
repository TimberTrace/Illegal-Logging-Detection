import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TechnologySection } from "@/components/technology-section"
import { DemoSection } from "@/components/demo-section"
import { AnalyticsSection } from "@/components/analytics-section"
import { AudienceSection } from "@/components/audience-section"
import { ComplianceSection } from "@/components/compliance-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <TechnologySection />
      <DemoSection />
      <AnalyticsSection />
      <AudienceSection />
      <ComplianceSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
