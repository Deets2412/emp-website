import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    if (!subject) {
      return NextResponse.json({ error: 'Subject is required' }, { status: 400 })
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      )
    }

    // Mock email sending — swap in real integration when ready
    console.log(`[Contact] New message from ${name} (${email})`)
    console.log(`  Subject: ${subject}`)
    console.log(`  Message: ${message.substring(0, 100)}...`)

    // Real email integration (Resend/SendGrid):
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@emotionalmoney.com.au',
    //   to: 'hello@emotionalmoney.com.au',
    //   subject: `[Contact Form] ${subject} — from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    // })

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
    })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
