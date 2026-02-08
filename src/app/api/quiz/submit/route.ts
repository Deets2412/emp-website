import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, persona, scores } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    if (!persona) {
      return NextResponse.json({ error: 'Persona result is required' }, { status: 400 })
    }

    // Mock ConvertKit integration — swap in real API when ready
    console.log(`[Quiz] New submission: ${email} => ${persona}`, scores)

    // Real ConvertKit integration:
    // const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY
    // const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_QUIZ_FORM_ID
    // await fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     api_key: CONVERTKIT_API_KEY,
    //     email,
    //     tags: [persona], // Tag subscriber with their persona
    //     fields: { persona, scores: JSON.stringify(scores) },
    //   }),
    // })

    return NextResponse.json({ success: true, persona })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
