import Lines from './Lines'

export default function Faq({
  items,
  title,
  eyebrow,
  side,
}: {
  items: { q: string; a: string }[]
  title: [string, string]
  eyebrow: string
  side: string
}) {
  return (
    <section className="zv-section" aria-labelledby="faq-h">
      <div className="zv-wrap zv-faq-grid">
        <div className="zv-faq-side">
          <span className="zv-eyebrow">{eyebrow}</span>
          <Lines id="faq-h" className="zv-h2" lines={[title[0], <em key="e">{title[1]}</em>]} />
          <p data-rv="">{side}</p>
        </div>
        <div className="zv-faq" data-rv="">
          {items.map(f => (
            <details key={f.q} name="faq">
              <summary>{f.q}<span className="zv-faq-plus" aria-hidden="true" /></summary>
              <div className="zv-faq-a"><div><p>{f.a}</p></div></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
