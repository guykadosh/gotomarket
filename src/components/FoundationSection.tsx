"use client"

import { Shield, Zap, TrendingUp } from 'lucide-react'

export default function FoundationSection() {
  const results = [
    { 
      icon: Shield, 
      text: 'A tighter, cleaner pipeline',
      description: 'Focused qualification and clear stages'
    },
    { 
      icon: Zap, 
      text: 'Shorter sales cycles',
      description: 'Streamlined process and faster decisions'
    },
    { 
      icon: TrendingUp, 
      text: 'Higher win rates',
      description: 'Better targeting and stronger messaging'
    }
  ]

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-4" style={{color: '#0A1F44'}}>
            Strengthen the Foundation, Then Accelerate
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg leading-relaxed px-4" style={{color: '#6B7280'}}>
              Too many startups jump into sales calls before they&apos;re ready—messaging is unclear, 
              stages are messy, and results are unpredictable. We pause the noise, refine your narrative, 
              and install a proven GTM system—so every call is focused, every stage is defined, 
              and your revenue engine runs smoother.
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12 px-4" style={{color: '#0A1F44'}}>
            Results You Can Expect:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {results.map((result, index) => {
              const IconComponent = result.icon
              return (
                <div 
                  key={index}
                  className="text-center p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-14 md:w-16 h-14 md:h-16 mx-auto mb-3 md:mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#E5F1FB'}}>
                    <IconComponent className="w-7 md:w-8 h-7 md:h-8" style={{color: '#1E5BB8'}} />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2" style={{color: '#0A1F44'}}>
                    {result.text}
                  </h4>
                  <p className="text-xs md:text-sm" style={{color: '#6B7280'}}>
                    {result.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
