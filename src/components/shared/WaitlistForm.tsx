'use client'

// Placeholder waitlist form for /courses. Styled by the page's `.waitlist-card`
// rules; not yet wired to a real endpoint (see TODO in courses/page.tsx).
// Lives in its own client component so the courses page can stay a Server
// Component (event handlers aren't allowed in Server Components).
export function WaitlistForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="you@email.com" aria-label="Email address" />
      <button className="btn btn-primary" type="submit">
        Join waitlist
      </button>
    </form>
  )
}
