'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useQuiz } from '@/hooks/useQuiz'

export default function QuizQuestionsPage() {
  const router = useRouter()
  const {
    phase,
    currentQuestion,
    answers,
    totalQuestions,
    progressPercent,
    currentQuestionData,
    primaryPersona,
    email,
    start,
    answer,
    prev,
    setEmail,
    submit,
    skipEmail,
  } = useQuiz()

  // Auto-start quiz if idle
  useEffect(() => {
    if (phase === 'idle') {
      start()
    }
  }, [phase, start])

  // Redirect to results when complete
  useEffect(() => {
    if (phase === 'complete' && primaryPersona) {
      router.push(`/quiz/results/${primaryPersona}`)
    }
  }, [phase, primaryPersona, router])

  const handleSubmitEmail = async () => {
    if (email && email.includes('@')) {
      try {
        await fetch('/api/quiz/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, persona: primaryPersona }),
        })
      } catch {
        // Continue even if API fails
      }
    }
    submit()
  }

  // Email Capture Phase
  if (phase === 'emailCapture') {
    return (
      <div className="bg-slate-bg py-12 sm:py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-navy-100 bg-white p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100">
              <span className="text-2xl">🎉</span>
            </div>
            <h1 className="text-2xl font-bold text-navy-800">Your Results Are Ready!</h1>
            <p className="mt-3 text-navy-600">
              Enter your email to get your full persona report with a personalised action plan,
              daily practices, and growth strategies.
            </p>
            <div className="mt-6">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-navy-800 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
              />
              <button
                onClick={handleSubmitEmail}
                className="mt-3 w-full rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
              >
                Get My Results
              </button>
              <button
                onClick={skipEmail}
                className="mt-2 w-full py-2 text-sm text-navy-500 transition-colors hover:text-navy-700"
              >
                Skip — just show my results
              </button>
            </div>
            <p className="mt-4 text-xs text-navy-400">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Loading / idle state
  if (!currentQuestionData) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-slate-bg">
        <p className="text-navy-600">Loading quiz...</p>
      </div>
    )
  }

  // Questions Phase
  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-navy-700">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
            <span className="text-navy-500">{progressPercent}% complete</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-navy-100">
            <div
              className="h-full rounded-full bg-gold-500 transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
          {currentQuestionData.context && (
            <p className="mb-3 text-sm italic text-navy-500">
              {currentQuestionData.context}
            </p>
          )}
          <h2 className="text-xl font-semibold leading-snug text-navy-800 sm:text-2xl">
            {currentQuestionData.question}
          </h2>

          {/* Options */}
          <div className="mt-6 space-y-3">
            {currentQuestionData.options.map((option, i) => {
              const isSelected = answers[currentQuestion] === i
              return (
                <button
                  key={i}
                  onClick={() => answer(currentQuestion, i)}
                  className={`w-full rounded-xl border-2 px-4 py-4 text-left text-sm transition-all sm:text-base ${
                    isSelected
                      ? 'border-gold-500 bg-gold-50 text-navy-800'
                      : 'border-navy-100 bg-white text-navy-700 hover:border-gold-300 hover:bg-gold-50/50'
                  }`}
                >
                  {option.text}
                </button>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={prev}
              disabled={currentQuestion === 0}
              className="text-sm font-medium text-navy-500 transition-colors hover:text-navy-700 disabled:opacity-30"
            >
              ← Previous
            </button>
            <Link
              href="/quiz"
              className="text-sm text-navy-400 transition-colors hover:text-navy-600"
            >
              Exit Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
