import type { Article } from '../types'

const group = 'coffee-shop-website'
const base = { group, sector: 'coffee-shops' as const, coverImage: '', coverAlt: '', status: 'published' as const, author: 'Zevu' }

export const coffeeShopWebsite: Article[] = [
  {
    ...base,
    id: 'seed-coffee-shop-website-en',
    locale: 'en',
    slug: 'coffee-shop-website',
    title: 'Coffee shop website: what actually brings customers through the door',
    metaTitle: 'Coffee Shop Website: What Brings Customers Through the Door',
    metaDescription: 'What a coffee shop website needs to turn searches into regulars: reliable hours, a menu worth the walk, laptop and dog info, and optional ordering ahead.',
    focusKeyword: 'coffee shop website',
    excerpt: 'A café runs on habit. Your website’s job is to make the first visit easy and the second one obvious. Here’s what that takes, without overbuilding.',
    publishAt: '2026-11-05T08:10:00.000Z',
    updatedAt: '2026-11-05T08:10:00.000Z',
    body: `
<p>People rarely plan a coffee. They search at 8:40 on the way to work, or on a Saturday looking for somewhere to sit with a laptop, and they pick whatever looks open, good and nearby. A coffee shop website that answers those few questions quickly wins that moment, and a regular often follows.</p>

<h2>What your coffee shop website must answer first</h2>
<p>Before anything else, a visitor wants to know: <strong>are you open right now</strong>, <strong>is it any good</strong>, and <strong>how do I get there</strong>. Put the answers on the first screen of your coffee shop website, on a phone, without scrolling.</p>
<ul>
<li><strong>Open now:</strong> today’s hours, clearly. Many cafés close early in the afternoon or change hours in summer, so keep this exact.</li>
<li><strong>Any good:</strong> one beautiful photo of your coffee or your counter, and a line about what makes you different.</li>
<li><strong>How to get there:</strong> address with a map link, and the nearest landmark.</li>
</ul>

<h2>A menu worth the walk</h2>
<p>Coffee lovers read menus. Show your espresso drinks and filter options, where your beans come from if you care about that, your milk alternatives and whether they cost extra, and your food: pastries, brunch, anything homemade. Keep prices visible. A menu that is a proper page, rather than a photo of the chalkboard, also helps Google understand that you serve flat whites, oat milk or gluten-free cake.</p>
<p>Our article on why your <a href="/blog/digital-menu-restaurant">digital menu shouldn’t be a PDF</a> applies just as much to cafés.</p>

<h2>Tell people what they choose a café for</h2>
<p>Many people pick a café for reasons that have nothing to do with coffee. Say plainly whether you have:</p>
<ul>
<li>Wifi and plugs, and whether laptops are welcome all day or not at lunch</li>
<li>Outdoor seating or a quiet corner</li>
<li>Space for prams, and whether dogs are welcome</li>
<li>Vegan, gluten-free or lactose-free options</li>
</ul>
<p>Honest details like these save people a wasted trip, and they are exactly the things people search for. If you have house rules, such as no laptops at weekend brunch, say so kindly on the site too. It is far better than an awkward conversation at the counter.</p>

<h2>Ordering ahead: useful, not essential</h2>
<p>Click-and-collect lets regulars order on the way and skip the queue. It can be great for a busy café near offices or a station. For a quiet neighbourhood café, it may not be worth the setup and the fees. Decide based on how busy your morning rush really is, not on what the chain down the road does.</p>

<h2>Sell beans and gift cards to people who already love you</h2>
<p>If you roast or stock good beans, a small online shop on your coffee shop website lets regulars buy a bag without asking, and gift cards make easy presents. Keep it small: a handful of products, clear photos and card payments. It doesn’t need to be a full online store to be worth having.</p>

<h2>Photos that make people want to visit</h2>
<p>Coffee is visual, and so is the feeling of a good café. You don’t need many photos, but they need to be good: the coffee from above, the counter with pastries, the room in soft morning light, and one of the outside so people recognise you from the street. Natural light beats flash every time.</p>
<p>Avoid stock photos of generic lattes. People can tell, and it makes a real café look like a chain. If you can’t arrange a shoot yet, a few well-lit phone photos taken near a window are better than borrowed images.</p>

<h2>Make sure Google matches</h2>
<p>Most people will see your <a href="/blog/restaurant-on-google-maps">Google Business Profile</a> before your website. Keep the hours, address and phone identical in both places, add good photos to the profile, and link to your menu page from it.</p>

<h2>Keep it small and keep it current</h2>
<p>A café doesn’t need a large website. One well-made page, or a few, with accurate hours, a great menu and honest details, beats a big site that goes out of date. What matters is that it changes the same day the hours do, or when a new cake arrives.</p>
<p>We design <a href="/coffee-shops">websites for coffee shops</a> that do exactly this, in English and Spanish. <a href="/contact">Tell us about your café</a> and we’ll suggest what’s worth building, and what isn’t.</p>
`,
    faqs: [
      { q: 'Does a small café really need a website?', a: 'A simple one, yes. A single page with accurate hours, your menu and how to find you answers the questions people ask before they visit, and gives Google a reliable source for your details.' },
      { q: 'Should I offer online ordering?', a: 'Only if your morning rush makes queues a real problem. For many neighbourhood cafés, correct hours and a great menu matter far more than ordering ahead.' },
      { q: 'What should I put on my café’s homepage?', a: 'Today’s opening hours, one great photo, a line about what makes you different, your address, and a link to the menu. Everything else can come further down.' },
      { q: 'Can I sell coffee beans on my website?', a: 'Yes. A small shop with a few products and card payments is enough for most cafés, and gift cards are an easy extra.' },
    ],
  },
  {
    ...base,
    id: 'seed-coffee-shop-website-es',
    locale: 'es',
    slug: 'web-para-cafeteria',
    title: 'Web para cafetería: lo que de verdad trae clientes',
    metaTitle: 'Web para cafetería: lo que de verdad trae clientes',
    metaDescription: 'Qué necesita una web para cafetería para convertir búsquedas en clientes habituales: horario fiable, una buena carta, wifi y perros, y pedidos para recoger.',
    focusKeyword: 'web para cafetería',
    excerpt: 'Una cafetería vive de la costumbre. Tu web tiene que hacer fácil la primera visita y evidente la segunda. Esto es lo que hace falta, sin pasarse.',
    publishAt: '2026-11-05T08:15:00.000Z',
    updatedAt: '2026-11-05T08:15:00.000Z',
    body: `
<p>Casi nadie planea un café. Se busca a las 8:40 de camino al trabajo, o un sábado buscando dónde sentarse con el portátil, y se elige lo que parece abierto, bueno y cerca. Una web para cafetería que responde rápido a esas pocas preguntas gana ese momento, y muchas veces de ahí sale un cliente habitual.</p>

<h2>Lo primero que debe responder tu web para cafetería</h2>
<p>Antes que nada, quien entra quiere saber: <strong>si estás abierto ahora</strong>, <strong>si merece la pena</strong> y <strong>cómo llegar</strong>. Pon las respuestas en la primera pantalla de tu web, en el móvil, sin tener que bajar.</p>
<ul>
<li><strong>Abierto ahora:</strong> el horario de hoy, bien claro. Muchas cafeterías cierran pronto por la tarde o cambian de horario en verano, así que mantenlo exacto.</li>
<li><strong>Merece la pena:</strong> una foto bonita de tu café o de tu barra y una frase sobre lo que te hace diferente.</li>
<li><strong>Cómo llegar:</strong> la dirección con enlace al mapa y la referencia más cercana.</li>
</ul>

<h2>Una carta que merezca el paseo</h2>
<p>A quien le gusta el café, lee la carta. Enseña tus cafés con espresso y tus métodos de filtro, de dónde viene tu café si te importa, qué bebidas vegetales tienes y si tienen suplemento, y tu comida: bollería, brunch, lo que sea casero. Deja los precios a la vista. Una carta como página de verdad, y no como foto de la pizarra, también ayuda a que Google entienda que sirves flat white, leche de avena o tarta sin gluten.</p>
<p>Nuestro artículo sobre por qué tu <a href="/es/blog/carta-digital-restaurante">carta digital no debería ser un PDF</a> vale igual para las cafeterías.</p>

<h2>Cuenta lo que hace que alguien elija una cafetería</h2>
<p>Mucha gente elige cafetería por motivos que no tienen nada que ver con el café. Di claramente si tienes:</p>
<ul>
<li>Wifi y enchufes, y si el portátil es bienvenido todo el día o no a la hora de comer</li>
<li>Terraza o un rincón tranquilo</li>
<li>Sitio para carritos, y si se admiten perros</li>
<li>Opciones veganas, sin gluten o sin lactosa</li>
</ul>
<p>Estos detalles honestos le ahorran a la gente un viaje en balde, y son justo lo que busca.</p>

<h2>Pedir para recoger: útil, no imprescindible</h2>
<p>Pedir para recoger permite a los habituales encargar de camino y saltarse la cola. Puede ir muy bien en una cafetería con mucho movimiento cerca de oficinas o de una estación. En una cafetería tranquila de barrio, quizá no compense la configuración ni las comisiones. Decídelo según lo intensa que sea de verdad tu hora punta, no según lo que haga la cadena de enfrente.</p>

<h2>Vende café y tarjetas regalo a quien ya te quiere</h2>
<p>Si tuestas o vendes buen café en grano, una pequeña tienda en tu web para cafetería permite a los habituales comprar una bolsa sin tener que pedirla, y las tarjetas regalo son un detalle fácil. Que sea pequeña: unos pocos productos, fotos claras y pago con tarjeta. No hace falta una gran tienda online para que merezca la pena.</p>

<h2>Fotos que dan ganas de ir</h2>
<p>El café entra por los ojos, y el ambiente de una buena cafetería también. No necesitas muchas fotos, pero tienen que ser buenas: el café desde arriba, la barra con la bollería, la sala con luz suave de mañana y una de la fachada para que te reconozcan desde la calle. La luz natural gana siempre al flash.</p>
<p>Evita las fotos de banco de imágenes con lattes genéricos. Se nota, y hace que una cafetería real parezca una cadena. Si todavía no puedes organizar una sesión, unas cuantas fotos con el móvil, junto a una ventana, valen más que imágenes prestadas.</p>

<h2>Que Google diga lo mismo</h2>
<p>La mayoría de la gente verá tu <a href="/es/blog/aparecer-en-google-maps">ficha de Google</a> antes que tu web. Mantén el horario, la dirección y el teléfono idénticos en los dos sitios, sube buenas fotos a la ficha y enlaza desde ella a tu carta.</p>

<h2>Pequeña y siempre al día</h2>
<p>Una cafetería no necesita una web grande. Una página bien hecha, o unas pocas, con el horario correcto, una gran carta y detalles honestos, funciona mejor que una web enorme que se queda anticuada. Lo importante es que cambie el mismo día que cambia el horario o llega una tarta nueva.</p>
<p>Diseñamos <a href="/es/cafeterias">webs para cafeterías</a> que hacen exactamente esto, en español y en inglés. <a href="/es/contacto">Cuéntanos cómo es tu cafetería</a> y te diremos qué merece la pena hacer y qué no.</p>
`,
    faqs: [
      { q: '¿Una cafetería pequeña necesita web?', a: 'Una sencilla, sí. Una sola página con el horario correcto, tu carta y cómo encontrarte responde a lo que se pregunta la gente antes de ir, y le da a Google una fuente fiable de tus datos.' },
      { q: '¿Debería ofrecer pedidos online?', a: 'Solo si tu hora punta convierte las colas en un problema real. Para muchas cafeterías de barrio, un horario correcto y una buena carta importan mucho más que pedir para recoger.' },
      { q: '¿Qué pongo en la página de inicio de mi cafetería?', a: 'El horario de hoy, una gran foto, una frase sobre lo que te hace diferente, tu dirección y un enlace a la carta. Lo demás puede ir más abajo.' },
      { q: '¿Puedo vender café en grano en mi web?', a: 'Sí. Para la mayoría de cafeterías basta con una pequeña tienda con unos pocos productos y pago con tarjeta, y las tarjetas regalo son un extra sencillo.' },
    ],
  },
]
