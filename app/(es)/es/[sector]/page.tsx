import { notFound } from 'next/navigation'
import SectorView from '@/components/site/views/SectorView'
import { alternatesFor, getContent, pathFor } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'

const c = getContent('es')
const find = (slug: string) => c.sectors.find(s => s.slug === slug)

export const dynamicParams = false

export function generateStaticParams() {
  return c.sectors.map(s => ({ sector: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ sector: string }> }) {
  const s = find((await params).sector)
  if (!s) return {}
  return buildMetadata({
    path: pathFor('es', s.key),
    title: s.metaTitle,
    description: s.metaDescription,
    locale: c.ogLocale,
    languages: alternatesFor(s.key),
  })
}

export default async function Page({ params }: { params: Promise<{ sector: string }> }) {
  const s = find((await params).sector)
  if (!s) notFound()
  return <SectorView locale="es" sector={s} />
}
