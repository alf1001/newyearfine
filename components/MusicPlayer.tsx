'use client'
import { useRef, useState } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [play, setPlay] = useState<boolean>(false)

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (play) audioRef.current.pause()
    else audioRef.current.play()

    setPlay(!play)
  }

  return (
    <>
      <audio ref={audioRef} loop src="/music.mp3" />
      <button className="btn" onClick={toggleMusic}>
        {play ? '🔇 Stop Music' : '🎶 Play Music'}
      </button>
    </>
  )
}
