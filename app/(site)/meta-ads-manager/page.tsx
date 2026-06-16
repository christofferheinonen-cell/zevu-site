import ServiceLanding from '@/components/ServiceLanding'
import { getService } from '@/lib/services'
import { buildMetadata } from '@/lib/seo'

const service = getService('meta-ads-manager')!

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
})

export default function Page() {
  return <ServiceLanding data={service} />
}
