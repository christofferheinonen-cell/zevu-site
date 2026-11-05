import ContactView from '@/components/site/views/ContactView'
import { alternatesFor, getContent, pathFor } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'

const c = getContent('es')

export const metadata = buildMetadata({
  path: pathFor('es', 'contact'),
  title: c.meta.contactTitle,
  description: c.meta.contactDescription,
  locale: c.ogLocale,
  languages: alternatesFor('contact'),
})

export default async function Page({ searchParams }: { searchParams: Promise<{ type?: string; package?: string }> }) {
  const { type, package: pkg } = await searchParams
  return <ContactView locale="es" type={type} pkg={pkg} />
}
