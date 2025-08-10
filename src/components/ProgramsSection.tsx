"use client"

import { Button } from '@/components/ui/button'
import { Check, Star, Users, Building2, GraduationCap, Briefcase, Wrench, HandHeart, Brain, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function ProgramsSection() {
  const [showFullDetails, setShowFullDetails] = useState(false)

  const programBenefits = [
    {
      icon: GraduationCap,
      title: "Theory to understand what works",
      description: "Learn the proven frameworks and methodologies behind successful GTM strategies"
    },
    {
      icon: Briefcase,
      title: "Practical sessions to apply it in your day-to-day",
      description: "Apply what you learn through hands-on exercises and real-world scenarios"
    },
    {
      icon: Wrench,
      title: "Plug-and-play templates to reinforce and scale",
      description: "Get ready-to-use tools and frameworks customized for your business"
    },
    {
      icon: HandHeart,
      title: "1:1 mentoring from our expert pool, personalized to your product",
      description: "Receive personalized guidance from industry experts who understand your challenges"
    },
    {
      icon: Brain,
      title: "Offline practice, customized for your sales scenarios",
      description: "Reinforce learning with AI-powered practice sessions tailored to your specific use cases"
    }
  ]
  const programs = [
    {
      id: 1,
      title: "Sales Foundation",
      subtitle: "Layer 1: Sales Execution (TOF → BOF)",
      description: "Master the fundamentals of selling: from defining your value to running strong discovery, demos, and closing conversations.",
      whoFor: "Early-stage founders leading sales themselves",
      price: "$2,700",
      additionalPrice: "$800/additional participant",
      hours: "14 hrs",
      sessions: "6 sessions (2 hrs each) + 2 practicals",
      mentoring: "1 session",
      icon: Users,
      color: "blue",
      popular: false,
      features: [
        "Define Your ICP, UVP & Value Story",
        "Mastering Discovery Calls", 
        "High-Impact Product Demos",
        "Handling Objections with Confidence",
        "Closing & Negotiating Deals",
        "Sales Process & Meeting Mastery"
      ],
      deliverables: [
        "ICP + UVP template",
        "Value messaging framework", 
        "Discovery call script",
        "Demo flow structure",
        "Objection handling playbook",
        "Negotiation checklist"
      ]
    },
    {
      id: 2, 
      title: "Pipeline & Growth Execution",
      subtitle: "Layer 2: Pipeline & Growth Execution",
      description: "Build strong top-of-funnel pipeline engines, marketing alignment, and team capabilities to support scale.",
      whoFor: "Founders with a small GTM or sales team beginning to scale",
      price: "$5,500",
      additionalPrice: "$700/additional participant (up to 3)",
      hours: "12 hrs", 
      sessions: "6 sessions (2 hrs each) + 2 practicals",
      mentoring: "3 sessions",
      icon: Building2,
      color: "purple", 
      popular: true,
      features: [
        "AI-Powered Prospecting Playbook",
        "Building an Outbound Machine",
        "Hiring Salespeople & SDRs", 
        "Marketing Strategy & Execution",
        "Full Funnel Practice Simulation"
      ],
      deliverables: [
        "AI prospecting workflow",
        "Outbound cadence templates",
        "Hiring Playbook – Full Process",
        "SDR hiring toolkit", 
        "Marketing strategy one-pager",
        "Full GTM role-play template"
      ]
    },
    {
      id: 3,
      title: "End to End GTM Scaling",
      subtitle: "Layer 3: End to End GTM Scaling Program", 
      description: "Align your entire organization for GTM scale — across leadership, RevOps, CS, marketing, and sales — with advanced processes, systems, and growth motion.",
      whoFor: "Growth-stage startups with dedicated sales, marketing, and CS teams ready to operationalize and scale their GTM machine",
      price: "$12,000",
      additionalPrice: "per company (unlimited participants)",
      hours: "12 hrs",
      sessions: "6 sessions (2 hrs each)",
      mentoring: "10 sessions", 
      icon: Star,
      color: "green",
      popular: false,
      features: [
        "Strategic GTM Planning + Inbound Motion",
        "Team Management & Forecasting", 
        "Onboarding & Enablement Systems",
        "RevOps & AI GTM Stack",
        "Customer Journey, CS & Expansion",
        "Advanced MEDDIC Execution"
      ],
      deliverables: [
        "GTM strategic plan",
        "SDR inbound playbook", 
        "Team KPI dashboard",
        "Forecast template",
        "Onboarding & enablement plan",
        "RevOps tooling map",
        "Customer journey map",
        "MEDDIC sales toolkit"
      ]
    }
  ]

  const getColorClasses = (color: string, popular: boolean) => {
    const colors = {
      blue: {
        border: popular ? 'border-2' : 'border-gray-200',
        borderColor: popular ? '#6C63FF' : '#e5e7eb',
        badge: 'bg-blue-100',
        badgeTextColor: '#4C6FFF',
        button: 'text-white',
        buttonStyle: { backgroundColor: '#6C63FF', borderColor: '#5A4FCF' }
      },
      purple: {
        border: popular ? 'border-2' : 'border-gray-200',
        borderColor: popular ? '#5A4FCF' : '#e5e7eb', 
        badge: 'bg-purple-100',
        badgeTextColor: '#5A4FCF',
        button: 'text-white',
        buttonStyle: { backgroundColor: '#5A4FCF', borderColor: '#6C63FF' }
      },
      green: {
        border: popular ? 'border-2' : 'border-gray-200',
        borderColor: popular ? '#4C6FFF' : '#e5e7eb',
        badge: 'bg-green-100',
        badgeTextColor: '#4C6FFF', 
        button: 'text-white',
        buttonStyle: { backgroundColor: '#4C6FFF', borderColor: '#5A4FCF' }
      }
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="programs" className="py-12 md:py-20" style={{ backgroundColor: '#F3F4FA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-4" style={{ color: '#1F1B3A' }}>
            Programs at a Glance
          </h2>
          <p className="text-base md:text-lg max-w-4xl mx-auto mb-6 md:mb-8 px-4" style={{ color: '#5A4FCF' }}>
            We offer three tailored program layers—so you can select the one that fits 
            your company&apos;s current growth stage and needs.
          </p>
          
          {/* Program Benefits */}
          <div className="max-w-6xl mx-auto mb-8 md:mb-12 hidden md:block">
            <p className="text-base md:text-lg font-semibold text-center mb-6 md:mb-8 text-neutral-deep-navy">
              Each layer combines:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
              {programBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:border-primary-light transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 rounded-full bg-primary-light flex items-center justify-center">
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <h4 className="text-xs md:text-sm font-semibold mb-2 text-neutral-deep-navy leading-tight">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-neutral-cool-gray leading-relaxed hidden md:block">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="text-center mt-6 md:mt-8">
              <p className="text-sm md:text-base text-neutral-deep-navy font-medium">
                It&apos;s a complete system—designed to teach, apply, and embed repeatable GTM excellence into your team.
              </p>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {programs.map((program) => {
            const colorClasses = getColorClasses(program.color, program.popular)
            
            return (
              <div 
                key={program.id}
                className={`relative bg-white rounded-2xl border-2 ${colorClasses.border} overflow-hidden hover:border-primary-light transition-colors duration-300 h-full flex flex-col`}
              >
                {program.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-highlight text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-4 md:p-6 xl:p-8 ${program.popular ? 'pt-8 md:pt-10 xl:pt-12' : ''} flex flex-col h-full`}>
                  {/* Header */}
                  <div className="text-center mb-4 md:mb-6">
                    <program.icon className="w-10 md:w-12 h-10 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                    <h3 className="text-lg md:text-xl xl:text-2xl font-bold text-neutral-deep-navy mb-2">
                      {program.title}
                    </h3>
                    <div className={`inline-block px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${colorClasses.badge} mb-3 md:mb-4`}>
                      {program.subtitle}
                    </div>
                    <p className="text-neutral-cool-gray text-xs md:text-sm xl:text-base leading-relaxed px-2">
                      {program.description}
                    </p>
                  </div>

                  {/* Who it's for */}
                  <div className="mb-4 md:mb-6 flex-grow">
                    <h4 className="font-semibold text-neutral-deep-navy mb-2 text-sm md:text-base text-center">Who Is It For</h4>
                    <p className="text-xs md:text-sm text-neutral-cool-gray text-center">{program.whoFor}</p>
                  </div>

                  {/* Session Info - Fixed Height */}
                  <div className="mb-4 md:mb-6 space-y-2 h-12 flex flex-col justify-center">
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-neutral-cool-gray">Training:</span>
                      <span className="font-medium text-neutral-deep-navy">{program.hours}</span>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-neutral-cool-gray">Mentoring:</span>
                      <span className="font-medium text-neutral-deep-navy">{program.mentoring}</span>
                    </div>
                  </div>

                  {/* CTA Button - Fixed at bottom */}
                  <div className="mt-auto">
                    <Button 
                      className={`w-full ${colorClasses.button} text-sm md:text-base transition-colors duration-200`}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Button to Show Details - Below the cards */}
        <div className="text-center mb-8 md:mb-12">
          <Button 
            onClick={() => setShowFullDetails(!showFullDetails)}
            size="lg"
            className="bg-primary text-white border-2 border-primary hover:bg-primary-dark hover:border-primary-dark transition-colors duration-200 px-8 py-3 shadow-none"
          >
            {showFullDetails ? 'Hide' : 'See'} Full Plan Details
            {showFullDetails ? (
              <ChevronUp className="ml-2 h-5 w-5 transition-transform duration-200" />
            ) : (
              <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-200" />
            )}
          </Button>
        </div>

        {/* Detailed Comparison Table */}
        {showFullDetails && (
          <div className="mb-12 md:mb-16 overflow-hidden transition-all duration-500 ease-out transform animate-slide-down">
            {/* Mobile Card Layout */}
            <div className="block md:hidden space-y-6">
              {programs.map((program) => (
                <div key={program.id} className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-neutral-deep-navy mb-2">
                      {program.title}
                    </h3>
                    <div className="text-sm text-neutral-cool-gray font-medium mb-4">
                      {program.subtitle}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-deep-navy text-sm mb-2 border-b border-gray-100 pb-2">Description</h4>
                      <p className="text-sm text-neutral-cool-gray">{program.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-deep-navy text-sm mb-2 border-b border-gray-100 pb-2">Who Is It For</h4>
                      <p className="text-sm text-neutral-cool-gray">{program.whoFor}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-deep-navy text-sm mb-2 border-b border-gray-100 pb-2">Live Training Hours</h4>
                      <p className="text-sm text-neutral-cool-gray">
                        <span className="font-semibold text-primary">{program.hours}</span><br/>
                        {program.sessions}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-deep-navy text-sm mb-2 border-b border-gray-100 pb-2">1:1 Mentoring</h4>
                      <p className="text-sm font-semibold text-primary">{program.mentoring}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-deep-navy text-sm mb-2 border-b border-gray-100 pb-2">What You&apos;ll Learn</h4>
                      <div className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="text-sm text-neutral-cool-gray flex items-start">
                            <span className="text-primary font-medium mr-2 mt-0.5">{idx + 1}.</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                        <div className="flex items-center mt-3 p-2 bg-primary-light rounded-lg">
                          <span className="text-primary font-medium text-sm">+ 2x Practice Labs</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-deep-navy text-sm mb-2 border-b border-gray-100 pb-2">Deliverables & Resources</h4>
                      <div className="space-y-2">
                        {program.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="text-sm text-neutral-cool-gray flex items-start">
                            <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-deep-navy text-sm mb-2 border-b border-gray-100 pb-2">Offline Practice Access</h4>
                      <div className="flex items-center p-3 bg-green-50 rounded-lg">
                        <Check className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-sm text-neutral-cool-gray font-medium">AI training platform access included</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table Layout */}
            <div className="hidden md:block overflow-x-auto bg-white rounded-2xl border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-4 md:p-6 font-semibold text-neutral-deep-navy bg-gray-50">
                      Program Details
                    </th>
                    <th className="text-center p-4 md:p-6 font-semibold text-neutral-deep-navy bg-blue-50">
                      Layer 1: Sales Foundation
                    </th>
                    <th className="text-center p-4 md:p-6 font-semibold text-neutral-deep-navy bg-purple-50">
                      Layer 2: Pipeline & Growth Execution
                    </th>
                    <th className="text-center p-4 md:p-6 font-semibold text-neutral-deep-navy bg-green-50">
                      Layer 3: End to End GTM Scaling Program
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 md:p-6 font-medium text-neutral-deep-navy bg-gray-50">
                      Description
                    </td>
                    <td className="p-4 md:p-6 text-sm text-neutral-cool-gray">
                      Master the fundamentals of selling: from defining your value to running strong discovery, demos, and closing conversations.
                    </td>
                    <td className="p-4 md:p-6 text-sm text-neutral-cool-gray">
                      Build strong top-of-funnel pipeline engines, marketing alignment, and team capabilities to support scale.
                    </td>
                    <td className="p-4 md:p-6 text-sm text-neutral-cool-gray">
                      Align your entire organization for GTM scale — across leadership, RevOps, CS, marketing, and sales — with advanced processes, systems, and growth motion.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 md:p-6 font-medium text-neutral-deep-navy bg-gray-50">
                      Who Is It For
                    </td>
                    <td className="p-4 md:p-6 text-sm text-neutral-cool-gray">
                      Early-stage founders leading sales themselves
                    </td>
                    <td className="p-4 md:p-6 text-sm text-neutral-cool-gray">
                      Founders with a small GTM or sales team beginning to scale
                    </td>
                    <td className="p-4 md:p-6 text-sm text-neutral-cool-gray">
                      Growth-stage startups with dedicated sales, marketing, and CS teams ready to operationalize and scale their GTM machine
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 md:p-6 font-medium text-neutral-deep-navy bg-gray-50">
                      Live Training Hours
                    </td>
                    <td className="p-4 md:p-6 text-sm text-neutral-cool-gray text-center">
                      <span className="font-semibold">14 hrs</span><br/>
                      6 sessions (2 hrs each) + 2 practicals
                    </td>
                    <td className="p-4 md:p-6 text-sm text-neutral-cool-gray text-center">
                      <span className="font-semibold">12 hrs</span><br/>
                      6 sessions (2 hrs each) + 2 practical sessions
                    </td>
                    <td className="p-4 md:p-6 text-sm text-neutral-cool-gray text-center">
                      <span className="font-semibold">12 hrs</span><br/>
                      6 sessions (2 hrs each)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 md:p-6 font-medium text-neutral-deep-navy bg-gray-50">
                      1:1 Mentoring
                    </td>
                    <td className="p-4 md:p-6 text-sm text-center font-semibold text-neutral-deep-navy">
                      1 session
                    </td>
                    <td className="p-4 md:p-6 text-sm text-center font-semibold text-neutral-deep-navy">
                      3 sessions
                    </td>
                    <td className="p-4 md:p-6 text-sm text-center font-semibold text-neutral-deep-navy">
                      10 sessions
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 md:p-6 font-medium text-neutral-deep-navy bg-gray-50">
                      Syllabus/Agenda
                    </td>
                    <td className="p-4 md:p-6 text-xs md:text-sm text-neutral-cool-gray">
                      <div className="space-y-1">
                        <div>1. Define Your ICP, UVP & Value Story</div>
                        <div>2. Mastering Discovery Calls</div>
                        <div>3. High-Impact Product Demos</div>
                        <div>4. Handling Objections with Confidence</div>
                        <div>5. Closing & Negotiating Deals</div>
                        <div>6. Sales Process & Meeting Mastery</div>
                        <div className="font-medium text-primary mt-2">+ 2x Practice Labs</div>
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-xs md:text-sm text-neutral-cool-gray">
                      <div className="space-y-1">
                        <div>1. AI-Powered Prospecting Playbook</div>
                        <div>2. Building an Outbound Machine</div>
                        <div>3. Hiring Salespeople & SDRs</div>
                        <div>4. Marketing Strategy & Execution</div>
                        <div>5. Full Funnel Practice Simulation</div>
                        <div className="font-medium text-primary mt-2">+ 2x Practice Labs</div>
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-xs md:text-sm text-neutral-cool-gray">
                      <div className="space-y-1">
                        <div>1. Strategic GTM Planning + Inbound Motion</div>
                        <div>2. Team Management & Forecasting</div>
                        <div>3. Onboarding & Enablement Systems</div>
                        <div>4. RevOps & AI GTM Stack</div>
                        <div>5. Customer Journey, CS & Expansion</div>
                        <div>6. Advanced MEDDIC Execution</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 md:p-6 font-medium text-neutral-deep-navy bg-gray-50">
                      Deliverables & Practical Resources
                    </td>
                    <td className="p-4 md:p-6 text-xs md:text-sm text-neutral-cool-gray">
                      <div className="space-y-1">
                        <div>• ICP + UVP template</div>
                        <div>• Value messaging framework</div>
                        <div>• Discovery call script</div>
                        <div>• Demo flow structure</div>
                        <div>• Objection handling playbook</div>
                        <div>• Negotiation checklist</div>
                        <div>• Sales process blueprint</div>
                        <div>• Meeting planning guide</div>
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-xs md:text-sm text-neutral-cool-gray">
                      <div className="space-y-1">
                        <div>• AI prospecting workflow</div>
                        <div>• Outbound cadence templates</div>
                        <div className="font-semibold">• Hiring Playbook – Full Process</div>
                        <div className="text-xs">(screening, interviews, simulations, scoring & more)</div>
                        <div>• SDR hiring toolkit</div>
                        <div>• Marketing strategy one-pager</div>
                        <div>• Execution tracker</div>
                        <div>• Full GTM role-play template</div>
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-xs md:text-sm text-neutral-cool-gray">
                      <div className="space-y-1">
                        <div>• GTM strategic plan</div>
                        <div>• SDR inbound playbook</div>
                        <div>• Team KPI dashboard</div>
                        <div>• Forecast template</div>
                        <div>• Onboarding & enablement plan</div>
                        <div>• RevOps tooling map</div>
                        <div>• Customer journey map</div>
                        <div>• MEDDIC sales toolkit</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-6 font-medium text-neutral-deep-navy bg-gray-50">
                      Offline Practice Access
                    </td>
                    <td className="p-4 md:p-6 text-center">
                      <div className="flex justify-center items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-sm text-neutral-cool-gray">AI training platform</span>
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-center">
                      <div className="flex justify-center items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-sm text-neutral-cool-gray">AI training platform</span>
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-center">
                      <div className="flex justify-center items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-sm text-neutral-cool-gray">AI training platform</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
