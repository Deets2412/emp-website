import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Emotional Money — The psychology of how you feel about money',
    template: '%s | Emotional Money',
  },
  description:
    'An independent Australian podcast about the emotions underneath our financial choices. We explore the psychology of money — gently, without shame — so steadier choices follow.',
  keywords: [
    'emotional money',
    'financial psychology',
    'money mindset',
    'personal finance australia',
    'money emotions',
    'financial wellness',
    'money persona',
    'financial transformation',
  ],
  authors: [{ name: 'Emotional Money' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Emotional Money',
    description:
      'An independent Australian podcast about the psychology of money. Podcast + Course + Companion App.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        {/* Compliance utility bar */}
        <div
          className="hidden sm:block"
          style={{
            background: 'var(--color-ink)',
            color: 'oklch(0.85 0.012 80)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
          }}
        >
          <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-6 px-8 py-2">
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--color-sage)]" />
              Independent &amp; editorially independent
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--color-sage)]" />
              Educational — not financial advice
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--color-sage)]" />
              Made in Australia
            </span>
          </div>
        </div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
