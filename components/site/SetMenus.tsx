import { pathFor, type SiteContent } from '@/lib/content'
import Lines from './Lines'
import Button from './Button'

export default function SetMenus({ c }: { c: SiteContent }) {
  const MENU = c.menu
  return (
    <section className="zv-section zv-menu" id="prices" aria-labelledby="prices-h">
      <div className="zv-wrap">
        <div className="zv-section-head">
          <div>
            <span className="zv-eyebrow">{MENU.eyebrow}</span>
            <Lines id="prices-h" className="zv-h2" lines={[MENU.title[0], <em key="e">{MENU.title[1]}</em>]} />
          </div>
          <p className="zv-menu-note" data-rv="">{MENU.note}</p>
        </div>
        <div className="zv-menu-card" data-rv="">
          {MENU.items.map(item => (
            <div key={item.name} className={`zv-dish${item.featured ? ' zv-dish--featured' : ''}`}>
              {item.featured ? <span className="zv-chef">{MENU.chef[0]}<br />{MENU.chef[1]}</span> : null}
              <div className="zv-dish-top">
                <span className="zv-dish-name">{item.name}</span>
                <span className="zv-dish-dots" aria-hidden="true" />
                <span className="zv-dish-price">{item.price}</span>
              </div>
              <div className="zv-dish-sub">{item.sub}</div>
              <ul>{item.lines.map(l => <li key={l}>{l}</li>)}</ul>
              <Button href={`${pathFor(c.locale, 'contact')}?package=${encodeURIComponent(item.name)}`} variant={item.featured ? 'light' : undefined} size="sm">
                {MENU.order}
              </Button>
            </div>
          ))}
        </div>
        <div className="zv-care" data-rv="">
          <b>{MENU.care.name}</b>
          <p>{MENU.care.body}</p>
          <span>{MENU.care.price}</span>
        </div>
      </div>
    </section>
  )
}
