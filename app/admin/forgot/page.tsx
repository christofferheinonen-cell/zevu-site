import { ForgotForm } from '@/components/admin/PasswordForms'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Set password — Zevu Admin', robots: { index: false, follow: false } }

export default function ForgotPage() {
  return <ForgotForm />
}
