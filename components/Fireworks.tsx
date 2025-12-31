'use client'
import confetti from 'canvas-confetti'

export function firework(): void {
  const duration = 5000
  const end = Date.now() + duration

  const interval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(interval)
      return
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }, 400)
}
