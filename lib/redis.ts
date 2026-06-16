import { Redis } from '@upstash/redis'

let client: Redis | null | undefined

/**
 * Redis client backed by the Vercel KV / Upstash Redis integration, used for
 * anything that needs to persist on Vercel's read-only serverless filesystem.
 * Returns null when the integration isn't configured (e.g. plain local dev),
 * in which case callers fall back to a local JSON file.
 */
export function getRedis(): Redis | null {
  if (client !== undefined) return client
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
  client = url && token ? new Redis({ url, token }) : null
  return client
}
