import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Balamurugan T - Portfolio',
  description: 'Frontend Developer | Problem Solver | Tech Enthusiast',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
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
