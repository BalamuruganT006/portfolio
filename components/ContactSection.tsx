'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setMessage('Please enter your name')
      return false
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setMessage('Please enter a valid email address')
      return false
    }
    if (!formData.subject.trim()) {
      setMessage('Please enter a subject')
      return false
    }
    if (!formData.message.trim()) {
      setMessage('Please enter your message')
      return false
    }
    return true
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      setStatus('error')
      return
    }

    // Simulate form submission
    setStatus('success')
    setMessage('Message sent successfully! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })

    setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="relative w-full min-h-screen flex items-center justify-center bg-bg-dark py-20 px-4">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-omnitrix-green rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold font-orbitron glow-green mb-8 text-center">GET IN TOUCH</h2>

        <p className="text-center text-text-secondary mb-12 text-lg">
          Have a project in mind? Let&apos;s collaborate and create something amazing together.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-card-dark border-2 border-omnitrix-green border-glow-green rounded-lg p-8">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-orbitron text-omnitrix-green mb-2">
              NAME *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-bg-dark border-2 border-omnitrix-green text-text-primary rounded-lg focus:outline-none focus:border-accent-cyan focus:shadow-lg transition-all"
              placeholder="Your name"
              aria-label="Name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-orbitron text-omnitrix-green mb-2">
              EMAIL *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-bg-dark border-2 border-omnitrix-green text-text-primary rounded-lg focus:outline-none focus:border-accent-cyan focus:shadow-lg transition-all"
              placeholder="your.email@example.com"
              aria-label="Email"
            />
          </div>

          {/* Subject Field */}
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-orbitron text-omnitrix-green mb-2">
              SUBJECT *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-bg-dark border-2 border-omnitrix-green text-text-primary rounded-lg focus:outline-none focus:border-accent-cyan focus:shadow-lg transition-all"
              placeholder="What is this about?"
              aria-label="Subject"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-orbitron text-omnitrix-green mb-2">
              MESSAGE *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-bg-dark border-2 border-omnitrix-green text-text-primary rounded-lg focus:outline-none focus:border-accent-cyan focus:shadow-lg transition-all resize-none"
              placeholder="Your message here..."
              rows={6}
              aria-label="Message"
            />
          </div>

          {/* Status Message */}
          {status !== 'idle' && (
            <div
              className={`mb-6 p-4 rounded-lg text-center font-orbitron ${
                status === 'success'
                  ? 'bg-green-900 bg-opacity-30 border border-omnitrix-green text-omnitrix-green'
                  : 'bg-red-900 bg-opacity-30 border border-accent-orange text-accent-orange'
              }`}
            >
              {message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-4 text-lg font-bold font-orbitron bg-omnitrix-green text-bg-dark hover:bg-accent-cyan transition-all duration-300 rounded-lg hover:scale-105 transform"
            style={{
              boxShadow: '0 0 20px rgba(0, 255, 65, 0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 255, 65, 0.8)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.4)'
            }}
          >
            SEND MESSAGE
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <a
            href="mailto:contact@example.com"
            className="bg-card-dark border border-accent-cyan rounded-lg p-6 text-center hover:border-omnitrix-green transition-all"
          >
            <div className="text-2xl mb-2">📧</div>
            <p className="text-sm text-text-secondary">Email</p>
            <p className="text-accent-cyan font-orbitron">contact@example.com</p>
          </a>
          <a
            href="https://github.com/BalamuruganT006"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card-dark border border-accent-cyan rounded-lg p-6 text-center hover:border-omnitrix-green transition-all"
          >
            <div className="text-2xl mb-2">🔗</div>
            <p className="text-sm text-text-secondary">GitHub</p>
            <p className="text-accent-cyan font-orbitron">BalamuruganT006</p>
          </a>
        </div>
      </div>
    </section>
  )
}
