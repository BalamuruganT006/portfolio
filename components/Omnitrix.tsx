'use client'

import { useState } from 'react'

interface OmnitrixProps {
  activeSection: number
  onSectionChange: (index: number) => void
}

const aliens = [
  { name: 'Home', symbol: '⌂', alien: 'FOUR ARMS', color: '#FF6B6B' },
  { name: 'About', symbol: '◆', alien: 'HEATBLAST', color: '#FF9F1C' },
  { name: 'Skills', symbol: '⚡', alien: 'XLRS', color: '#00FF41' },
  { name: 'Projects', symbol: '○', alien: 'WILDMUTT', color: '#00D9FF' },
  { name: 'Contact', symbol: '✦', alien: 'GHOSTFREAK', color: '#9D4EDD' },
]

export default function Omnitrix({ activeSection, onSectionChange }: OmnitrixProps) {
  const [rotation, setRotation] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleAlienClick = (index: number) => {
    const newRotation = rotation + (72 * (index - activeSection))
    setRotation(newRotation)
    onSectionChange(index)
  }

  return (
    <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50 perspective">
      <style>{`
        @keyframes pulse-device {
          0%, 100% { box-shadow: 0 0 40px rgba(0, 255, 65, 0.4), 0 0 80px rgba(0, 255, 65, 0.2), inset 0 0 20px rgba(0, 255, 65, 0.1); }
          50% { box-shadow: 0 0 60px rgba(0, 255, 65, 0.6), 0 0 100px rgba(0, 255, 65, 0.3), inset 0 0 30px rgba(0, 255, 65, 0.15); }
        }
        
        @keyframes spin-dial {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .omnitrix-watch {
          animation: pulse-device 3s ease-in-out infinite;
        }
      `}</style>

      {/* Watch band left */}
      <div className="absolute top-16 -left-2 w-2 h-12 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-full shadow-xl" style={{ boxShadow: '-4px 0 12px rgba(0,0,0,0.8)' }}></div>

      {/* Watch band right */}
      <div className="absolute top-16 -right-2 w-2 h-12 bg-gradient-to-b from-gray-700 to-gray-900 rounded-r-full shadow-xl" style={{ boxShadow: '4px 0 12px rgba(0,0,0,0.8)' }}></div>

      {/* Main watch case - black metal casing */}
      <div className="relative w-44 h-44 omnitrix-watch" style={{
        background: 'radial-gradient(circle at 30% 30%, #2a2a2a, #0a0a0a)',
        borderRadius: '50%',
        border: '6px solid #1a1a1a',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9), inset -3px -3px 8px rgba(0, 0, 0, 0.8), inset 2px 2px 8px rgba(255, 255, 255, 0.1)',
      }}>
        
        {/* Outer metal ring */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-600" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(255, 255, 255, 0.1)' }}></div>

        {/* Segment dividers - the watch face structure */}
        <div className="absolute inset-0 rounded-full flex items-center justify-center">
          {[0, 72, 144, 216, 288].map((angle) => (
            <div
              key={angle}
              className="absolute w-0.5 h-20 bg-gradient-to-b from-gray-500 to-gray-900 opacity-60"
              style={{
                transform: `rotate(${angle}deg)`,
                top: '20px',
                left: '50%',
                marginLeft: '-1px',
              }}
            ></div>
          ))}
        </div>

        {/* Green center sphere - the iconic green orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full" style={{
          background: 'radial-gradient(circle at 35% 35%, #00FF41, #00CC33, #007020)',
          boxShadow: '0 0 50px rgba(0, 255, 65, 0.9), 0 0 100px rgba(0, 255, 65, 0.5), inset -2px -2px 8px rgba(0, 0, 0, 0.6), inset 2px 2px 8px rgba(255, 255, 255, 0.2)',
          border: '3px solid rgba(0, 255, 65, 0.4)',
        }}>
          {/* Shine on the green orb */}
          <div className="absolute top-2 left-3 w-6 h-6 bg-white rounded-full opacity-30 blur-sm"></div>
        </div>

        {/* The center dial/button area */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full" style={{
          background: 'radial-gradient(circle at 40% 40%, #00FF41, #00AA33)',
          boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 65, 0.7)',
        }}>
          {/* "10" inscription */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-green-950 text-3xl font-black font-orbitron tracking-wider select-none">10</span>
          </div>
        </div>

        {/* Rotating alien selector ring */}
        <div
          className="absolute inset-2 transition-transform duration-700 ease-out"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            borderRadius: '50%',
          }}
        >
          {aliens.map((alien, index) => {
            const angle = (index * 360) / aliens.length
            const radius = 62
            const x = Math.cos((angle * Math.PI) / 180) * radius
            const y = Math.sin((angle * Math.PI) / 180) * radius

            const isActive = activeSection === index

            return (
              <button
                key={index}
                onClick={() => handleAlienClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="absolute transition-all duration-300"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(-${rotation}deg)`,
                  width: '50px',
                  height: '50px',
                  left: '50%',
                  top: '50%',
                }}
                title={alien.name}
                aria-label={alien.name}
              >
                {/* Alien icon background */}
                <div
                  className="w-full h-full rounded-full flex items-center justify-center font-black text-lg border-2 transition-all duration-300 cursor-pointer hover:scale-110 relative"
                  style={{
                    background: isActive 
                      ? `radial-gradient(circle at 35% 35%, ${alien.color}40, ${alien.color}20)`
                      : `radial-gradient(circle at 35% 35%, #1a1a1a, #0a0a0a)`,
                    borderColor: isActive ? alien.color : '#333333',
                    boxShadow: isActive
                      ? `0 0 25px ${alien.color}, 0 0 50px ${alien.color}80, inset 0 0 15px ${alien.color}40`
                      : hoveredIndex === index
                      ? `0 0 15px ${alien.color}, inset 0 0 10px ${alien.color}20`
                      : '0 0 8px rgba(0, 255, 65, 0.3), inset 0 0 5px rgba(0, 255, 65, 0.1)',
                  }}
                >
                  {/* Glowing symbol */}
                  <span style={{ color: isActive ? alien.color : '#888888', textShadow: isActive ? `0 0 10px ${alien.color}` : 'none' }}>
                    {alien.symbol}
                  </span>

                  {/* Alien name label on hover */}
                  {(isActive || hoveredIndex === index) && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-orbitron px-2 py-1 rounded" style={{
                      background: alien.color + '30',
                      border: `1px solid ${alien.color}`,
                      color: alien.color,
                      boxShadow: `0 0 10px ${alien.color}`,
                    }}>
                      {alien.alien}
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Glow effect shadow under watch */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-16 rounded-full blur-2xl opacity-30" style={{
        background: 'radial-gradient(ellipse at center, rgba(0, 255, 65, 0.3), transparent)',
        pointerEvents: 'none',
      }}></div>
    </div>
  )
}
