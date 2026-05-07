export interface Post {
  slug: string
  title: string
  cats: string[]
  date: string
  read: number
  grad: string
  excerpt: string
  content: string
}

export const POSTS: Post[] = [
  {
    slug: 'miksi-meta-mainos-ei-toimi',
    title: 'Miksi Meta-mainoksesi ei tuo asiakkaita — 5 yleisintä virhettä',
    cats: ['Strategia'],
    date: '28.4.2026',
    read: 6,
    grad: 'grad-1',
    excerpt: 'Suurin osa epäonnistuneista Meta-kampanjoista kaatuu samoihin viiteen virheeseen. Käymme ne läpi ja kerromme miten korjaat ne.',
    content: `
      <p>Suomalaiset yrittäjät polttavat Meta-mainontaan vuosittain miljoonia ilman, että saavat siitä tuloksia. Syy ei yleensä ole alustassa, eikä budjetissa — vaan siinä, miten kampanja on rakennettu.</p>
      <p>Kävimme läpi yli sata pk-yrityksen tiliä viime vuonna. Samat viisi virhettä toistuivat lähes joka kerta.</p>
      <h2>1. Kohdentaminen on liian laajaa</h2>
      <p>Yleisin virhe: yritetään tavoittaa "kaikki suomalaiset 25–55 v.". Meta ei voi optimoida, jos et anna sille suuntaa. Aloita kapeasta yleisöstä — laajenna vasta kun data sanoo niin.</p>
      <h2>2. Mainoskuva on geneerinen</h2>
      <p>Stock-kuva, jossa kaksi ihmistä hymyilee tietokoneelle, ei pysäytä ketään. Mainoksen pitää näyttää siltä, että se on tehty <em>juuri</em> oikealle ihmiselle juuri oikealla hetkellä.</p>
      <blockquote><p>Hyvä mainos ei näytä mainokselta. Se näyttää siltä, että tuttu lähetti sen sinulle.</p></blockquote>
      <h2>3. Tekstiä on liian paljon</h2>
      <p>Feedissä mainos näkyy 1,7 sekuntia. Jos otsikko on yli 8 sanaa, se ei ehdi mennä perille. Lyhennä, kunnes sattuu.</p>
      <h2>4. Yksi kreatiivi yhteen kampanjaan</h2>
      <p>Algoritmi tarvitsee variaatioita oppiakseen. Suosittelemme aina vähintään 3–5 erilaista kreatiivia per ad set.</p>
      <h2>5. Mittaaminen puuttuu kokonaan</h2>
      <p>Ilman pikseliä ja konversioseurantaa lennät sokkona. Tämä on usein helpoin korjata — ja vaikuttavin.</p>
      <h3>Mitä seuraavaksi?</h3>
      <p>Jos tunnistit useita näistä virheistä, et ole yksin. Pyydä ilmainen mainosanalyysi — kerromme tarkalleen, mitä sinun kannattaa korjata ensimmäisenä.</p>
    `
  },
  {
    slug: 'budjetti-ei-ratkaise',
    title: 'Pieni budjetti ei ole ongelma — väärä strategia on',
    cats: ['Budjetointi'],
    date: '15.4.2026',
    read: 4,
    grad: 'grad-2',
    excerpt: 'Yrittäjät kysyvät usein "kuinka paljon pitäisi laittaa rahaa". Vastaus on harvoin se mitä odotat.',
    content: `
      <p>Saamme tämän kysymyksen viikoittain: "Kuinka paljon Meta-mainontaan pitäisi laittaa rahaa?" Lyhyt vastaus: vähemmän kuin luulet. Pitkä vastaus seuraa.</p>
      <h2>Budjetti ei ole strategia</h2>
      <p>50 € päivässä huonoon kampanjaan tuottaa huonompia tuloksia kuin 10 € hyvin rakennettuun. Algoritmi palkitsee laatua, ei volyymia.</p>
      <h2>Mistä aloittaa</h2>
      <ul>
        <li>Aloita 10–20 €/päivä per ad set</li>
        <li>Anna sen pyöriä vähintään 7 päivää ennen kuin teet muutoksia</li>
        <li>Skaalaa vain kampanjoita, joiden CPA on tavoitteen alla</li>
      </ul>
      <p>Tämä lähestymistapa säästää keskimäärin 40 % budjettia ensimmäisten kahden kuukauden aikana.</p>
    `
  },
  {
    slug: 'ravintolan-meta-opas',
    title: 'Ravintolan Meta-opas: kuinka täytät pöytäsi maanantaisin',
    cats: ['Tapaustutkimus', 'Ravintolat'],
    date: '2.4.2026',
    read: 7,
    grad: 'grad-3',
    excerpt: 'Hiljaisten alkuviikkojen täyttäminen on Meta-mainonnan helpoin voitto — jos teet sen oikein.',
    content: `
      <p>Ravintola-ala elää viikonlopuilla. Mutta maanantai-keskiviikko ovat juuri se aika, jolloin Meta-mainonta tuottaa parhaan tuoton. Kilpailu on pienempää, klikkihinnat alhaisempia ja asiakkailla on aikaa.</p>
      <h2>Geocircle 5 km</h2>
      <p>Älä kohdenna kaupungin sisällä — kohdenna ravintolasi ympärille 5 km säteellä. Tämä on yleensä se etäisyys, jonka asiakas ajaa illalliselle.</p>
      <h2>Aikaikkuna ratkaisee</h2>
      <p>Aja mainoksia ma–ke klo 11–17. Iltapäivällä ihmiset päättävät, mihin syövät illalla. Sitä ennen tai jälkeen mainos menee hukkaan.</p>
      <blockquote><p>Eräällä asiakkaallamme maanantai-illan kate kasvoi 3,2-kertaiseksi neljässä viikossa.</p></blockquote>
      <h3>Mitä mainostaa</h3>
      <p>Älä mainosta "ravintolaa". Mainosta yhtä konkreettista lautasta. Yhtä elämystä. Yhtä illan tarjousta.</p>
    `
  },
  {
    slug: 'pikseli-puuttuu',
    title: 'Meta-pikseli puuttuu? Menetät rahaa joka päivä',
    cats: ['Tekniikka'],
    date: '20.3.2026',
    read: 3,
    grad: 'grad-4',
    excerpt: 'Ilman pikseliä Meta ei opi mitään. 15 minuutin asennus, joka muuttaa kaiken.',
    content: `
      <p>Jos verkkosivuillasi ei ole Meta-pikseliä, Meta ei voi optimoida mainoksiasi. Se on yksinkertainen totuus, jota suurin osa pk-yrityksistä ei tiedä.</p>
      <h2>Mikä Meta-pikseli on</h2>
      <p>Pikseli on pieni JavaScript-pätkä, joka kertoo Metalle mitä sivuillasi tapahtuu. Kuka osti, kuka katsoi, kuka jätti ostoskorin.</p>
      <h2>Asentaminen vie 15 minuuttia</h2>
      <p>WordPressissä riittää yksi plugin. Shopifyssä yksi koodi. Wixissä yksi kenttä. Lisää myös Conversions API rinnalle, jos haluat tarkkaa dataa selainestoja vastaan.</p>
    `
  },
  {
    slug: 'video-vs-kuva',
    title: 'Video vai still-kuva? Kumpi voittaa vuonna 2026',
    cats: ['Luova suunnittelu'],
    date: '8.3.2026',
    read: 5,
    grad: 'grad-5',
    excerpt: 'Algoritmi suosii videota, mutta vain tiettyä videota. Tässä mitä testit kertovat.',
    content: `
      <p>Yleinen myytti: video voittaa aina kuvan. Todellisuus: lyhyt 6–9 sekunnin video voittaa, pitkä 30 sekunnin video häviää useimmiten still-kuvalle.</p>
      <h2>Mitä data sanoo</h2>
      <p>Kävimme läpi 240 kampanjaa Q1/2026 aikana. Lyhyet pystyvideot tuottivat keskimäärin 31 % alemman CPA:n kuin staattiset mainokset. Pitkät videot tuottivat 18 % korkeamman.</p>
      <h2>Reseptin perusasiat</h2>
      <ul>
        <li>Hook 1,5 sekunnissa</li>
        <li>Tekstitykset aina päällä</li>
        <li>Pystysuunta 9:16</li>
        <li>Selkeä CTA viimeisessä sekunnissa</li>
      </ul>
    `
  },
  {
    slug: 'remonttialan-liidit',
    title: 'Remonttialan liidit: kuinka saat vain laadukkaita yhteydenottoja',
    cats: ['Tapaustutkimus', 'Remontit'],
    date: '22.2.2026',
    read: 6,
    grad: 'grad-6',
    excerpt: 'Remontoijat saavat usein paljon liidejä — ja paljon roskaa. Kuinka erottelet jyvät akanoista.',
    content: `
      <p>Remonttialalla 100 liidiä kuukaudessa ei tarkoita mitään, jos 90 niistä on hintatiedustelijoita ilman aikomusta tilata. Tärkeämpää on saada 20 liidiä, joista 8 muuttuu sopimukseksi.</p>
      <h2>Lomake on suodatin</h2>
      <p>Lyhyt lomake = paljon liidejä, huono laatu. Pitkä lomake = vähän liidejä, korkea laatu. Lisää 3–5 kvalifioivaa kysymystä: budjetti, aikataulu, omistaako asunnon.</p>
      <h2>Hinnan mainitseminen</h2>
      <p>Mainita lähtöhinta mainostekstissä ("Keittiöremontti alkaen 12 000 €") karsii valtaosan väärin kohdistuneista liideistä jo ennen lomaketta.</p>
    `
  },
  {
    slug: 'kohderyhma-ei-ole-demografia',
    title: 'Kohderyhmäsi ei ole demografia — se on hetki',
    cats: ['Strategia'],
    date: '10.2.2026',
    read: 5,
    grad: 'grad-1',
    excerpt: '"Naiset 35–54" ei ole kohderyhmä. "Naiset, jotka heräsivät juuri kipuun" on.',
    content: `
      <p>Demografinen kohdentaminen on ajattelutapa vuodelta 2015. Vuonna 2026 tärkeämpää on kohdentaa <em>hetkiin</em> — siihen vaiheeseen, jossa ihminen on juuri nyt.</p>
      <h2>Mitä hetkikohdentaminen tarkoittaa</h2>
      <p>Et mainosta hyvinvointituotetta "naisille 35–54", vaan ihmisille jotka ovat juuri tehneet hakuja kivunhallinnasta, niskakivusta tai unihäiriöistä. Konteksti voittaa demografian.</p>
      <blockquote><p>Oikea viesti väärällä hetkellä on melu. Sama viesti oikealla hetkellä on vastaus.</p></blockquote>
    `
  },
  {
    slug: 'mainosbudjetin-jakaminen',
    title: 'Kuinka jakaa 1 000 €/kk mainosbudjetti — käytännön malli',
    cats: ['Budjetointi'],
    date: '1.2.2026',
    read: 4,
    grad: 'grad-2',
    excerpt: 'Yksi budjetti, kolme vaihetta, neljä kampanjaa. Tässä yksinkertainen malli pieneen budjettiin.',
    content: `
      <p>Pieni budjetti ei tarkoita huonoja tuloksia. Se tarkoittaa vain, että sinulla ei ole varaa kokeilla 12 asiaa kerralla.</p>
      <h2>70/20/10-sääntö</h2>
      <ul>
        <li><strong>70 % (700 €):</strong> Konversiokampanja parhaaseen tarjoukseen</li>
        <li><strong>20 % (200 €):</strong> Uudelleenkohdentaminen sivustovierailijoille</li>
        <li><strong>10 % (100 €):</strong> Testikampanja uusille kreatiiveille</li>
      </ul>
      <p>Tällä jaolla saat sekä tuloksia heti että dataa pitkän aikavälin kasvua varten.</p>
    `
  },
  {
    slug: 'kiinteistovalittajan-meta',
    title: 'Kiinteistövälittäjän Meta-mainonta: kohti listausta, ei kohti klikkiä',
    cats: ['Tapaustutkimus', 'Kiinteistöt'],
    date: '18.1.2026',
    read: 6,
    grad: 'grad-3',
    excerpt: 'Klikit eivät myy taloja. Listauspyynnöt myyvät.',
    content: `
      <p>Kiinteistövälitys on alueellinen bisnes, jossa yksi listaus on arvokkaampi kuin tuhat klikkiä. Silti suurin osa välittäjistä mittaa Meta-mainontaa klikkihinnan mukaan.</p>
      <h2>Mittari pitää vaihtaa</h2>
      <p>Listauspyyntö on oikea konversio. Sen optimointi vaatii lomakkeen + Conversions API:n + 30 päivän attribuutio-ikkunan.</p>
      <h2>Tarjouksena arvio, ei vinkki</h2>
      <p>"Lataa myyntivinkit" tuottaa heikkoja liidejä. "Pyydä ilmainen myyntiarvio asunnostasi" tuottaa myyntivalmiita liidejä — vähemmän, mutta arvokkaampia.</p>
    `
  }
]

export function getAllPosts(): Post[] {
  return POSTS
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find(p => p.slug === slug)
}
