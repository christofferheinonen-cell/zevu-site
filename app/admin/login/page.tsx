import LoginForm from '@/components/admin/LoginForm'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: 'Kirjaudu — Zevu Admin',
  robots: { index: false, follow: false },
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>
}) {
  const { next } = await searchParams
  return <LoginForm next={next} />
}
