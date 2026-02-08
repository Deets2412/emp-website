import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-bg px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="text-6xl font-bold text-navy-200">404</div>
        <h1 className="mt-4 text-2xl font-bold text-navy-800">Lost in the Numbers?</h1>
        <p className="mt-3 text-navy-600">
          This page does not exist, but your money story does. Let us help you find what you
          are looking for.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex justify-center rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
          >
            Go Home
          </Link>
          <Link
            href="/episodes"
            className="inline-flex justify-center rounded-lg border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700"
          >
            Browse Episodes
          </Link>
          <Link
            href="/quiz"
            className="inline-flex justify-center rounded-lg border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    </div>
  )
}
