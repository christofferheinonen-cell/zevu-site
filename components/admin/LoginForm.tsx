'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const MESSAGES: Record<string, string> = {
  invalid_credentials: 'Incorrect email or password.',
  rate_limited: 'Too many attempts. Wait a few minutes and try again.',
  storage_unavailable: 'The database is unreachable, so nobody can log in right now.',
  forbidden: 'This request was blocked. Reload the page and try again.',
}

export default function LoginForm({ next }: { next?: string }) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(MESSAGES[json.error] ?? MESSAGES.invalid_credentials)
      }
      // Only follow internal admin paths, never an arbitrary URL.
      const dest = next && /^\/admin(\/[\w\-/?=&.%]*)?$/.test(next) ? next : '/admin'
      router.replace(dest)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : MESSAGES.invalid_credentials)
      setLoading(false)
    }
  }

  return (
    <div className="adm-login">
      <form className="adm-login-card" onSubmit={submit}>
        <div className="adm-login-brand">
          <span className="adm-brand-logo">zevu<i>.</i></span>
          <span className="adm-brand-tag">Admin</span>
        </div>
        <h1>Log in</h1>
        <p className="adm-login-sub">The admin panel is protected. Log in to continue.</p>

        <label className="adm-field">
          <span>Email</span>
          <input type="email" autoComplete="username" value={email} onChange={e => setEmail(e.target.value)} autoFocus required />
        </label>

        <label className="adm-field">
          <span>Password</span>
          <input type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>

        {error && <p className="adm-login-err" role="alert">{error}</p>}

        <button type="submit" className="adm-btn adm-btn--primary adm-btn--block" disabled={loading}>
          {loading ? 'Logging in…' : 'Log in'}
        </button>
        <p className="adm-login-foot">
          <Link href="/admin/forgot" className="adm-link">Forgot your password, or setting it for the first time?</Link>
        </p>
      </form>
    </div>
  )
}
