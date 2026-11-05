import { getAllArticles, isSeed, hasSavedCopy, translationOf } from './store'
import { seoChecks, seoScore } from './seo'
import { articleState, type Article, type ArticleState } from './types'

export interface ArticleRow {
  a: Article
  state: ArticleState
  score: number
  translation?: Article
}

export async function getArticleRows(): Promise<ArticleRow[]> {
  const all = await getAllArticles()
  const now = new Date()
  return all.map(a => {
    const translation = translationOf(a, all)
    return { a, state: articleState(a, now), translation, score: seoScore(seoChecks(a, { hasTranslation: Boolean(translation) })) }
  })
}

export async function editorContext(id?: string) {
  const all = await getAllArticles()
  const article = id ? all.find(a => a.id === id) : undefined
  return {
    article,
    seed: id ? isSeed(id) : false,
    edited: id ? await hasSavedCopy(id) : false,
    /** Every article, light, for translation linking and slug checks. */
    others: all
      .filter(a => a.id !== id)
      .map(a => ({ id: a.id, locale: a.locale, slug: a.slug, group: a.group, title: a.title })),
  }
}
