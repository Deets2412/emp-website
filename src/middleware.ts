import { NextRequest, NextResponse } from 'next/server'

const BLOCKED_HOSTS = new Set(['emp-website-eight.vercel.app'])

export function middleware(req: NextRequest) {
  const host = req.headers.get('host')?.toLowerCase() ?? ''

  if (BLOCKED_HOSTS.has(host) || host.endsWith('.vercel.app')) {
    return new NextResponse(
      '<!doctype html><meta charset="utf-8"><title>Not available</title><body style="font-family:system-ui;padding:2rem;color:#444">This page is not available.</body>',
      {
        status: 410,
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'no-store',
          'x-robots-tag': 'noindex, nofollow',
        },
      },
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
