export interface Faq {
  q: string
  a: string
}

/** Frequently asked questions shown on the home page (and emitted as FAQ schema). */
export const HOME_FAQS: Faq[] = [
  {
    q: 'Minkälaisille yrityksille Zevu sopii?',
    a: 'Zevu sopii suomalaisille pk-yrityksille, jotka haluavat saada enemmän irti Meta-mainonnasta. Toimimme erityisesti ravintola-, hyvinvointi-, kiinteistö- ja remonttialoilla.',
  },
  {
    q: 'Kuinka nopeasti näen tuloksia?',
    a: 'Ensimmäiset mainokset julkaistaan yleensä 1–2 viikon sisällä aloituksesta. Merkittäviä tuloksia nähdään tyypillisesti 4–6 viikon optimoinnin jälkeen.',
  },
  {
    q: 'Mitä ilmainen mainosanalyysi sisältää?',
    a: 'Käymme läpi nykyiset mainoksesi ja kerromme konkreettisesti, miksi ne eivät tuota toivottuja tuloksia. Saat selkeän arvion siitä, mitä kannattaa tehdä toisin — ilman sitoumuksia.',
  },
  {
    q: 'Tarvitsenko itse tehdä jotain?',
    a: 'Minimaalisen panoksen tarvitset: kerrot bisneksestäsi ja toimitat tarvittavat materiaalit. Me hoidamme kaiken suunnittelusta julkaisuun ja optimointiin.',
  },
]
