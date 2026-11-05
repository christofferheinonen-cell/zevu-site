import Button from '@/components/site/Button'

export default function NotFound() {
  return (
    <section className="zv-404">
      <div>
        <span className="zv-eyebrow">Error 404</span>
        <h1 className="zv-display" style={{ marginTop: 24 }}>Table <em>not found.</em></h1>
        <p>This page has left the building. The kitchen is still open, though.</p>
        <Button href="/">Back to the homepage</Button>
      </div>
    </section>
  )
}
