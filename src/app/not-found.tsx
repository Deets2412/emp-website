import Link from 'next/link'

const pageStyles = `
  .nf-wrap { min-height: 70vh; display: grid; place-items: center; padding: 80px 20px; }
  .nf { max-width: 540px; text-align: center; }
  .nf .code { font-family: var(--serif); font-size: clamp(4rem, 12vw, 6.5rem); line-height: 1; color: var(--sage-deep); }
  .nf h1 { font-size: clamp(1.8rem, 4vw, 2.4rem); margin: 14px 0 14px; }
  .nf p { color: var(--ink-soft); font-size: 1.05rem; line-height: 1.6; max-width: 44ch; margin: 0 auto 30px; }
  .nf .cta-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
`

export default function NotFound() {
  return (
    <>
      <style>{pageStyles}</style>
      <div className="nf-wrap">
        <div className="nf">
          <p className="eyebrow">Error 404</p>
          <div className="code" aria-hidden="true">404</div>
          <h1>Lost in the numbers?</h1>
          <p>
            This page doesn&rsquo;t exist &mdash; but your money story does. Let&rsquo;s help you
            find what you&rsquo;re looking for.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/">Go home</Link>
            <Link className="btn btn-ghost" href="/episodes">Browse episodes</Link>
            <Link className="btn btn-ghost" href="/quiz">Take the quiz</Link>
          </div>
        </div>
      </div>
    </>
  )
}
