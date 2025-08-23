"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useContactModal } from '@/components/ContactModalContext'

export default function HeroSection() {
  const { openModal } = useContactModal()
  return (
    <section 
      className="relative py-16 md:py-24 flex items-center justify-center hero-background overflow-hidden"
    >
      {/* Decorative Shapes - Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Desktop Shapes */}
        <div className="hidden md:block">
          {/* Organic Blob Shape - Top Right */}
          <div className="absolute top-20 right-24 w-72 h-72 opacity-30">
            <div 
              className="w-full h-full"
              style={{ 
                backgroundColor: '#1F1B3A',
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
              }}
            ></div>
          </div>
          
          {/* Rounded Rectangle with Curves - Bottom Left */}
          <div className="absolute bottom-28 left-16 w-56 h-40 opacity-35">
            <div 
              className="w-full h-full"
              style={{ 
                backgroundColor: '#0d0026',
                borderRadius: '25px 50px 25px 50px'
              }}
            ></div>
          </div>
          
          {/* Kidney/Bean Shape - Top Left */}
          <div className="absolute top-32 left-20 w-48 h-32 opacity-25">
            <div 
              className="w-full h-full"
              style={{ 
                backgroundColor: '#5A4FCF',
                borderRadius: '100px 20px 100px 20px'
              }}
            ></div>
          </div>
          
          {/* Rounded Oval with Indent - Center Right */}
          <div className="absolute top-1/2 right-32 w-40 h-56 opacity-30">
            <div 
              className="w-full h-full relative"
              style={{ 
                backgroundColor: '#4C6FFF',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
              }}
            >
              <div 
                className="absolute top-4 right-4 w-8 h-8"
                style={{ 
                  backgroundColor: '#6C63FF',
                  borderRadius: '50%'
                }}
              ></div>
            </div>
          </div>
          
          {/* Pebble Shape - Bottom Right */}
          <div className="absolute bottom-40 right-1/4 w-36 h-24 opacity-35">
            <div 
              className="w-full h-full"
              style={{ 
                backgroundColor: '#6C63FF',
                borderRadius: '50px 80px 30px 60px'
              }}
            ></div>
          </div>
          
          {/* Cloud-like Shape - Middle Left */}
          <div className="absolute top-1/3 left-8 w-32 h-20 opacity-25">
            <div 
              className="w-full h-full relative"
              style={{ 
                backgroundColor: '#8A7FFF',
                borderRadius: '20px 40px 60px 20px'
              }}
            >
              <div 
                className="absolute -top-2 left-6 w-12 h-12"
                style={{ 
                  backgroundColor: '#8A7FFF',
                  borderRadius: '50%'
                }}
              ></div>
              <div 
                className="absolute -top-1 right-8 w-8 h-8"
                style={{ 
                  backgroundColor: '#8A7FFF',
                  borderRadius: '50%'
                }}
              ></div>
            </div>
          </div>
          
          {/* Teardrop Shape - Bottom Center */}
          <div className="absolute bottom-1/4 left-1/2 w-20 h-32 opacity-30 transform rotate-12">
            <div 
              className="w-full h-full"
              style={{ 
                backgroundColor: '#5A4FCF',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
              }}
            ></div>
          </div>
        </div>
        
        {/* Mobile Shapes */}
        <div className="md:hidden">
          {/* Organic Blob - Top Right */}
          <div className="absolute top-12 right-4 w-40 h-40 opacity-35">
            <div 
              className="w-full h-full"
              style={{ 
                backgroundColor: '#1F1B3A',
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
              }}
            ></div>
          </div>
          
          {/* Rounded Rectangle - Bottom Left */}
          <div className="absolute bottom-16 left-2 w-32 h-24 opacity-30">
            <div 
              className="w-full h-full"
              style={{ 
                backgroundColor: '#0d0026',
                borderRadius: '20px 40px 20px 40px'
              }}
            ></div>
          </div>
          
          {/* Kidney Shape - Center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-16 opacity-25">
            <div 
              className="w-full h-full"
              style={{ 
                backgroundColor: '#5A4FCF',
                borderRadius: '50px 10px 50px 10px'
              }}
            ></div>
          </div>
          
          {/* Small Pebble Shapes */}
          <div 
            className="absolute top-1/4 right-12 w-12 h-8 opacity-40"
            style={{ 
              backgroundColor: '#4C6FFF',
              borderRadius: '20px 30px 15px 25px'
            }}
          ></div>
          <div 
            className="absolute bottom-1/4 left-8 w-10 h-14 opacity-35"
            style={{ 
              backgroundColor: '#8A7FFF',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
            }}
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
              className="group shadow-2xl w-full sm:w-auto text-base sm:text-lg font-bold px-6 sm:px-8 py-3 sm:py-4 relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-none"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
                border: '2px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)'
                e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)'
                e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.8)'
              }}
              onClick={openModal}
            >
              {/* Animated background shimmer - Desktop hover only */}
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Animated background shimmer - Mobile continuous loop */}
              <div 
                className="sm:hidden absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                style={{
                  animation: 'shimmer 3s ease-in-out infinite'
                }}
              ></div>
              
              <span className="relative z-10 flex items-center">
                {/* Rocket SVG Icon */}
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                Start Your GTM Journey
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Button>
          </div>

          {/* Add keyframes for mobile shimmer animation */}
          <style jsx>{`
            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
              }
              50% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
          `}</style>
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
