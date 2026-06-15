import type { MetadataRoute } from 'next'
import { absoluteUrl, parseFiDate } from '@/lib/seo'
import { getAllPosts } from '@/lib/posts'
import { SERVICES } from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/blog'), lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const servicePages: MetadataRoute.Sitemap = SERVICES.map(service => ({
    url: absoluteUrl(`/${service.slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const postPages: MetadataRoute.Sitemap = getAllPosts().map(post => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: parseFiDate(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...postPages]
}
