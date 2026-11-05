import sanitizeHtml from 'sanitize-html'

/** Allowlist for article bodies: text formatting, headings, lists, links, images, tables. No scripts, styles or event handlers. */
export function sanitizeArticleHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ['p', 'h2', 'h3', 'h4', 'strong', 'b', 'em', 'i', 'u', 's', 'a', 'ul', 'ol', 'li', 'blockquote', 'br', 'hr', 'img', 'figure', 'figcaption', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'span', 'div', 'code'],
    allowedAttributes: {
      a: ['href', 'title', 'target', 'rel'],
      img: ['src', 'alt', 'width', 'height', 'loading'],
      span: ['style'],
      p: ['style'],
      h2: ['style'], h3: ['style'],
      div: ['class'],
      th: ['colspan', 'rowspan'], td: ['colspan', 'rowspan'],
    },
    allowedClasses: { div: ['zv-callout'] },
    // Only the text formatting the editor produces.
    allowedStyles: {
      '*': {
        color: [/^#[0-9a-f]{3,8}$/i, /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/],
        'text-align': [/^(left|right|center|justify)$/],
        'font-size': [/^\d+(\.\d+)?(rem|em|px)$/],
      },
    },
    allowedSchemes: ['https', 'http', 'mailto', 'tel'],
    allowedSchemesByTag: { img: ['https', 'http'] },
    allowProtocolRelative: false,
    transformTags: {
      a: (tag, attribs) => {
        const external = /^https?:\/\//i.test(attribs.href ?? '')
        return { tagName: 'a', attribs: external ? { ...attribs, target: '_blank', rel: 'noopener noreferrer' } : attribs }
      },
    },
  })
}

export function sanitizeText(s: string): string {
  return sanitizeHtml(s, { allowedTags: [], allowedAttributes: {} })
}
