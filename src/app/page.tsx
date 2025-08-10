import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FoundationSection from '@/components/FoundationSection'
import WhyDifferentSection from '@/components/WhyDifferentSection'
import GTMSupportSection from '@/components/GTMSupportSection'
import ProgramsSection from '@/components/ProgramsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import DetailedTestimonialsSection from '@/components/DetailedTestimonialsSection'
import ExpertsSection from '@/components/ExpertsSection'
import FinalCTA from '@/components/FinalCTA'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <Header />
      <HeroSection />
      <FoundationSection />
      <ExpertsSection />
      <WhyDifferentSection />
      {/* <GTMSupportSection /> */}
      <ProgramsSection />
      {/* <TestimonialsSection /> */}
      <DetailedTestimonialsSection />
      <FinalCTA />
    </main>
  )
}
