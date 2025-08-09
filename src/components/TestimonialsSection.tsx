"use client"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Once we rebuilt the playbooks, our qualified pipeline tripled and time-to-close dropped 28%.",
      author: "VP Sales",
      company: "Seed SaaS Startup"
    },
    {
      quote: "We finally have a process that works—and everyone's aligned.",
      author: "Founder & CEO", 
      company: "Series A Company"
    },
    {
      quote: "Best investment in sales we've made. Real practice. Real impact.",
      author: "RevOps Lead",
      company: "Cybersecurity Startup"
    }
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-deep-navy mb-6">
            What Founders & Teams Say
          </h2>
        </div>

        {/* Quick Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-light/30 to-neutral-off-white rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <blockquote className="mb-4 md:mb-6 text-base md:text-lg font-medium leading-relaxed text-neutral-deep-navy">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-sm">
                <div className="font-semibold text-primary">{testimonial.author}</div>
                <div className="text-neutral-cool-gray">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Strip Placeholder */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-light/20 to-neutral-off-white rounded-xl p-8 md:p-12">
            <p className="text-neutral-cool-gray mb-6 font-medium">
              Trusted by leading startups and scale-ups
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 items-center opacity-60">
              {[
                'Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'
              ].map((company, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 md:w-20 h-12 md:h-16 rounded-lg flex items-center justify-center mx-auto mb-2 bg-white/50">
                    <span className="text-xs font-medium text-neutral-cool-gray">{company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
