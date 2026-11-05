import type { Article } from '../types'

const group = 'restaurant-website'
const base = { group, sector: 'restaurants' as const, coverImage: '', coverAlt: '', status: 'published' as const, author: 'Zevu' }

export const restaurantWebsite: Article[] = [
  {
    ...base,
    id: 'seed-restaurant-website-en',
    locale: 'en',
    slug: 'restaurant-website',
    title: 'Restaurant website essentials: what you need to fill tables',
    metaTitle: 'Restaurant Website Essentials: What You Need to Fill Tables',
    metaDescription: 'What a restaurant website really needs in Spain: a menu that opens on a phone, booking in one tap, hours you can trust, and English and Spanish versions.',
    focusKeyword: 'restaurant website',
    excerpt: 'Most guests decide where to eat on their phone, in under a minute. Here’s what your restaurant website needs to win that minute, and what you can safely leave out.',
    publishAt: '2026-11-02T09:10:00.000Z',
    updatedAt: '2026-11-02T09:10:00.000Z',
    body: `
<p>A restaurant website has one job: turn someone who is hungry and curious into someone who has booked a table, or is walking through your door. Everything on the page should help with that, and anything that doesn’t is clutter.</p>
<p>That sounds obvious, yet most restaurant sites in Spain still make guests work far too hard. The menu is a PDF that takes ages to load, the booking button is hidden, and the opening hours say one thing while Google says another. This guide covers what actually matters, in the order guests look for it.</p>

<h2>Start with the phone, not the desktop</h2>
<p>Picture how people really find you: standing on a street in the old town, looking at two or three options, deciding quickly. They are on a phone, often on a patchy mobile connection, sometimes in a language that isn’t Spanish.</p>
<p>So design for that moment first. Your restaurant website should load quickly on mobile data, show a great photo and what kind of food you serve straight away, and keep the two most important actions within reach of a thumb: <strong>book a table</strong> and <strong>see the menu</strong>. If someone has to pinch, zoom or scroll to find either, you will lose some of them to the place next door.</p>

<h2>The five things every restaurant website needs</h2>
<ol>
<li><strong>A menu that opens instantly.</strong> A real web page, not a PDF. It loads faster, reads well on a phone, Google can understand it, and you can change a price in a minute.</li>
<li><strong>Booking in one tap.</strong> Connect the reservation system you already use, or a simple form that sends bookings straight to your phone. Put the button at the top and keep it visible.</li>
<li><strong>Opening hours you can trust.</strong> Including holidays and summer changes. Wrong hours are one of the fastest ways to lose a guest for good.</li>
<li><strong>Location and how to get there.</strong> A map, the nearest landmark, and parking or public transport tips if they help.</li>
<li><strong>Proper photos.</strong> Your food, your room and your people. Good photography does more for bookings than almost any other change.</li>
</ol>

<h2>Speak your guests’ language</h2>
<p>In much of Spain a large share of your potential guests are visitors. A restaurant website in Spanish only quietly turns many of them away, and one that only works in English feels like a tourist trap to locals.</p>
<p>The answer is a site with proper English and Spanish versions of every page, not a translation widget bolted on top. Each version gets its own address, so Google can show the right one to the right person. In tourist-heavy areas, adding German, French or Dutch can be worth it too.</p>

<h2>Make Google and your website agree</h2>
<p>Many guests never reach your website at all: they decide from your Google listing. That is why your website and your <a href="/blog/restaurant-on-google-maps">Google Business Profile</a> need to tell exactly the same story, with the same hours, the same phone number and the same address.</p>
<p>When they match, Google trusts your information more and is more likely to show you for searches like “dinner near me”. When they don’t, guests turn up to a closed door and leave a one-star review.</p>

<h2>What you can safely skip</h2>
<p>You don’t need an intro video, a slideshow of twelve photos, a page about your history that nobody reads, or a newsletter pop-up the moment someone arrives. These slow the page down and get in the way of booking.</p>
<p>A short “about us” paragraph with real personality is enough. Guests are deciding where to eat tonight, not reading a biography.</p>

<h2>Keep it easy to update</h2>
<p>The best restaurant website is the one that stays accurate. If changing the menu means emailing a designer and waiting a week, it won’t happen, and the site slowly goes out of date.</p>
<p>Make sure you can edit the menu, prices, hours and photos yourself in a few minutes. That is the difference between a website that works for years and one that is embarrassing after six months.</p>

<h2>A quick checklist</h2>
<ul>
<li>Loads quickly on a phone with mobile data</li>
<li>Menu as a web page, with prices and allergens</li>
<li>Booking button visible at the top of every page</li>
<li>Hours, address and phone identical to Google</li>
<li>English and Spanish versions of every page</li>
<li>Recent, good-quality photos</li>
<li>You can update everything yourself</li>
</ul>
<p>If your current site misses more than a couple of these, it is probably costing you bookings. We build <a href="/restaurants">websites for restaurants</a> that tick every box, and you can <a href="/contact">tell us about your place</a> for an honest opinion and a fixed price.</p>
`,
    faqs: [
      { q: 'Does a restaurant still need its own website if it has Instagram?', a: 'Yes. Instagram is great for atmosphere, but it is a poor place to check opening hours, read a menu or book a table, and you don’t control it. A website is the one place you own, and it is what Google links to from your listing.' },
      { q: 'Should my menu be a PDF or a web page?', a: 'A web page. PDFs are slow and awkward on phones, hard for Google to read, and painful to update. A web page menu loads instantly and you can change a price in a minute.' },
      { q: 'How long does it take to build a restaurant website?', a: 'A simple one-page site can be ready in about two weeks. A full site with menu, bookings and two languages usually takes three to four weeks, and most of that time is gathering photos and text.' },
      { q: 'Does my website need to be in English and Spanish?', a: 'In most of Spain, yes. Locals and visitors both search for places to eat, and each group is more likely to book when the site speaks their language.' },
    ],
  },
  {
    ...base,
    id: 'seed-restaurant-website-es',
    locale: 'es',
    slug: 'pagina-web-para-restaurante',
    title: 'Página web para restaurante: lo que necesitas para llenar mesas',
    metaTitle: 'Página web para restaurante: qué necesita para llenar mesas',
    metaDescription: 'Qué necesita una página web para restaurante: una carta que abra en el móvil, reservar con un toque, horarios fiables y versión en español e inglés.',
    focusKeyword: 'página web para restaurante',
    excerpt: 'Casi todo el mundo decide dónde comer con el móvil, en menos de un minuto. Esto es lo que necesita la página web de tu restaurante para ganar ese minuto, y lo que puedes dejar fuera.',
    publishAt: '2026-11-02T09:15:00.000Z',
    updatedAt: '2026-11-02T09:15:00.000Z',
    body: `
<p>Una página web para restaurante tiene un único trabajo: convertir a alguien con hambre y curiosidad en alguien que ha reservado mesa o que ya está entrando por la puerta. Todo lo que aparece en la página debería ayudar a eso, y lo que no ayuda, estorba.</p>
<p>Parece evidente, pero muchas webs de restaurantes en España siguen poniéndoselo difícil al cliente. La carta es un PDF que tarda una eternidad, el botón de reservar está escondido y el horario dice una cosa mientras Google dice otra. Esta guía repasa lo que de verdad importa, en el orden en que lo busca el cliente.</p>

<h2>Empieza por el móvil, no por el ordenador</h2>
<p>Piensa en cómo te encuentra la gente: en plena calle, comparando dos o tres opciones y decidiendo rápido. Están con el móvil, a menudo con poca cobertura y, a veces, en un idioma que no es el español.</p>
<p>Diseña primero para ese momento. La página web de tu restaurante debe cargar deprisa con datos móviles, enseñar desde el principio una buena foto y qué tipo de cocina ofreces, y dejar a mano las dos acciones clave: <strong>reservar mesa</strong> y <strong>ver la carta</strong>. Si alguien tiene que hacer zoom o bajar mucho para encontrarlas, parte de esa gente acabará en el local de al lado.</p>

<h2>Las cinco cosas que necesita una página web para restaurante</h2>
<ol>
<li><strong>Una carta que se abra al instante.</strong> Una página de verdad, no un PDF. Carga más rápido, se lee bien en el móvil, Google la entiende y puedes cambiar un precio en un minuto.</li>
<li><strong>Reservar con un toque.</strong> Conecta el sistema de reservas que ya usas o un formulario sencillo que te mande cada reserva al móvil. Pon el botón arriba y que esté siempre visible.</li>
<li><strong>Un horario del que fiarse.</strong> Con festivos y cambios de verano incluidos. Un horario equivocado es una de las formas más rápidas de perder a un cliente para siempre.</li>
<li><strong>Dónde estás y cómo llegar.</strong> Un mapa, la referencia más cercana y, si ayuda, dónde aparcar o qué transporte público coger.</li>
<li><strong>Buenas fotos.</strong> Tus platos, tu sala y tu equipo. Una buena fotografía hace más por las reservas que casi cualquier otro cambio.</li>
</ol>

<h2>Habla el idioma de tus clientes</h2>
<p>En buena parte de España, muchos de tus posibles clientes están de visita. Una web solo en español deja fuera a muchos de ellos sin que te des cuenta, y una que solo funciona en inglés parece pensada únicamente para turistas.</p>
<p>La solución es tener versión en español y en inglés de cada página, no un traductor automático pegado encima. Cada versión tiene su propia dirección, para que Google muestre la adecuada a cada persona. En zonas muy turísticas también puede compensar añadir alemán, francés u holandés.</p>

<h2>Que Google y tu web digan lo mismo</h2>
<p>Muchos clientes ni siquiera llegan a tu web: deciden desde tu ficha de Google. Por eso tu página y tu <a href="/es/blog/aparecer-en-google-maps">ficha de Google Business</a> tienen que contar exactamente lo mismo: el mismo horario, el mismo teléfono y la misma dirección.</p>
<p>Cuando coinciden, Google confía más en tus datos y es más probable que te muestre en búsquedas como “cenar cerca de mí”. Cuando no coinciden, el cliente se encuentra la persiana bajada y deja una reseña de una estrella.</p>

<h2>Lo que puedes dejar fuera</h2>
<p>No necesitas un vídeo de bienvenida, un carrusel de doce fotos, una página de historia que nadie lee ni una ventana para suscribirse a la newsletter nada más entrar. Todo eso ralentiza la página y se interpone entre el cliente y la reserva.</p>
<p>Basta con un párrafo breve sobre vosotros, con personalidad. El cliente está decidiendo dónde cenar esta noche, no leyendo una biografía.</p>

<h2>Que sea fácil de actualizar</h2>
<p>La mejor página web para restaurante es la que se mantiene al día. Si cambiar la carta significa escribir a un diseñador y esperar una semana, no se hará, y la web se quedará anticuada poco a poco.</p>
<p>Asegúrate de poder editar tú mismo la carta, los precios, el horario y las fotos en pocos minutos. Esa es la diferencia entre una web que funciona durante años y otra que da vergüenza a los seis meses.</p>

<h2>Lista rápida de comprobación</h2>
<ul>
<li>Carga rápido en el móvil con datos</li>
<li>Carta como página web, con precios y alérgenos</li>
<li>Botón de reservar visible arriba en todas las páginas</li>
<li>Horario, dirección y teléfono idénticos a Google</li>
<li>Versión en español y en inglés de cada página</li>
<li>Fotos recientes y de calidad</li>
<li>Puedes actualizarlo todo tú</li>
</ul>
<p>Si tu web actual falla en más de un par de puntos, probablemente te está costando reservas. Hacemos <a href="/es/restaurantes">webs para restaurantes</a> que cumplen con todo, y puedes <a href="/es/contacto">contarnos cómo es tu local</a> para recibir una opinión sincera y un precio cerrado.</p>
`,
    faqs: [
      { q: '¿Un restaurante necesita web propia si ya tiene Instagram?', a: 'Sí. Instagram está muy bien para transmitir ambiente, pero es un mal sitio para consultar el horario, leer la carta o reservar, y no lo controlas tú. La web es el único espacio que es tuyo, y es lo que enlaza Google desde tu ficha.' },
      { q: '¿La carta debe ser un PDF o una página web?', a: 'Una página web. Los PDF son lentos e incómodos en el móvil, Google los lee mal y cuesta actualizarlos. Una carta en la web carga al instante y puedes cambiar un precio en un minuto.' },
      { q: '¿Cuánto se tarda en hacer la web de un restaurante?', a: 'Una web sencilla de una página puede estar lista en unas dos semanas. Una web completa con carta, reservas y dos idiomas suele llevar de tres a cuatro semanas, y la mayor parte del tiempo se va en reunir fotos y textos.' },
      { q: '¿Mi web tiene que estar en español y en inglés?', a: 'En la mayor parte de España, sí. Tanto vecinos como visitantes buscan dónde comer, y cada grupo reserva más cuando la web habla su idioma.' },
    ],
  },
]
