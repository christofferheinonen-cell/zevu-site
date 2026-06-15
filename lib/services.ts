export interface Service {
  slug: string
  navLabel: string
  navDesc: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  intro: string
  ctaLabel: string
  whatIs: { h: string; p: string }
  whyMatters: { h: string; p: string }
  doItems: { h: string; p: string }[]
  mistakes: string[]
  showcase: { h: string; p: string; points: string[] }
  stats: { prefix?: string; value: number; decimals?: number; suffix?: string; label: string }[]
  related: { label: string; href: string }[]
  faq: { q: string; a: string }[]
  ctaHeading: string
  ctaSub: string
}

export const SERVICES: Service[] = [
  {
    slug: 'meta-ads-manager',
    navLabel: 'Meta Ads Manager',
    navDesc: 'Kampanjarakenne ja jatkuva optimointi',
    metaTitle: 'Meta Ads Manager — mitä teemme mainostililläsi | Zevu',
    metaDescription: 'Näin rakennamme ja optimoimme Meta Ads Manager -tilin, joka tuottaa. Kampanjarakenne, tavoitteet, budjetti ja jatkuva optimointi.',
    eyebrow: 'Meta Ads Manager',
    h1: 'Mitä teemme Meta Ads Managerissa',
    intro: 'Ads Manager on paikka, jossa mainosbudjettisi joko tuottaa tai palaa. Me varmistamme, että se tuottaa — selkeällä rakenteella ja jatkuvalla optimoinnilla.',
    ctaLabel: 'Pyydä ilmainen tilianalyysi →',
    whatIs: {
      h: 'Mikä Meta Ads Manager on',
      p: 'Ads Manager on Metan työkalu, jossa mainoksia rakennetaan kolmessa tasossa: kampanja määrittää tavoitteen, mainosjoukko yleisön ja budjetin, ja mainos itse sen mitä ihminen näkee. Kun tämä hierarkia on kunnossa, algoritmi löytää oikeat ihmiset puolestasi.',
    },
    whyMatters: {
      h: 'Miksi rakenteella on väliä',
      p: 'Sama budjetti voi tuottaa kaksinkertaisesti tai puolittua pelkän rakenteen takia. Liian moneen mainosjoukkoon pirstottu budjetti ei ehdi koskaan oppia, ja väärä tavoite ohjaa algoritmin keräämään klikkejä myynnin sijaan.',
    },
    doItems: [
      { h: 'Tilin auditointi', p: 'Käymme nykyisen tilisi läpi ja löydämme mistä raha vuotaa — rakenteesta, tavoitteista ja budjetista.' },
      { h: 'Kampanjarakenne', p: 'Rakennamme selkeän rakenteen: oikeat tavoitteet, riittävän laajat yleisöt ja budjetti, joka ehtii oppia.' },
      { h: 'Jatkuva optimointi', p: 'Seuraamme dataa viikoittain, sammutamme heikot ja skaalaamme toimivat. Ei kertaluontoista säätöä.' },
      { h: 'Täysi läpinäkyvyys', p: 'Mainostili on aina sinun. Näet itse mitä teemme ja mihin jokainen euro menee.' },
    ],
    mistakes: [
      'Liian monta mainosjoukkoa — budjetti pirstoutuu eikä algoritmi ehdi oppia',
      'Väärä kampanjatavoite — optimoidaan klikkejä myynnin sijaan',
      'Jatkuva uudelleenkäynnistys — jokainen muutos nollaa oppimisvaiheen',
      'Liian kapea yleisö — algoritmilta viedään tila löytää ostajat',
    ],
    showcase: {
      h: 'Jatkuvaa optimointia, ei kertasäätöä',
      p: 'Emme rakenna kampanjaa kerran ja unohda sitä. Testaamme mainosjoukkoja jatkuvasti, siirrämme budjettia voittajille ja sammutamme heikot ennen kuin ne syövät tuloksen.',
      points: ['Viikoittainen optimointirytmi', 'Budjetti seuraa parhaita tuloksia', 'Selkeä raportti joka viikko'],
    },
    stats: [
      { value: 3, suffix: '', label: 'tasoinen kampanjarakenne' },
      { prefix: '+', value: 142, suffix: ' %', label: 'keskimääräinen kasvu / kk' },
      { value: 4.8, decimals: 1, suffix: '×', label: 'ROAS-tavoite' },
    ],
    related: [
      { label: 'Luovat mainokset jotka tuottavat tulosta', href: '/mainokset' },
      { label: 'Miksi Meta (Facebook) mainokset eivät tuota mitään?', href: '/blog/miksi-meta-facebook-mainokset-eivat-tuota' },
    ],
    faq: [
      { q: 'Tarvitsenko oman Meta-mainostilin?', a: 'Kyllä. Mainostili pysyy aina sinun omistuksessasi — me toimimme sen kautta, mutta data ja pääsy ovat sinun.' },
      { q: 'Kannattaako käyttää Advantage+ -kampanjoita?', a: 'Usein kyllä, mutta ei aina. Ne toimivat erinomaisesti verkkokaupalle, kun pikseli ja tapahtumat ovat kunnossa. Arvioimme sen tapauskohtaisesti.' },
      { q: 'Kuinka usein tiliä optimoidaan?', a: 'Seuraamme tiliä viikoittain ja teemme muutoksia datan perusteella — emme arvauksen.' },
    ],
    ctaHeading: 'Haluatko tietää mitä tililläsi oikeasti tapahtuu?',
    ctaSub: 'Pyydä ilmainen tilianalyysi — kerromme mistä raha vuotaa ja mitä tehdä toisin.',
  },
  {
    slug: 'mainokset',
    navLabel: 'Mainokset',
    navDesc: 'Kuva- ja videomainokset, jotka pysäyttävät',
    metaTitle: 'Mainokset, jotka pysäyttävät selauksen — kuva- ja videomainokset | Zevu',
    metaDescription: 'Kuvamainokset ja videomainokset, jotka pysäyttävät oikean ihmisen oikealla hetkellä. Näin suunnittelemme ja testaamme mainoksia, jotka tuottavat.',
    eyebrow: 'Mainokset',
    h1: 'Mainokset, jotka pysäyttävät selauksen',
    intro: 'Nykyään mainos itse on tärkein kohdennus. Paraskaan yleisö ei pelasta tylsää kuvaa — mutta oikea kuvamainos tai videomainos löytää ostajansa lähes itsestään.',
    ctaLabel: 'Pyydä mainosten analyysi →',
    whatIs: {
      h: 'Kuvamainokset ja videomainokset',
      p: 'Mainos voi olla kuvamainos, videomainos, karuselli tai käyttäjän tyylinen sisältö. Jokaisella on paikkansa: videomainos kertoo tarinan ja rakentaa luottamusta, kuvamainos taas pysäyttää nopeasti ja toimii tehokkaasti tarjouksissa.',
    },
    whyMatters: {
      h: 'Miksi mainos ratkaisee',
      p: 'Kun yleisöt ovat laajoja, algoritmi käyttää mainosta itseään kohdentamiseen — oikea ihminen reagoi oikeaan mainokseen. Siksi panostamme ensimmäiseen kolmeen sekuntiin, selkeään koukkuun ja viestiin, joka puhuttelee juuri sinun asiakastasi.',
    },
    doItems: [
      { h: 'Mainosstrategia', p: 'Mietimme mitä sanotaan, kenelle ja millä formaatilla — kuvamainos vai videomainos.' },
      { h: 'Tuotanto', p: 'Suunnittelemme ja toteutamme mainokset, jotka pysäyttävät selauksen ja kertovat selkeän viestin.' },
      { h: 'Variaatiotestaus', p: 'Emme luota arvaukseen. Testaamme useita versioita ja annamme datan kertoa voittajan.' },
    ],
    mistakes: [
      'Geneeriset kuvapankkikuvat — eivät erotu eivätkä pysäytä ketään',
      'Liikaa tekstiä — viesti hukkuu ennen kuin se ehtii perille',
      'Ei koukkua — kolme ensimmäistä sekuntia ratkaisevat, ja ne menevät hukkaan',
      'Vain yksi mainos — ilman variaatioita ei tiedä mikä toimisi paremmin',
    ],
    showcase: {
      h: 'Emme arvaa — me testaamme',
      p: 'Jokaiseen kampanjaan tuotetaan useita versioita: eri koukut, formaatit ja kulmat. Data kertoo voittajan, ja siihen panostetaan.',
      points: ['Kuva- ja videomainokset rinnakkain', 'Useita versioita samaan aikaan testissä', 'Voittaja skaalataan, muut karsitaan'],
    },
    stats: [
      { value: 3, suffix: ' s', label: 'ratkaisee huomion' },
      { value: 5, suffix: '+', label: 'variaatiota / kampanja' },
      { value: 3.2, decimals: 1, suffix: ' %', label: 'keskimääräinen CTR' },
    ],
    related: [
      { label: 'Meta Ads Manager — kampanjarakenne ja optimointi', href: '/meta-ads-manager' },
      { label: 'Miksi Meta (Facebook) mainokset eivät tuota mitään?', href: '/blog/miksi-meta-facebook-mainokset-eivat-tuota' },
    ],
    faq: [
      { q: 'Kumpi on parempi, kuvamainos vai videomainos?', a: 'Riippuu tavoitteesta. Videomainos rakentaa luottamusta ja toimii uusasiakashankinnassa, kuvamainos taas on nopea ja tehokas tarjouksissa. Yleensä testaamme molempia.' },
      { q: 'Montako mainosta tarvitaan?', a: 'Aloitamme tyypillisesti muutamalla eri versiolla, jotta näemme mikä viesti ja formaatti toimii. Sen jälkeen panostamme voittajiin.' },
      { q: 'Teettekö myös mainosten tuotannon?', a: 'Suunnittelemme ja tuotamme mainokset valmiiksi — sekä kuvamainokset että videomainokset. Saat valmiit mainokset, et raakamateriaalia.' },
    ],
    ctaHeading: 'Pysäyttävätkö mainoksesi oikean ihmisen?',
    ctaSub: 'Pyydä mainosten analyysi — kerromme miksi nykyiset mainoksesi eivät pysäytä ja miltä toimivat näyttäisivät.',
  },
  {
    slug: 'raportointi',
    navLabel: 'Raportointi',
    navDesc: 'Oikeat mittarit ja selkeät päätökset',
    metaTitle: 'Meta-mainonnan raportointi ja analyysi | Zevu',
    metaDescription: 'Raportointi, joka vastaa yhteen kysymykseen: mitä tehdään seuraavaksi. Oikeat mittarit, attribuutio ja selkeät päätökset.',
    eyebrow: 'Raportointi & analyysi',
    h1: 'Raportointi, joka kertoo mitä tehdä seuraavaksi',
    intro: 'Hyvä raportti ei ole täynnä kaavioita — se vastaa yhteen kysymykseen: mitä tehdään seuraavaksi. Me erotamme oikeat mittarit turhamaisuusluvuista.',
    ctaLabel: 'Pyydä raportointimalli →',
    whatIs: {
      h: 'Mittarit joilla on väliä',
      p: 'ROAS, hankintahinta (CPA), klikkausprosentti (CTR), näyttöhinta (CPM) ja frequency kertovat onko mainonta kannattavaa. Tykkäykset ja näyttökerrat eivät kerro mitään myynnistä — ne ovat turhamaisuusmittareita.',
    },
    whyMatters: {
      h: 'Miksi Ads Managerin luvut eivät riitä',
      p: 'Ads Manager näyttää konversiot oman attribuutioikkunansa mukaan — ei sitä, mikä oikeasti toi rahaa kassaan. Yhdistämme mainonnan datan todelliseen myyntiin, jotta tiedämme mitä skaalata ja mitä sammuttaa.',
    },
    doItems: [
      { h: 'Selkeä raportti', p: 'Saat raportin, joka näyttää olennaisen: paljonko meni, mitä tuli takaisin ja mitä se tarkoittaa.' },
      { h: 'Säännöllinen kadenssi', p: 'Raportoimme sovitulla rytmillä — et jää arvailemaan miten mainonta menee.' },
      { h: 'Datasta päätöksiin', p: 'Jokainen luku johtaa toimenpiteeseen: skaalataan, säädetään tai sammutetaan.' },
    ],
    mistakes: [
      'Optimoidaan klikkejä — liikenne kasvaa mutta myynti ei',
      'Ignoroidaan frequency — sama ihminen näkee mainoksen liian usein ja kyllästyy',
      'Dataa ei yhdistetä myyntiin — raportti näyttää hyvältä, tili tyhjenee',
      'Liian lyhyt tarkasteluväli — päätökset tehdään satunnaisesta kohinasta',
    ],
    showcase: {
      h: 'Jokainen luku johtaa päätökseen',
      p: 'Raportti ei ole koriste. Jokainen mittari kertoo mitä tehdä: skaalataanko, säädetäänkö vai sammutetaanko. Yhdistämme datan myyntiin, emme pelkkiin klikkeihin.',
      points: ['Mittarit yhdistetty todelliseen myyntiin', 'Selkeä suositus joka raportissa', 'Ei turhamaisuuslukuja'],
    },
    stats: [
      { value: 5, suffix: '', label: 'mittaria joilla on väliä' },
      { prefix: '+', value: 142, suffix: ' %', label: 'kasvu / kk' },
      { value: 24, suffix: '/7', label: 'reaaliaikainen seuranta' },
    ],
    related: [
      { label: 'Meta-pikseli & Conversions API', href: '/pikseli' },
      { label: 'Meta Ads Manager — kampanjarakenne ja optimointi', href: '/meta-ads-manager' },
    ],
    faq: [
      { q: 'Mikä on hyvä ROAS?', a: 'Se riippuu katteestasi. Verkkokaupalle 3–4× voi olla erinomainen, toiselle 2× riittää voitolliseen. Tärkeintä on tietää oma kannattavuusrajasi.' },
      { q: 'Kuinka usein saan raportin?', a: 'Sovitaan yhdessä — tyypillisesti kuukausittain koonti ja tarvittaessa tiheämpi seuranta kampanjan aikana.' },
      { q: 'Mistä tiedän, että luvut ovat luotettavia?', a: 'Varmistamme mittauksen pikselin ja Conversions API:n avulla, jotta data vastaa todellisuutta — ei pelkkää Ads Managerin arviota.' },
    ],
    ctaHeading: 'Tiedätkö, tuottaako mainontasi oikeasti?',
    ctaSub: 'Pyydä raportointimalli — näytämme mitkä luvut ratkaisevat ja miten ne yhdistetään myyntiin.',
  },
  {
    slug: 'pikseli',
    navLabel: 'Meta-pikseli',
    navDesc: 'Mittaus kuntoon — pikseli ja Conversions API',
    metaTitle: 'Meta-pikseli & Conversions API — oikea mittaus | Zevu',
    metaDescription: 'Ilman kunnollista mittausta optimoit sokkona. Näin asennamme ja varmistamme Meta-pikselin ja Conversions API:n.',
    eyebrow: 'Meta-pikseli',
    h1: 'Meta-pikseli & Conversions API',
    intro: 'Ilman kunnollista mittausta optimoit sokkona — ja maksat siitä joka päivä. Pikseli ja Conversions API ovat perusta, jonka päälle kaikki muu rakentuu.',
    ctaLabel: 'Pyydä pikseliauditointi →',
    whatIs: {
      h: 'Mikä pikseli on',
      p: 'Meta-pikseli on koodinpätkä sivustollasi, joka kertoo Metalle mitä ihmiset tekevät: katsovat tuotetta, lisäävät ostoskoriin, ostavat. Ilman tätä tietoa algoritmi ei voi optimoida ostajia eikä rakentaa uudelleenmarkkinointia.',
    },
    whyMatters: {
      h: 'Pikseli vs. Conversions API',
      p: 'iOS-päivitysten jälkeen pelkkä selaimessa toimiva pikseli menettää osan datasta. Conversions API lähettää tapahtumat palvelimelta suoraan Metalle, jolloin mittaus pysyy tarkkana ja optimointi toimii myös silloin, kun selainseuranta estyy.',
    },
    doItems: [
      { h: 'Asennus & auditointi', p: 'Asennamme pikselin oikein tai tarkistamme nykyisen — usein sieltä löytyy puuttuvia tai tuplautuneita tapahtumia.' },
      { h: 'Tapahtumakartoitus', p: 'Määritämme oikeat tapahtumat sinun myyntipolkusi mukaan, jotta algoritmi optimoi juuri oikeaa toimintoa.' },
      { h: 'Varmennus & seuranta', p: 'Testaamme että data kulkee oikein ja pidämme mittauksen kunnossa jatkossakin.' },
    ],
    mistakes: [
      'Puuttuva pikseli — koko optimointi perustuu arvaukseen',
      'Ei Conversions API:a — osa konversioista jää näkymättä iOS:n takia',
      'Väärät tapahtumat — algoritmi optimoi väärää toimintoa',
      'Tuplaseuranta — sama tapahtuma kirjautuu kahdesti ja vääristää datan',
    ],
    showcase: {
      h: 'Mittaus, johon voi luottaa',
      p: 'Pikseli ja Conversions API yhdessä varmistavat, että jokainen tapahtuma tallentuu — myös silloin kun selainseuranta estyy. Optimointi perustuu oikeaan dataan, ei arvaukseen.',
      points: ['Pikseli + Conversions API rinnakkain', 'Tapahtumat kartoitettu myyntipolkuun', 'Varmennettu ja seurattu jatkuvasti'],
    },
    stats: [
      { value: 100, suffix: ' %', label: 'tapahtumakattavuus' },
      { value: 2, suffix: '', label: 'mittaustapaa: pikseli + CAPI' },
      { value: 0, suffix: '', label: 'menetettyä konversiota' },
    ],
    related: [
      { label: 'Miksi Meta (Facebook) mainokset eivät tuota mitään?', href: '/blog/miksi-meta-facebook-mainokset-eivat-tuota' },
      { label: 'Raportointi, joka kertoo mitä tehdä seuraavaksi', href: '/raportointi' },
    ],
    faq: [
      { q: 'Mistä tiedän, onko pikselini kunnossa?', a: 'Pyydä pikseliauditointi — tarkistamme onko pikseli asennettu, lähettääkö se oikeat tapahtumat ja toimiiko Conversions API. Useimmiten löytyy korjattavaa.' },
      { q: 'Onko Conversions API pakollinen?', a: 'Ei pakollinen, mutta käytännössä välttämätön tarkkaan mittaukseen iOS-päivitysten jälkeen. Suosittelemme sitä lähes aina.' },
      { q: 'Vaikuttaako pikseli sivuston nopeuteen?', a: 'Oikein asennettuna vaikutus on häviävän pieni. Varmistamme ettei mittaus hidasta sivustoa.' },
    ],
    ctaHeading: 'Mittaatko mainontaasi oikein?',
    ctaSub: 'Pyydä pikseliauditointi — kerromme toimiiko mittauksesi vai optimoitko sokkona.',
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find(s => s.slug === slug)
}
