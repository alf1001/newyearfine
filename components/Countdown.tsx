'use client'
import { useEffect, useState } from 'react'
import { firework } from './Fireworks'

export default function Countdown() {
  const target = new Date('January 1, 2026 00:00:00').getTime()
  const [timeLeft, setTimeLeft] = useState<number>(target - Date.now())
  const [done, setDone] = useState<boolean>(false)

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = target - Date.now()
      setTimeLeft(diff)

      if (diff <= 0 && !done) {
        firework()
        setDone(true)
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [done, target])

  if (timeLeft <= 0) {
    return <h2>🎉 Happy New Year 2026 🎉</h2>
  }

  const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const h = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  const m = Math.floor((timeLeft / (1000 * 60)) % 60)
  const s = Math.floor((timeLeft / 1000) % 60)

  return (
    <div className="countdown">
      <span>{d} Hari</span>
      <span>{h} Jam</span>
      <span>{m} Menit</span>
      <span>{s} Detik</span>
    </div>
  )
}
