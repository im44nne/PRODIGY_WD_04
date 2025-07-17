import React from 'react'
import { Code, Lightbulb, Users, Award } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Problem Solving",
      description: "Creative solutions to complex challenges with innovative thinking"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Team Player",
      description: "Collaborative approach with excellent communication and leadership skills"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality Focus",
      description: "Committed to delivering high-quality products that exceed expectations"
    }
  ]

  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      description: "Leading frontend development projects, mentoring junior developers, and implementing modern web technologies."
    },
    {
      year: "2021 - 2023",
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      description: "Developed responsive web applications using React, Node.js, and MongoDB. Collaborated with design teams to create user-friendly interfaces."
    },
    {
      year: "2019 - 2021",
      title: "Frontend Developer",
      company: "StartUp Ventures",
      description: "Built interactive user interfaces and optimized web performance. Worked with cross-functional teams to deliver projects on time."
    },
    {
      year: "2019",
      title: "Computer Science Degree",
      company: "University of Technology",
      description: "Bachelor's degree in Computer Science with focus on web development, algorithms, and software engineering principles."
    }
  ]

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate web developer with 4+ years of experience creating digital solutions 
            that make a difference. I love turning ideas into reality through code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">My Story</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  My journey into web development started during my university years when I built my first website. 
                  What began as curiosity quickly turned into passion as I discovered the power of creating 
                  digital experiences that can impact people's lives.
                </p>
                <p>
                  Over the years, I've had the privilege of working with diverse teams and clients, 
                  from startups to established companies. Each project has taught me something new and 
                  reinforced my belief that great software is built through collaboration, attention to detail, 
                  and genuine care for the end user.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I believe in continuous learning 
                  and staying updated with the ever-evolving world of web development.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-3">{highlight.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Experience & Education</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="text-sm text-blue-600 font-medium">{item.year}</div>
                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                    <div className="text-gray-600 font-medium">{item.company}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "4+", label: "Years Experience" },
            { number: "20+", label: "Happy Clients" },
            { number: "100%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
