'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'BALAMURUGAN T'
  const subtitle = 'Frontend Developer | Problem Solver | Tech Enthusiast'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-omnitrix-green animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Glitch effect title */}
        <div className="relative inline-block mb-6">
          <h1 className="text-6xl md:text-8xl font-bold font-orbitron glow-green animate-glitch">
            {displayText}
            {displayText.length < fullText.length && (
              <span className="animate-pulse">_</span>
            )}
          </h1>
          {/* Glitch copies */}
          <h1
            className="absolute top-0 left-0 text-6xl md:text-8xl font-bold font-orbitron text-accent-cyan opacity-70"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 58%)',
              animation: 'glitch 2s infinite',
              animationDelay: '0.2s',
            }}
          >
            {displayText}
          </h1>
          <h1
            className="absolute top-0 left-0 text-6xl md:text-8xl font-bold font-orbitron text-accent-orange opacity-70"
            style={{
              clipPath: 'polygon(0 58%, 100% 45%, 100% 100%, 0 100%)',
              animation: 'glitch 2s infinite',
              animationDelay: '0.4s',
            }}
          >
            {displayText}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-text-secondary mb-8 glow-cyan">
          {subtitle}
        </p>

        {/* CTA Button */}
        <button
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="px-8 py-4 text-lg font-bold font-orbitron border-2 border-omnitrix-green text-omnitrix-green hover:bg-omnitrix-green hover:text-bg-dark transition-all duration-300 rounded-lg animate-pulse-glow hover:scale-105"
        >
          ACTIVATE OMNITRIX
        </button>

        {/* Floating alien symbols */}
        <div className="absolute top-20 left-10 text-4xl opacity-30 animate-pulse">👽</div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-30 animate-pulse">⚡</div>
      </div>
    </section>
  )
}
