'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginForm({ next }: { next?: string }) {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      if (!res.ok) throw new Error()
      const dest = next && next.startsWith('/admin') ? next : '/admin'
      router.replace(dest)
      router.refresh()
    } catch {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div className="adm-login">
      <form className="adm-login-card" onSubmit={submit}>
        <div className="adm-login-brand">
          <span className="adm-brand-logo">Zevu</span>
          <span className="adm-brand-tag">Admin</span>
        </div>
        <h1>Kirjaudu sisään</h1>
        <p className="adm-login-sub">Hallintapaneeli on suojattu. Kirjaudu jatkaaksesi.</p>

        <label className="adm-field">
          <span>Sähköposti</span>
          <input
            type="email"
            autoComplete="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoFocus
            required
          />
        </label>

        <label className="adm-field">
          <span>Salasana</span>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>

        {error && <p className="adm-login-err">Virheellinen sähköposti tai salasana.</p>}

        <button type="submit" className="adm-btn adm-btn--primary adm-btn--block" disabled={loading}>
          {loading ? 'Kirjaudutaan…' : 'Kirjaudu sisään'}
        </button>
      </form>
    </div>
  )
}
