import Countdown from '@/components/Countdown'
import MemoryGallery from '@/components/MemoryGallery'
import MusicPlayer from '@/components/MusicPlayer'
import Resolution from '@/components/Resolution'

export default function Home() {
  return (
    <main className="container">
      <h1 className="title">🎆 Goodbye 2025, Welcome 2026 🎆</h1>

      <Countdown />
      <MusicPlayer />
      <MemoryGallery />
      <Resolution />
    </main>
  )
}
