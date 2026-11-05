import type { Article } from '../types'

const group = 'google-maps'
const base = { group, sector: 'general' as const, coverImage: '', coverAlt: '', status: 'published' as const, author: 'Zevu' }

export const googleMaps: Article[] = [
  {
    ...base,
    id: 'seed-google-maps-en',
    locale: 'en',
    slug: 'restaurant-on-google-maps',
    title: 'How to get your restaurant on Google Maps (and stay there)',
    metaTitle: 'How to Get Your Restaurant on Google Maps in Spain',
    metaDescription: 'How to get your restaurant on Google Maps, step by step: claim your profile, pick the right category, fix your hours and earn better reviews.',
    focusKeyword: 'restaurant on Google Maps',
    excerpt: 'For many guests, your Google listing is the first and only thing they see before they decide. Here’s how to set it up properly and keep it working for you.',
    publishAt: '2026-11-03T09:10:00.000Z',
    updatedAt: '2026-11-03T09:10:00.000Z',
    body: `
<p>When someone searches “tapas near me” or “breakfast” on their phone, Google shows a map with a handful of places before any website. Getting your restaurant on Google Maps, with a listing that looks alive and trustworthy, is often the single biggest thing you can do for walk-ins and bookings.</p>
<p>The listing is called a <strong>Google Business Profile</strong>. It is free, you control it, and it takes an afternoon to set up properly. Here is how to do it, and what keeps it working afterwards.</p>

<h2>Step 1: Put your restaurant on Google Maps</h2>
<p>Search for your business on Google Maps first. There may already be a listing, created automatically or by a guest. If there is, choose the option to claim it. If not, add it yourself from Google Business Profile.</p>
<p>Google will ask you to verify that you really run the business. The method varies: it might be a phone call, a text, an email, a short video of your premises or a postcard with a code. Do this straight away, because an unverified profile can’t be fully edited and is easier for others to change.</p>

<h2>Step 2: Choose the right category</h2>
<p>Your primary category tells Google what you are, and it strongly affects which searches you appear in. Be specific. “Seafood restaurant” or “Tapas bar” beats a generic “Restaurant” if that is what you do. You can add a few secondary categories, but only ones that are genuinely true.</p>

<h2>Step 3: Get the basics exactly right</h2>
<p>Google’s own guidance says local results are based on relevance, distance and prominence. You can’t change your distance from the searcher, but you can make your information complete and consistent:</p>
<ul>
<li><strong>Name:</strong> your real business name, nothing added. Stuffing keywords into the name breaks Google’s rules and can get the profile suspended.</li>
<li><strong>Address and phone:</strong> identical to your website, character for character.</li>
<li><strong>Opening hours:</strong> including special hours for holidays, August and any closures. This matters more than almost anything else.</li>
<li><strong>Website, menu and booking links:</strong> point them to the right pages on your own site, not to a PDF.</li>
<li><strong>Attributes:</strong> terrace, wheelchair access, vegetarian options, dogs welcome. Guests filter by these.</li>
</ul>

<h2>Step 4: Photos that make people hungry</h2>
<p>Listings with recent, good photos simply look more alive. Add your best dishes, the room at a busy moment, the terrace, the outside so people recognise you from the street, and your team. Replace dark or out-of-date photos, and add new ones every few weeks so the profile never looks abandoned.</p>

<h2>Step 5: Reviews, the right way</h2>
<p>Reviews are part of what Google calls prominence, and they are what guests read before they choose. The way to get more is simple: ask. A small card on the table or with the bill, or a QR code that links straight to your review page, works far better than hoping.</p>
<p>Reply to reviews, good and bad. Thank people briefly by name. For a bad review, stay calm, apologise for the experience, explain what you have changed and invite them back. Future guests read your replies as much as the complaint. Never buy reviews or offer rewards for them: it breaks Google’s policies and guests can usually tell.</p>

<h2>Step 6: Keep it in sync with your website</h2>
<p>Google cross-checks your profile against your website. When the hours, address and phone match everywhere, Google has more confidence in them. When they don’t, it may even overwrite your information with what it finds elsewhere.</p>
<p>That is one reason we always set up the Google profile together with every <a href="/restaurants">restaurant website</a> we build: one set of facts, kept identical in both places. Our guide to <a href="/blog/restaurant-website">what a restaurant website needs</a> covers the website side.</p>

<h2>A monthly 10-minute routine</h2>
<ol>
<li>Check your hours, and add special hours for any upcoming holidays.</li>
<li>Reply to every new review.</li>
<li>Add two or three new photos.</li>
<li>Answer any questions people have asked on your profile.</li>
<li>Check that the menu and booking links still work.</li>
</ol>
<p>A listing that is complete, accurate and active is what keeps a restaurant on Google Maps showing up week after week. Done every month, this routine keeps it fresh, which is exactly what guests and Google both reward. If you would rather have it set up properly for you, <a href="/contact">get in touch</a>.</p>
`,
    faqs: [
      { q: 'Is it free to put my restaurant on Google Maps?', a: 'Yes. A Google Business Profile is free to create and manage. You only pay if you choose to run Google ads, which is optional.' },
      { q: 'How long does Google verification take?', a: 'It depends on the method Google offers you. Phone, text or email can be instant, while a postcard can take a couple of weeks. Video verification is usually reviewed within a few days.' },
      { q: 'Can I add keywords to my business name to rank higher?', a: 'No. Google’s guidelines require your real business name. Adding extra words like “best tapas Málaga” can get your profile suspended.' },
      { q: 'Should I reply to negative reviews?', a: 'Yes, calmly and briefly. Apologise for the experience, mention what you have changed and invite them back. Future guests judge you by how you respond.' },
    ],
  },
  {
    ...base,
    id: 'seed-google-maps-es',
    locale: 'es',
    slug: 'aparecer-en-google-maps',
    title: 'Cómo aparecer en Google Maps: guía para restaurantes y bares',
    metaTitle: 'Cómo aparecer en Google Maps: guía para restaurantes',
    metaDescription: 'Cómo aparecer en Google Maps con tu restaurante, bar o cafetería: reclama tu ficha, elige la categoría, corrige el horario y consigue reseñas.',
    focusKeyword: 'aparecer en Google Maps',
    excerpt: 'Para muchos clientes, tu ficha de Google es lo primero y lo único que ven antes de decidir. Así se configura bien y se mantiene trabajando para ti.',
    publishAt: '2026-11-03T09:15:00.000Z',
    updatedAt: '2026-11-03T09:15:00.000Z',
    body: `
<p>Cuando alguien busca “tapas cerca de mí” o “desayunos” en el móvil, Google enseña un mapa con unos cuantos locales antes que cualquier web. Aparecer en Google Maps con una ficha que se vea viva y fiable es, muchas veces, lo que más hace por los clientes que entran sin reserva y por las reservas.</p>
<p>Esa ficha se llama <strong>Perfil de Empresa de Google</strong> (Google Business Profile). Es gratis, la controlas tú y se configura bien en una tarde. Así se hace, y esto es lo que la mantiene funcionando después.</p>

<h2>Paso 1: reclama tu ficha para aparecer en Google Maps</h2>
<p>Busca primero tu negocio en Google Maps. Puede que ya exista una ficha, creada automáticamente o por algún cliente. Si existe, elige la opción de reclamarla. Si no, créala tú desde Google Business Profile.</p>
<p>Google te pedirá que verifiques que de verdad llevas el negocio. El método varía: una llamada, un SMS, un correo, un vídeo corto del local o una postal con un código. Hazlo cuanto antes, porque una ficha sin verificar no se puede editar del todo y es más fácil que otros la modifiquen.</p>

<h2>Paso 2: elige bien la categoría</h2>
<p>La categoría principal le dice a Google qué eres y pesa mucho en las búsquedas en las que apareces. Sé concreto. “Marisquería” o “Bar de tapas” funciona mejor que un genérico “Restaurante” si es lo que haces. Puedes añadir alguna categoría secundaria, pero solo si es verdad.</p>

<h2>Paso 3: los datos básicos, sin un error</h2>
<p>Según la propia Google, los resultados locales dependen de la relevancia, la distancia y la prominencia. No puedes cambiar a qué distancia está quien busca, pero sí que tus datos estén completos y coherentes:</p>
<ul>
<li><strong>Nombre:</strong> el nombre real del negocio, sin añadidos. Meter palabras clave en el nombre va contra las normas de Google y puede suponer la suspensión de la ficha.</li>
<li><strong>Dirección y teléfono:</strong> idénticos a los de tu web, letra por letra.</li>
<li><strong>Horario:</strong> con horarios especiales para festivos, agosto y cualquier cierre. Esto importa más que casi cualquier otra cosa.</li>
<li><strong>Enlaces a la web, la carta y las reservas:</strong> que lleven a las páginas correctas de tu propia web, no a un PDF.</li>
<li><strong>Atributos:</strong> terraza, acceso para silla de ruedas, opciones vegetarianas, se admiten perros. Los clientes filtran por ellos.</li>
</ul>

<h2>Paso 4: fotos que abren el apetito</h2>
<p>Una ficha con fotos recientes y buenas, sencillamente, parece más viva. Sube tus mejores platos, la sala en un momento de ambiente, la terraza, la fachada para que te reconozcan desde la calle y a tu equipo. Sustituye las fotos oscuras o antiguas y añade nuevas cada pocas semanas para que la ficha nunca parezca abandonada.</p>

<h2>Paso 5: reseñas, como se debe</h2>
<p>Las reseñas forman parte de esa prominencia, y son lo que lee el cliente antes de elegir. La forma de conseguir más es sencilla: pedirlas. Una tarjeta en la mesa o con la cuenta, o un código QR que lleve directo a tu página de reseñas, funciona mucho mejor que esperar a que lleguen solas.</p>
<p>Responde a todas, buenas y malas. Da las gracias en pocas palabras. Ante una mala reseña, mantén la calma, discúlpate por la experiencia, explica qué has cambiado e invita a volver. Los futuros clientes leen tu respuesta tanto como la queja. Nunca compres reseñas ni ofrezcas premios a cambio: va contra las políticas de Google y se nota.</p>

<h2>Paso 6: que coincida con tu web</h2>
<p>Google compara tu ficha con tu web. Cuando el horario, la dirección y el teléfono coinciden en todas partes, Google confía más en ellos. Cuando no, puede incluso sustituir tus datos por lo que encuentre en otro sitio.</p>
<p>Por eso configuramos siempre la ficha de Google junto con cada <a href="/es/restaurantes">web para restaurantes</a> que hacemos: un único conjunto de datos, idéntico en los dos sitios. Nuestra guía sobre <a href="/es/blog/pagina-web-para-restaurante">qué necesita la página web de un restaurante</a> cubre la parte de la web.</p>

<h2>Rutina mensual de 10 minutos</h2>
<ol>
<li>Revisa el horario y añade horarios especiales para los próximos festivos.</li>
<li>Responde a todas las reseñas nuevas.</li>
<li>Sube dos o tres fotos nuevas.</li>
<li>Contesta las preguntas que te hayan dejado en la ficha.</li>
<li>Comprueba que los enlaces a la carta y a las reservas siguen funcionando.</li>
</ol>
<p>Hecho cada mes, esto mantiene tu ficha fresca y correcta, que es justo lo que premian tanto los clientes como Google. Si prefieres que te la dejemos bien configurada, <a href="/es/contacto">escríbenos</a>.</p>
`,
    faqs: [
      { q: '¿Es gratis aparecer en Google Maps?', a: 'Sí. Crear y gestionar un Perfil de Empresa de Google es gratis. Solo pagas si decides hacer anuncios en Google, que es opcional.' },
      { q: '¿Cuánto tarda la verificación de Google?', a: 'Depende del método que te ofrezca Google. El teléfono, el SMS o el correo pueden ser inmediatos, mientras que una postal puede tardar un par de semanas. La verificación por vídeo suele revisarse en pocos días.' },
      { q: '¿Puedo añadir palabras clave al nombre para salir más arriba?', a: 'No. Las directrices de Google exigen el nombre real del negocio. Añadir palabras como “mejores tapas de Málaga” puede hacer que suspendan tu ficha.' },
      { q: '¿Debo responder a las reseñas negativas?', a: 'Sí, con calma y brevemente. Discúlpate por la experiencia, menciona qué has cambiado e invita a volver. Los futuros clientes te juzgan por cómo respondes.' },
    ],
  },
]
