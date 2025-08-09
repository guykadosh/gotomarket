"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ExpertCardProps {
  id: number
  name: string
  title: string
  company: string
  image: string
  logo: string
}

interface MarqueeRowProps {
  items: ExpertCardProps[]
  direction: 'ltr' | 'rtl'
  speed: number
  className?: string
}

function ExpertCard({ expert }: { expert: ExpertCardProps }) {
  return (
    <div className="rounded-3xl p-5 min-w-[280px] w-[360px] h-[120px] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group flex items-center shadow-sm" style={{ backgroundColor: 'var(--gtm-primary-light)' }}>
      <div className="flex items-center space-x-4 w-full">
        {/* Avatar */}
        <div className="relative w-12 h-12 rounded-full bg-white overflow-hidden flex-shrink-0 shadow-sm">
          <Image
            src="/images/team/blankprofile.png"
            alt={expert.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        
        {/* Name & Title & Company */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-neutral-deep-navy truncate mb-1 leading-tight">
            {expert.name}
          </h3>
          <p className="text-sm font-medium text-neutral-cool-gray mb-1 leading-tight line-clamp-2">
            {expert.title}
          </p>
          <p className="text-xs text-neutral-cool-gray/80 truncate">
            {expert.company}
          </p>
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({ items, direction, speed, className = "" }: MarqueeRowProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items]
  
  return (
    <div className={`overflow-hidden py-2 ${className}`}>
      <div 
        className={`flex gap-6 ${prefersReducedMotion ? '' : 'animate-marquee-' + direction} hover:pause`}
        style={{
          '--marquee-speed': `${speed}s`
        } as React.CSSProperties}
      >
        {duplicatedItems.map((expert, index) => (
          <ExpertCard key={`${expert.id}-${index}`} expert={expert} />
        ))}
      </div>
    </div>
  )
}

export default function ExpertsSection() {
  const experts = [
    {
      id: 1,
      name: "Nir Goldstein",
      title: "Former VP Sales",
      company: "monday.com",
      image: "/images/experts/nir-goldstein.jpg",
      logo: "/images/logos/monday-logo.png"
    },
    {
      id: 2,
      name: "Einat Kadosh", 
      title: "Enablement Leader",
      company: "LinkedIn",
      image: "/images/experts/einat-kadosh.jpg",
      logo: "/images/logos/linkedin-logo.png"
    },
    {
      id: 3,
      name: "Ofri Cohen",
      title: "Global VP Sales",
      company: "Lusha",
      image: "/images/experts/ofri-cohen.jpg",
      logo: "/images/logos/lusha-logo.png"
    },
    {
      id: 4,
      name: "Idan Arealy",
      title: "RVP Sales",
      company: "Cynet",
      image: "/images/experts/idan-arealy.jpg",
      logo: "/images/logos/cynet-logo.png"
    },
    {
      id: 5,
      name: "Amitai Weiser",
      title: "Director of Sales",
      company: "monday.com",
      image: "/images/experts/amitai-weiser.jpg",
      logo: "/images/logos/monday-logo.png"
    },
    {
      id: 6,
      name: "Noa Zeldin",
      title: "Co-founder and CSO at With, Ex-VP Sales",
      company: "Zencity",
      image: "/images/experts/noa-zeldin.jpg",
      logo: "/images/logos/zencity-logo.png"
    },
    {
      id: 7,
      name: "Elad Sebban",
      title: "Israel Country Manager",
      company: "Workato",
      image: "/images/experts/elad-sebban.jpg",
      logo: "/images/logos/workato-logo.png"
    },
    {
      id: 8,
      name: "Eli Barenboim",
      title: "Regional Sales Manager",
      company: "Deel",
      image: "/images/experts/eli-barenboim.jpg",
      logo: "/images/logos/deel-logo.png"
    },
    {
      id: 9,
      name: "Gilad Komorov",
      title: "Ex-CRO at Granulate, Lightico & Feedvisor",
      company: "Multiple",
      image: "/images/experts/gilad-komorov.jpg",
      logo: "/images/logos/granulate-logo.png"
    },
    {
      id: 10,
      name: "Ruby Katz",
      title: "Regional Sales Manager",
      company: "monday.com",
      image: "/images/experts/ruby-katz.jpg",
      logo: "/images/logos/monday-logo.png"
    },
    {
      id: 11,
      name: "Joseph Fuerst",
      title: "Ex-VP Sales Development at Sisense, WalkMe & Similarweb",
      company: "Multiple",
      image: "/images/experts/joseph-fuerst.jpg",
      logo: "/images/logos/sisense-logo.png"
    },
    {
      id: 12,
      name: "Gad Amar",
      title: "VP Sales",
      company: "Atera",
      image: "/images/experts/gad-amar.jpg",
      logo: "/images/logos/atera-logo.png"
    },
    {
      id: 13,
      name: "Einat Etzioni",
      title: "CMO at TSG, Ex-CMO",
      company: "Panorays",
      image: "/images/experts/einat-etzioni.jpg",
      logo: "/images/logos/panorays-logo.png"
    },
    {
      id: 14,
      name: "Ran Friedman",
      title: "Head of Business Development",
      company: "AI21 Labs",
      image: "/images/experts/ran-friedman.jpg",
      logo: "/images/logos/ai21-logo.png"
    },
    {
      id: 15,
      name: "Yaniv Levy",
      title: "Global Director of Business Development",
      company: "Buildots",
      image: "/images/experts/yaniv-levy.jpg",
      logo: "/images/logos/buildots-logo.png"
    },
    {
      id: 16,
      name: "Leore Spira",
      title: "Director of Revenue Operations",
      company: "BlinkOps",
      image: "/images/experts/leore-spira.jpg",
      logo: "/images/logos/blinkops-logo.png"
    },
    {
      id: 17,
      name: "Veronika Bukhman",
      title: "AVP Sales & Account Management",
      company: "Similarweb",
      image: "/images/experts/veronika-bukhman.jpg",
      logo: "/images/logos/similarweb-logo.png"
    },
    {
      id: 18,
      name: "Koby Freudenberger",
      title: "Ex-VP Customer Success at monday.com & Checkmarx",
      company: "Multiple",
      image: "/images/experts/koby-freudenberger.jpg",
      logo: "/images/logos/monday-logo.png"
    },
    {
      id: 19,
      name: "Dana Averbouch",
      title: "VP Revenue Marketing at Similarweb, Ex-CMO",
      company: "Panaya",
      image: "/images/experts/dana-averbouch.jpg",
      logo: "/images/logos/similarweb-logo.png"
    }
  ]

  // Group experts into staggered rows for marquee
  const marqueeRows = [
    {
      items: experts.slice(0, 6),   // Row 1: 6 experts
      direction: 'ltr' as const,
      speed: 30,
      offset: 'pl-0'
    },
    {
      items: experts.slice(6, 13),  // Row 2: 7 experts
      direction: 'rtl' as const,
      speed: 36,
      offset: 'pl-12'
    },
    {
      items: experts.slice(13, 19), // Row 3: 6 experts
      direction: 'ltr' as const,
      speed: 42,
      offset: 'pl-6'
    }
  ]

  return (
    <section id="experts" className="py-16 md:py-24 bg-primary-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-deep-navy leading-tight mb-6">
            Meet Our GTM Experts
          </h2>
          <p className="text-base md:text-lg text-neutral-cool-gray max-w-3xl mx-auto">
            Learn from seasoned professionals who have built and scaled GTM functions 
            at leading companies across various industries.
          </p>
        </div>

        {/* Staggered Marquee Rows */}
        <div className="space-y-6 md:space-y-8">
          {marqueeRows.map((row, rowIndex) => (
            <MarqueeRow
              key={rowIndex}
              items={row.items}
              direction={row.direction}
              speed={row.speed}
              className={row.offset}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
