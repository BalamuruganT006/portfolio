import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Balamurugan T - Portfolio',
  description: 'Frontend Developer | Problem Solver | Tech Enthusiast',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#00FF41" />
      </head>
      <body className="bg-bg-dark text-text-primary font-rajdhani">
        {children}
      </body>
    </html>
  )
}
