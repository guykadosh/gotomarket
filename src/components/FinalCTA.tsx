"use client"

import { Button } from '@/components/ui/button'

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-16" style={{backgroundColor: '#1F1B3A'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 px-4 leading-tight">
          Ready to accelerate with GTM?
        </h2>
        
        <div className="flex justify-center">
          <Button 
            size="lg"
            style={{
              backgroundColor: '#6C63FF',
              borderColor: '#5A4FCF'
            }}
            className="w-full sm:w-auto hover:opacity-90 text-sm md:text-base px-8 py-3 border-2"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
