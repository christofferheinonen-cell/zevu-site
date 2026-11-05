import HomeView from '@/components/site/views/HomeView'
import { alternatesFor, getContent } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'

const c = getContent('es')

export const metadata = buildMetadata({
  path: '/es',
  title: c.meta.homeTitle,
  description: c.meta.homeDescription,
  locale: c.ogLocale,
  languages: alternatesFor('home'),
})

export default function Page() {
  return <HomeView locale="es" />
}
