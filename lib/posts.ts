import { batch1 } from './blog/batch-1'
import { batch2 } from './blog/batch-2'
import { batch3 } from './blog/batch-3'
import { batch4 } from './blog/batch-4'
import { batch5 } from './blog/batch-5'
import { batch6 } from './blog/batch-6'

export interface Post {
  slug: string
  title: string
  cats: string[]
  date: string
  read: number
  grad: string
  excerpt: string
  content: string
  image?: string
  /**
   * ISO 8601 publish timestamp (e.g. "2026-06-15T08:37:00+03:00"). When set it
   * drives the article's publishedTime / datePublished in metadata, JSON-LD and
   * the sitemap. When omitted it falls back to midnight UTC of `date`.
   */
  publishedTime?: string
  /**
   * Whether the post is listed on the /blog index page. Defaults to false
   * (hidden) so newly added articles stay off the Blogi page until explicitly
   * set to true. Hidden posts are still live by direct URL and in the sitemap.
   */
  showOnBlog?: boolean
}

export const POSTS: Post[] = [
  {
    slug: 'miksi-meta-facebook-mainokset-eivat-tuota',
    title: 'Miksi Meta (Facebook) mainokset eivät tuota mitään?',
    cats: ['Meta-mainonta'],
    date: '7.5.2026',
    read: 8,
    grad: 'grad-5',
    showOnBlog: true,
    image: '/blog/miksi-meta-facebook-mainokset-eivat-tuota.png',
    excerpt: 'Meta-mainokset kuluttavat budjetin mutta eivät tuo asiakkaita? Tässä 8 yleisintä syytä — ja miten korjaat ne nopeasti.',
    content: `
      <p>Meta-mainonta — eli mainonta Facebookissa ja Instagramissa — on yksi tehokkaimmista tavoista tavoittaa asiakkaita. Teoriassa. Käytännössä tuhannet suomalaiset yrittäjät käyttävät satoja tai tuhansia euroja Meta-mainontaan joka kuukausi ilman merkittäviä tuloksia. Rahat katoavat, klikkauksia tulee vähän, ja asiakkaita ei näy.</p>
      <p>Ongelma ei ole Meta-alusta itsessään. Ongelma on lähes aina jokin — tai useampi — seuraavista kahdeksasta syystä.</p>
      <blockquote><p>Meta-mainokset eivät tuota tuloksia yleensä siksi, että kohdeyleisö on väärä, luova sisältö ei pysäytä katselijan huomiota, tai kampanjan tavoite ei vastaa haluttua toimintaa. Lisäksi liian pieni budjetti, puutteellinen seuranta ja testauksen puute ovat yleisiä syitä heikkoihin tuloksiin.</p></blockquote>

      <h2>1. Kohdeyleisö on liian laaja — tai täysin väärä</h2>
      <p>Yleisin virhe Meta-mainonnassa on se, että mainokset näytetään liian laajalle joukolle. "Kaikki 18–65-vuotiaat Suomessa" ei ole kohdeyleisö — se on hukkaan heitettyä budjettia.</p>
      <p>Meta tarjoaa erittäin tarkan kohdentamisen: ikä, sukupuoli, sijainti, kiinnostuksen kohteet, käyttäytyminen, elämäntilanteet. Suomalaiselle pk-yritykselle tämä tarkoittaa käytännössä sitä, että ravintolan mainoksen pitäisi tavoittaa ihmiset 3–5 kilometrin säteellä, tiettynä viikonpäivänä, tietyssä ikäryhmässä — ei koko Suomea.</p>
      <p>Toinen yleinen virhe on täysin väärä yleisö. Hyvinvointialan yritys, jonka pääasialliset asiakkaat ovat 45–65-vuotiaita naisia, ei saa tuloksia näyttämällä mainoksia 20–30-vuotiaille miehille — vaikka kohdentaminen olisi teknisesti oikein.</p>
      <p><strong>Ratkaisu:</strong> Tutki olemassa olevia asiakkaitasi. Mihin ikäryhmään he kuuluvat? Missä he asuvat? Millaisista asioista he ovat kiinnostuneita? Rakenna kohdeyleisö heidän profiilinsa pohjalta — ei arvauksen pohjalta.</p>

      <h2>2. Mainos ei pysäytä — visuaalisuus on liian heikko</h2>
      <p>Facebookin ja Instagramin syöte on täynnä sisältöä. Käyttäjä selaa vauhdilla eteenpäin, ja mainoksella on kirjaimellisesti alle sekunti aikaa herättää huomio ennen kuin se on jo ohi.</p>
      <p>Silti suurin osa suomalaisista pk-yrityksen mainoksista käyttää tuotekuvia valkoisella taustalla, kankeita logoilla varustettuja mainospohjia, stockkuvia joita kaikki muutkin käyttävät, tai kuvia joissa ei tapahdu mitään — ei ihmisiä, ei tunnetta, ei kontekstia. Nämä mainokset eivät pysäytä ketään. Algoritmi tulkitsee heikon sitoutumisen merkiksi siitä, ettei mainosta kannata näyttää — ja kustannus per klikkaus nousee.</p>
      <p><strong>Ratkaisu:</strong> Ensimmäinen sekunti ratkaisee. Mainoksen kuvan tai videon täytyy herättää kysymys, tunne tai uteliaisuus ennen kuin katsoja ehtii jatkaa eteenpäin. Oikeat ihmiset käyttämässä tuotetta tai palvelua toimivat lähes aina paremmin kuin tuotekuvat.</p>

      <h2>3. Mainosteksti puhuu tuotteesta — ei asiakkaasta</h2>
      <p>Toinen yleinen ongelma on mainosteksti, joka kertoo yrityksen ominaisuuksista sen sijaan, että se vastaisi asiakkaan kysymykseen: "Mitä tästä on minulle hyötyä?"</p>
      <p>Ominaisuuslähtöinen teksti kuulostaa tältä: <em>"Meillä on 20 vuoden kokemus, laadukkaat tuotteet ja erinomainen asiakaspalvelu."</em></p>
      <p>Hyötylähtöinen teksti kuulostaa tältä: <em>"Polvi kipeä jo kolme kuukautta? Kuukauden säännöllisen käytön jälkeen 89 % käyttäjistämme raportoi merkittävästä kivun vähenemisestä."</em></p>
      <p>Jälkimmäinen vastaa suoraan asiakkaan kipupisteeseen ja tarjoaa konkreettisen lupauksen. Ensimmäinen on sama kuin mitä jokainen kilpailija sanoo.</p>
      <p><strong>Ratkaisu:</strong> Kirjoita mainosteksti asiakkaan näkökulmasta. Mikä on heidän ongelma? Miten tuotteesi tai palvelusi ratkaisee sen? Mitä konkreettista parannusta he voivat odottaa?</p>

      <h2>4. Kampanjan tavoite ei vastaa haluttua toimintaa</h2>
      <p>Meta tarjoaa erilaisia kampanjatavoitteita: tunnettuus, tavoittavuus, liikenne, sitoutuminen, liidien generointi, konversiot. Väärän tavoitteen valinta on yksi yleisimmistä — ja kalleimmista — virheistä.</p>
      <p>Esimerkki: jos tavoitteena on saada asiakkaita varaamaan pöytä ravintolaan, mutta kampanjatavoitteeksi on valittu "tavoittavuus", Meta optimoi mainoksen näyttämään mahdollisimman monelle ihmiselle — ei niille, jotka todennäköisimmin varaavat pöydän. Konversiotavoitteella optimoitu kampanja puolestaan opettaa Meta-algoritmia löytämään ne ihmiset, jotka todennäköisimmin tekevät halutun toiminnon.</p>
      <p><strong>Ratkaisu:</strong> Valitse kampanjatavoite sen perusteella, mitä haluat asiakkaan tekevän — ei sen perusteella, mikä tuntuu hyvältä. Jos tavoite on myynti tai yhteydenotto, käytä konversio- tai liidikampanjaa.</p>

      <h2>5. Budjetti on liian pieni tai jakautuu väärin</h2>
      <p>Meta-mainonnan oppimisalgoritmi tarvitsee dataa toimiakseen tehokkaasti. Algoritmi oppii optimoimaan mainosta sitä mukaa kun se kerää tietoa: ketkä klikkaavat, ketkä konvertoivat, ketkä jäävät sivulle.</p>
      <p>Tämä tarkoittaa, että liian pienellä budjetilla algoritmi ei koskaan pääse oppimisfaasin yli. Meta kertoo itse käyttöliittymässään, kun kampanja on "oppimisfaasissa" — ja tässä tilassa tulokset ovat lähes aina heikkoja. Suuntaa-antavasti: yhdelle mainosjoukolle tarvitaan vähintään 50 konversiota viikossa, jotta algoritmi oppii tehokkaasti.</p>
      <p><strong>Ratkaisu:</strong> Aloita riittävällä budjetilla — mieluummin yhdellä hyvin kohdennetulla mainosjoukolla kuin kymmenellä pienellä. Testaa, opi, kasvata sitä mikä toimii.</p>

      <h2>6. Mainoksia ei testata eikä optimoida</h2>
      <p>Meta-mainonta ei ole "aseta ja unohda" -kanava. Mainos, joka toimii tänään, ei välttämättä toimi kolmen viikon päästä — koska yleisö kyllästyy, kilpailutilanne muuttuu ja algoritmi kehittyy.</p>
      <p>Silti monet yritykset luovat yhden mainoksen, käynnistävät sen, ja ihmettelevät miksi tulokset laskevat viikon tai kahden päästä. Vastaus on yksinkertainen: mainoksen taajuus nousee, sitoutuminen laskee, ja kustannukset nousevat.</p>
      <p>Hyvä Meta-mainonta perustuu jatkuvaan testaamiseen: eri kuvia ja videoita, eri otsikkoja ja mainostekstejä, eri kohdeyleisöjä — ja voittavat mainokset vaihdetaan uusiin ennen kuin ne kyllästyttävät yleisön.</p>
      <p><strong>Ratkaisu:</strong> Luo vähintään 3–5 erilaista mainosvarianttia jokaista kampanjaa kohden. Seuraa dataa viikoittain ja vaihda heikosti suoriutuvat versiot uusiin.</p>

      <h2>7. Meta-pikseli puuttuu tai on asennettu väärin</h2>
      <p>Meta-pikseli on pieni koodinpätkä, joka asennetaan verkkosivulle ja seuraa kävijöiden toimintaa. Se on koko Meta-mainonnan seurannan perusta — ilman sitä Meta ei tiedä, ketkä mainoksen nähneistä oikeasti ostivat tai ottivat yhteyttä.</p>
      <p>Ilman pikseliä et voi optimoida konversioihin, et voi luoda remarketing-yleisöjä (ihmiset jotka vierailivat sivullasi), et voi luoda lookalike-yleisöjä, eikä sinulla ole tietoa tuottavatko mainoksesi oikeasti tuloksia.</p>
      <p>Vuonna 2021 käyttöön otettu iOS 14.5 -päivitys heikensi pikselin seurantakykyä merkittävästi, joten myös Conversions API (CAPI) on tullut välttämättömäksi — se lähettää konversiotiedot suoraan palvelimelta Metalle, ohittaen selainrajoitukset.</p>
      <p><strong>Ratkaisu:</strong> Varmista, että Meta-pikseli on asennettu oikein ja aktivoi Conversions API. WordPressissä tämä onnistuu esimerkiksi WP-mainonnan seurantapluginien avulla.</p>

      <h2>8. Laskeutumissivu ei jatka mainoksen lupausta</h2>
      <p>Mainos saa ihmisen klikkaamaan. Mutta mitä tapahtuu sen jälkeen? Jos mainoksessa luvataan yksi asia ja laskeutumissivu kertoo täysin toista — tai jos sivu on hidas, sekava tai mobiilille soveltumaton — konversio jää syntymättä.</p>
      <p>Tätä kutsutaan viestien vastaavuudeksi (message match). Mainoksen otsikon, kuvan ja lupauksen pitää jatkua saumattomasti laskeutumissivulle. Jos mainos lupaa "Ilmainen kokeilu — ensimmäinen kuukausi veloituksetta", laskeutumissivun ensimmäisen otsikon pitäisi toistaa sama lupaus — ei olla yrityksen yleinen etusivu.</p>
      <p><strong>Ratkaisu:</strong> Luo kampanjakohtaiset laskeutumissivut jokaiselle merkittävälle mainoskampanjalle. Tarkista sivun latausnopeus (yli 3 sekuntia = menetetty asiakas) ja mobiilioptimointi.</p>

      <h2>Yhteenveto: Miksi Meta-mainokset eivät toimi?</h2>
      <p>Meta-mainonta on tehokas työkalu — mutta vain jos kaikki palaset ovat kohdillaan samanaikaisesti. Yleisimmät syyt heikkoihin tuloksiin ovat:</p>
      <ol>
        <li>Väärä tai liian laaja kohdeyleisö</li>
        <li>Visuaalisesti heikko luova sisältö, joka ei pysäytä</li>
        <li>Ominaisuuslähtöinen teksti asiakaslähtöisen sijaan</li>
        <li>Väärä kampanjatavoite</li>
        <li>Liian pieni budjetti tai väärä jakautuminen</li>
        <li>Ei testausta eikä jatkuvaa optimointia</li>
        <li>Meta-pikseli puuttuu tai on virheellisesti asennettu</li>
        <li>Laskeutumissivu ei jatka mainoksen lupausta</li>
      </ol>
      <p>Hyvä uutinen on se, että jokainen näistä ongelmista on korjattavissa. Huono uutinen on se, että kaikkien korjaaminen samanaikaisesti vaatii aikaa, osaamista ja jatkuvaa seurantaa — kolmea asiaa, joita useimmilla yrittäjillä ei yksinkertaisesti ole.</p>

      <h2>Usein kysytyt kysymykset</h2>
      <h3>Kuinka paljon Meta-mainontaan pitää käyttää rahaa, jotta se toimii?</h3>
      <p>Minimaalinen toimiva budjetti riippuu toimialasta ja tavoitteesta, mutta suuntaa-antavasti suomalaisen pk-yrityksen kannattaa aloittaa vähintään 300–500 euron kuukausibudjetilla yhdelle kampanjalle. Tätä pienemmällä Meta-algoritmi ei kerää riittävästi dataa optimoidakseen kampanjaa tehokkaasti.</p>
      <h3>Kuinka kauan kestää ennen kuin Meta-mainokset alkavat tuottaa tuloksia?</h3>
      <p>Useimmat kampanjat käyvät läpi oppimisfaasin, joka kestää tyypillisesti 7–14 päivää. Merkittävien tulosten näkemiseen menee yleensä 4–8 viikkoa, jolloin algoritmilla on riittävästi dataa tehokkaan optimoinnin tueksi.</p>
      <h3>Mikä on parempi mainontaan — Facebook vai Instagram?</h3>
      <p>Facebook ja Instagram toimivat saman Meta-alustan kautta, joten useimmiten kannattaa mainostaa molemmissa samanaikaisesti ja antaa algoritmin optimoida kummassa mainokset toimivat paremmin. Instagram toimii paremmin visuaalisilla toimialoilla ja nuoremmalle yleisölle, kun taas Facebook tavoittaa laajemman ikähaarukan.</p>
      <h3>Onko Meta-mainonta kalliimpaa kuin Google-mainonta?</h3>
      <p>Meta-mainonta on tyypillisesti edullisempaa klikkauskustannukseltaan kuin Google Ads, mutta vertailu ei ole suoraviivainen — kanavat toimivat eri tavoin. Google tavoittaa ihmisen juuri silloin kun hän hakee tuotettasi. Meta puolestaan keskeyttää ihmisen muun tekemisen. Parhaissa tapauksissa molemmat kanavat tukevat toisiaan.</p>
      <h3>Miksi Meta-mainokset saavat paljon klikkauksia mutta ei ostoksia?</h3>
      <p>Klikkauksia ilman ostoksia johtuu useimmiten kolmesta syystä: (1) kohdeyleisö on väärä ja houkuttelee uteliaisuuteen muttei ostoaikeisiin, (2) laskeutumissivu ei jatka mainoksen lupausta tai on teknisesti puutteellinen, tai (3) tarjous ei ole riittävän houkutteleva tai selkeä.</p>
      <h3>Toimiiko Meta-mainonta B2B-yrityksille?</h3>
      <p>Meta-mainonta toimii B2B-yrityksille, mutta tehokkuus vaihtelee toimialan mukaan. Parhaiten se soveltuu paikallisille B2B-palveluille kuten rakennusala, siivous ja tilitoimistot. Korkeakatteisissa tai monimutkaisten päätösprosessien B2B-myynneissä LinkedIn-mainonta on usein tehokkaampi vaihtoehto.</p>
    `
  },
  ...batch1,
  ...batch2,
  ...batch3,
  ...batch4,
  ...batch5,
  ...batch6,
]

export function getAllPosts(): Post[] {
  return POSTS
}

/** Posts shown on the /blog index page (opt-in via showOnBlog). */
export function getListedPosts(): Post[] {
  return POSTS.filter(p => p.showOnBlog === true)
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find(p => p.slug === slug)
}
