"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section 
      className="relative py-16 md:py-24 flex items-center justify-center hero-background overflow-hidden"
    >
      {/* Decorative Shapes - Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Desktop Shapes */}
        <div className="hidden md:block">
          <div 
            className="absolute top-20 right-24 w-64 h-64 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #8A7FFF 0%, transparent 70%)' }}
          ></div>
          <div 
            className="absolute bottom-32 left-16 w-48 h-48 rounded-full opacity-25"
            style={{ background: 'radial-gradient(circle, #4C6FFF 0%, transparent 70%)' }}
          ></div>
          <div 
            className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)' }}
          ></div>
          <div 
            className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)' }}
          ></div>
        </div>
        
        {/* Mobile Shapes */}
        <div className="md:hidden">
          <div 
            className="absolute top-16 right-8 w-32 h-32 rounded-full opacity-25"
            style={{ background: 'radial-gradient(circle, #8A7FFF 0%, transparent 70%)' }}
          ></div>
          <div 
            className="absolute bottom-20 left-4 w-24 h-24 rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)' }}
          ></div>
          <div 
            className="absolute top-1/2 right-16 w-20 h-20 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)' }}
          ></div>
        </div>
      </div>
      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-18 relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5 md:mb-7 text-white max-w-5xl mx-auto px-4">
            Hands-On GTM Programs for{' '}
            <span className="relative">
              Startup Revenue Teams
              <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-white/30 rounded"></div>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-2xl leading-relaxed mb-7 md:mb-10 text-white/90 max-w-4xl mx-auto font-medium px-4">
            Turn chaotic selling into a structured growth engine. Replace guesswork with proven GTM playbooks that drive faster deals and stronger results.
          </p>

          {/* CTA Button */}
          <div className="mb-8 flex justify-center px-4">
            <Button 
              variant="primary"
              size="lg" 
              className="group shadow-lg w-full sm:w-auto"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
