"use client"

import { Users, Target, Award, HeartHandshake } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function WhyDifferentSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = ['switch1.jpg', 'switch2.jpg', 'switch3.jpg', 'switch4.jpg', 'switch5.jpg', 'switch6.jpg', 'switch7.jpg']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])
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
    backgroundColor: "bg-white"
  }

  return (
    <section className={`py-12 md:py-20 ${sectionConfig.backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8" style={{color: '#1F1B3A'}}>
            {sectionConfig.title}
          </h2>
          
          {/* Full-width Image Carousel */}
          <div className="w-full h-64 md:h-96 lg:h-[28rem] xl:h-[32rem] relative overflow-hidden rounded-xl mb-8 md:mb-12">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={`/images/${image}`}
                  alt={`GTM Workshop ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
            
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'w-6' 
                      : 'opacity-50 hover:opacity-75'
                  }`}
                  style={{
                    backgroundColor: index === currentImageIndex ? '#6C63FF' : 'white'
                  }}
                />
              ))}
            </div>
          </div>

          {/* <p className="text-base md:text-lg max-w-3xl mx-auto px-4" style={{color: '#6B7280'}}>
            {sectionConfig.subtitle}
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon
            const gradientColors = [
              'linear-gradient(135deg, rgba(108, 99, 255, 0.15) 0%, rgba(76, 111, 255, 0.1) 100%)',
              'linear-gradient(135deg, rgba(76, 111, 255, 0.15) 0%, rgba(138, 127, 255, 0.1) 100%)',
              'linear-gradient(135deg, rgba(138, 127, 255, 0.15) 0%, rgba(108, 99, 255, 0.1) 100%)',
              'linear-gradient(135deg, rgba(90, 79, 207, 0.15) 0%, rgba(76, 111, 255, 0.1) 100%)'
            ]
            const iconColors = ['#6C63FF', '#4C6FFF', '#8A7FFF', '#5A4FCF']
            const iconGradients = [
              'linear-gradient(135deg, #6C63FF 0%, rgba(108, 99, 255, 0.8) 100%)',
              'linear-gradient(135deg, #4C6FFF 0%, rgba(76, 111, 255, 0.8) 100%)',
              'linear-gradient(135deg, #8A7FFF 0%, rgba(138, 127, 255, 0.8) 100%)',
              'linear-gradient(135deg, #5A4FCF 0%, rgba(90, 79, 207, 0.8) 100%)'
            ]
            return (
              <div 
                key={index}
                className="p-4 md:p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-opacity-20"
                style={{
                  background: gradientColors[index % gradientColors.length],
                  borderColor: iconColors[index % iconColors.length]
                }}
              >
                <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md"
                      style={{
                        background: iconGradients[index % iconGradients.length]
                      }}
                    >
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2" style={{color: '#1F1B3A'}}>
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base leading-relaxed" style={{color: '#5A4FCF'}}>
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
