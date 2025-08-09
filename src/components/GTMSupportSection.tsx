"use client"

import { 
  BarChart3, 
  UserPlus, 
  Handshake, 
  TrendingUp,
  FileText,
  Target,
  Zap
} from 'lucide-react'

export default function GTMSupportSection() {
  const supportAreas = [
    {
      icon: Target,
      title: "Lead Gen & Marketing Alignment",
      description: "Align your marketing and sales efforts for maximum pipeline impact"
    },
    {
      icon: BarChart3,
      title: "Deal Management & Forecasting",
      description: "Build predictable revenue with accurate forecasting and pipeline management"
    },
    {
      icon: UserPlus,
      title: "Recruiting & Onboarding",
      description: "Hire the right talent and get them productive faster with proven frameworks"
    },
    {
      icon: Handshake,
      title: "Customer Success & Expansion",
      description: "Maximize customer lifetime value through strategic success programs"
    },
    {
      icon: TrendingUp,
      title: "RevOps Dashboards & Metrics",
      description: "Track what matters with data-driven insights and operational excellence"
    }
  ]

  const deliverables = [
    "Sales process map",
    "Objection handling playbook", 
    "Discovery and demo script",
    "Competitive battle card",
    "Customer success plan",
    "Hiring plan",
    "Onboarding program"
  ]

  const sectionConfig = {
    title: "Do you have the key elements to support your scale?",
    subtitle: "Structured guidance across the entire GTM motion:",
    ctaText: "Backed by 1:1 expert guidance and plug-and-play templates—this is hands-on execution, not just theory.",
    backgroundColor: "bg-white"
  }

  return (
    <section className={`py-12 md:py-20 ${sectionConfig.backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-4" style={{color: '#0A1F44'}}>
            {sectionConfig.title}
          </h2>
        </div>

        {/* Deliverables Preview */}
        <div className="mb-12 md:mb-16 p-4 md:p-8 rounded-2xl" style={{backgroundColor: '#F8FAFC'}}>
          <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
            <p className="text-base md:text-lg leading-relaxed px-4" style={{color: '#6B7280'}}>
              Essential GTM assets developed with our guidance and tailored to your team:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm"
              >
                <FileText className="w-4 h-4 flex-shrink-0" style={{color: '#1E5BB8'}} />
                <span className="text-xs md:text-sm font-medium" style={{color: '#0A1F44'}}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Support Areas */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12 px-4" style={{color: '#0A1F44'}}>
            {sectionConfig.subtitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {supportAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div 
                  key={index} 
                  className="p-4 md:p-6 rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-colors duration-300"
                  style={{backgroundColor: '#FAFBFC'}}
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-3 mb-3 text-center sm:text-left">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#E5F1FB'}}>
                      <IconComponent className="w-5 h-5" style={{color: '#1E5BB8'}} />
                    </div>
                    <h4 className="font-semibold text-sm md:text-base" style={{color: '#0A1F44'}}>
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed text-center sm:text-left" style={{color: '#6B7280'}}>
                    {area.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 p-4 md:p-6 rounded-xl max-w-4xl" style={{backgroundColor: '#E5F1FB'}}>
            <Zap className="w-6 h-6 flex-shrink-0" style={{color: '#1E5BB8'}} />
            <p className="text-sm md:text-lg font-semibold text-center sm:text-left" style={{color: '#1E5BB8'}}>
              {sectionConfig.ctaText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
