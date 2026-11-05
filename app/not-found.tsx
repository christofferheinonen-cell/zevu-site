import SiteShell from '@/components/site/views/SiteShell'
import NotFoundView from '@/components/site/views/NotFoundView'

export default function RootNotFound() {
  return (
    <SiteShell locale="en">
      <NotFoundView locale="en" />
    </SiteShell>
  )
}
