import React, { useState } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "CSS3"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      id: 4,
      title: "Blog CMS",
      description: "A content management system for bloggers with rich text editor, SEO optimization, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 5,
      title: "REST API Service",
      description: "A scalable REST API with authentication, rate limiting, and comprehensive documentation. Deployed on AWS with CI/CD pipeline.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express", "MongoDB", "AWS", "Docker"],
      category: "backend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "CSS3", "Framer Motion", "Netlify"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for web development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Eye size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                filter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
