import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-600" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
        { name: "Vue.js", level: 75, color: "bg-green-500" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88, color: "bg-green-600" },
        { name: "Express.js", level: 85, color: "bg-gray-600" },
        { name: "Python", level: 80, color: "bg-blue-400" },
        { name: "MongoDB", level: 85, color: "bg-green-700" },
        { name: "PostgreSQL", level: 78, color: "bg-blue-700" },
        { name: "REST APIs", level: 90, color: "bg-purple-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 92, color: "bg-gray-800" },
        { name: "Docker", level: 75, color: "bg-blue-500" },
        { name: "AWS", level: 70, color: "bg-orange-600" },
        { name: "Webpack", level: 80, color: "bg-blue-400" },
        { name: "Jest", level: 85, color: "bg-red-500" },
        { name: "Figma", level: 75, color: "bg-purple-600" }
      ]
    }
  ]

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      badge: "🏆"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2022",
      badge: "⚛️"
    },
    {
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      year: "2021",
      badge: "🥇"
    },
    {
      title: "Full Stack Web Development",
      issuer: "The Odin Project",
      year: "2020",
      badge: "🎓"
    }
  ]

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Skills & <span className="text-blue-600">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{cert.badge}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-blue-600 font-medium text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design', 'SEO Optimization', 'Performance Optimization', 
              'Agile/Scrum', 'Code Review', 'Mentoring', 'Technical Writing', 
              'UI/UX Design', 'Cross-browser Compatibility', 'Accessibility (WCAG)'
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
