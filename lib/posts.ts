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
}

export const POSTS: Post[] = [
  {
    slug: 'miksi-meta-facebook-mainokset-eivat-tuota',
    title: 'Miksi Meta (Facebook) mainokset eivät tuota mitään?',
    cats: ['Meta-mainonta'],
    date: '7.5.2026',
    read: 8,
    grad: 'grad-5',
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
