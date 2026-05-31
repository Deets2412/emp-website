'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useQuiz } from '@/hooks/useQuiz'

const pageStyles = `
  .quiz-wrap { max-width: 720px; margin: 0 auto; padding: 0 32px; }

  .progress { margin-bottom: 32px; }
  .progress .meta { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; margin-bottom: 12px; font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; }
  .progress .meta .count { color: var(--ink); }
  .progress .meta .pct { color: var(--ink-faint); }
  .progress .track { height: 6px; border-radius: 999px; background: var(--paper-3); overflow: hidden; }
  .progress .fill { height: 100%; border-radius: 999px; background: var(--sage); transition: width 0.5s ease-out; }

  .qcard { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 40px; }
  @media (max-width: 560px) { .qcard { padding: 28px 22px; } }
  .qcard .context { font-style: italic; color: var(--ink-faint); font-size: 0.95rem; margin-bottom: 12px; }
  .qcard h1.q { font-size: clamp(1.5rem, 3vw, 1.95rem); line-height: 1.25; }

  .options { display: flex; flex-direction: column; gap: 12px; margin-top: 28px; }
  .opt { width: 100%; text-align: left; font-family: var(--sans); font-size: 1rem; color: var(--ink); background: var(--paper); border: 1px solid var(--line); border-radius: 14px; padding: 16px 20px; cursor: pointer; transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease; }
  .opt:hover { border-color: var(--sage); background: var(--sage-wash); transform: translateY(-1px); }
  .opt.selected { border-color: var(--sage-deep); background: var(--sage-wash); box-shadow: 0 0 0 1px var(--sage-deep); }

  .qnav { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: 28px; }
  .qnav .prev { font-family: var(--sans); font-size: 0.92rem; color: var(--ink-soft); background: none; border: none; cursor: pointer; transition: color 0.18s ease; }
  .qnav .prev:hover:not(:disabled) { color: var(--ink); }
  .qnav .prev:disabled { opacity: 0.3; cursor: default; }
  .qnav .exit { font-family: var(--sans); font-size: 0.92rem; color: var(--ink-faint); transition: color 0.18s ease; }
  .qnav .exit:hover { color: var(--ink-soft); }

  .capture { max-width: 560px; margin: 0 auto; padding: 0 32px; }
  .capture-card { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 48px 40px; text-align: center; }
  @media (max-width: 560px) { .capture-card { padding: 36px 24px; } }
  .capture-card .badge { width: 64px; height: 64px; margin: 0 auto 22px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--sage-wash); color: var(--sage-deep); }
  .capture-card h1 { font-size: clamp(1.7rem, 3.4vw, 2.3rem); line-height: 1.15; }
  .capture-card .sub { color: var(--ink-soft); margin: 14px auto 0; max-width: 44ch; line-height: 1.6; }
  .capture-form { margin-top: 28px; display: flex; flex-direction: column; gap: 12px; }
  .capture-form input { width: 100%; padding: 0.9em 1.2em; border-radius: 999px; border: 1px solid var(--line-strong); background: var(--paper); color: var(--ink); font-family: var(--sans); font-size: 0.98rem; transition: border-color 0.18s ease; }
  .capture-form input::placeholder { color: var(--ink-faint); }
  .capture-form input:focus { outline: none; border-color: var(--sage); }
  .capture-form .btn { width: 100%; justify-content: center; }
  .capture-form .skip { font-family: var(--sans); font-size: 0.9rem; color: var(--ink-faint); background: none; border: none; cursor: pointer; padding: 6px; transition: color 0.18s ease; }
  .capture-form .skip:hover { color: var(--ink-soft); }
  .capture-card .fineprint { margin-top: 18px; font-size: 0.82rem; color: var(--ink-faint); }

  .quiz-state { min-height: 60vh; display: flex; align-items: center; justify-content: center; color: var(--ink-soft); }
`

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
      <>
        <style>{pageStyles}</style>
        <section className="band">
          <div className="capture">
            <div className="capture-card">
              <span className="badge" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M5 9l10 7 10-7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="5"
                    y="7"
                    width="20"
                    height="16"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <h1>Your results are ready</h1>
              <p className="sub">
                Enter your email to get your full persona report with a personalised reflection,
                everyday practices, and gentle next steps.
              </p>
              <div className="capture-form">
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />
                <button
                  onClick={handleSubmitEmail}
                  className="btn btn-primary"
                >
                  Get my results
                </button>
                <button onClick={skipEmail} className="skip">
                  Skip &mdash; just show my results
                </button>
              </div>
              <p className="fineprint">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }

  // Loading / idle state
  if (!currentQuestionData) {
    return (
      <>
        <style>{pageStyles}</style>
        <div className="quiz-state">
          <p>Loading quiz&hellip;</p>
        </div>
      </>
    )
  }

  // Questions Phase
  return (
    <>
      <style>{pageStyles}</style>
      <section className="band">
        <div className="quiz-wrap">
          {/* Progress */}
          <div className="progress">
            <div className="meta">
              <span className="count">
                Question {currentQuestion + 1} of {totalQuestions}
              </span>
              <span className="pct">{progressPercent}% complete</span>
            </div>
            <div className="track">
              <div className="fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>

          {/* Question */}
          <div className="qcard">
            {currentQuestionData.context && (
              <p className="context">{currentQuestionData.context}</p>
            )}
            <h1 className="q">{currentQuestionData.question}</h1>

            {/* Options */}
            <div className="options">
              {currentQuestionData.options.map((option, i) => {
                const isSelected = answers[currentQuestion] === i
                return (
                  <button
                    key={i}
                    onClick={() => answer(currentQuestion, i)}
                    className={`opt${isSelected ? ' selected' : ''}`}
                  >
                    {option.text}
                  </button>
                )
              })}
            </div>

            {/* Navigation */}
            <div className="qnav">
              <button
                onClick={prev}
                disabled={currentQuestion === 0}
                className="prev"
              >
                &larr; Previous
              </button>
              <Link href="/quiz" className="exit">
                Exit quiz
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
