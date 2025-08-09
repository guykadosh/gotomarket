"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [shouldBeCompact, setShouldBeCompact] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#detailed-testimonials', label: 'Success Stories' },
    { href: '#experts', label: 'Experts' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      
      // Change shape when scrolled past 60% of viewport height (before it becomes visible)
      setShouldBeCompact(scrollPosition > viewportHeight * 0.6)
      // Show sticky header when scrolled past 80% of viewport height
      setIsScrolled(scrollPosition > viewportHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`${isScrolled ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={isScrolled ? {
        backgroundColor: 'rgba(30, 91, 184, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${shouldBeCompact ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <div className="flex items-center">
            <div 
              className={`rounded-lg flex items-center justify-center ${
                shouldBeCompact ? 'w-10 h-10' : 'w-12 h-12'
              }`}
              style={isScrolled ? {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              } : {
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span className={`text-white font-bold ${
                shouldBeCompact ? 'text-base' : 'text-lg'
              }`}>GTM</span>
            </div>
            <span className={`ml-3 font-semibold text-white ${
              shouldBeCompact ? 'text-lg' : 'text-xl'
            }`}>
              GTM Academy
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium transition-colors duration-200 hover:text-white text-white/80"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="outline"
              size="md"
              className="hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="md:hidden py-4 space-y-4" 
            style={{
              backgroundColor: 'rgba(30, 91, 184, 0.95)', 
              backdropFilter: 'blur(10px)', 
              borderRadius: '12px', 
              marginTop: '8px'
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block font-medium py-2 px-4 transition-colors duration-200 text-white hover:text-white/80"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-4">
              <Button variant="primary" size="md" className="w-full">
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
