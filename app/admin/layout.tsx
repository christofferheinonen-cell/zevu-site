import { fraunces, interTight } from '@/lib/fonts'
import '@/app/prose.css'

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div className={`adm-root ${fraunces.variable} ${interTight.variable}`}>{children}</div>
}
