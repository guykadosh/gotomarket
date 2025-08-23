"use client"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      type: "video",
      videoSrc: "/videos/testimonial.mp4",
      author: "Eitan Tsarfati",
      title: "CEO & Co-Founder at SWAPP"
    },
    {
      id: 2,
      type: "text",
      quote: "We finally have a process that works—and everyone's aligned.",
      author: "Founder & CEO", 
      company: "Series A Company"
    },
    {
      id: 3,
      type: "text",
      quote: "Best investment in sales we've made. Real practice. Real impact.",
      author: "RevOps Lead",
      company: "Cybersecurity Startup"
    }
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24" style={{ backgroundColor: 'rgba(138, 127, 255, 0.1)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: '#1F1B3A' }}>
            What Founders & Teams Say
          </h2>
        </div>

        {/* Quick Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-64 md:h-auto">
              {testimonial.type === "video" ? (
                // Video Testimonial
                <div className="space-y-4 h-full flex flex-col">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <video 
                      controls
                      className="w-full h-full object-cover"
                      poster="/images/video-poster.jpg" // Optional: add a poster image
                    >
                      <source src={testimonial.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="text-center mt-auto">
                    <div className="font-semibold text-lg" style={{ color: '#1F1B3A' }}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm" style={{ color: '#5A4FCF' }}>
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              ) : (
                // Text Testimonial
                <div className="h-full flex flex-col">
                  <div className="flex-grow overflow-y-auto overscroll-contain mb-3 md:mb-4">
                    <blockquote className="text-sm md:text-base font-medium leading-relaxed" style={{ color: '#1F1B3A' }}>
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>
                  <div className="text-xs md:text-sm flex-shrink-0">
                    <div className="font-semibold" style={{ color: '#6C63FF' }}>{testimonial.author}</div>
                    <div style={{ color: '#5A4FCF' }}>{testimonial.company}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Logo Strip */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
            <p className="mb-4 md:mb-6 font-medium" style={{ color: '#5A4FCF' }}>
              Trusted by leading startups and scale-ups
            </p>
            {/* Mobile Layout - Logo left of text */}
            <div className="md:hidden space-y-3">
              {[
                'Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'
              ].map((company, index) => (
                <div key={index} className="flex items-center justify-start bg-gray-50 rounded-lg p-3">
                  <div className="w-10 h-8 rounded flex items-center justify-center mr-3 flex-shrink-0" style={{ backgroundColor: 'rgba(108, 99, 255, 0.1)' }}>
                    <span className="text-xs font-medium" style={{ color: '#6C63FF' }}>
                      {company.charAt(company.length - 1)}
                    </span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#1F1B3A' }}>{company}</span>
                </div>
              ))}
            </div>
            {/* Desktop Layout - Original grid */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 items-center opacity-70">
              {[
                'Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'
              ].map((company, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 md:w-16 h-10 md:h-12 rounded-lg flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(108, 99, 255, 0.1)' }}>
                    <span className="text-xs font-medium" style={{ color: '#6C63FF' }}>{company.charAt(company.length - 1)}</span>
                  </div>
                  <span className="text-xs" style={{ color: '#5A4FCF' }}>{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
