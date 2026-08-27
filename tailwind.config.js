/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        counterPop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.25)' },
          '100%': { transform: 'scale(1)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 }
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-6px) rotate(-8deg)' },
          '40%': { transform: 'translateX(6px) rotate(8deg)' },
          '60%': { transform: 'translateX(-4px) rotate(-5deg)' },
          '80%': { transform: 'translateX(4px) rotate(5deg)' }
        },
        popIn: {
          '0%': { opacity: 0, transform: 'scale(0.85)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        },
        screenIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        mascotIdle: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-3px) rotate(-2deg)' }
        },
        mascotJump: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '30%': { transform: 'translateY(-14px) scale(1.05, 0.95)' },
          '50%': { transform: 'translateY(-18px) scale(0.98, 1.05)' },
          '70%': { transform: 'translateY(-6px) scale(1.02, 0.98)' }
        },
        mascotSlump: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(4px) rotate(-4deg)' }
        },
        mascotWiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-4deg)' },
          '75%': { transform: 'rotate(4deg)' }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out both',
        counterPop: 'counterPop 0.3s ease-in-out',
        pulseSoft: 'pulseSoft 2.5s ease-in-out infinite',
        shake: 'shake 0.4s ease-in-out',
        popIn: 'popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        screenIn: 'screenIn 0.3s ease-out both',
        mascotIdle: 'mascotIdle 2.8s ease-in-out infinite',
        mascotJump: 'mascotJump 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) infinite',
        mascotSlump: 'mascotSlump 0.5s ease-out both',
        mascotWiggle: 'mascotWiggle 0.6s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
