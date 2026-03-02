'use client'

import { useState } from 'react'

interface OmnitrixProps {
  activeSection: number
  onSectionChange: (index: number) => void
}

const aliens = [
  { name: 'Home', icon: '🏠', color: 'from-green-400' },
  { name: 'About', icon: '👤', color: 'from-cyan-400' },
  { name: 'Skills', icon: '⚙️', color: 'from-orange-500' },
  { name: 'Projects', icon: '📱', color: 'from-green-400' },
  { name: 'Contact', icon: '✉️', color: 'from-cyan-400' },
]

export default function Omnitrix({ activeSection, onSectionChange }: OmnitrixProps) {
  const [rotation, setRotation] = useState(0)

  const handleAlienClick = (index: number) => {
    const newRotation = rotation + (72 * (index - activeSection))
    setRotation(newRotation)
    onSectionChange(index)
  }

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      {/* Outer glow ring */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-omnitrix-green opacity-30 animate-pulse-glow"></div>
        <div className="absolute inset-2 rounded-full border border-omnitrix-green-light opacity-20"></div>

        {/* Center circle */}
        <div className="absolute w-16 h-16 bg-gradient-to-br from-omnitrix-green to-accent-cyan rounded-full flex items-center justify-center shadow-lg" style={{ boxShadow: '0 0 30px rgba(0, 255, 65, 0.6)' }}>
          <div className="text-2xl font-bold text-bg-dark font-orbitron">10</div>
        </div>

        {/* Rotating alien segments */}
        <div
          className="absolute inset-0 transition-transform duration-500"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {aliens.map((alien, index) => {
            const angle = (index * 360) / aliens.length
            const x = Math.cos((angle * Math.PI) / 180) * 50
            const y = Math.sin((angle * Math.PI) / 180) * 50

            return (
              <button
                key={index}
                onClick={() => handleAlienClick(index)}
                className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 cursor-pointer hover:scale-110 ${
                  activeSection === index
                    ? 'border-2 border-accent-cyan scale-110'
                    : 'border-2 border-omnitrix-green hover:border-accent-cyan'
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px) rotate(-${rotation}deg)`,
                  background: activeSection === index ? 'rgba(0, 255, 65, 0.2)' : 'rgba(26, 26, 26, 0.8)',
                  boxShadow: activeSection === index ? '0 0 20px rgba(0, 255, 65, 0.8)' : '0 0 10px rgba(0, 255, 65, 0.4)',
                }}
                title={alien.name}
                aria-label={alien.name}
              >
                {alien.icon}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
