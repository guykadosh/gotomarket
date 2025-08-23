"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Download } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Transform Your GTM Approach?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join hundreds of founders and revenue teams who have built predictable, 
          scalable growth engines with our proven GTM frameworks.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 group"
            onClick={() => window.open('https://forms.monday.com/forms/d7b6a117c080ed8981fc75ee6a283745?r=euc1', '_blank')}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Let&apos;s Talk
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary"
            onClick={() => window.open('https://forms.monday.com/forms/d7b6a117c080ed8981fc75ee6a283745?r=euc1', '_blank')}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Program Guide
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/80 text-sm">
          <div className="flex items-center justify-center">
            <span className="font-semibold mr-2">✓</span>
            No long-term commitments
          </div>
          <div className="flex items-center justify-center">
            <span className="font-semibold mr-2">✓</span>
            Satisfaction guaranteed
          </div>
          <div className="flex items-center justify-center">
            <span className="font-semibold mr-2">✓</span>
            Start seeing results in weeks
          </div>
        </div>
      </div>
    </section>
  )
}
