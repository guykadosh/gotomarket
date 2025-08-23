"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useContactModal } from '@/components/ContactModalContext'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [shouldBeCompact, setShouldBeCompact] = useState(false)
  const { openModal } = useContactModal()

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
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
        backgroundColor: 'rgba(108, 99, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      } : {}}
    >
      {/* Decorative Shapes - Desktop */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)' }}
        ></div>
        <div 
          className="absolute -top-6 left-1/4 w-20 h-20 rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #8A7FFF 0%, transparent 70%)' }}
        ></div>
        <div 
          className="absolute -bottom-8 left-16 w-24 h-24 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)' }}
        ></div>
      </div>

      {/* Decorative Shapes - Mobile */}
      <div className="md:hidden absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)' }}
        ></div>
        <div 
          className="absolute -bottom-6 left-8 w-16 h-16 rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #8A7FFF 0%, transparent 70%)' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex justify-between items-center transition-all duration-300 ${shouldBeCompact ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/images/logofullwhite.svg" 
              alt="GTM Accelerator Program" 
              width={shouldBeCompact ? 240 : 300}
              height={shouldBeCompact ? 64 : 80}
              className="transition-all duration-300"
            />
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
              onClick={openModal}
            >
              Let&apos;s Talk
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
            className="md:hidden py-4 space-y-4 relative" 
            style={{
              backgroundColor: 'rgba(108, 99, 255, 0.95)', 
              backdropFilter: 'blur(10px)', 
              borderRadius: '12px', 
              marginTop: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Mobile menu decorative shape */}
            <div 
              className="absolute -top-2 -right-2 w-12 h-12 rounded-full opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #8A7FFF 0%, transparent 70%)' }}
            ></div>
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
              <Button 
                variant="primary" 
                size="md" 
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false)
                  openModal()
                }}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
