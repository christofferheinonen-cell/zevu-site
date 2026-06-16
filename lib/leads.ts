import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { getRedis } from './redis'

export interface Lead {
  id: string
  createdAt: string
  source: string
  company: string
  industry: string
  runsAds: 'yes' | 'no' | null
  budget: string
  satisfaction: number | null
  name: string
  email: string
  phone: string
}

// Production (Vercel) runs on a read-only filesystem, so leads are stored in
// Redis (Vercel KV / Upstash) there. Local dev falls back to a JSON file so
// it keeps working without that integration configured.
const REDIS_KEY = 'zevu:leads'
const FILE = path.join(process.cwd(), 'data', 'leads.json')

function readFileLeads(): Lead[] {
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf-8'))
  } catch {
    return []
  }
}

function writeFileLeads(leads: Lead[]): void {
  fs.mkdirSync(path.dirname(FILE), { recursive: true })
  fs.writeFileSync(FILE, JSON.stringify(leads, null, 2))
}

export async function getLeads(): Promise<Lead[]> {
  const redis = getRedis()
  if (!redis) return readFileLeads()
  // The Upstash client deserializes JSON automatically, so we get Lead objects
  // back directly — no manual JSON.parse (which would double-decode and throw).
  return await redis.lrange<Lead>(REDIS_KEY, 0, -1)
}

export async function appendLead(input: Omit<Lead, 'id' | 'createdAt'>): Promise<Lead> {
  const lead: Lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...input,
  }
  const redis = getRedis()
  if (redis) {
    // Pass the object directly; the Upstash client serializes it.
    await redis.rpush(REDIS_KEY, lead)
  } else {
    const leads = readFileLeads()
    leads.push(lead)
    writeFileLeads(leads)
  }
  return lead
}
