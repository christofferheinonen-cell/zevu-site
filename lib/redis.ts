import { Redis } from '@upstash/redis'

let client: Redis | null | undefined

// The Vercel KV integration injects KV_REST_API_URL/TOKEN; a direct Upstash
// integration injects UPSTASH_REDIS_REST_URL/TOKEN. Some setups also prefix
// them (e.g. STORAGE_KV_REST_API_URL). We accept all of these.
function findEnv(suffix: string): string | undefined {
  // Exact, well-known names first.
  const known = [
    `KV_${suffix}`,
    `UPSTASH_REDIS_${suffix}`,
  ]
  for (const k of known) {
    if (process.env[k]) return process.env[k]
  }
  // Fall back to any var ending in the suffix (handles custom prefixes).
  for (const [key, value] of Object.entries(process.env)) {
    if (value && key.endsWith(suffix)) return value
  }
  return undefined
}

function resolveCreds(): { url?: string; token?: string } {
  return {
    url: findEnv('REST_API_URL'),
    token: findEnv('REST_API_TOKEN'),
  }
}

/**
 * Redis client backed by the Vercel KV / Upstash Redis integration, used for
 * anything that needs to persist on Vercel's read-only serverless filesystem.
 * Returns null when the integration isn't configured (e.g. plain local dev),
 * in which case callers fall back to a local JSON file.
 */
export function getRedis(): Redis | null {
  if (client !== undefined) return client
  const { url, token } = resolveCreds()
  client = url && token ? new Redis({ url, token }) : null
  return client
}

/** Names of the storage-related env vars that are set (values omitted). */
export function redisEnvKeys(): string[] {
  return Object.keys(process.env)
    .filter(k => /REST_API_(URL|TOKEN)$/.test(k) || /^(KV|UPSTASH)_/.test(k))
    .sort()
}

export function isRedisConfigured(): boolean {
  const { url, token } = resolveCreds()
  return Boolean(url && token)
}
