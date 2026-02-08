import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const secret = body.secret || request.headers.get('x-revalidation-secret')
    const expectedSecret = process.env.REVALIDATION_SECRET || 'dev-secret'

    if (secret !== expectedSecret) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    }

    const paths: string[] = body.paths || ['/']

    for (const path of paths) {
      revalidatePath(path)
    }

    console.log(`[Revalidate] Revalidated paths:`, paths)

    return NextResponse.json({
      revalidated: true,
      paths,
      timestamp: new Date().toISOString(),
    })
  } catch {
    return NextResponse.json(
      { error: 'Revalidation failed' },
      { status: 500 }
    )
  }
}
