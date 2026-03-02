import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'omnitrix-green': '#00FF41',
        'omnitrix-green-light': '#39FF14',
        'bg-dark': '#0D0D0D',
        'card-dark': '#1A1A1A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B0B0',
        'accent-cyan': '#00FFFF',
        'accent-orange': '#FF6B00',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'glitch': 'glitch 0.5s infinite',
        'typewriter': 'typewriter 3s steps(20, end) forwards',
        'scanlines': 'scanlines 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0, 255, 65, 0.5)' },
          '50%': { 'box-shadow': '0 0 40px rgba(0, 255, 65, 1)' },
        },
        'pulse-glow': {
          '0%, 100%': { 'box-shadow': '0 0 15px rgba(0, 255, 65, 0.3)' },
          '50%': { 'box-shadow': '0 0 30px rgba(0, 255, 65, 0.8)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        scanlines: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
