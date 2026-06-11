import type { Metadata } from 'next'
import ServiceLanding from '@/components/ServiceLanding'
import { getService } from '@/lib/services'

const service = getService('mainokset')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

export default function Page() {
  return <ServiceLanding data={service} />
}
