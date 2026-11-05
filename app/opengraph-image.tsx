import { renderOg, OG_SIZE } from '@/lib/og'

export const alt = 'Zevu — Websites for restaurants, bars & coffee shops in Spain'
export const size = OG_SIZE
export const contentType = 'image/png'

export default function OpengraphImage() {
  return renderOg({ line1: 'Websites that', line2: 'fill tables.', tagline: 'RESTAURANTS · BARS · COFFEE SHOPS — SPAIN' })
}
