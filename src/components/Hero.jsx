import React from 'react'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <p className="text-blue-600 font-medium mb-2 text-lg">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                <span className="block">Your Name</span>
                <span className="text-blue-600">Web Developer</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                I create beautiful, responsive, and user-friendly websites and web applications 
                using modern technologies. Passionate about clean code and exceptional user experiences.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {['React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'MongoDB'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium shadow-sm border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary"
              >
                View My Work
              </button>
              <button className="btn btn-outline flex items-center gap-2">
                <Download size={20} />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-red-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-blue-600 transition-colors duration-200 animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
