"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center hero-background"
    >
      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="text-center animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8 text-white max-w-5xl mx-auto px-4">
            Hands-On GTM Programs for{' '}
            <span className="relative">
              Startup Revenue Teams
              <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-white/30 rounded"></div>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 md:mb-12 text-white/90 max-w-4xl mx-auto font-medium px-4">
            Turn chaotic selling into a structured growth engine. Replace guesswork with proven GTM playbooks that drive faster deals and stronger results.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center px-4">
            <Button 
              variant="primary"
              size="lg" 
              className="group shadow-lg w-full sm:w-auto"
            >
              Book a 30-Min Intro Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
