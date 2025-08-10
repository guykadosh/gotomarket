"use client"

export default function ExpertsSection() {
  const experts = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "VP of Sales",
      company: "Ex-Salesforce, Stripe",
    },
    {
      id: 2,
      name: "Einat Kadosh",
      title: "AI-Driven GTM & Revenue Enablement",
      company: "ex-monday.com, ex-Linkedin",
    },
    {
      id: 3,
      name: "Lisa Thompson",
      title: "Sales Enablement Director",
      company: "Ex-Microsoft, Zoom",
    },
    {
      id: 4,
      name: "David Park",
      title: "GTM Strategy Lead",
      company: "Ex-Google, Slack",
    },
    {
      id: 5,
      name: "Rachel Kim",
      title: "Revenue Operations Manager",
      company: "Ex-Atlassian, Notion",
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Sales Director",
      company: "Ex-DocuSign, Twilio",
    },
    {
      id: 7,
      name: "Emily Foster",
      title: "Customer Success VP",
      company: "Ex-Intercom, Segment",
    },
    {
      id: 8,
      name: "Alex Cooper",
      title: "Sales Engineering Lead",
      company: "Ex-Datadog, PagerDuty",
    },
    {
      id: 9,
      name: "Maria Santos",
      title: "VP Marketing",
      company: "Ex-Shopify, Mailchimp",
    },
    {
      id: 10,
      name: "Ryan Mitchell",
      title: "Head of Growth",
      company: "Ex-Uber, Airbnb",
    },
    {
      id: 11,
      name: "Jennifer Liu",
      title: "Sales Operations Director",
      company: "Ex-Square, Dropbox",
    },
    {
      id: 12,
      name: "Kevin O'Brien",
      title: "Enterprise Sales Manager",
      company: "Ex-Oracle, ServiceNow",
    },
    {
      id: 13,
      name: "Sophia Garcia",
      title: "Revenue Strategy Lead",
      company: "Ex-Netflix, Spotify",
    },
    {
      id: 14,
      name: "Michael Chang",
      title: "VP Sales Development",
      company: "Ex-LinkedIn, GitHub",
    },
    {
      id: 15,
      name: "Ashley Davis",
      title: "Chief Marketing Officer",
      company: "Ex-Adobe, Figma",
    },
    {
      id: 16,
      name: "Jordan Smith",
      title: "Sales Training Director",
      company: "Ex-Cisco, VMware",
    },
    {
      id: 17,
      name: "Taylor Brown",
      title: "Customer Success Director",
      company: "Ex-Zendesk, Freshworks",
    },
    {
      id: 18,
      name: "Cameron Lee",
      title: "VP Business Development",
      company: "Ex-Palantir, Snowflake",
    },
    {
      id: 19,
      name: "Morgan Johnson",
      title: "Head of Sales",
      company: "Ex-Airtable, Notion",
    }
  ]

  return (
    <section id="experts" className="py-10 md:py-16" style={{ background: 'linear-gradient(135deg, rgba(138, 127, 255, 0.08) 0%, rgba(108, 99, 255, 0.05) 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: '#1F1B3A' }}>
            Meet Our GTM Experts
          </h2>
          <p className="text-xl md:text-lg max-w-3xl mx-auto font-semibold" style={{ color: '#5A4FCF' }}>
            Learn from seasoned professionals who have built and scaled GTM functions at leading companies across various industries.
          </p>
        </div>

        {/* Expert Grid */}
        {/* Mobile: Vertical Scroll */}
        <div className="md:hidden">
          <div className="overflow-y-auto" style={{ height: '320px' }}>
            <div className="grid grid-cols-2 gap-3">
              {experts.map((expert) => (
                <div 
                  key={expert.id}
                  className="bg-white rounded-xl p-3 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Avatar Circle */}
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6C63FF 0%, #5A4FCF 100%)' }}>
                    <span className="text-white text-xs font-bold">
                      {expert.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-semibold text-xs mb-1 leading-tight" style={{ color: '#1F1B3A' }}>
                    {expert.name}
                  </h3>
                  
                  {/* Title */}
                  <p className="text-xs mb-1 leading-tight" style={{ color: '#5A4FCF' }}>
                    {expert.title}
                  </p>
                  
                  {/* Company */}
                  <p className="text-xs font-medium leading-tight" style={{ color: '#4C6FFF' }}>
                    {expert.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {experts.map((expert) => (
            <div 
              key={expert.id}
              className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Avatar Circle */}
              <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6C63FF 0%, #5A4FCF 100%)' }}>
                <span className="text-white text-sm font-bold">
                  {expert.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              {/* Name */}
              <h3 className="font-semibold text-sm mb-1" style={{ color: '#1F1B3A' }}>
                {expert.name}
              </h3>
              
              {/* Title */}
              <p className="text-xs mb-2" style={{ color: '#5A4FCF' }}>
                {expert.title}
              </p>
              
              {/* Company */}
              <p className="text-xs font-medium" style={{ color: '#4C6FFF' }}>
                {expert.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
