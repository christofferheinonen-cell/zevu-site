import type { Article } from '../types'

const group = 'digital-menu'
const base = { group, sector: 'restaurants' as const, coverImage: '', coverAlt: '', status: 'published' as const, author: 'Zevu' }

export const digitalMenu: Article[] = [
  {
    ...base,
    id: 'seed-digital-menu-en',
    locale: 'en',
    slug: 'digital-menu-restaurant',
    title: 'Digital menu for restaurants: why your menu shouldn’t be a PDF',
    metaTitle: 'Digital Menu for Restaurants: Why It Shouldn’t Be a PDF',
    metaDescription: 'A digital menu that opens instantly, shows allergens clearly and works in English and Spanish. Why PDF menus cost you guests, and how to build a better one.',
    focusKeyword: 'digital menu',
    excerpt: 'The PDF menu is the most common mistake on restaurant websites. Here’s what a good digital menu looks like, how to handle allergens, and where QR codes fit in.',
    publishAt: '2026-11-04T09:10:00.000Z',
    updatedAt: '2026-11-04T09:10:00.000Z',
    body: `
<p>Ask anyone who looks up restaurants on their phone and they will tell you the same thing: tapping “Menu” and waiting for a PDF to download is one of the most frustrating parts of choosing where to eat. A proper digital menu, built as a page on your website, fixes that and does a lot more besides.</p>

<h2>What’s wrong with a PDF menu</h2>
<p>A PDF is designed for printing, not for phones. That causes problems you might not notice from behind the bar:</p>
<ul>
<li><strong>It’s slow.</strong> PDFs are often heavy files, and on mobile data guests give up before it opens.</li>
<li><strong>It’s awkward to read.</strong> Guests have to pinch and zoom around an A4 page on a small screen.</li>
<li><strong>Google can’t use it well.</strong> Search engines understand a normal web page far better, so your dishes are less likely to help people find you.</li>
<li><strong>It goes out of date.</strong> Changing one price means editing the design file, exporting again and uploading it. So it doesn’t happen, and guests see old prices.</li>
</ul>

<h2>What a good digital menu looks like</h2>
<p>A good digital menu is simply a well-designed page: sections you can jump between, clear dish names, a short description where it helps, and prices that are easy to scan. It loads in a moment, reads comfortably with one hand, and matches the look of your restaurant.</p>
<p>It should also work well for guests with accessibility needs: real text that screen readers can read aloud, and good contrast between text and background.</p>
<p>Most importantly, it stays current. Tonight’s special, a dish that’s sold out, a new price: a web page can reflect all of it the same day, without reprinting anything. An accurate menu builds trust.</p>

<h2>Allergens: clear, not hidden</h2>
<p>EU rules list fourteen allergens that must be declared, and in Spain this information has to be available to guests for food you serve, not only for packaged products. The fourteen are: cereals containing gluten, crustaceans, eggs, fish, peanuts, soybeans, milk, tree nuts, celery, mustard, sesame, sulphites, lupin and molluscs.</p>
<p>A digital menu is the easiest place to show them. Small, consistent icons next to each dish, with a key that explains them, let guests check before they ask, and save your team from answering the same question during a busy service. Rules on exactly how you must present allergen information can vary, so confirm the details with your local authority.</p>

<h2>Two languages, one menu</h2>
<p>If your guests include visitors, your digital menu should have English and Spanish versions, written properly rather than machine-translated. Dish names often work best kept in Spanish with a short English explanation underneath: <em>“Pulpo a la brasa, chargrilled octopus with paprika and potato”</em>. That keeps the character of your food and still helps people order with confidence.</p>

<h2>Where QR codes fit in</h2>
<p>QR codes on tables are useful, as long as they open your digital menu page rather than a PDF. Point the code at a stable address on your own website, so the menu can change without ever reprinting the codes. Keep a few printed menus too: some guests simply prefer paper, and that’s part of good hospitality.</p>

<h2>How it helps you get found</h2>
<p>When your menu is a real page, the names of your dishes become part of your website. Someone searching for “paella in the old town” or “vegan brunch” is more likely to find a restaurant whose menu actually mentions those things in text Google can read.</p>
<p>Link to the menu page from your <a href="/blog/restaurant-on-google-maps">Google Business Profile</a> too, so guests who find you on the map see the same, up-to-date menu.</p>

<h2>Getting started with your digital menu</h2>
<p>You don’t need special software to begin. Most of the work is writing the menu out clearly once.</p>
<ol>
<li>Write your menu out as plain text, section by section.</li>
<li>Add short descriptions only where a dish name isn’t self-explanatory.</li>
<li>Mark the fourteen allergens for every dish.</li>
<li>Prepare the English version (or Spanish, if you started in English).</li>
<li>Publish it as a page on your website and link it everywhere: Google, Instagram and QR codes.</li>
</ol>
<p>Every <a href="/restaurants">restaurant website</a> we build includes a digital menu with allergens and both languages built in. <a href="/contact">Tell us about your menu</a> and we’ll show you how it would look.</p>
`,
    faqs: [
      { q: 'Is a QR code menu the same as a digital menu?', a: 'Not necessarily. A QR code is just a link. It only gives guests a good experience if it opens a proper menu page that loads quickly and reads well on a phone, rather than a PDF.' },
      { q: 'Do I have to show allergens on my menu in Spain?', a: 'Allergen information for the fourteen allergens in EU rules must be available to guests for the food you serve. A menu with clear allergen icons is the simplest way to do it, but check the exact presentation rules with your local authority.' },
      { q: 'Should dish names be translated?', a: 'Often it works best to keep the Spanish name and add a short explanation in English underneath. That preserves the character of the dish and still helps visitors order with confidence.' },
      { q: 'How often should a digital menu be updated?', a: 'Whenever something changes. Unlike a printed or PDF menu, a web page can show new prices, specials and sold-out dishes the same day.' },
    ],
  },
  {
    ...base,
    id: 'seed-digital-menu-es',
    locale: 'es',
    slug: 'carta-digital-restaurante',
    title: 'Carta digital para restaurantes: por qué tu carta no debería ser un PDF',
    metaTitle: 'Carta digital para restaurantes: mejor que un PDF',
    metaDescription: 'Una carta digital que abre al instante, muestra los alérgenos y funciona en español e inglés. Por qué el PDF te cuesta clientes y cómo hacerlo mejor.',
    focusKeyword: 'carta digital',
    excerpt: 'La carta en PDF es el error más habitual en las webs de restaurantes. Así es una buena carta digital, cómo mostrar los alérgenos y qué papel tienen los códigos QR.',
    publishAt: '2026-11-04T09:15:00.000Z',
    updatedAt: '2026-11-04T09:15:00.000Z',
    body: `
<p>Pregunta a cualquiera que busque restaurantes con el móvil y te dirá lo mismo: pulsar “Carta” y esperar a que se descargue un PDF es de lo más frustrante a la hora de elegir dónde comer. Una buena carta digital, hecha como una página de tu web, lo soluciona y aporta mucho más.</p>

<h2>Qué falla en una carta en PDF</h2>
<p>Un PDF está pensado para imprimir, no para el móvil. Eso provoca problemas que quizá no ves desde detrás de la barra:</p>
<ul>
<li><strong>Es lento.</strong> Los PDF suelen pesar mucho y, con datos móviles, el cliente se cansa antes de que se abra.</li>
<li><strong>Cuesta leerlo.</strong> Hay que ampliar y moverse por una hoja A4 en una pantalla pequeña.</li>
<li><strong>Google lo aprovecha mal.</strong> Los buscadores entienden mucho mejor una página normal, así que tus platos ayudan menos a que te encuentren.</li>
<li><strong>Se queda desfasado.</strong> Cambiar un precio implica editar el diseño, exportar y volver a subirlo. Así que no se hace, y el cliente ve precios antiguos.</li>
</ul>

<h2>Cómo es una buena carta digital</h2>
<p>Una buena carta digital es, sencillamente, una página bien diseñada: secciones entre las que saltar, nombres de platos claros, una breve descripción cuando hace falta y precios fáciles de leer. Carga en un momento, se lee cómodamente con una mano y tiene el mismo estilo que tu restaurante.</p>
<p>También debería ser accesible: texto real que los lectores de pantalla puedan leer en voz alta y buen contraste entre el texto y el fondo.</p>
<p>Y, sobre todo, se mantiene al día. El plato del día, algo agotado, un precio nuevo: una página web puede reflejarlo el mismo día, sin reimprimir nada. Una carta al día genera confianza.</p>

<h2>Alérgenos: a la vista, no escondidos</h2>
<p>La normativa europea recoge catorce alérgenos que hay que declarar y, en España, esta información debe estar a disposición del cliente también en la comida que sirves, no solo en los productos envasados. Son estos catorce: cereales con gluten, crustáceos, huevos, pescado, cacahuetes, soja, leche, frutos de cáscara, apio, mostaza, sésamo, sulfitos, altramuces y moluscos.</p>
<p>La carta digital es el sitio más sencillo para mostrarlos. Unos iconos pequeños y coherentes junto a cada plato, con una leyenda que los explique, permiten al cliente comprobarlo antes de preguntar y evitan que el equipo responda lo mismo en pleno servicio. Las normas sobre cómo presentar exactamente la información de alérgenos pueden variar, así que confirma los detalles con tu ayuntamiento o tu comunidad autónoma.</p>

<h2>Dos idiomas, una carta</h2>
<p>Si entre tus clientes hay visitantes, tu carta digital debería tener versión en español y en inglés, bien escrita y no traducida automáticamente. Los nombres de los platos suelen funcionar mejor en español, con una breve explicación en inglés debajo: <em>“Pulpo a la brasa, chargrilled octopus with paprika and potato”</em>. Así se mantiene el carácter de tu cocina y el cliente pide con seguridad.</p>

<h2>Qué papel tienen los códigos QR</h2>
<p>Los códigos QR en las mesas son útiles, siempre que abran tu carta digital y no un PDF. Haz que el código apunte a una dirección fija de tu propia web, para que la carta pueda cambiar sin volver a imprimir los códigos. Ten también algunas cartas en papel: hay clientes que lo prefieren, y eso también es hospitalidad.</p>

<h2>Cómo te ayuda a que te encuentren</h2>
<p>Cuando tu carta es una página de verdad, los nombres de tus platos pasan a formar parte de tu web. Quien busca “paella en el casco antiguo” o “brunch vegano” tiene más opciones de encontrar un restaurante cuya carta menciona esas cosas en un texto que Google puede leer.</p>
<p>Enlaza también la carta desde tu <a href="/es/blog/aparecer-en-google-maps">ficha de Google</a>, para que quien te encuentre en el mapa vea la misma carta, siempre actualizada.</p>

<h2>Por dónde empezar con tu carta digital</h2>
<p>No hace falta ningún programa especial para empezar. La mayor parte del trabajo es escribir bien la carta una vez.</p>
<ol>
<li>Escribe tu carta como texto, sección por sección.</li>
<li>Añade descripciones breves solo cuando el nombre del plato no lo explique.</li>
<li>Marca los catorce alérgenos en cada plato.</li>
<li>Prepara la versión en inglés.</li>
<li>Publícala como página en tu web y enlázala en todas partes: Google, Instagram y los códigos QR.</li>
</ol>
<p>Todas las <a href="/es/restaurantes">webs para restaurantes</a> que hacemos incluyen una carta digital con alérgenos y los dos idiomas. <a href="/es/contacto">Cuéntanos cómo es tu carta</a> y te enseñamos cómo quedaría.</p>
`,
    faqs: [
      { q: '¿Una carta con código QR es lo mismo que una carta digital?', a: 'No necesariamente. El QR es solo un enlace. Solo ofrece una buena experiencia si abre una página de carta que cargue rápido y se lea bien en el móvil, en lugar de un PDF.' },
      { q: '¿Tengo que mostrar los alérgenos en la carta en España?', a: 'La información sobre los catorce alérgenos de la normativa europea debe estar a disposición del cliente en la comida que sirves. Una carta con iconos de alérgenos claros es la forma más sencilla, pero confirma las normas concretas de presentación con la administración local.' },
      { q: '¿Hay que traducir los nombres de los platos?', a: 'Suele funcionar mejor mantener el nombre en español y añadir debajo una breve explicación en inglés. Así se conserva el carácter del plato y los visitantes piden con seguridad.' },
      { q: '¿Cada cuánto hay que actualizar la carta digital?', a: 'Cada vez que algo cambie. A diferencia de una carta impresa o en PDF, una página web puede mostrar precios nuevos, sugerencias y platos agotados el mismo día.' },
    ],
  },
]
