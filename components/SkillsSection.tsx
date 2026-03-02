'use client'

import { useEffect, useRef, useState } from 'react'

const skillsByCategory = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'React', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'TypeScript', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'Flask/FastAPI', level: 82 },
    ],
  },
  {
    category: 'Databases & Tools',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 88 },
      { name: 'Firebase', level: 80 },
      { name: 'Docker', level: 78 },
    ],
  },
]

interface AnimatedSkillBarProps {
  name: string
  level: number
  inView: boolean
}

function AnimatedSkillBar({ name, level, inView }: AnimatedSkillBarProps) {
  const [displayLevel, setDisplayLevel] = useState(0)

  useEffect(() => {
    if (!inView) {
      setDisplayLevel(0)
      return
    }

    let interval: NodeJS.Timeout
    const increment = level / 30

    interval = setInterval(() => {
      setDisplayLevel((prev) => {
        if (prev >= level) {
          clearInterval(interval)
          return level
        }
        return prev + increment
      })
    }, 30)

    return () => clearInterval(interval)
  }, [inView, level])

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-rajdhani text-text-secondary">{name}</span>
        <span className="text-sm font-orbitron text-omnitrix-green">{Math.round(displayLevel)}%</span>
      </div>
      <div className="w-full h-2 bg-card-dark rounded-full border border-omnitrix-green border-opacity-30 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-omnitrix-green to-accent-cyan transition-all duration-300"
          style={{
            width: `${displayLevel}%`,
            boxShadow: '0 0 15px rgba(0, 255, 65, 0.6)',
          }}
        ></div>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="relative w-full min-h-screen flex items-center justify-center bg-bg-dark py-20 px-4">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-orange rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold font-orbitron glow-green mb-16 text-center">SKILLS</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsByCategory.map((category, index) => (
            <div key={index} className="bg-card-dark border-2 border-omnitrix-green border-glow-green rounded-lg p-6">
              <h3 className="text-xl font-bold text-accent-cyan font-orbitron mb-6 text-center border-b border-omnitrix-green border-opacity-30 pb-3">
                {category.category}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <AnimatedSkillBar key={skillIndex} name={skill.name} level={skill.level} inView={inView} />
              ))}
            </div>
          ))}
        </div>

        {/* Additional tech stack info */}
        <div className="mt-16 bg-card-dark border border-omnitrix-green border-opacity-50 rounded-lg p-8 text-center">
          <p className="text-text-secondary mb-4">Additional Technologies & Tools</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['REST APIs', 'GraphQL', 'Git', 'Linux', 'AWS', 'Vercel', 'Tailwind CSS', 'Next.js'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-omnitrix-green text-omnitrix-green rounded-full text-sm font-rajdhani hover:bg-omnitrix-green hover:text-bg-dark transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
