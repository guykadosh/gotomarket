"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden'
      setIsLoading(true)
      setIsAnimating(true)
    } else {
      // Restore body scrolling when modal is closed
      document.body.style.overflow = 'unset'
      setIsAnimating(false)
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    // Listen for form submission completion
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from Monday.com forms
      if (event.origin === 'https://forms.monday.com') {
        // Check if it's a form submission success message
        if (event.data && (
          event.data.type === 'form_submitted' || 
          event.data === 'form_submitted' ||
          (typeof event.data === 'string' && event.data.includes('success'))
        )) {
          // Close modal after successful submission
          setTimeout(() => {
            onClose()
          }, 1500) // Give user time to see success message
        }
      }
    }

    if (isOpen) {
      window.addEventListener('message', handleMessage)
    }

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  if (!isOpen) return null

  return (
    <div 
      className={`fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden relative transition-all duration-300 transform ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`} 
        style={{ minHeight: '600px', maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex items-center justify-center bg-white rounded-2xl" style={{ minHeight: '600px' }}>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#6C63FF' }}></div>
          </div>
        )}

        {/* Form Container */}
        <div className="relative" style={{ display: isLoading ? 'none' : 'block', minHeight: '600px' }}>
          <iframe 
            src="https://forms.monday.com/forms/embed/d7b6a117c080ed8981fc75ee6a283745?r=euc1" 
            width="100%" 
            height="600" 
            style={{ 
              border: 0,
              minHeight: '600px',
              borderRadius: '16px'
            }}
            onLoad={handleIframeLoad}
            title="Contact Form"
          />
        </div>
      </div>
    </div>
  )
}
