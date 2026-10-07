import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="container" style={{ padding: '12rem 1.5rem 8rem', textAlign: 'center' }}>
      <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-clear-blue)' }}>
        ERROR 404 / ARCHIVE
      </span>
      <h1 className="font-title" style={{ fontSize: '4rem', margin: '0.75rem 0 1rem', color: 'var(--color-deep-navy)' }}>
        PAGE NOT FOUND
      </h1>
      <p style={{ color: 'var(--color-body-slate)', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
        요청하신 페이지가 존재하지 않거나 이동되었습니다. 아래 버튼을 눌러 메인 아카이브로 이동해 주세요.
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          padding: '0.85rem 2rem',
          background: 'var(--color-deep-navy)',
          color: '#fff',
          fontWeight: 600,
          borderRadius: '2px',
          letterSpacing: '0.05em'
        }}
      >
        RETURN TO PORTFOLIO HOME
      </Link>
    </main>
  )
}
