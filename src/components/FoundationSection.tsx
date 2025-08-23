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
    <section id="about" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-4" style={{color: '#1F1B3A'}}>
            Strengthen the Foundation, Then Accelerate
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed px-4" style={{color: '#5A4FCF'}}>
              Too many startups jump into sales calls before they&apos;re ready—messaging is unclear, 
              stages are messy, and results are unpredictable. We pause the noise, refine your narrative, 
              and install a proven GTM system—so every call is focused, every stage is defined, 
              and your revenue engine runs smoother.
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="md-8">
          <h3 className="text-xl md:text-2xl font-bold text-center md:mb-8 px-4" style={{color: '#1F1B3A'}}>
            Results You Can Expect:
          </h3>
          
          {/* Mobile Layout - Icons left of text */}
          <div className="md:hidden space-y-4">
            {results.map((result, index) => {
              const IconComponent = result.icon
              return (
                <div 
                  key={index}
                  className="flex items-start bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 mr-4 flex-shrink-0 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(108, 99, 255, 0.1)'}}>
                    <IconComponent className="w-6 h-6" style={{color: '#6C63FF'}} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold" style={{color: '#1F1B3A'}}>
                      {result.text}
                    </h4>
                    <p className="text-base" style={{color: '#5A4FCF'}}>
                      {result.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Desktop Layout - Original centered cards */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {results.map((result, index) => {
              const IconComponent = result.icon
              return (
                <div 
                  key={index}
                  className="text-center p-4 md:p-6 rounded-xl bg-gray-50 hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 md:w-14 h-12 md:h-14 mx-auto mb-2 md:mb-3 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(108, 99, 255, 0.1)'}}>
                    <IconComponent className="w-6 md:w-7 h-6 md:h-7" style={{color: '#6C63FF'}} />
                  </div>
                  <h4 className="text-xl md:text-xl font-semibold mb-0" style={{color: '#1F1B3A'}}>
                    {result.text}
                  </h4>
                  <p className="text-base md:text-base" style={{color: '#5A4FCF'}}>
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
