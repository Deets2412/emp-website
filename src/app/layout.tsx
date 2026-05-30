import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'The Emotional Money Podcast | Psychology-First Financial Transformation',
    template: '%s | The Emotional Money Podcast',
  },
  description:
    'An Australian podcast exploring the psychology of money. Change how you feel about money — podcast, course, and companion app.',
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
  authors: [{ name: 'The Emotional Money Podcast' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'The Emotional Money Podcast',
    description:
      'An Australian podcast exploring the psychology of money. Podcast + Course + Companion App.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-slate-bg font-sans text-dark-text antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
