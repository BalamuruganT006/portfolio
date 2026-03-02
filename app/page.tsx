'use client'

import { useState } from 'react'
import Omnitrix from '@/components/Omnitrix'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)

  const sections = [
    { id: 'hero', component: HeroSection },
    { id: 'about', component: AboutSection },
    { id: 'skills', component: SkillsSection },
    { id: 'projects', component: ProjectsSection },
    { id: 'contact', component: ContactSection },
  ]

  const handleSectionChange = (index: number) => {
    setActiveSection(index)
    const element = document.getElementById(sections[index].id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="relative w-full bg-bg-dark">
      {/* Render all sections */}
      {sections.map((section, index) => {
        const Component = section.component
        return <Component key={index} />
      })}

      {/* Omnitrix Navigation */}
      <Omnitrix activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Footer */}
      <footer className="relative w-full bg-card-dark border-t border-omnitrix-green border-opacity-30 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-text-secondary font-rajdhani">
          <p>© 2024 Balamurugan T. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React, Next.js, and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}
