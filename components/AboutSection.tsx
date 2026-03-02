'use client'

export default function AboutSection() {
  const stats = [
    { label: 'Repositories', value: '23' },
    { label: 'Followers', value: '16' },
    { label: 'Stars', value: '4' },
  ]

  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center bg-bg-dark py-20 px-4">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-omnitrix-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl">
        <h2 className="text-5xl md:text-6xl font-bold font-orbitron glow-green mb-12 text-center">ABOUT ME</h2>

        <div className="bg-card-dark border-2 border-omnitrix-green border-glow-green rounded-lg p-8 md:p-12">
          {/* Profile section */}
          <div className="flex flex-col items-center mb-8">
            {/* Avatar with rotating ring */}
            <div className="relative w-32 h-32 mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-omnitrix-green animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-omnitrix-green to-accent-cyan flex items-center justify-center text-5xl font-bold font-orbitron">
                BT
              </div>
            </div>

            <h3 className="text-2xl font-bold text-omnitrix-green font-orbitron mb-2">Balamurugan T</h3>
            <p className="text-text-secondary text-center">Frontend Developer | Problem Solver | Tech Enthusiast</p>
          </div>

          {/* Bio */}
          <div className="mb-8 text-center">
            <p className="text-text-secondary leading-relaxed mb-4">
              Passionate frontend developer with a love for creating beautiful, functional web experiences. Specialized in building responsive applications using modern web technologies.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I transform ideas into elegant solutions, combining technical expertise with creative problem-solving to deliver outstanding digital products.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-t border-b border-omnitrix-green border-opacity-30">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-omnitrix-green font-orbitron">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://github.com/BalamuruganT006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-bg-dark transition-all duration-300 rounded-lg font-orbitron hover:scale-105"
            >
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
