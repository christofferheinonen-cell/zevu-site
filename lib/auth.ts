// Cookie-based admin session. Works in both the Edge runtime (middleware) and
// the Node runtime (route handlers): it relies only on the Web Crypto API,
// which is available as a global in both.

export const SESSION_COOKIE = 'zevu_admin'
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

const SALT = 'zevu-admin-session-v1'

/** Credentials configured via environment variables. */
export function adminCreds(): { user?: string; pass?: string } {
  return { user: process.env.ADMIN_USER, pass: process.env.ADMIN_PASSWORD }
}

/**
 * Deterministic session token derived from the credentials. The cookie stores
 * this value; middleware recomputes the expected token from the env vars and
 * compares. Changing the password invalidates every existing session.
 */
export async function sessionToken(user: string, pass: string): Promise<string> {
  const data = new TextEncoder().encode(`${SALT}:${user}:${pass}`)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}
