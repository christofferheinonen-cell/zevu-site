'use client'
import { useState } from 'react'
import { CONTACT } from '@/lib/site-content'
import { Arrow } from './Icons'

type Status = 'idle' | 'sending' | 'done' | 'error'

export default function ContactForm({ defaultType, pkg }: { defaultType?: string; pkg?: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    if (fd.get('website_hp')) return // bot trap
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please add your name and a valid email so we can reply.')
      setStatus('error')
      return
    }
    setStatus('sending')
    setError('')
    const site = String(fd.get('site') ?? '').trim()
    const message = [pkg ? `Package: ${pkg}` : '', site ? `Current site: ${site}` : '', String(fd.get('message') ?? '').trim()]
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
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('done')
    } catch {
      setError('Something went wrong on our side. Please try again, or email us directly.')
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="zv-form" role="status">
        <div className="zv-form-done">
          <span className="zv-eyebrow">Order received</span>
          <h3 className="zv-h3">¡Gracias! We’ll be in touch shortly.</h3>
          <p>Expect a reply within one working day, usually much sooner. In the meantime, have a coffee on us (figuratively, for now).</p>
        </div>
      </div>
    )
  }

  return (
    <form className="zv-form" onSubmit={onSubmit} noValidate>
      <fieldset className="zv-chips">
        <legend>What kind of place?</legend>
        {CONTACT.types.map(t => (
          <label key={t} className="zv-chip">
            <input type="radio" name="type" value={t} defaultChecked={t === (defaultType ?? CONTACT.types[0])} />
            <span>{t}</span>
          </label>
        ))}
      </fieldset>
      <div className="zv-form-row">
        <label className="zv-field"><span>Your name</span><input name="name" autoComplete="name" required placeholder="María García" /></label>
        <label className="zv-field"><span>Business name</span><input name="company" autoComplete="organization" placeholder="Bar La Esquina" /></label>
      </div>
      <div className="zv-form-row">
        <label className="zv-field"><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="hola@example.com" /></label>
        <label className="zv-field"><span>Phone / WhatsApp</span><input name="phone" type="tel" autoComplete="tel" placeholder="+34 …" /></label>
      </div>
      <label className="zv-field"><span>Current website or Instagram</span><input name="site" placeholder="Optional" /></label>
      <label className="zv-field"><span>Anything we should know?</span><textarea name="message" rows={3} placeholder="Opening soon, need bookings, menu changes every week…" /></label>
      <label className="zv-hp" aria-hidden="true">Leave empty<input name="website_hp" tabIndex={-1} autoComplete="off" /></label>
      <div className="zv-form-foot">
        <small>We reply within one working day. No spam, no newsletter, ever.</small>
        <button type="submit" className="zv-btn" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send enquiry'}
          <span className="zv-btn-ico"><Arrow /></span>
        </button>
      </div>
      {status === 'error' && error ? <p className="zv-form-err" role="alert">{error}</p> : null}
    </form>
  )
}
