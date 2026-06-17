import { NextRequest, NextResponse } from 'next/server'
import { fetchSearchConsoleData } from '@/lib/search-console'

export const runtime = 'nodejs'

export async function GET(req: NextRequest) {
  const days = Number(req.nextUrl.searchParams.get('days') ?? '28')
  try {
    const data = await fetchSearchConsoleData(days)
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' },
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
