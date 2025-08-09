"use client"

import { Users, Target, Award, HeartHandshake } from 'lucide-react'

export default function WhyDifferentSection() {
  const differentiators = [
    {
      icon: Users,
      title: "Led by Top GTM Experts",
      description: "Each session is delivered by seasoned GTM professionals with proven, hands‑on experience and measurable achievements."
    },
    {
      icon: Target,
      title: "Practical, Not Just Theory", 
      description: "Go beyond concepts with live and offline practice, structured training, and actionable feedback to ensure learning sticks."
    },
    {
      icon: HeartHandshake,
      title: "1:1 Mentorship & Advisory",
      description: "Access personalized mentorship from leading GTM specialists in their respective domains to address your specific challenges."
    },
    {
      icon: Award,
      title: "Customized, Ready‑to‑Use Deliverables",
      description: "Complete the program with essential GTM assets tailored to your business, ready to implement immediately."
    }
  ]

  const sectionConfig = {
    title: "We are not just another course",
    subtitle: "Our hands-on approach combines expert guidance, practical application, and personalized support to deliver real business impact.",
    backgroundColor: "bg-gray-50"
  }

  return (
    <section className={`py-12 md:py-20 ${sectionConfig.backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{color: '#0A1F44'}}>
            {sectionConfig.title}
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto px-4" style={{color: '#6B7280'}}>
            {sectionConfig.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div 
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#E5F1FB'}}>
                      <IconComponent className="w-6 h-6" style={{color: '#1E5BB8'}} />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3" style={{color: '#0A1F44'}}>
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{color: '#6B7280'}}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
