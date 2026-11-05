'use client'
import Link from 'next/link'
import { useState } from 'react'

function Card({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="adm-login">
      <div className="adm-login-card">
        <div className="adm-login-brand">
          <span className="adm-brand-logo">zevu<i>.</i></span>
          <span className="adm-brand-tag">Admin</span>
        </div>
        <h1>{title}</h1>
        <p className="adm-login-sub">{sub}</p>
        {children}
      </div>
    </div>
  )
}

export function ForgotForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setState('sending')
    const res = await fetch('/api/admin/password/forgot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }).catch(() => null)
    if (res?.ok) return setState('sent')
    setError(res?.status === 429 ? 'Too many requests. Try again in an hour.' : 'Something went wrong. Try again.')
    setState('error')
  }

  if (state === 'sent') {
    return (
      <Card title="Check your inbox" sub="If that address belongs to the admin, a link to set your password is on its way. It works once and expires in 30 minutes.">
        <Link href="/admin/login" className="adm-btn adm-btn--ghost adm-btn--block">Back to log in</Link>
      </Card>
    )
  }
  return (
    <Card title="Set your password" sub="Enter the admin email address. We’ll send a single-use link to set a new password.">
      <form onSubmit={submit}>
        <label className="adm-field">
          <span>Email</span>
          <input type="email" autoComplete="username" value={email} onChange={e => setEmail(e.target.value)} autoFocus required />
        </label>
        {state === 'error' ? <p className="adm-login-err" role="alert">{error}</p> : null}
        <button type="submit" className="adm-btn adm-btn--primary adm-btn--block" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Email me a link'}
        </button>
        <p className="adm-login-foot"><Link href="/admin/login" className="adm-link">Back to log in</Link></p>
      </form>
    </Card>
  )
}

const RESET_ERRORS: Record<string, string> = {
  weak_password: 'Use at least 12 characters, and not your email address.',
  invalid_token: 'This link has expired or was already used. Request a new one.',
  rate_limited: 'Too many attempts. Try again later.',
  storage_unavailable: 'The database is unreachable, so the password couldn’t be saved.',
}

export function ResetForm({ token }: { token: string }) {
  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')
  const [state, setState] = useState<'idle' | 'saving' | 'done'>('idle')
  const [error, setError] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (pw.length < 12) return setError(RESET_ERRORS.weak_password)
    if (pw !== pw2) return setError('The two passwords don’t match.')
    setState('saving')
    const res = await fetch('/api/admin/password/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, password: pw }),
    }).catch(() => null)
    if (res?.ok) return setState('done')
    const json = res ? await res.json().catch(() => ({})) : {}
    setError(RESET_ERRORS[json.error] ?? 'Something went wrong. Try again.')
    setState('idle')
  }

  if (!token) {
    return (
      <Card title="Link missing" sub="Open the link from the email again, or request a new one.">
        <Link href="/admin/forgot" className="adm-btn adm-btn--primary adm-btn--block">Request a new link</Link>
      </Card>
    )
  }
  if (state === 'done') {
    return (
      <Card title="Password saved" sub="Every device has been logged out. Log in with your new password.">
        <Link href="/admin/login" className="adm-btn adm-btn--primary adm-btn--block">Log in</Link>
      </Card>
    )
  }
  return (
    <Card title="Choose a new password" sub="At least 12 characters. A short sentence is easier to remember than a jumble.">
      <form onSubmit={submit}>
        <label className="adm-field">
          <span>New password</span>
          <input type="password" autoComplete="new-password" value={pw} onChange={e => setPw(e.target.value)} minLength={12} autoFocus required />
        </label>
        <label className="adm-field">
          <span>Repeat it</span>
          <input type="password" autoComplete="new-password" value={pw2} onChange={e => setPw2(e.target.value)} minLength={12} required />
        </label>
        {error ? <p className="adm-login-err" role="alert">{error}</p> : null}
        <button type="submit" className="adm-btn adm-btn--primary adm-btn--block" disabled={state === 'saving'}>
          {state === 'saving' ? 'Saving…' : 'Save password'}
        </button>
      </form>
    </Card>
  )
}
