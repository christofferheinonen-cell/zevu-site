import Contact from '@/components/site/Contact'
import { getContent, type Locale } from '@/lib/content'

export default function ContactView({ locale, type, pkg }: { locale: Locale; type?: string; pkg?: string }) {
  const c = getContent(locale)
  const defaultType = c.contact.types.some(t => t.value === type) ? type : undefined
  return (
    <div style={{ paddingTop: 76 }}>
      <Contact c={c} as="h1" defaultType={defaultType} pkg={pkg?.slice(0, 60)} />
    </div>
  )
}
