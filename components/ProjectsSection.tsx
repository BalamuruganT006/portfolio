'use client'

import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A stunning Ben 10 themed portfolio with interactive Omnitrix navigation and smooth animations.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    link: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with product catalog, cart management, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team features.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'JavaScript'],
    link: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with beautiful UI and location-based forecasts.',
    tech: ['React', 'API Integration', 'Charts.js', 'CSS3'],
    link: '#',
  },
  {
    id: 5,
    title: 'Chat Application',
    description: 'Real-time messaging app with user authentication and message history.',
    tech: ['Socket.io', 'Node.js', 'MongoDB', 'React'],
    link: '#',
  },
  {
    id: 6,
    title: 'Machine Learning Dashboard',
    description: 'Data visualization dashboard with ML model predictions and interactive charts.',
    tech: ['Python', 'Flask', 'TensorFlow', 'D3.js'],
    link: '#',
  },
]

interface ProjectCardProps {
  project: (typeof projects)[0]
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative bg-card-dark border-2 border-omnitrix-green rounded-lg overflow-hidden group transition-all duration-300 hover:border-accent-cyan"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? '0 0 30px rgba(0, 255, 65, 0.5)' : '0 0 15px rgba(0, 255, 65, 0.2)',
      }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-omnitrix-green via-transparent to-accent-cyan opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Icon/Number */}
        <div className="text-4xl font-bold font-orbitron text-omnitrix-green mb-3 opacity-50">
          {project.id.toString().padStart(2, '0')}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-orbitron text-text-primary mb-3 group-hover:text-omnitrix-green transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary mb-4 leading-relaxed">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-rajdhani border border-accent-cyan text-accent-cyan rounded-full hover:bg-accent-cyan hover:text-bg-dark transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link button */}
        <a
          href={project.link}
          className="inline-block text-omnitrix-green hover:text-accent-cyan transition-colors font-orbitron text-sm"
        >
          View Project →
        </a>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full min-h-screen flex items-center justify-center bg-bg-dark py-20 px-4">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-omnitrix-green rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold font-orbitron glow-green mb-16 text-center">PROJECTS</h2>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View more button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/BalamuruganT006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-omnitrix-green text-omnitrix-green hover:bg-omnitrix-green hover:text-bg-dark transition-all duration-300 rounded-lg font-orbitron hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
