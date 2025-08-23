"use client"

import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-deep-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GTM</span>
              </div>
              <span className="ml-3 text-xl font-bold">GTM Academy</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your startup&apos;s revenue engine with proven GTM playbooks, 
              expert guidance, and hands-on practice. From first sales to scalable growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>hello@gtmacademy.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Sales Foundation</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Pipeline & Growth</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">GTM Scaling</a></li>
              <li><a href="#experts" className="text-gray-300 hover:text-white transition-colors">Expert Mentoring</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Templates</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-2xl">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Get the latest GTM insights, templates, and program updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <Button 
                className="bg-primary hover:bg-primary-dark px-6"
                onClick={() => window.open('https://forms.monday.com/forms/d7b6a117c080ed8981fc75ee6a283745?r=euc1', '_blank')}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} GTM Academy. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to turn solid foundations into faster, smarter revenue?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('https://forms.monday.com/forms/d7b6a117c080ed8981fc75ee6a283745?r=euc1', '_blank')}
            >
              Talk to an Expert
            </Button>
            <Button 
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => window.open('https://forms.monday.com/forms/d7b6a117c080ed8981fc75ee6a283745?r=euc1', '_blank')}
            >
              Download Full Deck
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
