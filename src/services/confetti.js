import confetti from 'canvas-confetti'

export function fireConfetti() {
  const colors = ['#fbbf24', '#f59e0b', '#60a5fa', '#34d399']

  confetti({
    particleCount: 90,
    spread: 70,
    origin: { y: 0.5 },
    colors,
    zIndex: 100
  })

  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors,
      zIndex: 100
    })
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors,
      zIndex: 100
    })
  }, 200)
}
