import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

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

const FILE = path.join(process.cwd(), 'data', 'leads.json')

function readAll(): Lead[] {
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf-8'))
  } catch {
    return []
  }
}

export function getLeads(): Lead[] {
  return readAll()
}

export function appendLead(input: Omit<Lead, 'id' | 'createdAt'>): Lead {
  const lead: Lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...input,
  }
  const leads = readAll()
  leads.push(lead)
  fs.mkdirSync(path.dirname(FILE), { recursive: true })
  fs.writeFileSync(FILE, JSON.stringify(leads, null, 2))
  return lead
}
