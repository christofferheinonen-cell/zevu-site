import SiteShell from '@/components/site/views/SiteShell'

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>
}
