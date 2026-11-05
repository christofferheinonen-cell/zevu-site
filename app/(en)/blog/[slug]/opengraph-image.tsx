import { renderOg, OG_SIZE } from '@/lib/og'
import { getLiveArticle } from '@/lib/articles/store'

export const size = OG_SIZE
export const contentType = 'image/png'
export const revalidate = 300

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const a = await getLiveArticle('en', (await params).slug)
  const title = a?.title ?? 'Zevu'
  const words = title.split(' ')
  const cut = Math.ceil(words.length / 2)
  return renderOg({ line1: words.slice(0, cut).join(' '), line2: words.slice(cut).join(' '), tagline: 'ZEVU · JOURNAL FOR HOSPITALITY', small: true })
}
