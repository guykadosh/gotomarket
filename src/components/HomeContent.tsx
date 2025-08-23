'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FoundationSection from '@/components/FoundationSection'
import WhyDifferentSection from '@/components/WhyDifferentSection'
import ProgramsSection from '@/components/ProgramsSection'
import ProgramFeaturesSection from '@/components/ProgramFeaturesSection'
import DetailedTestimonialsSection from '@/components/DetailedTestimonialsSection'
import ExpertsSection from '@/components/ExpertsSection'
import FinalCTA from '@/components/FinalCTA'
import SmoothScroll from '@/components/SmoothScroll'
import ContactModal from '@/components/ContactModal'
import { useContactModal } from '@/components/ContactModalContext'

export default function HomeContent() {
  const { isOpen, closeModal } = useContactModal()

  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <Header />
      <HeroSection />
      <FoundationSection />
      <ExpertsSection />
      <WhyDifferentSection />
      <ProgramFeaturesSection />
      <ProgramsSection />
      <DetailedTestimonialsSection />
      <FinalCTA />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </main>
  )
}
