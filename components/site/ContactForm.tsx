'use client'
import { useState } from 'react'
import type { SiteContent } from '@/lib/content'
import { Arrow } from './Icons'

type Status = 'idle' | 'sending' | 'done' | 'error'

export default function ContactForm({ t, defaultType, pkg }: { t: SiteContent['contact']; defaultType?: string; pkg?: string }) {
  const f = t.form
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError(f.errFields)
      setStatus('error')
      return
    }
    setStatus('sending')
    setError('')
    const site = String(fd.get('site') ?? '').trim()
    const message = [pkg ? `${f.pkgPrefix}: ${pkg}` : '', site ? `${f.sitePrefix}: ${site}` : '', String(fd.get('message') ?? '').trim()]
      .filter(Boolean)
      .join('\n')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: `${window.location.pathname}${pkg ? ` · ${pkg}` : ''}`,
          name,
          email,
          phone: fd.get('phone'),
          company: fd.get('company'),
          industry: fd.get('type'),
          message,
          website_hp: fd.get('website_hp'),
        }),
      })
      if (res.status === 429) throw new Error('rate')
      if (!res.ok) throw new Error(String(res.status))
      setStatus('done')
    } catch (err) {
      setError(err instanceof Error && err.message === 'rate' ? f.errRate : f.errServer)
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="zv-form" role="status">
        <div className="zv-form-done">
          <span className="zv-eyebrow">{f.doneEyebrow}</span>
          <h3 className="zv-h3">{f.doneTitle}</h3>
          <p>{f.doneBody}</p>
        </div>
      </div>
    )
  }

  return (
    <form className="zv-form" onSubmit={onSubmit} noValidate>
      <fieldset className="zv-chips">
        <legend>{f.kind}</legend>
        {t.types.map(x => (
          <label key={x.value} className="zv-chip">
            <input type="radio" name="type" value={x.value} defaultChecked={x.value === (defaultType ?? t.types[0].value)} />
            <span>{x.label}</span>
          </label>
        ))}
      </fieldset>
      <div className="zv-form-row">
        <label className="zv-field"><span>{f.name}</span><input name="name" autoComplete="name" required placeholder={f.namePh} /></label>
        <label className="zv-field"><span>{f.company}</span><input name="company" autoComplete="organization" placeholder={f.companyPh} /></label>
      </div>
      <div className="zv-form-row">
        <label className="zv-field"><span>{f.email}</span><input name="email" type="email" autoComplete="email" required placeholder={f.emailPh} /></label>
        <label className="zv-field"><span>{f.phone}</span><input name="phone" type="tel" autoComplete="tel" placeholder="+34 …" /></label>
      </div>
      <label className="zv-field"><span>{f.site}</span><input name="site" placeholder={f.sitePh} /></label>
      <label className="zv-field"><span>{f.message}</span><textarea name="message" rows={3} placeholder={f.messagePh} /></label>
      <label className="zv-hp" aria-hidden="true">{f.honeypot}<input name="website_hp" tabIndex={-1} autoComplete="off" /></label>
      <div className="zv-form-foot">
        <small>{f.foot}</small>
        <button type="submit" className="zv-btn" disabled={status === 'sending'}>
          {status === 'sending' ? f.sending : f.send}
          <span className="zv-btn-ico"><Arrow /></span>
        </button>
      </div>
      {status === 'error' && error ? <p className="zv-form-err" role="alert">{error}</p> : null}
    </form>
  )
}
