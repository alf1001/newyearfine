import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { email, resolution } = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"New Year Memories 🎆" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '🎉 Resolusi Tahun Baru Kamu',
      html: `
        <h2>✨ Resolusi Tahun Baru</h2>
        <p>${resolution}</p>
        <p>Semoga tercapai di tahun ini 💙</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
