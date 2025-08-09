"use client"

import { useState, useEffect } from 'react'

export default function DetailedTestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      title: "Founder-Led Sales",
      quote: "It Felt Like I Hired a Full GTM Team Without the Cost",
      content: "As a founder, I was leading sales myself — calls, demos, closing — it was all me. But I kept running into the same roadblocks: inconsistent messaging, deals dragging forever, and feeling unsure about pricing. Joining the GTM Accelerator changed everything. It was like having a full team of go-to-market experts on call. There was a sales expert helping me refine discovery, a pricing expert helping me avoid discount traps, and a marketing mentor helping with positioning. Suddenly, I wasn't alone. Within weeks, I saw the difference. Better qualified leads, smoother demos, and most importantly — confidence in every conversation. The program gave me structure and real guidance, not just theory."
    },
    {
      id: 2,
      title: "Founder Doing Sales",
      quote: "It Helped Me Apply Value Selling, Not Just Hear About It",
      content: "As a founder doing sales myself, I had read about value selling, watched some videos, but in practice I kept falling back into product pitching. I didn't really know how to make it work in real conversations. The GTM program changed that because it wasn't just theory — we worked on our actual pitch, our discovery questions, and how to tie everything back to the customer's real business problems. The mentors gave really hands-on advice — each of them specialized in something different, so I could ask specific questions depending on where I was stuck: discovery, closing, even follow-ups. I saw the change quickly. Conversations felt more natural, prospects opened up more, and I had fewer dead-end calls. It didn't make me a sales guru overnight, but it helped me sell more confidently and focus on what mattered to the buyer."
    },
    {
      id: 3,
      title: "Early Sales Team",
      quote: "It Helped Us Build a Sales Motion the Right Way, Before Bad Habits Set In",
      content: "We were just starting to build out our sales team — had two reps and someone part-time on marketing — but everything felt a bit improvised. Deals were coming in, but we had no clear structure and we were worried about setting up things the wrong way. The GTM Accelerator helped us take a step back and really think through how we wanted our sales motion to work. Instead of just pushing for activity, we learned to map out the key stages in the process, define why each stage exists, and what activities actually matter at each point. Having different mentors specializing in sales, marketing, and customer success made it easier to connect the dots across the whole commercial flow — from generating leads to managing accounts. It gave us a much clearer foundation to build on, so we're not constantly having to fix things later. It saved us a lot of time by helping us do it properly from the start."
    },
    {
      id: 4,
      title: "Small Commercial Team",
      quote: "It Helped Us Work Better Together and Prepare for Growth",
      content: "We had a small team — a couple of sales reps, one person in marketing, and a CS rep — and like many early-stage companies, we were focused on just getting deals done. But we lacked a proper structure, and honestly, we weren't thinking enough about how to make things scalable. The program helped us step back and really build our sales motion from the ground up. With the mentors' guidance, we didn't just 'do sales,' we learned to define every step of the sales process — from prospecting to closing to handoff. We got clarity on the purpose of each stage, what activities should happen, and what to measure. The mentors were each specialized — sales, CS, marketing — and that gave us targeted advice for different parts of the customer journey. It helped us align better as a team, fix some messy parts in our process, and most importantly, set up a foundation we can actually scale as we grow."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000) // Change every 8 seconds (slower)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false) // Stop auto-play when user clicks a dot
  }

  return (
    <section id="detailed-testimonials" className="py-16 md:py-24" style={{ backgroundColor: 'var(--gtm-primary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: 'white' }}>
            Success Stories
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Real transformations from founders and teams who built their GTM engines with us
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg" style={{ height: '600px' }}>
          <div 
            key={currentIndex}
            className="w-full text-center animate-fade-in h-full flex flex-col justify-center"
          >
            {/* Quote Icon */}
            <div className="mb-6 opacity-20" style={{ color: 'var(--gtm-text-dark)', fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
              &ldquo;
            </div>
            
            {/* Quote */}
            <h3 className="font-bold mb-6 leading-tight" style={{ 
              color: 'var(--gtm-text-dark)', 
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)' 
            }}>
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </h3>
            
            {/* Content */}
            <p className="leading-relaxed mb-8 max-w-4xl mx-auto overflow-hidden" style={{ 
              color: 'var(--gtm-text-medium)', 
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              maxHeight: '200px',
              display: '-webkit-box',
              WebkitLineClamp: 8,
              WebkitBoxOrient: 'vertical'
            }}>
              {testimonials[currentIndex].content}
            </p>
            
            {/* Attribution */}
            <div className="font-medium" style={{ 
              color: 'var(--gtm-primary)', 
              fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' 
            }}>
              — {testimonials[currentIndex].title}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'scale-125'
                  : 'hover:opacity-75'
              }`}
              style={{
                backgroundColor: index === currentIndex 
                  ? 'white' 
                  : 'rgba(255, 255, 255, 0.4)'
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
