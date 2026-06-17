import { writeFileSync } from 'node:fs'

// Article list straight from the task brief: day, slug, title, description, length.
const articles = [
  [1, 'meta-ads-manager-mita-on', 'short', 'Mitä Meta Ads Manager on — ja miten se eroaa Facebook-sivun mainostamisesta', 'Meta Ads Manager on Metan virallinen mainostyökalu. Tässä selitämme mitä se on, miten se toimii ja miksi se on parempi vaihtoehto kuin Facebook-sivun Boostaa-nappi.'],
  [2, 'meta-kampanjarakenne', 'medium', 'Meta-kampanjarakenne selitettynä: kampanja, mainosjoukko ja mainos', 'Meta-mainonta rakentuu kolmesta tasosta: kampanja, mainosjoukko ja mainos. Tässä selitämme mitä kukin taso tarkoittaa ja miten ne toimivat yhdessä.'],
  [3, 'meta-mainonnan-budjetti', 'medium', 'Meta-mainonnan budjetti: paljonko suomalaisen pk-yrityksen kannattaa käyttää', 'Paljonko Meta-mainontaan pitää käyttää rahaa? Realistiset luvut suomalaiselle pk-yritykselle — toimialoittain ja tavoitteittain.'],
  [4, 'meta-ads-tarjousstrategia', 'short', 'Meta Ads -tarjousstrategia: manuaalinen vai automaattinen — kumpi kannattaa', 'Meta Ads tarjoaa useita tarjousstrategioita. Manuaalinen vai automaattinen? Selitämme erot ja kerromme kumpi sopii sinulle.'],
  [5, 'meta-advantage-plus-vs-manuaalinen', 'medium', 'Meta Advantage+ vs. manuaalinen kampanja — mitä eroa on käytännössä', 'Meta Advantage+ automatisoi kampanjarakenteen ja kohdentamisen. Onko se parempi kuin manuaalinen kampanja? Selitämme erot.'],
  [6, 'meta-ads-manager-virheet', 'medium', 'Meta Ads Managerin yleisimmät virheet ja miten ne korjataan', 'Meta Ads Managerissa tehdään samat virheet yhä uudelleen. Tässä 7 yleisintä — ja konkreettiset ohjeet miten korjaat ne.'],
  [7, 'meta-kampanjan-rakentaminen', 'long', 'Meta-kampanjan rakentaminen alusta alkaen — vaihe vaiheelta', 'Näin rakennat Meta-kampanjan alusta alkaen oikein. Vaihe vaiheelta opas suomalaiselle pk-yritykselle — tavoitteesta julkaisuun.'],
  [8, 'meta-ads-ab-testaus', 'medium', 'A/B-testaus Meta Adsissa — näin teet sen oikein', 'A/B-testaus Meta Adsissa paljastaa mikä toimii ja mikä ei. Näin teet sen oikein — mitä testata, miten tulkita tuloksia ja milloin lopettaa.'],
  [9, 'meta-mainos-hylatty', 'medium', 'Meta-mainos hylätty — miksi se tapahtuu ja miten korjaat sen', 'Meta hylkää mainoksia ilman selvää selitystä. Tässä yleisimmät syyt hylkäykseen ja ohjeet miten saat mainoksen hyväksytyksi.'],
  [10, 'meta-kampanjan-skaalaaminen', 'medium', 'Meta-kampanjan skaalaaminen — näin kasvatat budjettia tuhoamatta tuloksia', 'Toimiva Meta-kampanja ei automaattisesti skaalaudu isommalla budjetilla. Näin skaalaat oikein ilman että tulokset romahtavat.'],
  [11, 'meta-ads-manager-vs-boostattu-julkaisu', 'short', 'Meta Ads Manager vs. boostattu julkaisu — kumpi kannattaa valita', 'Boostaa-nappi vai Meta Ads Manager? Selitämme mitä eroa on, milloin boostaaminen riittää ja milloin se on rahan haaskausta.'],
  [12, 'meta-kampanjan-optimointi', 'medium', 'Meta-kampanjan optimointi — kuinka usein ja mitä pitää tehdä', 'Kuinka usein Meta-kampanjaa pitää optimoida? Mitä lukuja katsotaan ja mitä muutetaan? Käytännön ohje ilman turhaa teknistä jargonia.'],
  [13, 'meta-mainonnan-creative', 'medium', 'Meta-mainonnan creative: mikä tekee mainoksesta pysäyttävän', 'Miksi jotkut Meta-mainokset pysäyttävät selauksen ja toiset ei? Tässä mitä hyvä mainosmateriaali vaatii — ilman suunnittelijan palkkaamista.'],
  [14, 'meta-mainonta-kuva-vai-video', 'short', 'Meta-mainonta kuva vai video — kumpi toimii paremmin', 'Pitääkö Meta-mainoksessa olla video vai riittääkö kuva? Rehellinen vastaus toimialaesimerkkeineen.'],
  [15, 'meta-mainosteksti', 'medium', 'Meta-mainosteksti: näin kirjoitat copyn joka saa ihmisen toimimaan', 'Hyvä Meta-mainosteksti ei luettele ominaisuuksia — se puhuu asiakkaan ongelmasta. Näin kirjoitat copyn joka toimii.'],
  [16, 'meta-mainonnan-hook', 'short', 'Meta-mainonnan hook — miksi ensimmäinen sekunti ratkaisee kaiken', 'Meta-mainoksella on alle sekunti aikaa pysäyttää käyttäjä. Näin rakennat hookin joka toimii.'],
  [17, 'meta-carousel-mainos', 'short', 'Meta carousel-mainos vai yksittäinen kuva — milloin käyttää mitäkin', 'Carousel-mainos vai yksittäinen kuva? Selitämme milloin carousel kannattaa ja milloin yksinkertainen ratkaisu on parempi.'],
  [18, 'meta-ugc-mainokset', 'medium', 'UGC-mainokset Meta-mainonnassa — toimivatko ne suomalaiselle yleisölle', 'UGC-mainokset eli käyttäjien luoma sisältö on iso trendi Meta-mainonnassa. Toimiiko se Suomessa? Rehellinen arvio.'],
  [19, 'meta-mainoskreatiivin-tekeminen', 'medium', 'Meta-mainoskreatiivin tekeminen ilman suunnittelijaa', 'Ei budjettia mainostoimistolle? Et tarvitse. Näin teet toimivan Meta-mainoskreatiivin itse.'],
  [20, 'meta-creative-fatigue', 'medium', 'Meta creative fatigue — miten tunnistat sen ja mitä teet sille', 'Meta-mainoksen teho laskee ajan myötä. Tätä kutsutaan creative fatigueksi. Näin tunnistat sen ajoissa ja korjaat tilanteen.'],
  [21, 'meta-mainonnan-copywriting', 'medium', 'Meta-mainonnan copywriting suomeksi — 5 rakennetta jotka toimivat', 'Meta-mainostekstin kirjoittaminen ei vaadi copywriterin koulutusta. Nämä 5 rakennetta toimivat suomalaiselle yleisölle.'],
  [22, 'meta-staattinen-kuva-vs-animaatio', 'short', 'Meta-mainonta: staattinen kuva vs. animaatio — kumpi tuo tuloksia', 'Kannattaako Meta-mainokseen tehdä animaatio vai riittääkö staattinen kuva? Käytännön vastaus.'],
  [23, 'meta-mainonta-ravintolalle-creative', 'medium', 'Meta-mainonta ravintolalle — näin suunnittelet toimivan mainoksen', 'Meta-mainos ravintolalle ei tarkoita ruokakuvaa ja aukioloaikoja. Näin suunnittelet mainoksen joka tuo pöytävarauksia.'],
  [24, 'meta-mainonta-hyvinvointiyritykselle-creative', 'medium', 'Meta-mainonta hyvinvointiyritykselle — näin suunnittelet toimivan mainoksen', 'Hyvinvointialan Meta-mainonnassa luottamus ratkaisee. Näin rakennat mainoksen joka vakuuttaa ja tuo ajanvarauksia.'],
  [25, 'meta-mainonnan-mittarit', 'medium', 'Meta-mainonnan mittarit — mitkä oikeasti merkitsevät tuloksille', 'Meta Ads Manager täynnä lukuja — mutta mitkä niistä oikeasti kertovat jotain? Tässä mittarit joihin kannattaa keskittyä.'],
  [26, 'meta-mainonnan-roas', 'short', 'Meta-mainonnan ROAS selitettynä — mitä se tarkoittaa ja mikä on hyvä tulos', 'ROAS on Meta-mainonnan tärkein mittari verkkokaupalle. Tässä mitä se tarkoittaa, miten se lasketaan ja mikä on realistinen tavoite.'],
  [27, 'meta-ads-cpm-cpc-ctr', 'short', 'Meta Ads CPM, CPC ja CTR — mitä nämä tarkoittavat käytännössä', 'CPM, CPC, CTR — Meta Ads Manager on täynnä lyhenteitä. Tässä mitä ne tarkoittavat ja miten käytät niitä päätöksenteossa.'],
  [28, 'meta-ads-vs-google-analytics', 'medium', 'Meta Ads vs. Google Analytics — miksi ne raportoivat eri tuloksia', 'Meta sanoo 20 konversiota, Google Analytics sanoo 8. Kumpi on oikeassa? Selitämme mistä ero tulee ja miten tulkita lukuja oikein.'],
  [29, 'meta-mainonnan-attribution-window', 'medium', 'Meta-mainonnan attribution window — mikä se on ja miksi se vaikuttaa tuloksiisi', 'Attribution window määrittää miten Meta laskee konversiot. Väärä asetus voi vääristää tuloksia merkittävästi. Selitämme miten se toimii.'],
  [30, 'meta-ads-raportin-lukeminen', 'medium', 'Meta Ads -raportin lukeminen ilman markkinointikoulutusta', 'Meta Ads Manager voi tuntua ylivoimaiselta. Tässä miten luet raporttia, mitä lukuja katsot ensin ja mitä ne kertovat.'],
  [31, 'meta-mainonnan-frequency', 'short', 'Meta-mainonnan frequency — milloin mainoksesi näytetään liian usein', 'Frequency kertoo kuinka monta kertaa sama henkilö on nähnyt mainoksesi. Liian korkea frequency tappaa kampanjan. Näin hallitset sitä.'],
  [32, 'meta-mainonnan-tavoitteet', 'medium', 'Meta-mainonnan tavoitteet — näin asetat realistiset odotukset', 'Mitä Meta-mainonnalta voi realistisesti odottaa? Paljonko liidejä, millä hinnalla, missä ajassa? Rehelliset vastaukset.'],
  [33, 'meta-ads-raportti-yritykselle', 'medium', 'Meta Ads -raportti yritykselle — mitä siihen kannattaa sisällyttää', 'Teetkö Meta-mainontaa asiakkaalle tai haluat seurata tuloksia itse? Nämä asiat kuuluvat hyvään Meta Ads -raporttiin.'],
  [34, 'ios-14-vaikutus-meta-mainontaan', 'medium', 'iOS 14.5 vaikutus Meta-mainonnan raportointiin — mitä se tarkoittaa vielä tänään', 'iOS 14.5 muutti Meta-mainonnan seurannan pysyvästi. Mitä se tarkoittaa käytännössä tänään — ja miten se vaikuttaa sinun kampanjoihisi.'],
  [35, 'meta-pixel-mita-on', 'medium', 'Meta Pixel: mikä se on ja miksi jokainen verkkokauppa tarvitsee sen', 'Meta Pixel on pieni koodinpätkä joka muuttaa Meta-mainonnan tehokkaaksi. Tässä mitä se tekee ja miksi ilman sitä mainostaminen on arvailua.'],
  [36, 'meta-pixelin-asentaminen-wordpress', 'medium', 'Meta Pixelin asentaminen WordPress-sivulle — vaihe vaiheelta', 'Meta Pixelin asentaminen WordPressiin ei vaadi koodausosaamista. Näin teet sen oikein muutamassa minuutissa.'],
  [37, 'meta-pixel-vs-conversions-api', 'medium', 'Meta Pixel vs. Conversions API — mitä eroa on ja tarvitsetko molemmat', 'Meta Pixel ja Conversions API tekevät samaa asiaa — melkein. Selitämme mitä eroa on ja tarvitsetko molemmat vai riittääkö toinen.'],
  [38, 'meta-pixel-tapahtumat', 'medium', 'Meta Pixel -tapahtumat — mitä tapahtumia sinun pitää seurata', 'Meta Pixel voi seurata kymmenittäin eri tapahtumia. Mitkä niistä oikeasti merkitsevät? Tässä mitä seurata toimialakohtaisesti.'],
  [39, 'meta-pixelin-testaaminen', 'short', 'Meta Pixelin testaaminen — näin varmistat että se toimii oikein', 'Miten tiedät toimiiko Meta Pixel oikein? Tässä miten testaat sen — ja mitä teet jos se ei toimi.'],
  [40, 'meta-pixel-optimointi', 'short', 'Meta Pixel -optimointi: miksi optimoit väärää tapahtumaa', 'Väärän pikselin tapahtuman optimointi on yksi kalleimmista Meta-mainonnan virheistä. Näin varmistat että optimoit oikeaa asiaa.'],
  [41, 'meta-mainonta-cookieless-tracking', 'medium', 'Meta-mainonta ilman cookies — mitä cookieless tracking tarkoittaa käytännössä', 'Evästeet katoavat vähitellen. Mitä se tarkoittaa Meta-mainonnan seurannalle? Käytännön selitys ilman teknistä jargonia.'],
  [42, 'meta-pixelin-asennusvirheet', 'medium', 'Meta Pixelin asennusvirheet — yleisimmät ongelmat ja miten korjaat ne', 'Meta Pixel asennettu mutta ei toimi oikein? Tässä yleisimmät asennusvirheet ja ohjeet miten korjaat ne.'],
  [43, 'meta-custom-conversions-vs-standard-events', 'short', 'Meta Custom Conversions vs. Standard Events — kumpi kannattaa valita', 'Meta tarjoaa kaksi tapaa seurata konversioita: Standard Events ja Custom Conversions. Selitämme eron ja kerromme kumpi sopii sinulle.'],
  [44, 'meta-pixel-data-kohdentamisessa', 'medium', 'Meta Pixel -data kohdentamisessa — näin käytät sitä tehokkaasti', 'Meta Pixel kerää dataa — mutta harva käyttää sitä kohdentamiseen. Näin hyödynnät pikselin dataa paremman mainonnan rakentamiseen.'],
  [45, 'meta-mainonnan-liidien-hankinta', 'medium', 'Meta-mainonnan liidien hankinta — mitä se on ja kenelle se sopii', 'Liidien hankinta Meta-mainonnalla tarkoittaa yhteydenottopyyntöjen keräämistä. Mutta kenelle se sopii ja milloin se kannattaa?'],
  [46, 'meta-lead-ads-vs-laskeutumissivu', 'medium', 'Meta Lead Ads vs. laskeutumissivu — kumpi tuo enemmän liidejä', 'Meta Lead Ads kerää yhteystiedot Metan sisällä. Laskeutumissivu ohjaa sivustollesi. Kumpi tuo enemmän liidejä — ja parempilaatuisia?'],
  [47, 'meta-mainonnan-liidihinnoittelu', 'medium', 'Meta-mainonnan liidihinnoittelu — paljonko liidi saa maksaa pk-yritykselle', 'Paljonko yksi liidi saa maksaa Meta-mainonnassa? Laskukaava ja realistiset luvut eri toimialoille.'],
  [48, 'meta-mainonnan-kustannus-per-liidi', 'medium', 'Meta-mainonnan kustannus per liidi — laskukaava ja realistiset luvut', 'Kustannus per liidi on yksi tärkeimmistä Meta-mainonnan mittareista palveluyritykselle. Näin lasket sen ja arvioit onko se kannattavaa.'],
  [49, 'meta-mainonta-paikalliselle-yritykselle', 'medium', 'Meta-mainonta paikalliselle yritykselle — näin kohdennat oikein', 'Paikallinen yritys tarvitsee paikallisia asiakkaita. Näin kohdennat Meta-mainokset niin, että tavoitat oikeat ihmiset oikealla alueella.'],
  [50, 'meta-mainonta-retargeting', 'medium', 'Meta-mainonta retargeting — näin tavoitat jo kiinnostuneet uudelleen', 'Retargeting tarkoittaa mainontaa ihmisille, jotka ovat jo käyneet sivustollasi. Näin se toimii ja miten rakennat sen.'],
  [51, 'meta-lookalike-yleisot', 'medium', 'Meta Lookalike-yleisöt — mitä ne ovat ja miten niitä käytetään', 'Lookalike-yleisöt ovat yksi Meta-mainonnan tehokkaimmista työkaluista. Näin ne toimivat ja miten rakennat sellaisen.'],
  [52, 'meta-mainonta-verkkokaupalle', 'long', 'Meta-mainonta verkkokaupalle — mistä aloittaa', 'Meta-mainonta on yksi verkkokaupan tärkeimmistä kasvukanavista. Tässä mistä aloittaa ja mitä tehdä ensin.'],
  [53, 'meta-tuotekatalogimainokset', 'medium', 'Meta-tuotekatalogimainokset — mitä ne ovat ja milloin kannattaa käyttää', 'Tuotekatalogimainokset näyttävät automaattisesti oikeat tuotteet oikeille ihmisille. Näin ne toimivat ja milloin ne kannattavat.'],
  [54, 'meta-mainonta-vs-google-ads-verkkokauppa', 'medium', 'Meta-mainonta vs. Google Ads verkkokaupalle — kumpi kannattaa valita', 'Meta vai Google? Verkkokauppiaalle tämä on yksi tärkeimmistä päätöksistä. Selitämme eron ja kerromme kumpi sopii mihinkin tilanteeseen.'],
  [55, 'meta-myyntisuppilo', 'long', 'Meta-myyntisuppilo — näin rakennat sen alusta alkaen', 'Meta-myyntisuppilo tarkoittaa mainontaa, joka ohjaa ihmisen tietoisuudesta ostopäätökseen. Näin rakennat sen käytännössä.'],
  [56, 'meta-mainonta-500-euron-budjetilla', 'medium', 'Meta-mainonta 500 euron kuukausibudjetilla — näin käytät sen viisaasti', '500 euroa kuukaudessa Meta-mainontaan. Miten käytät sen niin, että saat tuloksia eikä raha vain katoa?'],
  [57, 'meta-mainonta-ravintolalle', 'long', 'Meta-mainonta ravintolalle — käytännön opas asiakkaiden hankkimiseen', 'Meta-mainonta on yksi tehokkaimmista tavoista tuoda asiakkaita ravintolaan. Tässä käytännön opas miten se tehdään oikein.'],
  [58, 'meta-mainonta-remonttiyritykselle', 'long', 'Meta-mainonta remonttiyritykselle — näin hankit asiakkaat Facebookista', 'Meta-mainonta toimii remonttiyritykselle — kun se tehdään oikein. Tässä miten hankit tarjouspyyntöjä Facebookin ja Instagramin kautta.'],
  [59, 'meta-mainonta-kauneushoitolalle', 'long', 'Meta-mainonta kauneushoitolalle — näin täytät kalenterin mainonnalla', 'Kauneushoitolan kalenteri täyttyy suosituksilla — tai Meta-mainonnalla. Näin rakennat kampanjan joka tuo jatkuvan virran varauksia.'],
  [60, 'milloin-meta-mainonta-ei-sovi', 'medium', 'Milloin Meta-mainonta ei sovi yrityksellesi — rehellinen arvio', 'Meta-mainonta ei sovi kaikille. Tässä rehellinen lista tilanteista, joissa se ei todennäköisesti toimi — ja mitä tehdä sen sijaan.'],
]

// Category by thematic block.
function categoryFor(day) {
  if (day <= 12) return 'Meta Ads Manager'
  if (day <= 24) return 'Mainossisältö'
  if (day <= 34) return 'Mittarit & raportointi'
  if (day <= 44) return 'Meta-pikseli'
  if (day <= 51) return 'Liidit'
  return 'Verkkokauppa & toimialat'
}

// Deterministic RNG so reruns are stable.
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const rng = mulberry32(20260615)

// 60 unique HH:MM in Finnish time, hours 07..10 (i.e. 07:00–10:59), minutes 0..59.
const usedTimes = new Set()
function uniqueTime() {
  for (;;) {
    const h = 7 + Math.floor(rng() * 4) // 7,8,9,10
    const m = Math.floor(rng() * 60)
    const key = `${h}:${m}`
    if (!usedTimes.has(key)) { usedTimes.add(key); return { h, m } }
  }
}

const readByLength = {
  short: () => 4 + Math.floor(rng() * 2),   // 4-5
  medium: () => 6 + Math.floor(rng() * 4),  // 6-9
  long: () => 11 + Math.floor(rng() * 5),   // 11-15
}

const pad = n => String(n).padStart(2, '0')
const base = Date.UTC(2026, 5, 15) // 15 June 2026

const schedule = articles.map(([day, slug, length, title, description]) => {
  const d = new Date(base + (day - 1) * 86400000)
  const date = `${d.getUTCDate()}.${d.getUTCMonth() + 1}.${d.getUTCFullYear()}`
  const { h, m } = uniqueTime()
  const publishedTime = `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}T${pad(h)}:${pad(m)}:00+03:00`
  const grad = `grad-${((day - 1) % 5) + 1}`
  const read = readByLength[length]()
  return { day, slug, length, title, description, cat: categoryFor(day), date, publishedTime, grad, read }
})

writeFileSync(new URL('../.tmp-blog-schedule.json', import.meta.url), JSON.stringify(schedule, null, 2))
console.log(`Wrote ${schedule.length} entries. Unique times: ${usedTimes.size}`)
console.log('First:', JSON.stringify(schedule[0]))
console.log('Last:', JSON.stringify(schedule[59]))
