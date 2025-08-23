"use client"

import { useState, useEffect } from 'react'

export default function DetailedTestimonialsSection() {
  
  const testimonials = [
    {
      id: 1,
      type: "video",
      videoSrc: "https://res.cloudinary.com/guyka/video/upload/v1755956670/Untitled_video_-_Made_with_Clipchamp_1_1_wa4orj.mp4",
      author: "Eitan Tsarfati",
      title: "CEO & Co-Founder at SWAPP"
    },
    {
      id: 2,
      type: "text",
      title: "Founder Doing Sales",
      quote: "It Helped Me Apply Value Selling, Not Just Hear About It",
      content: "As a founder doing sales myself, I had read about value selling, watched some videos, but in practice I kept falling back into product pitching. I didn't really know how to make it work in real conversations. The GTM program changed that because it wasn't just theory — we worked on our actual pitch, our discovery questions, and how to tie everything back to the customer's real business problems. The mentors gave really hands-on advice — each of them specialized in something different, so I could ask specific questions depending on where I was stuck: discovery, closing, even follow-ups. I saw the change quickly. Conversations felt more natural, prospects opened up more, and I had fewer dead-end calls. It didn't make me a sales guru overnight, but it helped me sell more confidently and focus on what mattered to the buyer."
    },
    {
      id: 3,
      type: "text",
      title: "Early Sales Team",
      quote: "It Helped Us Build a Sales Motion the Right Way, Before Bad Habits Set In",
      content: "We were just starting to build out our sales team — had two reps and someone part-time on marketing — but everything felt a bit improvised. Deals were coming in, but we had no clear structure and we were worried about setting up things the wrong way. The GTM Accelerator helped us take a step back and really think through how we wanted our sales motion to work. Instead of just pushing for activity, we learned to map out the key stages in the process, define why each stage exists, and what activities actually matter at each point. Having different mentors specializing in sales, marketing, and customer success made it easier to connect the dots across the whole commercial flow — from generating leads to managing accounts. It gave us a much clearer foundation to build on, so we're not constantly having to fix things later. It saved us a lot of time by helping us do it properly from the start."
    },
    {
      id: 4,
      type: "text",
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
    <section id="detailed-testimonials" className="py-12 md:py-16" style={{ backgroundColor: 'var(--gtm-primary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4" style={{ color: 'white' }}>
            Success Stories
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Real transformations from founders and teams who built their GTM engines with us
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="relative bg-white rounded-3xl p-6 md:p-12 shadow-lg" style={{ minHeight: '500px', height: 'auto' }}>
          <div 
            key={currentIndex}
            className="w-full text-center animate-fade-in h-full flex flex-col justify-center"
          >
            {testimonials[currentIndex].type === "video" ? (
              // Video Testimonial
              <div className="space-y-6">
                <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <video 
                    controls
                    className="w-full h-full object-cover"
                    poster="/images/testimonial-poster.png"
                  >
                    <source src={testimonials[currentIndex].videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl mb-2" style={{ color: 'var(--gtm-text-dark)' }}>
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-lg font-medium" style={{ color: 'var(--gtm-primary)' }}>
                    {testimonials[currentIndex].title}
                  </div>
                </div>
              </div>
            ) : (
              // Text Testimonial
              <div className="h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4 md:mb-6 opacity-20 flex-shrink-0" style={{ color: 'var(--gtm-text-dark)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  &ldquo;
                </div>
                
                {/* Quote */}
                <h3 className="font-bold mb-3 md:mb-4 leading-tight flex-shrink-0" style={{ 
                  color: 'var(--gtm-text-dark)', 
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)' 
                }}>
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </h3>
                
                {/* Content - Scrollable on mobile */}
                <div className="flex-grow overflow-y-auto overscroll-contain mb-4 md:mb-6 max-w-4xl mx-auto w-full" style={{ maxHeight: '300px' }}>
                  <p className="leading-relaxed text-left md:text-center" style={{ 
                    color: 'var(--gtm-text-medium)', 
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.125rem)'
                  }}>
                    {testimonials[currentIndex].content}
                  </p>
                </div>
                
                {/* Attribution */}
                <div className="font-medium flex-shrink-0" style={{ 
                  color: 'var(--gtm-primary)', 
                  fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' 
                }}>
                  — {testimonials[currentIndex].title}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-8 space-x-6">
          {/* Previous Arrow */}
          <button
            onClick={() => {
              setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
              setIsAutoPlaying(false)
            }}
            className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="flex space-x-3">
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

          {/* Next Arrow */}
          <button
            onClick={() => {
              setCurrentIndex((prev) => (prev + 1) % testimonials.length)
              setIsAutoPlaying(false)
            }}
            className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
