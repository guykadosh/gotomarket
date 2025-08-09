"use client"

export default function ExpertsSection() {
  const leadExperts = [
    {
      name: "Nir Goldstein",
      title: "Former VP Sales @ monday.com",
      image: "👨‍💼"
    },
    {
      name: "Einat Kadosh", 
      title: "Enablement Leader @ LinkedIn, HP",
      image: "👩‍💼"
    }
  ]

  return (
    <section id="experts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#0A1F44'}}>
            Meet Our GTM Experts
          </h2>
        </div>

        {/* Lead Experts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {leadExperts.map((expert, index) => (
            <div key={index} className="rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300" style={{background: 'linear-gradient(135deg, #E5F1FB 0%, #F9FAFB 100%)'}}>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm">
                    {expert.image}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2" style={{color: '#0A1F44'}}>
                    {expert.name}
                  </h3>
                  <div className="font-semibold mb-3" style={{color: '#1E5BB8'}}>
                    {expert.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 15+ Domain Experts */}
        <div className="rounded-2xl p-8 text-center" style={{backgroundColor: '#E5F1FB30'}}>
          <h3 className="text-2xl font-bold mb-4" style={{color: '#0A1F44'}}>
            15+ Domain Experts
          </h3>
          <p style={{color: '#6B7280'}} className="mb-6">
            Demand gen, RevOps, CS, negotiation & more
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              'Demand Generation',
              'Revenue Operations', 
              'Customer Success',
              'Sales Methodology',
              'Negotiation'
            ].map((domain, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center">
                <div className="text-sm font-medium" style={{color: '#0A1F44'}}>{domain}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
