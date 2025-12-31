'use client'
import { useState } from 'react'

export default function Resolution() {
  const [email, setEmail] = useState('')
  const [resolution, setResolution] = useState('')
  const [status, setStatus] = useState('')

  const submit = async () => {
    if (!email || !resolution) {
      setStatus('❌ Email dan resolusi wajib diisi')
      return
    }

    setStatus('⏳ Mengirim...')

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, resolution })
    })

    if (res.ok) {
      setStatus('✅ Resolusi berhasil dikirim ke email!')
      setEmail('')
      setResolution('')
    } else {
      setStatus('❌ Gagal mengirim email')
    }
  }

  return (
    <div className="card">
      <h3>📝 Resolusi Tahun Baru</h3>

      <input
        type="email"
        placeholder="Email tujuan"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        placeholder="Tulis resolusi kamu..."
        value={resolution}
        onChange={e => setResolution(e.target.value)}
      />

      <button className="btn" onClick={submit}>
        Kirim Resolusi
      </button>

      {status && <p>{status}</p>}
    </div>
  )
}
