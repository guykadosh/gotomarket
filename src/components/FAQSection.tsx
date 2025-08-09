"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Are sessions live or recorded?",
      answer: "All sessions are live via Zoom with real-time interaction and Q&A. Recordings are provided for review, but the value comes from live participation, practical exercises, and direct feedback from our experts."
    },
    {
      question: "How long is each program?",
      answer: "Program durations vary by layer: Layer 1 (Sales Foundation) runs 6 weeks, Layer 2 (Pipeline & Growth) runs 5 weeks, and Layer 3 (GTM Scaling) runs 6 weeks. Each includes both group sessions and individual mentoring time."
    },
    {
      question: "What if I miss a live session?",
      answer: "We provide recordings of all sessions, plus you'll have access to our AI practice platform to catch up on key concepts. However, we strongly recommend attending live sessions for maximum value and interaction."
    },
    {
      question: "How does the 1:1 mentoring work?", 
      answer: "You'll be matched with experts based on your specific challenges and industry. Sessions are scheduled flexibly around your calendar and focus on applying program concepts to your unique situation."
    },
    {
      question: "Can I upgrade between program layers?",
      answer: "Yes, you can upgrade to higher layers at any time. We'll credit your previous investment toward the upgrade cost. Many participants start with Layer 1 and add additional layers as they scale."
    },
    {
      question: "What deliverables will I receive?",
      answer: "Each program includes customized templates, playbooks, and frameworks tailored to your business. These aren't generic templates—they're built specifically for your product, market, and sales motion during the program."
    },
    {
      question: "Is this suitable for B2B SaaS companies only?",
      answer: "While our expertise is strongest in B2B SaaS, our frameworks apply to any B2B business with a consultative sales process. We've successfully worked with companies in fintech, healthtech, martech, and professional services."
    },
    {
      question: "What's the time commitment per week?",
      answer: "Expect 3-4 hours per week: 2 hours for live sessions, 1-2 hours for practice and preparation. The AI practice platform lets you train on your schedule, and mentoring sessions are flexible."
    },
    {
      question: "Do you offer refunds?", 
      answer: "We offer a satisfaction guarantee. If you're not seeing value after the first two sessions, we'll refund your investment. Our focus is on delivering real business impact, not just content."
    },
    {
      question: "How is this different from other sales training?",
      answer: "Most training is generic theory. We provide hands-on practice with your actual sales scenarios, plus ongoing expert mentorship. You'll leave with customized assets and frameworks, not just knowledge."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-primary-light/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-deep-navy mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-cool-gray">
            Everything you need to know about our GTM programs
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-primary-light/10 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-neutral-deep-navy pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-neutral-cool-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12 bg-white rounded-xl p-8">
          <h3 className="text-xl font-bold text-neutral-deep-navy mb-4">
            Still have questions?
          </h3>
          <p className="text-neutral-cool-gray mb-6">
            Schedule a quick call to discuss your specific situation and which program would be the best fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium">
              Schedule a Call
            </button>
            <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-200 font-medium">
              Send us an Email
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
