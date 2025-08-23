"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

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
      title: "Gil Harel, CEO, Clearitty",
      quote: "The GTM Accelerator gave us practical frameworks for discovery calls, demos, and closing",
      content: "As a founder leading sales, I needed more structure to scale. The GTM Accelerator gave us practical frameworks for discovery calls, demos, and closing—and the biggest impact was on our customer calls. We now follow a consistent sales process that drives better outcomes and makes our growth repeatable. Today our sales motion is sharper, more scalable, and far more effective. I strongly recommend this program to any founder-led team.",
      image: "/images/testimonials/Gil_Harel.jpg"
    },
    {
      id: 3,
      type: "text",
      title: "Doron Sitbon, CEO, Dot Compliance",
      quote: "We implemented structured GTM processes that aligned sales, customer success, marketing, and even hiring under one playbook",
      content: "Even with a large sales and GTM organization, we reached a point where scaling required more than just adding people—it required a unified framework. Through the GTM Accelerator, we implemented structured GTM processes that aligned sales, customer success, marketing, and even hiring under one playbook. A major focus for us was transforming all client-facing teams to embrace value selling and MEDDIC. The program equipped our teams with the tools, training, and discipline to run consistent, value-driven conversations with customers. Today, sales, CS, and marketing are in the process of becoming fully aligned, our process is stronger, and we're scaling with clarity and confidence. I highly recommend the GTM Accelerator to any company ready to grow at scale.",
      image: "/images/testimonials/Doron_Sitbon.jpg"
    },
    {
      id: 4,
      type: "text",
      title: "Arnon Nir, CEO, DreamTeam",
      quote: "We gained access to a team of mentors, each bringing expertise across every angle of our GTM needs",
      content: "As a company just starting to build our sales team, marketing, and GTM engine, we joined the GTM Accelerator to learn what the best practices are out there. What we found was so much more than a single consultant's advice—we gained access to a team of mentors, each bringing expertise across every angle of our GTM needs. From sales to marketing to customer success, the mentors provided practical guidance, frameworks, and support that helped us avoid common mistakes and accelerate our learning curve. Instead of figuring it out alone, we now have a structured foundation and the confidence to build our GTM machine the right way from the start.",
      image: "/images/testimonials/Arnon_Nir.jpg"
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
                {/* Name and Title */}
                <div className="text-center mb-4">
                  <div className="font-bold text-2xl mb-2" style={{ color: 'var(--gtm-text-dark)' }}>
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-lg font-medium" style={{ color: 'var(--gtm-primary)' }}>
                    {testimonials[currentIndex].title}
                  </div>
                </div>
                
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
              </div>
            ) : (
              // Text Testimonial
              <div className="h-full flex flex-col">
                {/* Name, Title and Profile Picture Row */}
                <div className="flex items-center mb-4 md:mb-6 flex-shrink-0">
                  {/* Left side - Profile Picture */}
                  {testimonials[currentIndex].image && (
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].title}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Right side - Name and Title */}
                  <div className="flex-1 text-left">
                    {/* Name in Bold */}
                    <div className="font-bold mb-1" style={{ 
                      color: 'var(--gtm-text-dark)', 
                      fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' 
                    }}>
                      {testimonials[currentIndex].title.split(',')[0]}
                    </div>
                    
                    {/* Job Title */}
                    <div className="font-medium" style={{ 
                      color: 'var(--gtm-primary)', 
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' 
                    }}>
                      {testimonials[currentIndex].title.split(',').slice(1).join(',').trim()}
                    </div>
                  </div>
                </div>
                
                {/* Quote Icon */}
                <div className="mb-1 opacity-20 flex-shrink-0" style={{ color: 'var(--gtm-text-dark)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
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
                <div className="flex-grow overflow-y-auto overscroll-contain max-w-4xl mx-auto w-full" style={{ maxHeight: '300px' }}>
                  <p className="leading-relaxed text-left md:text-center" style={{ 
                    color: 'var(--gtm-text-medium)', 
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.125rem)'
                  }}>
                    {testimonials[currentIndex].content}
                  </p>
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
            className="p-2 hover:opacity-75 transition-opacity duration-300"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-8 h-8 text-white"
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
            className="p-2 hover:opacity-75 transition-opacity duration-300"
            aria-label="Next testimonial"
          >
            <svg
              className="w-8 h-8 text-white"
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
