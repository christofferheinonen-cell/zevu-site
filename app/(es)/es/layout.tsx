import SiteShell from '@/components/site/views/SiteShell'

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="es">{children}</SiteShell>
}
