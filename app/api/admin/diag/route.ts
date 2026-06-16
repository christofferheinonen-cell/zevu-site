import { NextResponse } from 'next/server'
import { getRedis, isRedisConfigured, redisEnvKeys } from '@/lib/redis'

// Protected by middleware (under /api/admin). Reports whether the KV / Upstash
// store is wired up and reachable, so production storage issues can be
// diagnosed without digging through function logs. Returns env var NAMES only,
// never their secret values.
export async function GET() {
  const configured = isRedisConfigured()
  const envKeys = redisEnvKeys()

  let ping: 'ok' | 'failed' | 'skipped' = 'skipped'
  let leadCount: number | null = null
  let error: string | null = null

  const redis = getRedis()
  if (redis) {
    try {
      await redis.ping()
      ping = 'ok'
      leadCount = await redis.llen('zevu:leads')
    } catch (err) {
      ping = 'failed'
      error = err instanceof Error ? err.message : String(err)
    }
  }

  return NextResponse.json({
    storage: configured ? 'redis' : 'file (NOT durable on Vercel)',
    configured,
    envKeysDetected: envKeys,
    ping,
    leadCount,
    error,
    nodeEnv: process.env.NODE_ENV ?? null,
    onVercel: Boolean(process.env.VERCEL),
  })
}
