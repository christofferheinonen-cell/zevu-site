import type { Post } from '@/lib/posts'

export const batch5: Post[] = [
  {
    slug: 'meta-mainonta-cookieless-tracking',
    title: 'Meta-mainonta ilman cookies — mitä cookieless tracking tarkoittaa käytännössä',
    cats: ['Meta-pikseli'],
    date: '25.7.2026',
    publishedTime: '2026-07-25T09:50:00+03:00',
    read: 8,
    grad: 'grad-1',
    excerpt: 'Evästeet katoavat vähitellen. Mitä se tarkoittaa Meta-mainonnan seurannalle? Käytännön selitys ilman teknistä jargonia.',
    content: `
      <p>Evästeisiin perustuva seuranta murenee, ja se vaikuttaa suoraan siihen, mitä Meta-mainonnan tuloksista näet. Selaimet estävät kolmannen osapuolen evästeitä, Apple kysyy iPhone-käyttäjältä luvan seurantaan, ja moni napsauttaa "älä seuraa". Lopputulos: osa asiakkaistasi ostaa tai jättää yhteydenoton, mutta Meta ei näe sitä. Raportissa näyttää siltä, että mainos tuotti vähemmän kuin se oikeasti tuotti.</p>
      <p>Tässä mitä cookieless tracking eli evästeetön seuranta tarkoittaa pienelle suomalaiselle yritykselle, ja mitä sinun kannattaa tehdä.</p>

      <h2>Mihin evästeitä alun perin tarvittiin</h2>
      <p>Eväste on pieni tiedosto, jonka sivusto tallentaa selaimeen. Meta-mainonnassa eväste muisti, että sama ihminen klikkasi mainosta, palasi sivulle myöhemmin ja osti. Tämä yhteys mainoksen ja oston välillä on koko mittaamisen pohja. Ilman sitä Meta ei tiedä, mikä mainos tuotti kaupan, eikä se osaa etsiä lisää samankaltaisia ostajia.</p>
      <p>Kun selaimet alkoivat rajoittaa evästeitä ja Apple antoi käyttäjälle mahdollisuuden kieltää seuranta sovelluksissa, tuo ketju katkesi monelta kävijältä. Verkkokauppias näkee tämän konkreettisesti: kassalla tilauksia syntyy enemmän kuin Meta raportoi tulleen mainoksista. Esimerkiksi kosmetiikkaa myyvä verkkokauppa saattaa tehdä viikossa neljäkymmentä tilausta, mutta Meta laskee mainoksen ansioksi vain kolmekymmentä. Erotus ei ole virhe kassalla, vaan kadonnutta seurantatietoa.</p>

      <h2>Mitä cookieless tracking tarkoittaa käytännössä</h2>
      <p>Evästeetön seuranta tarkoittaa, että mainoksen ja tuloksen yhdistäminen ei enää nojaa pelkkään selaimen evästeeseen. Tieto liikkuu osittain muuta reittiä, ja osa tuloksista lasketaan arvioiden pohjalta. Sinulle tämä näkyy kahdella tavalla.</p>
      <p>Ensinnäkin raportit ovat epätarkempia kuin ennen. Konversioluvut perustuvat osittain mallinnukseen eli Metan arvioon siitä, montako kauppaa todennäköisesti syntyi, vaikka kaikkia ei voitu suoraan mitata. Toiseksi seuranta on osin siirtynyt selaimesta palvelimelle, mikä on käytännössä luotettavampi tapa lähettää tieto Metalle. Selaimessa moni asia katkaisee tiedonkulun: mainosesto, yksityinen selaustila, evästekiellot. Palvelimelta lähtevä tieto kulkee näistä huolimatta.</p>

      <h2>Conversions API on tärkein yksittäinen korjaus</h2>
      <p>Conversions API tarkoittaa, että ostosta tai yhteydenotosta kertova tieto lähtee suoraan verkkosivusi palvelimelta Metalle, ei selaimen kautta. Selainpohjainen seuranta voidaan estää tai tyhjentää, mutta palvelimelta lähtevää tietoa estetään huomattavasti harvemmin. Siksi Conversions API palauttaa osan kadonneista tuloksista raporttiisi.</p>
      <p><strong>Ratkaisu:</strong> jos sinulla on verkkokauppa Shopifyssa tai WooCommercessa, Conversions API saadaan yleensä päälle valmiilla liitännällä tai virallisella integraatiolla muutamassa minuutissa. Tavoite on, että jokainen ostos lähtee Metalle sekä selaimesta että palvelimelta. Meta tunnistaa saman tapahtuman molemmista lähteistä eikä laske sitä kahdesti. Tätä kutsutaan kaksoislähetykseksi, ja se on tarkoitettu juuri tähän: kun selainpuoli pettää, palvelinpuoli paikkaa.</p>
      <p>Yleinen virhe on luulla, että Conversions API korvaa pikselin. Se ei korvaa, vaan täydentää. Pidä pikseli paikoillaan ja lisää palvelinpuolen seuranta sen rinnalle. Kun molemmat ovat käytössä, Meta saa täydellisemmän kuvan ja osaa kohdentaa mainontaa paremmin.</p>

      <h2>Mitä paikallinen palveluyritys voi tehdä</h2>
      <p>Jos myyt palveluita etkä tuotteita verkossa, esimerkiksi remonttiyritys tai kauneushoitola, sinun kannattaa määritellä selkeä mitattava tapahtuma. Se voi olla varauslomakkeen lähetys, soittopyyntö tai ajanvarauksen vahvistus. Kun tämä yksi tapahtuma seurataan kunnolla, mainonnan optimointi paranee, vaikka evästeet rajoittuisivat.</p>
      <p>Älä yritä mitata kaikkea. Yksi luotettava tapahtuma, joka kertoo oikeasta liiketoiminnasta, on parempi kuin kymmenen epävarmaa. Kauneushoitola, joka mittaa pelkän ajanvarauksen vahvistuksen, saa puhtaampaa dataa kuin se, joka yrittää seurata jokaista napsautusta ja sivulatausta erikseen. Jälkimmäisessä luvut ovat sekavia ja optimointi osuu väärään asiaan.</p>

      <h2>Älä tulkitse lukuja liian kirjaimellisesti</h2>
      <p>Koska osa tuloksista on nykyään arvioita, älä takerru yksittäisen päivän tarkkaan lukuun. Katso suuntaa pidemmällä jaksolla. Jos myyntisi kasvaa silloin kun mainonta on päällä ja laskee kun se on pois, mainonta toimii, vaikka Metan raportti ei näyttäisi jokaista kauppaa erikseen. Vertaa Metan lukuja oman kassasi tai varausjärjestelmäsi todellisiin lukuihin.</p>
      <p>Käytännön nyrkkisääntö: jos kassasi näyttää enemmän kauppaa kuin Meta raportoi, älä huolestu. Niin pitää ollakin nykyään. Huolestu vasta, jos Meta näyttää enemmän kauppoja kuin kassasi, koska silloin jossain on virhe, esimerkiksi tapahtuma laukeaa väärässä kohdassa.</p>

      <h2>Usein kysytyt kysymykset</h2>
      <h3>Toimiiko Meta-pikseli vielä lainkaan?</h3>
      <p>Toimii, mutta se ei enää tavoita kaikkia kävijöitä. Pikseli kannattaa pitää asennettuna ja täydentää sitä Conversions APIlla, jolloin tieto kulkee sekä selaimesta että palvelimelta ja kokonaiskuva on tarkempi.</p>
      <h3>Tarvitsenko teknisen osaajan ottaakseni Conversions APIn käyttöön?</h3>
      <p>Useimmiten et. Suosituilla alustoilla kuten Shopify ja WooCommerce se onnistuu valmiilla liitännällä. Mukautetulla sivustolla kannattaa pyytää kehittäjältä apua, mutta työ on yleensä pieni.</p>
      <h3>Vääristääkö evästeetön seuranta tuloksiani paljon?</h3>
      <p>Ilman palvelinpuolen seurantaa osa konversioista jää näkymättä, ja todellinen tulos on parempi kuin raportti näyttää. Kun Conversions API on käytössä, ero kapenee selvästi.</p>
      <h3>Pitääkö minun pyytää käyttäjältä lupa seurantaan?</h3>
      <p>Jos sivustosi kerää dataa suomalaisilta kävijöiltä, tarvitset evästesuostumuksen ja sen pitää oikeasti ohjata seurantaa. Tee suostumuskysely selkeäksi, sillä mitä useampi hyväksyy seurannan, sitä tarkempaa mittaaminen on.</p>
      <h3>Pitääkö minun ymmärtää tekniikkaa, jotta voin mainostaa?</h3>
      <p>Et tarvitse syvällistä teknistä osaamista. Riittää, että pikseli ja palvelinpuolen seuranta on kerran asennettu kuntoon ja että luet tuloksia oikeassa mittakaavassa. Itse mainostamiseen riittää, että ymmärrät mitä luvut karkeasti kertovat.</p>

      <hr />
      <h2>Haluatko parempia tuloksia Meta-mainonnalla?</h2>
      <p>Pyydä ilmainen mainosanalyysi — kerromme mitä tehdä toisin.</p>
      <p><a href="https://www.zevu.cc/#cta">Pyydä analyysi →</a></p>
    `,
  },
  {
    slug: 'meta-pixelin-asennusvirheet',
    title: 'Meta Pixelin asennusvirheet — yleisimmät ongelmat ja miten korjaat ne',
    cats: ['Meta-pikseli'],
    date: '26.7.2026',
    publishedTime: '2026-07-26T07:26:00+03:00',
    read: 7,
    grad: 'grad-2',
    excerpt: 'Meta Pixel asennettu mutta ei toimi oikein? Tässä yleisimmät asennusvirheet ja ohjeet miten korjaat ne.',
    content: `
      <p>Pikseli on asennettu, mutta luvut näyttävät oudoilta tai mainonnan optimointi ei toimi. Tämä on yleisempää kuin luulisi. Pikseli voi olla teknisesti sivulla, mutta lähettää väärää tietoa, kahdenkertaista tietoa tai ei mitään tietoa sieltä missä se merkitsee. Tässä yleisimmät asennusvirheet ja miten korjaat ne ilman kehittäjää.</p>

      <h2>1. Pikseli on vain etusivulla, ei kaikilla sivuilla</h2>
      <p>Yleisin virhe on, että pikselikoodi lisättiin vain etusivulle tai yhdelle sivulle. Silloin Meta näkee, että ihminen kävi etusivulla, mutta ei näe kassaa, kiitos-sivua eikä varauksen vahvistusta. Juuri ne tärkeimmät tapahtumat jäävät pimentoon.</p>
      <p><strong>Ratkaisu:</strong> pikselin peruskoodin pitää olla jokaisella sivulla. WordPressissä virallinen liitännäinen hoitaa tämän automaattisesti koko sivustolle. Tarkista, ettei koodia ole liimattu käsin vain yhteen sivupohjaan. Yleinen kompastuskivi on verkkokauppa, jonka kassa on eri alasivustolla tai eri järjestelmässä kuin muu sivusto. Silloin pikseli pitää lisätä erikseen myös kassan puolelle.</p>

      <h2>2. Sama tapahtuma lasketaan kahdesti</h2>
      <p>Jos asensit pikselin sekä liitännäisellä että käsin koodiin, sama osto saattaa kirjautua kahteen kertaan. Raportti näyttää tuplasti konversioita, ja optimointi perustuu väärään dataan. Sama tapahtuu, jos kiitos-sivu latautuu kahdesti tai käyttäjä päivittää sen.</p>
      <p><strong>Ratkaisu:</strong> valitse yksi asennustapa, joko liitännäinen tai käsin lisätty koodi, ei molempia. Tarkista Events Manager -työkalusta, näkyykö sama tapahtuma epäilyttävän monta kertaa. Jos esimerkiksi verkkokauppasi näyttää kaksinkertaisen määrän ostoja todelliseen verrattuna, tämä on lähes aina syy. Poista toinen asennustapa ja seuraa lukuja muutama päivä.</p>

      <h2>3. Ostotapahtuma laukeaa väärässä kohdassa</h2>
      <p>Osto pitää kirjata vasta kun kauppa on oikeasti tehty, eli kiitos-sivulla tai maksun vahvistuksessa. Jos Purchase-tapahtuma laukeaa jo silloin kun tuote lisätään ostoskoriin, Meta luulee jokaista korilisäystä ostoksi. Tulos näyttää loistavalta, mutta on täysin harhaanjohtava.</p>
      <p><strong>Ratkaisu:</strong> varmista, että osto kirjautuu vain onnistuneen maksun jälkeen. Korilisäys on oma tapahtumansa, AddToCart, ei Purchase. Sama logiikka koskee palveluyritystä: ajanvarauksen pitää kirjautua vasta kun varaus on vahvistettu, ei silloin kun ihminen avaa varauslomakkeen.</p>

      <h2>4. Pikseli on asennettu, mutta tapahtumia ei ole määritelty</h2>
      <p>Pelkkä pikselin peruskoodi kertoo Metalle vain, että joku kävi sivulla. Se ei kerro ostiko, varasiko tai jättikö yhteystiedot. Ilman näitä tapahtumia et voi optimoida mainontaa konversioihin, mikä on koko pikselin tärkein hyöty.</p>
      <p><strong>Ratkaisu:</strong> määrittele vähintään yksi liiketoiminnan kannalta tärkeä tapahtuma. Verkkokaupalle se on osto, palveluyritykselle yhteydenotto tai varaus. Kauneushoitola, joka mittaa pelkkää sivun katselua, ei saa mainonnastaan irti läheskään niin paljon kuin se, joka mittaa toteutuneen ajanvarauksen.</p>

      <h2>5. Pikseli on yhdistetty väärään mainostiliin</h2>
      <p>Jos sinulla on useampi mainostili tai vaihdoit tiliä, pikseli saattaa lähettää dataa väärään paikkaan. Silloin kampanjasi ei näe konversioita, vaikka pikseli toimisi täydellisesti.</p>
      <p><strong>Ratkaisu:</strong> tarkista Business Managerista, että pikseli on liitetty siihen mainostiliin, jolla mainostat. Tämä on nopea tarkistus, joka korjaa yllättävän monen ongelman. Erityisen yleinen tilanne on, että aiempi kumppani tai toimisto loi pikselin omalle tililleen, ja se jäi sinne kun otit mainonnan omiin käsiisi.</p>

      <h2>Näin tarkistat onko pikseli kunnossa</h2>
      <p>Asenna selaimeesi Metan ilmainen Meta Pixel Helper. Avaa oma sivustosi ja katso, näyttääkö työkalu vihreää. Klikkaa sitten itsesi läpi tärkeimmän polun, esimerkiksi tuotteesta ostoon tai lomakkeen lähetykseen, ja tarkista, että oikeat tapahtumat laukeavat oikeissa kohdissa. Events Managerissa näet samat tapahtumat muutaman minuutin viiveellä.</p>
      <p>Tee tämä tarkistus aina, kun teet muutoksia sivustolle: vaihdat teemaa, päivität kassaa tai asennat uuden liitännäisen. Yllättävän usein juuri sivuston päivitys katkaisee pikselin huomaamatta, ja virhe huomataan vasta kun mainonnan tulokset romahtavat viikkoja myöhemmin.</p>

      <h2>Usein kysytyt kysymykset</h2>
      <h3>Mistä tiedän laukeaako ostotapahtuma oikein?</h3>
      <p>Tee testitilaus tai mene kiitos-sivulle ja katso Pixel Helperistä, näkyykö Purchase juuri siellä eikä aiemmin. Jos se näkyy jo tuotesivulla tai korissa, asetus on väärä.</p>
      <h3>Pitääkö pikselin näkyä myös kiitos-sivulla?</h3>
      <p>Kyllä, ja se on tärkein sivu. Juuri kiitos-sivulla osto vahvistuu, joten ilman pikseliä siellä konversiot jäävät kirjaamatta.</p>
      <h3>Korjaako liitännäisen uudelleenasennus useimmat ongelmat?</h3>
      <p>Usein kyllä, jos ongelma johtui käsin lisätyn ja liitännäisen päällekkäisyydestä. Poista toinen ja anna yhden tavan hoitaa asennus.</p>
      <h3>Miksi näen tapahtumia, joita en ole koskaan määritellyt?</h3>
      <p>Meta tunnistaa joitakin tapahtumia automaattisesti sivun toiminnasta. Se ei haittaa, mutta varmista, että itse määritellyt tärkeät tapahtumat ovat silti paikoillaan.</p>
      <h3>Pitääkö pikseli tarkistaa säännöllisesti?</h3>
      <p>Kyllä. Tarkista se aina sivuston päivitysten jälkeen ja muutenkin kerran kuussa. Pikseli voi rikkoutua huomaamatta, ja virheen huomaaminen ajoissa säästää koko mainosbudjetin.</p>

      <hr />
      <h2>Haluatko parempia tuloksia Meta-mainonnalla?</h2>
      <p>Pyydä ilmainen mainosanalyysi — kerromme mitä tehdä toisin.</p>
      <p><a href="https://www.zevu.cc/#cta">Pyydä analyysi →</a></p>
    `,
  },
  {
    slug: 'meta-custom-conversions-vs-standard-events',
    title: 'Meta Custom Conversions vs. Standard Events — kumpi kannattaa valita',
    cats: ['Meta-pikseli'],
    date: '27.7.2026',
    publishedTime: '2026-07-27T09:46:00+03:00',
    read: 4,
    grad: 'grad-3',
    excerpt: 'Meta tarjoaa kaksi tapaa seurata konversioita: Standard Events ja Custom Conversions. Selitämme eron ja kerromme kumpi sopii sinulle.',
    content: `
      <p>Meta tarjoaa kaksi tapaa kertoa, mikä lasketaan tulokseksi: Standard Events ja Custom Conversions. Ne kuulostavat teknisiltä, mutta ero on yksinkertainen ja valinta on helppo, kun ymmärrät kumpi sopii tilanteeseesi.</p>

      <h2>Standard Events: valmiit vakiotapahtumat</h2>
      <p>Standard Events ovat Metan valmiiksi nimeämiä tapahtumia, kuten osto, korilisäys, yhteystietojen jättäminen tai sisällön katselu. Ne on koodattu sivustolle, ja Meta tunnistaa ne suoraan. Verkkokaupan alustoilla kuten Shopify ja WooCommerce nämä tulevat yleensä valmiina, kun yhdistät kaupan Metaan.</p>
      <p>Standard Events ovat luotettavin valinta optimointiin. Meta ymmärtää tarkalleen mitä osto tarkoittaa ja osaa etsiä lisää ostajia. Jos pyörität verkkokauppaa, käytä näitä. Etuna on myös se, että osto voi sisältää tiedon ostoksen arvosta, jolloin Meta osaa etsiä nimenomaan isoja ostoksia tekeviä asiakkaita eikä vain ketä tahansa ostajia.</p>

      <h2>Custom Conversions: oma sääntö osoitteen perusteella</h2>
      <p>Custom Conversions perustuu siihen, mille sivulle käyttäjä päätyy. Määrittelet säännön, esimerkiksi että jokainen kiitos-sivun osoitteeseen päätyvä kävijä lasketaan liidiksi. Et tarvitse erillistä koodia, vaan luot säännön Metan käyttöliittymässä. Tämä on kätevää, kun sinulla ei ole pääsyä sivuston koodiin tai kun haluat seurata jotain hyvin tiettyä, kuten yhden palvelun varauksen.</p>
      <p>Esimerkki: kauneushoitola, jonka varausjärjestelmä ohjaa onnistuneen varauksen jälkeen tiettyyn osoitteeseen, voi luoda Custom Conversionin tuon osoitteen perusteella ilman koodimuutoksia. Sama toimii remonttiyritykselle, jonka tarjouspyyntölomake ohjaa omaan kiitos-osoitteeseensa. Yksi haittapuoli on, että jos sivun osoite muuttuu, sääntö lakkaa toimimasta ja se pitää muistaa päivittää.</p>

      <h2>Kumpi kannattaa valita</h2>
      <p>Jos käytät verkkokauppa-alustaa, jossa Standard Events tulevat valmiina, käytä niitä. Ne ovat tarkkoja ja Meta optimoi niillä parhaiten. Jos sivustosi ei lähetä valmiita tapahtumia ja sinulla on selkeä kiitos-sivu omalla osoitteella, Custom Conversions on nopein tapa saada seuranta kuntoon ilman kehittäjää.</p>
      <p>Monella toimii molempien yhdistelmä: Standard Events kuvaa mitä tapahtui, Custom Conversion tarkentaa seurannan tiettyyn palveluun tai kampanjaan. Älä silti monimutkaista turhaan. Yksi luotettava tapahtuma riittää aloittamiseen.</p>

      <h2>Usein kysytyt kysymykset</h2>
      <h3>Voinko optimoida mainontaa molemmilla?</h3>
      <p>Kyllä. Voit valita kampanjan optimointitapahtumaksi joko Standard Eventin tai Custom Conversionin. Tärkeintä on, että valitsemasi tapahtuma kuvaa oikeaa liiketoiminnan tulosta.</p>
      <h3>Tarvitsenko koodiosaamista Custom Conversioniin?</h3>
      <p>Et. Custom Conversion luodaan Metan käyttöliittymässä osoitteen perusteella, joten et tarvitse pääsyä sivuston koodiin.</p>
      <h3>Kumpi on tarkempi?</h3>
      <p>Standard Events on yleensä tarkempi, koska se lähetetään juuri silloin kun tapahtuma oikeasti toteutuu. Custom Conversion nojaa siihen, että käyttäjä päätyy tiettyyn osoitteeseen, mikä toimii hyvin selkeällä kiitos-sivulla.</p>
      <h3>Mitä tapahtuu, jos kiitos-sivun osoite muuttuu?</h3>
      <p>Osoitteeseen sidottu Custom Conversion lakkaa laskemasta konversioita. Päivitä sääntö heti, jos vaihdat sivun osoitetta, tai käytä Standard Eventia, joka ei riipu osoitteesta.</p>

      <hr />
      <h2>Haluatko parempia tuloksia Meta-mainonnalla?</h2>
      <p>Pyydä ilmainen mainosanalyysi — kerromme mitä tehdä toisin.</p>
      <p><a href="https://www.zevu.cc/#cta">Pyydä analyysi →</a></p>
    `,
  },
  {
    slug: 'meta-pixel-data-kohdentamisessa',
    title: 'Meta Pixel -data kohdentamisessa — näin käytät sitä tehokkaasti',
    cats: ['Meta-pikseli'],
    date: '28.7.2026',
    publishedTime: '2026-07-28T10:44:00+03:00',
    read: 7,
    grad: 'grad-4',
    excerpt: 'Meta Pixel kerää dataa — mutta harva käyttää sitä kohdentamiseen. Näin hyödynnät pikselin dataa paremman mainonnan rakentamiseen.',
    content: `
      <p>Pikseli kerää koko ajan tietoa siitä, ketkä käyvät sivustollasi ja mitä he tekevät. Useimmat asentavat pikselin vain mittaamista varten ja jättävät sen arvokkaimman hyödyn käyttämättä: tuon datan käyttämisen kohdentamiseen. Tässä miten teet sen.</p>

      <h2>Mitä pikselin data oikeasti on</h2>
      <p>Pikseli näkee, kuka kävi sivustolla, mitä sivuja hän katsoi, lisäsikö tuotteen koriin, osti tai jätti varauksen. Tämä lista ihmisistä on kullanarvoinen, koska he ovat jo osoittaneet kiinnostusta. Heille mainostaminen on lähes aina halvempaa ja tuottavampaa kuin täysin uusien ihmisten tavoittaminen kylmiltään. Ajattele eroa: kylmälle yleisölle pitää ensin selittää kuka olet, kun taas sivustolla käynyt tietää sen jo.</p>

      <h2>1. Uudelleenmarkkinointi sivuston kävijöille</h2>
      <p>Suurin osa kävijöistä ei osta tai ota yhteyttä ensimmäisellä käynnillä. Pikselin avulla voit näyttää mainoksia juuri näille ihmisille, jotka kävivät mutta eivät vielä toimineet. Verkkokauppa voi muistuttaa koriin jätetystä tuotteesta. Remonttiyritys voi näyttää referenssikuvia ihmisille, jotka katsoivat palvelusivua mutta eivät jättäneet tarjouspyyntöä.</p>
      <p>Tämä yleisö on lämmin. He tietävät jo kuka olet, joten viesti voi olla suorempi: muistutus, tarjous tai viimeinen sysäys päätökseen. Kauneushoitola voi esimerkiksi näyttää hinnastosivulla käyneille selkeän kehotuksen varata aika, koska he olivat jo lähellä päätöstä.</p>

      <h2>2. Samankaltaisten asiakkaiden löytäminen</h2>
      <p>Kun pikseli on kerännyt riittävästi ostajia tai liidejä, Meta osaa etsiä lisää samankaltaisia ihmisiä. Annat Metalle listan parhaista asiakkaistasi, ja se etsii uusia ihmisiä, jotka muistuttavat heitä käyttäytymiseltään. Tämä on usein tehokkain tapa löytää uusia asiakkaita, koska kohdennus perustuu oikeaan dataan, ei arvauksiin kiinnostuksen kohteista.</p>
      <p>Mitä parempaa dataa annat, sitä parempi tulos. Lista oikeista ostajista tuottaa parempia samankaltaisia yleisöjä kuin lista pelkistä sivuston kävijöistä. Verkkokaupan kannattaa rakentaa yleisö nimenomaan ostaneista, ei kaikista kävijöistä, jotta Meta oppii etsimään ihmisiä jotka oikeasti avaavat lompakkonsa eivätkä vain selaa.</p>

      <h2>3. Eri yleisöt eri viesteille</h2>
      <p>Pikselin datalla voit erottaa ihmiset sen mukaan, kuinka pitkällä he ovat. Joku katsoi vain etusivun, toinen lisäsi tuotteen koriin, kolmas osti jo aiemmin. Näille kannattaa puhua eri tavalla. Korin hylänneelle muistutus tuotteesta, aiemmalle ostajalle uutuus tai täydentävä tuote. Sama mainos kaikille on tehottomampi kuin viesti, joka osuu juuri oikeaan vaiheeseen.</p>
      <p>Verkkokauppa voi esimerkiksi näyttää kertaalleen ostaneelle täydentäviä tuotteita ja säästää uusasiakastarjoukset niille, jotka eivät ole vielä ostaneet. Näin et tuhlaa alennuksia ihmisiin, jotka olisivat ostaneet ilmankin.</p>

      <h2>Anna datan kertyä ennen kuin odotat tuloksia</h2>
      <p>Pikseli tarvitsee aikaa kerätäkseen riittävästi tietoa, ennen kuin yleisöt toimivat hyvin. Jos sivustollasi käy vähän kävijöitä, datan kertyminen kestää kauemmin. Pidä pikseli päällä ja kärsivällisenä. Mitä kauemmin se kerää, sitä paremmin kohdentaminen toimii. Pienen kävijämäärän sivustolla kannattaa keskittyä laajempiin yleisöihin, kunnes dataa on tarpeeksi tarkempaan kohdentamiseen.</p>
      <p>Yleinen virhe on asentaa pikseli vasta samalla kun aloittaa mainonnan. Parempi on asentaa se heti, jo ennen ensimmäistä kampanjaa, jolloin yleisöä on ehtinyt kertyä siihen mennessä kun aloitat. Pikseli kerää dataa taustalla maksutta, joten viivyttely on pelkkää menetettyä etua.</p>

      <h2>Usein kysytyt kysymykset</h2>
      <h3>Kuinka kauan pikselin pitää kerätä dataa ennen kuin se on hyödyllistä?</h3>
      <p>Uudelleenmarkkinointiin riittää jo pieni määrä kävijöitä, mutta samankaltaisten yleisöjen löytämiseen tarvitaan enemmän ostajia tai liidejä. Pidä pikseli päällä jatkuvasti, niin data kertyy taustalla.</p>
      <h3>Voinko käyttää pikselidataa, jos kävijöitä on vähän?</h3>
      <p>Voit, mutta pienellä kävijämäärällä tarkka kohdentaminen toimii heikommin. Tällöin kannattaa pitää yleisöt laajempina ja antaa datan kertyä rauhassa.</p>
      <h3>Onko uudelleenmarkkinointi tunkeilevaa asiakkaan mielestä?</h3>
      <p>Maltillisesti tehtynä ei. Ongelma syntyy vasta, jos sama mainos toistuu liian usein. Rajaa kuinka monta kertaa sama ihminen näkee mainoksen ja vaihda viestiä ajoittain.</p>
      <h3>Tarvitsenko verkkokaupan hyötyäkseni pikselidatasta?</h3>
      <p>Et. Myös palveluyritys hyötyy: voit kohdentaa mainoksia ihmisille, jotka kävivät palvelusivulla mutta eivät jättäneet yhteydenottoa.</p>
      <h3>Kannattaako pikseli asentaa jo ennen mainonnan aloittamista?</h3>
      <p>Ehdottomasti. Pikseli kerää dataa ilmaiseksi taustalla, joten mitä aiemmin asennat sen, sitä enemmän yleisöä on kasassa kun ensimmäinen kampanja lähtee käyntiin.</p>

      <hr />
      <h2>Haluatko parempia tuloksia Meta-mainonnalla?</h2>
      <p>Pyydä ilmainen mainosanalyysi — kerromme mitä tehdä toisin.</p>
      <p><a href="https://www.zevu.cc/#cta">Pyydä analyysi →</a></p>
    `,
  },
  {
    slug: 'meta-mainonnan-liidien-hankinta',
    title: 'Meta-mainonnan liidien hankinta — mitä se on ja kenelle se sopii',
    cats: ['Liidit'],
    date: '29.7.2026',
    publishedTime: '2026-07-29T09:00:00+03:00',
    read: 9,
    grad: 'grad-5',
    excerpt: 'Liidien hankinta Meta-mainonnalla tarkoittaa yhteydenottopyyntöjen keräämistä. Mutta kenelle se sopii ja milloin se kannattaa?',
    content: `
      <p>Kaikki Meta-mainonta ei tähtää suoraan ostokseen. Iso osa suomalaisista yrityksistä ei myy verkossa, vaan tarvitsee yhteydenoton: tarjouspyynnön, ajanvarauksen tai soittopyynnön. Tätä kutsutaan liidien hankinnaksi. Liidi on ihminen, joka on jättänyt yhteystietonsa ja ilmaissut kiinnostuksensa. Tässä mitä se tarkoittaa ja kenelle se oikeasti sopii.</p>

      <h2>Mitä liidien hankinta tarkoittaa käytännössä</h2>
      <p>Liidien hankinnassa mainoksen tavoite ei ole myynti vaan yhteystieto. Ihminen näkee mainoksen, kiinnostuu ja jättää nimensä, puhelinnumeronsa tai sähköpostinsa. Sen jälkeen sinä otat yhteyttä ja viet kaupan loppuun. Mainonta ei siis tee kauppaa puolestasi, vaan tuo kiinnostuneita ihmisiä joiden kanssa jatkat keskustelua.</p>
      <p>Tämä sopii erityisesti palveluille, joita ei osteta heti yhdellä klikkauksella. Remontti, hyvinvointipalvelu tai isompi hankinta vaatii usein keskustelun ennen päätöstä. Asiakas haluaa tietää hinnan, aikataulun ja sen, sopiiko palvelu juuri hänen tilanteeseensa, ennen kuin sitoutuu.</p>

      <h2>Kenelle liidien hankinta sopii</h2>
      <p>Liidien hankinta sopii sinulle, jos myyt palvelua tai tuotetta, jonka hinta tai luonne edellyttää harkintaa ja henkilökohtaista kontaktia. Esimerkkejä:</p>
      <ul>
        <li>Remonttiyritys, joka tekee tarjouksen kohteen mukaan eikä myy kiinteähintaista pakettia.</li>
        <li>Hyvinvointiyritys, jonka asiakas haluaa kysyä ja varmistua ennen ensimmäistä käyntiä.</li>
        <li>Paikallinen palvelu, jonka kauppa syntyy puhelimessa tai tapaamisessa.</li>
      </ul>
      <p>Yhteistä näille on, että kauppa ei synny napin painalluksella, vaan ihmisten välisestä kontaktista. Mainonta tuo sen kontaktin alkuun. Esimerkiksi ikkunaremontteja tekevä yritys ei voi myydä työtä suoraan verkossa, koska jokainen kohde on erilainen, mutta se voi kerätä tarjouspyyntöjä ihmisiltä joilla on aito tarve.</p>

      <h2>Kenelle se ei sovi</h2>
      <p>Jos myyt verkkokaupassa edullisia tuotteita, joita ostetaan heti, liidien hankinta on tarpeeton välivaihe. Silloin ohjaa ihminen suoraan ostamaan, älä kerää yhteystietoa siltä väliltä. Liidien hankinta sopii huonosti myös tilanteeseen, jossa sinulla ei ole aikaa tai resurssia soittaa ja vastata yhteydenottoihin nopeasti. Vanhentunut liidi on lähes arvoton.</p>
      <p>Tyypillinen virhe on yhden hengen yritys, joka kerää innoissaan kymmeniä liidejä mutta ehtii soittaa niistä vasta viikon päästä, kun työt antavat myöten. Siihen mennessä asiakas on jo valinnut kilpailijan, joka vastasi samana päivänä. Jos et pysty reagoimaan nopeasti, kerää vähemmän liidejä kerralla.</p>

      <h2>Liidien laatu ratkaisee, ei määrä</h2>
      <p>Helppo virhe on iloita suuresta liidimäärästä. Mutta sata liidiä, joista yksikään ei osta, on huonompi tulos kuin kymmenen liidiä, joista kolme ostaa. Liian helppo lomake tuo paljon yhteystietoja, mutta osa heistä ei ole tosissaan. Hieman vaativampi lomake tai selkeämpi viesti karsii pois ne, jotka eivät oikeasti harkitse ostoa.</p>
      <p>Jos remonttiyritys kysyy mainoksessa selvästi minkä kokoisesta hankkeesta on kyse, se saa vähemmän mutta laadukkaampia yhteydenottoja. Se on lähes aina kannattavampaa. Samoin hyvinvointiyritys voi kertoa hintatason jo mainoksessa, jolloin jäljelle jäävät ne, joille hinta sopii, eikä aika kulu ihmisiin jotka hätkähtävät heti hinnan kuullessaan.</p>

      <h2>Nopea yhteydenotto tekee tuloksen</h2>
      <p>Liidi on kuumimmillaan heti kun se on jätetty. Mitä kauemmin viivyttelet, sitä kylmemmäksi kiinnostus muuttuu. Käytännössä paras tulos syntyy, kun otat yhteyttä saman päivän aikana, mielellään tuntien sisällä. Tämä on yhtä tärkeää kuin itse mainos. Huippumainonta valuu hukkaan, jos liideihin vastataan vasta viikon päästä.</p>
      <p>Sovi etukäteen, kuka vastaa yhteydenottoihin ja miten ne ohjautuvat hänelle. Yksinkertainenkin järjestely, jossa jokainen uusi liidi tulee suoraan puhelimeen tai sähköpostiin, riittää, kunhan joku oikeasti reagoi. Liidi joka makaa lukematta sähköpostilaatikossa on yhtä tyhjän kanssa.</p>

      <h2>Usein kysytyt kysymykset</h2>
      <h3>Mitä liidi tarkoittaa?</h3>
      <p>Liidi on ihminen, joka on jättänyt yhteystietonsa ja osoittanut kiinnostuksensa palveluasi kohtaan. Hän ei ole vielä asiakas, mutta on potentiaalinen sellainen, johon voit olla yhteydessä.</p>
      <h3>Onko liidien hankinta sama asia kuin myynti?</h3>
      <p>Ei. Liidien hankinta tuo kiinnostuneita ihmisiä, mutta itse kauppa syntyy vasta kun otat heihin yhteyttä ja viet keskustelun loppuun.</p>
      <h3>Kuinka nopeasti liideihin pitää reagoida?</h3>
      <p>Mahdollisimman nopeasti, mieluiten saman päivän aikana. Kiinnostus jäähtyy nopeasti, ja viivästys laskee suoraan kaupaksi muuttuvien liidien osuutta.</p>
      <h3>Miten erotan hyvän liidin huonosta?</h3>
      <p>Hyvä liidi vastaa kuvaukseen ihanneasiakkaastasi ja on tosissaan harkitsemassa ostoa. Selkeämpi mainosviesti ja hieman vaativampi lomake auttavat karsimaan satunnaiset yhteydenotot.</p>
      <h3>Voiko liidejä kerätä, jos olen yksinyrittäjä?</h3>
      <p>Voit, mutta sovita liidien määrä siihen, kuinka nopeasti ehdit vastata. Pienempi mutta nopeasti hoidettu liidivirta tuottaa enemmän kauppoja kuin suuri määrä, joka jää roikkumaan.</p>

      <hr />
      <h2>Haluatko parempia tuloksia Meta-mainonnalla?</h2>
      <p>Pyydä ilmainen mainosanalyysi — kerromme mitä tehdä toisin.</p>
      <p><a href="https://www.zevu.cc/#cta">Pyydä analyysi →</a></p>
    `,
  },
  {
    slug: 'meta-lead-ads-vs-laskeutumissivu',
    title: 'Meta Lead Ads vs. laskeutumissivu — kumpi tuo enemmän liidejä',
    cats: ['Liidit'],
    date: '30.7.2026',
    publishedTime: '2026-07-30T09:53:00+03:00',
    read: 7,
    grad: 'grad-1',
    excerpt: 'Meta Lead Ads kerää yhteystiedot Metan sisällä. Laskeutumissivu ohjaa sivustollesi. Kumpi tuo enemmän liidejä — ja parempilaatuisia?',
    content: `
      <p>Kun keräät yhteydenottoja Meta-mainonnalla, sinulla on kaksi reittiä. Joko ihminen täyttää lomakkeen suoraan Metan sisällä, jolloin käytetään Lead Ads -muotoa, tai hänet ohjataan omalle laskeutumissivullesi täyttämään lomake siellä. Kumpi tuo enemmän liidejä ja kumpi parempilaatuisia? Vastaus ei ole sama kaikille.</p>

      <h2>Lead Ads: lomake aukeaa Metassa</h2>
      <p>Lead Adsissa ihminen klikkaa mainosta ja lomake avautuu suoraan Facebookissa tai Instagramissa. Yhteystiedot ovat usein valmiiksi täytettyinä Metan tietojen perusteella, joten ihmisen tarvitsee vain vahvistaa. Tämä on erittäin helppoa, ja siksi Lead Ads tuottaa yleensä enemmän liidejä kuin laskeutumissivu.</p>
      <p>Helppous on myös sen heikkous. Koska täyttäminen on lähes vaivatonta, mukaan tulee ihmisiä, jotka jättivät tietonsa hetken mielijohteesta eivätkä ole kovin sitoutuneita. Liidejä tulee paljon, mutta osa niistä on heikkolaatuisia. Käytännössä tämä näkyy niin, että soitat kymmenelle ja puolet ei muista jättäneensä yhteystietoja tai ei vastaa lainkaan.</p>

      <h2>Laskeutumissivu: ihminen ohjataan sivustollesi</h2>
      <p>Laskeutumissivussa ihminen siirtyy mainoksesta omalle sivullesi, lukee lisää ja täyttää lomakkeen siellä. Vaihe on hieman työläämpi, joten liidejä tulee usein vähemmän. Mutta jokainen joka jaksaa klikata sivulle, lukea ja täyttää lomakkeen, on yleensä tosissaan. Liidien määrä on pienempi, mutta laatu parempi.</p>
      <p>Laskeutumissivu antaa myös tilaa vakuuttaa. Voit näyttää referenssejä, hinnoittelun raamit, kuvia tehdyistä töistä ja vastata yleisimpiin kysymyksiin. Remonttiyritys voi näyttää ennen ja jälkeen -kuvia, kauneushoitola asiakaspalautteita. Tätä Metan sisäinen lomake ei mahdollista samalla tavalla. Sivulle saapunut ihminen on jo lukenut tarjouksesi tarkemmin, joten hän tietää mihin sitoutuu.</p>

      <h2>Kumpi sinun kannattaa valita</h2>
      <p>Jos tarvitset paljon yhteydenottoja nopeasti etkä pelkää käyttää aikaa liidien karsimiseen puhelimessa, Lead Ads on tehokas. Jos haluat harvempia mutta valmiiksi vakuuttuneita liidejä, ja sinulla on aikaa rakentaa kunnollinen sivu, laskeutumissivu tuottaa laadukkaampaa tulosta.</p>
      <p>Karkea nyrkkisääntö: edullisempi ja nopea palvelu, jossa määrä ratkaisee, sopii Lead Adsiin. Kalliimpi tai harkintaa vaativa palvelu, jossa yksi hyvä asiakas kattaa monta yhteydenottoa, sopii laskeutumissivuun. Esimerkiksi kauneushoitolan edulliset hoidot toimivat hyvin Lead Adsilla, kun taas kalliimman kokonaisremontin tarjouspyynnöt kannattaa kerätä laskeutumissivun kautta.</p>

      <h2>Voit myös testata molempia</h2>
      <p>Et joudu valitsemaan sokkona. Aja samaa mainosta molemmilla tavoilla ja vertaa, kumpi tuo enemmän oikeasti kaupaksi muuttuvia liidejä. Älä katso vain liidien määrää tai hintaa, vaan sitä montako niistä päätyi asiakkaaksi. Usein vastaus yllättää: halvemmat Lead Ads -liidit voivat olla niin heikkolaatuisia, että laskeutumissivun kalliimmat liidit tulevat lopulta edullisemmiksi per asiakas.</p>
      <p>Pidä testi reiluna: anna molempien tapojen kerätä liidejä riittävän pitkään, ennen kuin vedät johtopäätöksiä. Muutaman päivän perusteella ei voi sanoa mitään varmaa, koska liidien laatu paljastuu vasta kun olet ehtinyt soittaa heille ja nähnyt montako etenee kaupaksi.</p>

      <h2>Lead Adsin laatua voi parantaa</h2>
      <p><strong>Ratkaisu:</strong> jos pidät Lead Adsin, lisää lomakkeeseen yksi tai kaksi tarkentavaa kysymystä, esimerkiksi hankkeen koko tai aikataulu. Se hidastaa täyttämistä juuri sen verran, että satunnaiset jättäjät karsiutuvat ja jäljelle jää tosissaan olevat ihmiset. Voit myös lisätä lomakkeeseen vahvistusvaiheen, jossa ihminen joutuu erikseen painamaan lähetä, jolloin vahingossa täytetyt lomakkeet vähenevät.</p>

      <h2>Usein kysytyt kysymykset</h2>
      <h3>Kumpi on halvempi tapa kerätä liidejä?</h3>
      <p>Lead Ads tuottaa yleensä halvemman liidin, koska täyttäminen on helppoa. Halvempi liidi ei kuitenkaan aina ole parempi, jos suurempi osa niistä ei johda kauppaan.</p>
      <h3>Saanko liidit Lead Adsista suoraan sähköpostiin?</h3>
      <p>Liidit kertyvät Metaan, ja ne kannattaa ohjata sieltä omaan järjestelmääsi tai sähköpostiin, jotta voit reagoida nopeasti. Ilman tätä liidit jäävät helposti huomaamatta.</p>
      <h3>Tarvitsenko laskeutumissivua varten oman verkkosivun?</h3>
      <p>Tarvitset sivun, jolle ohjata kävijä, mutta se voi olla yksittäinen kampanjasivu eikä koko sivuston etusivu. Tärkeintä on, että sivu jatkaa mainoksen lupausta.</p>
      <h3>Voinko vaihtaa tapaa myöhemmin?</h3>
      <p>Kyllä. Voit aloittaa toisella ja siirtyä toiseen, tai ajaa molempia rinnakkain ja pitää sen, joka tuottaa parempia asiakkaita.</p>
      <h3>Kuinka pitkään testiä kannattaa ajaa?</h3>
      <p>Riittävän pitkään, että ehdit käsitellä liidit ja nähdä montako niistä eteni kaupaksi. Pelkkä liidien hinta ei riitä, koska laatu selviää vasta yhteydenoton jälkeen.</p>

      <hr />
      <h2>Haluatko parempia tuloksia Meta-mainonnalla?</h2>
      <p>Pyydä ilmainen mainosanalyysi — kerromme mitä tehdä toisin.</p>
      <p><a href="https://www.zevu.cc/#cta">Pyydä analyysi →</a></p>
    `,
  },
  {
    slug: 'meta-mainonnan-liidihinnoittelu',
    title: 'Meta-mainonnan liidihinnoittelu — paljonko liidi saa maksaa pk-yritykselle',
    cats: ['Liidit'],
    date: '31.7.2026',
    publishedTime: '2026-07-31T10:37:00+03:00',
    read: 8,
    grad: 'grad-2',
    excerpt: 'Paljonko yksi liidi saa maksaa Meta-mainonnassa? Laskukaava ja realistiset luvut eri toimialoille.',
    content: `
      <p>Yleisin kysymys liidimainonnasta on väärä: "Paljonko liidi saa maksaa?" Oikea kysymys on: "Paljonko liidi saa maksaa, jotta tienaan rahaa?" Vastaus ei ole sama kampaajalle ja remonttiyritykselle, koska yhden asiakkaan arvo on aivan eri. Tässä miten lasket sen itse.</p>

      <h2>Liidin hinta ei kerro mitään yksinään</h2>
      <p>Kymmenen euron liidi kuulostaa halvalta ja sadan euron liidi kalliilta. Mutta jos kymmenen euron liideistä yksikään ei osta ja sadan euron liideistä joka toinen ostaa palvelun, jonka kate on tuhat euroa, kalliimpi liidi on valtavasti parempi. Liidin hinta on järkevä vasta, kun se suhteutetaan siihen mitä asiakas tuo.</p>

      <h2>Yksinkertainen laskukaava</h2>
      <p>Tarvitset kolme lukua: asiakkaan arvo, kuinka moni liidi muuttuu asiakkaaksi, ja kuinka paljon haluat jättää katetta. Etene näin:</p>
      <ol>
        <li>Selvitä yhden asiakkaan tuoma kate, ei liikevaihto vaan se mitä jää käteen.</li>
        <li>Arvioi montako liidiä tarvitset yhtä asiakasta kohden. Jos joka viides liidi ostaa, suhde on viisi.</li>
        <li>Jaa asiakkaan kate tarvittavien liidien määrällä. Tämä on suurin summa, jonka liidi saa maksaa, ennen kuin teet tappiota.</li>
      </ol>
      <p>Esimerkki: remonttiyrityksen keskimääräisestä työstä jää katetta 1500 euroa. Joka viides liidi muuttuu asiakkaaksi. Tällöin yksi asiakas vaatii viisi liidiä, eli liidi saa maksaa korkeintaan 300 euroa ennen kuin kannattavuus loppuu. Jos haluat tienata reilusti, tavoittele selvästi tuon alle. Hyvä lähtökohta on pitää liidin hinta korkeintaan puolessa tästä ylärajasta, jolloin jää selvä voitto myös silloin kun kaikki liidit eivät muutu kaupaksi odotetusti.</p>

      <h2>Realistiset luvut eri toimialoille</h2>
      <p>Tarkkoja euromääriä ei kannata kopioida sokkona, koska ne riippuvat alueesta, kilpailusta ja tarjouksesta. Mutta suuntaa antaa se, kuinka arvokas yksi asiakas on:</p>
      <ul>
        <li>Kauneushoitola tai kampaamo: yksittäisen käynnin kate on pieni, joten liidin pitää olla halpa. Tässä Lead Adsin halvat liidit toimivat, kunhan asiakas palaa uudelleen.</li>
        <li>Hyvinvointiyritys, jossa asiakas käy toistuvasti: laske asiakkaan arvo koko asiakassuhteen ajalta, ei yhdeltä käynniltä. Silloin liidi saa maksaa enemmän.</li>
        <li>Remonttiyritys: yksi työ tuo paljon katetta, joten liidi saa maksaa kymmeniä tai jopa satoja euroja ja silti olla erittäin kannattava.</li>
      </ul>
      <p>Saman alan sisällä luku vaihtelee paljon. Pääkaupunkiseudulla kilpailu nostaa liidin hintaa, kun taas pienemmällä paikkakunnalla samat liidit voivat olla selvästi edullisempia. Älä siis lannistu, jos naapurikaupungin yrittäjä saa liidejä halvemmalla, vaan laske oma kannattava rajasi ja toimi sen mukaan.</p>

      <h2>Muista asiakkaan koko elinkaaren arvo</h2>
      <p>Iso virhe on laskea vain ensimmäinen kauppa. Jos kauneushoitolan asiakas käy vuodessa kuusi kertaa ja pysyy asiakkaana kolme vuotta, hänen arvonsa on moninkertainen yhteen käyntiin verrattuna. Kun lasket liidin sallitun hinnan tästä luvusta, voit maksaa liidistä paljon enemmän kuin kilpailija, joka katsoo vain ensimmäistä kauppaa. Tämä on usein ratkaiseva etu.</p>
      <p>Käytännön esimerkki: jos kauneushoitolan yksi käynti tuo katetta 40 euroa mutta asiakas tuo koko suhteen aikana yhteensä 700 euroa, voit maksaa liidistä reilusti enemmän kuin se kilpailija, joka uskaltaa tarjota vain muutaman euron yhden käynnin perusteella. Sinä voitat tarjouskilpailun ja saat asiakkaat, jotka olisivat muuten menneet muualle.</p>

      <h2>Seuraa lukuja, älä tunnetta</h2>
      <p>Kirjaa ylös montako liidiä sait, montako muuttui asiakkaaksi ja paljonko ne maksoivat. Ilman näitä lukuja arvioit kannattavuutta fiiliksellä, ja fiilis pettää. Kun tiedät todelliset luvut, näet heti onko mainonta voitollista ja voitko jopa nostaa budjettia, koska jokainen liidi tuo enemmän kuin maksaa. Yksinkertainen taulukko riittää: päivämäärä, liidien määrä, kulu, toteutuneet kaupat. Kun katsot sitä kuukauden jälkeen, näet totuuden tunteen sijaan.</p>

      <h2>Usein kysytyt kysymykset</h2>
      <h3>Mikä on hyvä liidin hinta?</h3>
      <p>Hyvä hinta on mikä tahansa selvästi alle sen summan, jonka yksi asiakas tuo katetta jaettuna tarvittavien liidien määrällä. Absoluuttinen euromäärä ei kerro mitään ilman tätä suhdetta.</p>
      <h3>Miten arvioin kuinka moni liidi muuttuu asiakkaaksi?</h3>
      <p>Jos sinulla on jo dataa, laske se toteutuneista kaupoista. Jos et, aloita varovaisella arviolla ja tarkenna heti kun ensimmäiset liidit on käsitelty.</p>
      <h3>Pitääkö liidin hinta laskea jokaiselle palvelulle erikseen?</h3>
      <p>Kannattaa, jos palveluidesi katteet eroavat paljon. Kalliin remontin ja edullisen huoltotyön sallittu liidihinta on hyvin erilainen.</p>
      <h3>Voinko maksaa liidistä enemmän kuin kilpailija?</h3>
      <p>Voit, jos asiakkaasi pysyy ja ostaa toistuvasti. Kun lasket koko asiakassuhteen arvon, sinulla on varaa maksaa liidistä enemmän ja silti tehdä voittoa.</p>
      <h3>Mitä jos en tiedä asiakkaan katetta tarkasti?</h3>
      <p>Aloita karkealla arviolla ja tarkenna myöhemmin. Pelkkä suuntaa antava luku on parempi kuin ei lukua lainkaan, ja se estää maksamasta liidistä selvästi liikaa.</p>

      <hr />
      <h2>Haluatko parempia tuloksia Meta-mainonnalla?</h2>
      <p>Pyydä ilmainen mainosanalyysi — kerromme mitä tehdä toisin.</p>
      <p><a href="https://www.zevu.cc/#cta">Pyydä analyysi →</a></p>
    `,
  },
  {
    slug: 'meta-mainonnan-kustannus-per-liidi',
    title: 'Meta-mainonnan kustannus per liidi — laskukaava ja realistiset luvut',
    cats: ['Liidit'],
    date: '1.8.2026',
    publishedTime: '2026-08-01T08:21:00+03:00',
    read: 6,
    grad: 'grad-3',
    excerpt: 'Kustannus per liidi on yksi tärkeimmistä Meta-mainonnan mittareista palveluyritykselle. Näin lasket sen ja arvioit onko se kannattavaa.',
    content: `
      <p>Kustannus per liidi kertoo, paljonko maksoit yhdestä yhteydenotosta. Se on palveluyrityksen tärkein yksittäinen mittari, koska se sitoo mainosbudjetin suoraan tulokseen. Tässä miten lasket sen oikein ja miten arvioit onko luku hyvä vai huono.</p>

      <h2>Laskukaava on yksinkertainen</h2>
      <p>Jaa mainontaan käyttämäsi raha saamiesi liidien määrällä. Jos käytit kuukaudessa 600 euroa ja sait 30 liidiä, kustannus per liidi on 20 euroa. Tämä luku näkyy myös Meta Ads Managerissa suoraan, mutta laske se itse ainakin kerran, jotta ymmärrät mistä se muodostuu.</p>
      <p>Yksi varoitus: Metan raportoima luku ei aina vastaa todellisuutta. Jos sama ihminen jättää kaksi lomaketta tai roskaliidit lasketaan mukaan, todellinen kustannus per oikea liidi on korkeampi. Karsi listasta selvät roskat ennen kuin teet johtopäätöksiä. Esimerkiksi remonttiyritys saattaa nähdä raportissa 20 euron liidin, mutta kun poistat duplikaatit ja selvät virhejättäjät, todellinen luku onkin 28 euroa. Tämä ero ratkaisee, onko mainonta kannattavaa vai ei.</p>

      <h2>Liidin hinta ei riitä yksinään</h2>
      <p>Kahdenkymmenen euron liidi on halpa remonttiyritykselle ja kallis kampaamolle. Luku ei kerro kannattavuudesta mitään, ennen kuin tiedät kaksi asiaa: kuinka moni liidi muuttuu asiakkaaksi ja paljonko asiakas tuo katetta. Vasta nämä yhdessä paljastavat, teetkö rahaa vai poltatko sitä.</p>
      <p>Esimerkki: hyvinvointiyritys maksaa 25 euroa liidistä. Joka neljäs varaa ajan, eli asiakas maksaa sata euroa hankittuna. Jos asiakas tuo ensimmäisellä käynnillä 80 euroa katetta ja palaa useita kertoja, sata euroa hankintaan on erittäin kannattavaa. Jos taas vain joka kymmenes liidi varaisi ajan, sama 25 euron liidi tarkoittaisi 250 euron hankintahintaa, mikä ei enää kannattaisi yhden käynnin perusteella.</p>

      <h2>Realistiset luvut riippuvat toimialasta</h2>
      <p>Älä kopioi euromääriä toiselta yritykseltä. Suuntaa antavat erot toimialojen välillä:</p>
      <ul>
        <li>Edullinen ja toistuva palvelu kuten kampaamo: liidin pitää olla halpa, koska yhden käynnin kate on pieni.</li>
        <li>Toistuva mutta arvokkaampi palvelu kuten hyvinvointi: liidi saa maksaa kohtuullisesti, kun asiakas palaa.</li>
        <li>Iso kertaluonteinen palvelu kuten remontti: liidi saa maksaa selvästi enemmän, koska yksi kauppa tuo paljon.</li>
      </ul>
      <p>Saman alan sisällä luku vaihtelee alueen, kilpailun ja tarjouksen mukaan. Pääkaupunkiseudulla liidi maksaa usein enemmän kuin pienemmällä paikkakunnalla, koska useampi yritys kilpailee samoista ihmisistä ja nostaa hintaa.</p>

      <h2>Mitä tehdä, jos liidi on liian kallis</h2>
      <p><strong>Ratkaisu:</strong> jos kustannus per liidi on korkeampi kuin kannattavuus sallii, älä lopeta heti vaan etsi syytä. Yleisimmät korjaukset ovat selkeämpi tarjous mainoksessa, parempi mainoskuva ja kuvaava ensiviesti, sekä lomake joka kysyy oikeat asiat. Joskus pelkkä mainoksen vaihto puolittaa liidin hinnan. Tarkista myös, että ohjaat mainonnan oikealle yleisölle eikä budjetti hajoa liian moneen suuntaan.</p>
      <p>Käytännössä kannattaa edetä yksi muutos kerrallaan, jotta tiedät mikä auttoi. Vaihda ensin mainoskuva, anna sen kerätä dataa muutama päivä, ja katso muuttuiko liidin hinta. Jos vaihdat kaiken yhtä aikaa, et opi mitään seuraavaa kampanjaa varten.</p>

      <h2>Usein kysytyt kysymykset</h2>
      <h3>Mistä näen kustannuksen per liidi?</h3>
      <p>Se näkyy Meta Ads Managerissa, mutta kannattaa laskea myös käsin jakamalla käytetty raha oikeiden liidien määrällä, jotta roskaliidit eivät vääristä lukua.</p>
      <h3>Onko halvempi liidi aina parempi?</h3>
      <p>Ei. Halpa liidi on huono, jos se ei muutu asiakkaaksi. Tärkeämpää on, paljonko maksat yhdestä toteutuneesta kaupasta.</p>
      <h3>Miten saan kustannuksen per liidi alemmas?</h3>
      <p>Yleensä parantamalla mainosta ja tarjousta, kohdentamalla oikeammalle yleisölle ja pitämällä budjetti riittävän keskitettynä, jotta mainonta ehtii oppia.</p>
      <h3>Kuinka pitkältä ajalta luku kannattaa laskea?</h3>
      <p>Vähintään muutaman viikon jaksolta, jotta yksittäiset hyvät tai huonot päivät eivät vääristä kuvaa. Lyhyt jakso antaa harhaanjohtavan tuloksen.</p>
      <h3>Pitääkö roskaliidit poistaa ennen laskemista?</h3>
      <p>Kyllä. Duplikaatit ja selvät virhejättäjät vääristävät lukua liian hyväksi. Laske kustannus vain niiden liidien perusteella, jotka ovat oikeita yhteydenottoja.</p>

      <hr />
      <h2>Haluatko parempia tuloksia Meta-mainonnalla?</h2>
      <p>Pyydä ilmainen mainosanalyysi — kerromme mitä tehdä toisin.</p>
      <p><a href="https://www.zevu.cc/#cta">Pyydä analyysi →</a></p>
    `,
  },
  {
    slug: 'meta-mainonta-paikalliselle-yritykselle',
    title: 'Meta-mainonta paikalliselle yritykselle — näin kohdennat oikein',
    cats: ['Liidit'],
    date: '2.8.2026',
    publishedTime: '2026-08-02T10:05:00+03:00',
    read: 8,
    grad: 'grad-4',
    excerpt: 'Paikallinen yritys tarvitsee paikallisia asiakkaita. Näin kohdennat Meta-mainokset niin, että tavoitat oikeat ihmiset oikealla alueella.',
    content: `
      <p>Paikallisen yrityksen ei kannata mainostaa koko Suomelle. Kampaamo Tampereella ei hyödy siitä, että mainos näkyy Rovaniemellä. Silti tämä on yleisin virhe paikallisessa Meta-mainonnassa: budjetti valuu ihmisille, jotka eivät koskaan voi tulla asiakkaaksi. Tässä miten kohdennat oikein, jotta jokainen euro menee alueellesi.</p>

      <h2>Aloita maantieteellisestä rajauksesta</h2>
      <p>Tärkein asetus on sijainti. Voit rajata mainoksen tietyn kaupungin, postinumeroalueen tai osoitteen ympärille tietyn etäisyyden säteelle. Mieti realistisesti, mistä asti asiakas oikeasti tulee luoksesi. Kampaamoon tullaan parin kilometrin säteeltä, remonttiyritys taas voi palvella koko maakuntaa.</p>
      <p>Aloita tiukasti. On parempi rajata liian tarkasti ja laajentaa myöhemmin kuin maksaa heti turhista näytöistä kaukana asuville. Jos sijaitset taajamassa, pieni säde riittää tavoittamaan paljon ihmisiä. Kauneushoitola keskustassa voi aloittaa hyvinkin tiukalla rajauksella, koska sen lähistöllä asuu jo runsaasti potentiaalisia asiakkaita.</p>

      <h2>Varmista että tavoitat asukkaat, et matkailijat</h2>
      <p>Sijaintia rajatessasi Meta kysyy, ketä alueella tavoitellaan. Useimmille paikallisille yrityksille oikea valinta on alueella asuvat ihmiset, ei kaikki jotka sattuvat olemaan paikalla. Poikkeus on yritys, joka palvelee nimenomaan ohikulkijoita, kuten keskustan lounaspaikka tai nähtävyyden lähellä oleva kahvila. Silloin myös alueella vierailevat ovat oikeaa yleisöä.</p>
      <p>Tämä asetus jää helposti väärälle vaihtoehdolle, jolloin mainos näkyy turisteille ja työmatkalaisille, jotka eivät palaa. Remonttiyrityksellä tämä on selvä rahanhukka: kukaan ei tilaa kylpyhuoneremonttia kaupungissa, jossa hän vain käy työkeikalla.</p>

      <h2>Älä kavenna kohdennusta liikaa muilla asetuksilla</h2>
      <p>Houkutus on lisätä paljon kiinnostuksen kohteita ja rajauksia päälle. Paikallisessa mainonnassa tämä on usein virhe. Kun rajaat jo alueen tarkasti, yleisö on valmiiksi pieni. Jos lisäät vielä kymmenen kiinnostusehtoa, jäljelle jää niin vähän ihmisiä, ettei mainonta ehdi oppia. Anna alueen tehdä suurin rajaus ja pidä muut asetukset väljinä.</p>
      <p>Poikkeus on selkeä demografinen rajaus, joka oikeasti pätee. Hääkuvaaja voi rajata iän järkevästi, lasten harrastuspalvelu voi tavoittaa vanhempia. Mutta älä keksi rajauksia, joista et ole varma. Jos kampaamo rajaa pois miehet pelkän mielikuvan perusteella, se saattaa menettää puolet asiakaskunnastaan turhaan.</p>

      <h2>Puhu paikallisesti mainoksessa</h2>
      <p>Kohdentaminen on puoli työtä, viesti on toinen puoli. Mainitse kaupunki tai alue mainoksessa. "Lähihoitola Tampereen keskustassa" pysäyttää tamperelaisen paremmin kuin yleinen "varaa aika hoitoon". Ihminen huomaa heti, että tämä on lähellä ja koskee häntä. Paikallinen kieli ja tunnetut paikat lisäävät luottamusta.</p>
      <p>Voit myös viitata tuttuihin maamerkkeihin tai kaupunginosiin. "Aivan kauppatorin kulmalla" tai "helppo pysäköinti aseman vieressä" kertoo paikalliselle konkreettisesti, että palvelu on saavutettavissa. Tällainen tuttuus tekee mainoksesta uskottavamman kuin valtakunnallinen yleisilme.</p>

      <h2>Hyödynnä sitä, että olet lähellä</h2>
      <p>Paikallisuus on etu, jota iso verkkokauppa ei voi kopioida. Voit luvata nopean palvelun, henkilökohtaisen kohtaamisen ja sen, että olet tavoitettavissa. Remonttiyritys voi korostaa, että se tuntee alueen ja pääsee paikalle nopeasti. Tämä konkretia toimii paikallisessa mainonnassa paremmin kuin yleiset lupaukset laadusta.</p>

      <h2>Pidä budjetti keskitettynä</h2>
      <p>Pienellä alueella ei kannata pirstoa budjettia moneen kampanjaan. Yksi hyvin kohdennettu mainosjoukko kerää tuloksia nopeammin kuin viisi pientä, jotka kaikki jäävät kesken. Kun yksi toimii, voit laajentaa joko aluetta tai budjettia hallitusti.</p>

      <h2>Usein kysytyt kysymykset</h2>
      <h3>Kuinka laajalle alueelle kannattaa mainostaa?</h3>
      <p>Rajaa alue sen mukaan, mistä asiakas oikeasti tulee luoksesi. Aloita tiukasti ja laajenna vasta jos tarvitset lisää tavoitettavuutta.</p>
      <h3>Pitääkö minun valita asukkaat vai kaikki alueella olevat?</h3>
      <p>Useimmille paikallisille yrityksille asukkaat ovat oikea valinta. Vain jos palvelet ohikulkijoita, kannattaa tavoittaa myös alueella vierailevat.</p>
      <h3>Kannattaako lisätä paljon kiinnostuksen kohteita?</h3>
      <p>Yleensä ei. Kun alue on jo tarkka, liialliset rajaukset tekevät yleisöstä liian pienen ja mainonta ei ehdi oppia. Pidä asetukset väljinä.</p>
      <h3>Toimiiko paikallinen mainonta pienellä budjetilla?</h3>
      <p>Toimii usein hyvin, koska pienellä alueella tavoitat oikeat ihmiset edullisesti. Pidä budjetti keskitettynä yhteen toimivaan mainokseen.</p>
      <h3>Pitääkö mainoksessa mainita paikkakunta?</h3>
      <p>Kannattaa. Paikkakunnan ja tuttujen maamerkkien mainitseminen pysäyttää paikallisen lukijan ja kertoo heti, että palvelu on lähellä häntä.</p>

      <hr />
      <h2>Haluatko parempia tuloksia Meta-mainonnalla?</h2>
      <p>Pyydä ilmainen mainosanalyysi — kerromme mitä tehdä toisin.</p>
      <p><a href="https://www.zevu.cc/#cta">Pyydä analyysi →</a></p>
    `,
  },
  {
    slug: 'meta-mainonta-retargeting',
    title: 'Meta-mainonta retargeting — näin tavoitat jo kiinnostuneet uudelleen',
    cats: ['Liidit'],
    date: '3.8.2026',
    publishedTime: '2026-08-03T09:59:00+03:00',
    read: 9,
    grad: 'grad-5',
    excerpt: 'Retargeting tarkoittaa mainontaa ihmisille, jotka ovat jo käyneet sivustollasi. Näin se toimii ja miten rakennat sen.',
    content: `
      <p>Suurin osa sivustosi kävijöistä lähtee pois ostamatta tai ottamatta yhteyttä. Se ei tarkoita, etteivät he olisi kiinnostuneita. Useimmiten he vain miettivät, vertailevat tai unohtavat. Retargeting tarkoittaa näiden ihmisten tavoittamista uudelleen mainoksella. He tuntevat sinut jo, joten heille mainostaminen on lähes aina tuottavampaa kuin täysin uusien ihmisten etsiminen.</p>

      <h2>Miksi retargeting toimii niin hyvin</h2>
      <p>Ensimmäisellä käynnillä ihminen tutustuu. Hän ei välttämättä ole valmis päättämään heti. Verkkokaupan asiakas vertailee hintoja, remonttiyrityksen kävijä miettii ajoitusta, kauneushoitolan vierailija aikoo varata "myöhemmin". Retargeting muistuttaa juuri oikeaan aikaan, ennen kuin kiinnostus haihtuu. Koska kohdeyleisö on jo lämmin, mainos toimii paremmin ja tulee halvemmaksi per tulos.</p>
      <p>Ajattele omaa ostokäyttäytymistäsi. Harva ostaa kalliimman tuotteen ensimmäisellä vilkaisulla. Käyt katsomassa, suljet sivun, mietit ja palaat ehkä päivien päästä. Retargeting on juuri se hellävarainen muistutus, joka tuo sinut takaisin sen sijaan, että unohtaisit koko asian.</p>

      <h2>Mitä retargeting vaatii toimiakseen</h2>
      <p>Retargeting nojaa pikseliin, eli pieneen koodinpätkään sivustollasi, joka kerää tiedon kävijöistä. Ilman sitä Meta ei tiedä, kuka kävi sivulla, eikä mainosta voi kohdentaa heille. Jos pikseliä ei ole vielä asennettu, se on ensimmäinen askel. Pikseli alkaa kerätä yleisöä heti, mutta retargeting toimii sitä paremmin mitä enemmän kävijöitä on ehtinyt kertyä.</p>
      <p>Tästä syystä pikseli kannattaa asentaa heti, jo ennen kuin aloitat varsinaisen mainonnan. Näin yleisöä ehtii kertyä taustalla, ja kun käynnistät retargetingin, sinulla on jo joukko ihmisiä joita tavoittaa.</p>

      <h2>Rakenna yleisöt kiinnostuksen mukaan</h2>
      <p>Kaikki kävijät eivät ole yhtä kiinnostuneita. Kannattaa erottaa eri ryhmät ja puhua heille eri tavalla:</p>
      <ul>
        <li>Etusivulla käyneet ovat vasta tutustuneet. Heille sopii lempeä muistutus ja syy palata.</li>
        <li>Tuote- tai palvelusivulla käyneet ovat selvästi kiinnostuneita. Heille voi puhua suoraan kyseisestä palvelusta.</li>
        <li>Korin tai lomakkeen kesken jättäneet olivat lähellä päätöstä. Heille toimii suora kehotus viedä asia loppuun, joskus pienen kannustimen kanssa.</li>
      </ul>
      <p>Mitä pidemmälle ihminen ehti, sitä suorempi viesti kannattaa. Korin hylänneelle voi näyttää juuri sen tuotteen, jonka hän jätti. Verkkokauppa voi esimerkiksi muistuttaa unohtuneesta tuotteesta ja lisätä mukaan pienen kannustimen, kuten ilmaisen toimituksen, joka antaa viimeisen sysäyksen.</p>

      <h2>Vaihda viestiä, älä toista samaa mainosta</h2>
      <p>Retargetingissa sama ihminen näkee mainoksesi useammin kuin kylmä yleisö. Jos mainos on aina sama, se alkaa ärsyttää ja teho laskee. <strong>Ratkaisu:</strong> tarjoa retargeting-mainoksessa jotain uutta. Asiakaspalaute, vastaus yleiseen epäilykseen, kuva tehdystä työstä tai konkreettinen syy päättää nyt. Tavoite on poistaa se este, joka ensimmäisellä kerralla jätti päätöksen tekemättä.</p>
      <p>Remonttiyritys voi esimerkiksi näyttää ensin referenssikuvia ja seuraavaksi asiakaspalautteen, joka vastaa yleiseen pelkoon aikataulujen pitävyydestä. Näin jokainen kohtaaminen vie ihmistä lähemmäs päätöstä sen sijaan, että toistaisi samaa viestiä.</p>

      <h2>Rajaa kuinka usein mainos näkyy</h2>
      <p>Lämmin yleisö on pieni, joten sama ihminen näkee mainoksen helposti liian monta kertaa. Pidä silmällä kuinka usein mainos toistuu samalle henkilölle ja vaihda mainosta säännöllisesti. Liika toisto kääntää hyödyn haitaksi: kiinnostunut ihminen alkaa pitää sinua tunkeilevana. Aseta myös järkevä aikaraja, esimerkiksi tavoita ihmiset jotka kävivät viimeisten viikkojen aikana, ei kuukausia sitten.</p>

      <h2>Älä unohda uusien hankkimista</h2>
      <p>Retargeting on tehokasta, mutta se toimii vain niin kauan kuin sivustolle tulee uusia kävijöitä. Jos lopetat uusien tavoittelun kokonaan, retargeting-yleisö ehtyy nopeasti. Pidä siis molemmat käynnissä: osa budjetista uusien ihmisten tavoittamiseen, osa heidän muistuttamiseensa retargetingilla. Yhdessä ne muodostavat toimivan kokonaisuuden.</p>

      <h2>Usein kysytyt kysymykset</h2>
      <h3>Tarvitsenko pikselin retargetingiin?</h3>
      <p>Kyllä. Pikseli kerää tiedon kävijöistä, ja ilman sitä Meta ei tiedä keitä tavoittaa uudelleen. Asenna se ennen kuin aloitat.</p>
      <h3>Kuinka monta kävijää tarvitaan ennen kuin retargeting toimii?</h3>
      <p>Yleisön pitää olla riittävän suuri, jotta mainonta toimii. Pienen kävijämäärän sivustolla kannattaa pitää retargeting-jakso pidempänä, jotta yleisöä ehtii kertyä tarpeeksi.</p>
      <h3>Onko retargeting tunkeilevaa?</h3>
      <p>Maltillisesti tehtynä ei. Ongelma syntyy vain, jos sama mainos toistuu liian usein. Rajaa toistoa ja vaihda viestiä, niin se koetaan hyödylliseksi muistutukseksi.</p>
      <h3>Voinko ohjata eri kävijät eri mainoksiin?</h3>
      <p>Kyllä, ja kannattaakin. Etusivulla käyneelle, palvelusivulla käyneelle ja kesken jättäneelle sopii eri viesti. Mitä pidemmälle kävijä ehti, sitä suorempi mainos.</p>
      <h3>Korvaako retargeting uusien asiakkaiden hankkimisen?</h3>
      <p>Ei. Retargeting toimii vain, jos sivustolle tulee jatkuvasti uusia kävijöitä. Pidä molemmat käynnissä rinnakkain.</p>

      <hr />
      <h2>Haluatko parempia tuloksia Meta-mainonnalla?</h2>
      <p>Pyydä ilmainen mainosanalyysi — kerromme mitä tehdä toisin.</p>
      <p><a href="https://www.zevu.cc/#cta">Pyydä analyysi →</a></p>
    `,
  },
]
