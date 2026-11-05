import { renderOg, OG_SIZE } from '@/lib/og'

export const alt = 'Zevu — Webs para restaurantes, bares y cafeterías en España'
export const size = OG_SIZE
export const contentType = 'image/png'

export default function OpengraphImage() {
  return renderOg({ line1: 'Webs que', line2: 'llenan mesas.', tagline: 'RESTAURANTES · BARES · CAFETERÍAS — ESPAÑA' })
}
