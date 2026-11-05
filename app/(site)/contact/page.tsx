import Contact from '@/components/site/Contact'
import { CONTACT } from '@/lib/site-content'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  path: '/contact',
  title: 'Start a project | Zevu',
  description: 'Tell us about your restaurant, bar or coffee shop. We reply within one working day with honest advice and a fixed price.',
})

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; package?: string }>
}) {
  const { type, package: pkg } = await searchParams
  const defaultType = CONTACT.types.includes(type ?? '') ? type : undefined
  return (
    <div style={{ paddingTop: 76 }}>
      <Contact as="h1" defaultType={defaultType} pkg={pkg?.slice(0, 60)} />
    </div>
  )
}
