import type { Article } from '../types'
import { restaurantWebsite } from './restaurant-website'
import { googleMaps } from './google-maps'
import { digitalMenu } from './digital-menu'
import { coffeeShopWebsite } from './coffee-shop-website'
import { barWebsite } from './bar-website'

/** Articles shipped with the code. Each file exports one EN + ES pair. */
export const SEED_ARTICLES: Article[] = [
  ...restaurantWebsite,
  ...googleMaps,
  ...digitalMenu,
  ...coffeeShopWebsite,
  ...barWebsite,
]
