import { plainText, slugify } from './types'

/** Give every H2 an id and return a table of contents. */
export function withHeadingIds(html: string): { html: string; toc: { id: string; text: string }[] } {
  const toc: { id: string; text: string }[] = []
  const seen = new Set<string>()
  const out = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (_m, attrs: string, inner: string) => {
    const text = plainText(inner)
    let id = slugify(text) || 'section'
    while (seen.has(id)) id += '-2'
    seen.add(id)
    toc.push({ id, text })
    const cleanAttrs = attrs.replace(/\sid="[^"]*"/i, '')
    return `<h2${cleanAttrs} id="${id}">${inner}</h2>`
  })
  return { html: out, toc }
}
