import { ResetForm } from '@/components/admin/PasswordForms'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: 'New password — Zevu Admin',
  robots: { index: false, follow: false },
  // Keep the token out of Referer headers sent to any other site.
  referrer: 'no-referrer' as const,
}

export default async function ResetPage({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
  const { token } = await searchParams
  return <ResetForm token={String(token ?? '').slice(0, 100)} />
}
