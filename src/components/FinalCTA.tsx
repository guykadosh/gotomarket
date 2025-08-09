"use client"

import { Button } from '@/components/ui/button'

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-16" style={{backgroundColor: '#1E5BB8'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 px-4 leading-tight">
          Want to turn solid foundations into faster, smarter revenue?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="outline" 
            size="lg"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'white',
              color: 'white'
            }}
            className="w-full sm:w-auto hover:bg-white hover:text-blue-600 text-sm md:text-base"
          >
            Talk to an Expert
          </Button>
          <Button 
            size="lg"
            style={{
              backgroundColor: 'white',
              color: '#1E5BB8'
            }}
            className="w-full sm:w-auto hover:bg-gray-100 text-sm md:text-base"
          >
            Download Full Deck
          </Button>
        </div>
      </div>
    </section>
  )
}
