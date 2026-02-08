'use client'

import { useReducer, useEffect, useCallback, useRef } from 'react'
import type { PersonaSlug } from '@/lib/constants'
import { PERSONAS } from '@/lib/constants'
import { quizQuestions, TOTAL_QUESTIONS } from '@/data/quizQuestions'

const STORAGE_KEY = 'emp-quiz-state'

type QuizPhase = 'idle' | 'inProgress' | 'emailCapture' | 'complete'

interface QuizState {
  phase: QuizPhase
  currentQuestion: number
  answers: (number | null)[]
  scores: Record<PersonaSlug, number>
  email: string
  primaryPersona: PersonaSlug | null
  secondaryPersona: PersonaSlug | null
}

type QuizAction =
  | { type: 'START' }
  | { type: 'ANSWER'; questionIndex: number; optionIndex: number }
  | { type: 'PREV' }
  | { type: 'NEXT' }
  | { type: 'GO_TO_EMAIL' }
  | { type: 'SET_EMAIL'; email: string }
  | { type: 'SUBMIT' }
  | { type: 'SKIP_EMAIL' }
  | { type: 'RESET' }
  | { type: 'RESTORE'; state: QuizState }

const initialState: QuizState = {
  phase: 'idle',
  currentQuestion: 0,
  answers: Array(TOTAL_QUESTIONS).fill(null),
  scores: {
    'balanced-builder': 0,
    'anxious-protector': 0,
    'avoidant-free-spirit': 0,
    'wounded-warrior': 0,
    'perfectionist-analyzer': 0,
  },
  email: '',
  primaryPersona: null,
  secondaryPersona: null,
}

function calculateScores(answers: (number | null)[]): Record<PersonaSlug, number> {
  const scores: Record<PersonaSlug, number> = {
    'balanced-builder': 0,
    'anxious-protector': 0,
    'avoidant-free-spirit': 0,
    'wounded-warrior': 0,
    'perfectionist-analyzer': 0,
  }

  answers.forEach((optionIndex, questionIndex) => {
    if (optionIndex === null) return
    const question = quizQuestions[questionIndex]
    if (!question) return
    const option = question.options[optionIndex]
    if (!option) return

    const personaSlugs = Object.keys(scores) as PersonaSlug[]
    personaSlugs.forEach((slug) => {
      scores[slug] += option.scores[slug]
    })
  })

  return scores
}

function determinePersonas(scores: Record<PersonaSlug, number>): {
  primary: PersonaSlug
  secondary: PersonaSlug
} {
  const sorted = (Object.entries(scores) as [PersonaSlug, number][]).sort(
    (a, b) => b[1] - a[1]
  )
  return {
    primary: sorted[0][0],
    secondary: sorted[1][0],
  }
}

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'START':
      return { ...initialState, phase: 'inProgress' }

    case 'ANSWER': {
      const newAnswers = [...state.answers]
      newAnswers[action.questionIndex] = action.optionIndex
      const newScores = calculateScores(newAnswers)
      const nextQuestion = Math.min(action.questionIndex + 1, TOTAL_QUESTIONS - 1)
      const isLastQuestion = action.questionIndex === TOTAL_QUESTIONS - 1

      return {
        ...state,
        answers: newAnswers,
        scores: newScores,
        currentQuestion: isLastQuestion ? state.currentQuestion : nextQuestion,
        phase: isLastQuestion ? 'emailCapture' : 'inProgress',
      }
    }

    case 'PREV':
      return {
        ...state,
        currentQuestion: Math.max(0, state.currentQuestion - 1),
      }

    case 'NEXT':
      return {
        ...state,
        currentQuestion: Math.min(TOTAL_QUESTIONS - 1, state.currentQuestion + 1),
      }

    case 'GO_TO_EMAIL':
      return { ...state, phase: 'emailCapture' }

    case 'SET_EMAIL':
      return { ...state, email: action.email }

    case 'SUBMIT':
    case 'SKIP_EMAIL': {
      const finalScores = calculateScores(state.answers)
      const { primary, secondary } = determinePersonas(finalScores)
      return {
        ...state,
        phase: 'complete',
        scores: finalScores,
        primaryPersona: primary,
        secondaryPersona: secondary,
      }
    }

    case 'RESET':
      return initialState

    case 'RESTORE':
      return action.state

    default:
      return state
  }
}

export function useQuiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState)
  const initialized = useRef(false)

  // Restore from localStorage on mount
  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved) as QuizState
        if (parsed.phase !== 'idle') {
          dispatch({ type: 'RESTORE', state: parsed })
        }
      }
    } catch {
      // Ignore parse errors
    }
  }, [])

  // Persist to localStorage on state changes
  useEffect(() => {
    if (!initialized.current) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Ignore storage errors
    }
  }, [state])

  const start = useCallback(() => dispatch({ type: 'START' }), [])
  const answer = useCallback(
    (questionIndex: number, optionIndex: number) =>
      dispatch({ type: 'ANSWER', questionIndex, optionIndex }),
    []
  )
  const prev = useCallback(() => dispatch({ type: 'PREV' }), [])
  const next = useCallback(() => dispatch({ type: 'NEXT' }), [])
  const setEmail = useCallback(
    (email: string) => dispatch({ type: 'SET_EMAIL', email }),
    []
  )
  const submit = useCallback(() => dispatch({ type: 'SUBMIT' }), [])
  const skipEmail = useCallback(() => dispatch({ type: 'SKIP_EMAIL' }), [])
  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    dispatch({ type: 'RESET' })
  }, [])

  const progress = state.answers.filter((a) => a !== null).length
  const progressPercent = Math.round((progress / TOTAL_QUESTIONS) * 100)

  return {
    ...state,
    totalQuestions: TOTAL_QUESTIONS,
    progress,
    progressPercent,
    currentQuestionData: quizQuestions[state.currentQuestion],
    start,
    answer,
    prev,
    next,
    setEmail,
    submit,
    skipEmail,
    reset,
  }
}
