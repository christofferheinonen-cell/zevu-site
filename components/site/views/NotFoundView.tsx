import Button from '@/components/site/Button'
import { getContent, pathFor, type Locale } from '@/lib/content'

export default function NotFoundView({ locale }: { locale: Locale }) {
  const t = getContent(locale).notFound
  return (
    <section className="zv-404">
      <div>
        <span className="zv-eyebrow">{t.eyebrow}</span>
        <h1 className="zv-display" style={{ marginTop: 24 }}>{t.title[0]} <em>{t.title[1]}</em></h1>
        <p>{t.body}</p>
        <Button href={pathFor(locale, 'home')}>{t.back}</Button>
      </div>
    </section>
  )
}
