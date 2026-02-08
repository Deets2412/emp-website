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
    default: 'The Emotional Money Podcast | Understand Your Relationship With Money',
    template: '%s | The Emotional Money Podcast',
  },
  description:
    'Explore the emotions that drive your financial decisions. Hosted by David & Emme — helping Australians understand why they feel the way they do about money.',
  keywords: [
    'emotional money',
    'financial psychology',
    'money mindset',
    'personal finance australia',
    'money emotions',
    'financial wellness',
    'money persona',
  ],
  authors: [{ name: 'The Emotional Money Podcast' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'The Emotional Money Podcast',
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
