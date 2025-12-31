'use client'
import memories from '@/data/memories'
import Image from 'next/image'
import { useState } from 'react'

type Memory = {
  src: string
  title: string
  desc: string
}

export default function MemoryGallery() {
  const [active, setActive] = useState<Memory | null>(null)

  return (
    <>
      <h2 className="section-title">📸 Memories of 2025</h2>

      <div className="gallery">
        {memories.map((m: Memory, i: number) => (
          <div key={i} className="photo" onClick={() => setActive(m)}>
            <Image src={m.src} alt={m.title} fill className="img" />
            <div className="overlay">{m.title}</div>
          </div>
        ))}
      </div>

      {active && (
        <div className="modal" onClick={() => setActive(null)}>
          <div className="modal-content">
            <Image src={active.src} alt={active.title} fill className="img" />
            <div className="caption">
              <h3>{active.title}</h3>
              <p>{active.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
