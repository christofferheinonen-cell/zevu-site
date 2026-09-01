export interface Faq {
  q: string
  a: string
}

/** Frequently asked questions shown on the home page (and emitted as FAQ schema). */
export const HOME_FAQS: Faq[] = [
  {
    q: 'Kuinka kauan projekti kestää?',
    a: 'Tyypillinen verkkosivuprojekti valmistuu kahdessa viikossa. Prosessi etenee kartoituksesta suunnitteluun, kehitykseen ja julkaisuun — ja tiedät aina missä mennään.',
  },
  {
    q: 'Mitä projekti maksaa kokonaisuudessaan?',
    a: 'Hinnat alkavat 1 490 eurosta. Saat tarjouksen aina ennen projektin aloittamista — ei yllätyksiä laskussa.',
  },
  {
    q: 'Voinko päivittää sivustoa itse?',
    a: 'Kyllä. Kasvu- ja Pro-paketeissa rakennamme helppokäyttöisen sisällönhallintajärjestelmän, jolla voit itse lisätä tekstejä ja kuvia ilman teknistä osaamista.',
  },
  {
    q: 'Näkyykö sivustoni Googlessa?',
    a: 'Kaikki sivustomme rakennetaan hakukoneoptimointia silmällä pitäen. Kasvu- ja Pro-paketeissa tehdään kattava SEO-työ, joka parantaa näkyvyyttäsi ajan myötä.',
  },
]
