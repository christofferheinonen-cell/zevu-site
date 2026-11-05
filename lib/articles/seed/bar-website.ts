import type { Article } from '../types'

const group = 'bar-website'
const base = { group, sector: 'bars' as const, coverImage: '', coverAlt: '', status: 'published' as const, author: 'Zevu' }

export const barWebsite: Article[] = [
  {
    ...base,
    id: 'seed-bar-website-en',
    locale: 'en',
    slug: 'bar-website',
    title: 'Bar website ideas that fill quiet weeknights',
    metaTitle: 'Bar Website Ideas That Fill Quiet Weeknights',
    metaDescription: 'A bar website that gives people a reason to come tonight: a live events calendar, happy hour up front, a drinks menu with personality and easy group bookings.',
    focusKeyword: 'bar website',
    excerpt: 'Weekends often take care of themselves. A good bar website gives people a reason to come on a Tuesday. Here’s what to put on it.',
    publishAt: '2026-11-05T08:40:00.000Z',
    updatedAt: '2026-11-05T08:40:00.000Z',
    body: `
<p>Most bars don’t need help filling a Saturday. The hard part is Tuesday, Wednesday and the early evening. A bar website can’t make people thirsty, but it can give them a reason to come tonight, and make it easy to bring friends.</p>

<h2>Lead with what’s happening tonight</h2>
<p>People rarely visit a bar website to read about the owners. They want to know what’s on. Make the first screen answer that: tonight’s live music, the quiz, the match, the DJ, or simply the happy hour. If nothing special is happening, say what makes a normal night good.</p>
<p>An events calendar you can update yourself in a minute is the single most useful feature of a bar website. It turns one-off Instagram stories that vanish in 24 hours into something people can find, plan around and share in the group chat.</p>

<h2>Put happy hour on the first screen</h2>
<p>An early-evening offer is what moves people from “later” to “now”. Show the times and the offer clearly, near the top, on every page. If it changes by day, show today’s automatically, so nobody has to work it out.</p>

<h2>A drinks menu with personality</h2>
<p>A list of ingredients doesn’t sell a cocktail. A name, one line of story and a good photo does. Show your signature drinks first, then the classics, wines by the glass, beers on tap and alcohol-free options, all with prices. Keep it as a proper page so it loads fast and you can change it the moment a drink comes off the list.</p>

<h2>Make group bookings effortless</h2>
<p>Birthdays, leaving drinks and hen and stag parties are some of the most valuable nights a bar gets, and often the hardest to organise. A simple form that asks for the date, group size, budget and any special requests, and sends it straight to you, saves endless messages across five different apps.</p>

<h2>Get your late hours right on Google</h2>
<p>Late opening hours are where Google listings most often go wrong, especially for hours past midnight. Check that your <a href="/blog/restaurant-on-google-maps">Google Business Profile</a> shows them correctly, add special hours for holidays, and make sure your website says exactly the same. People searching “bars open now” at 1am will trust whichever source looks right.</p>

<h2>Look like the bar</h2>
<p>A cocktail bar with a moody, low-lit room shouldn’t have a website that looks like a dental clinic. The design of your bar website should feel like walking in: the same colours, the same attitude, the same kind of music in spirit. That is what makes people want to share it.</p>

<h2>Photos and video that sell the night</h2>
<p>A bar is an atmosphere, and atmosphere is hard to describe in words. Show it instead: the room when it’s full, the bartender mid-pour, the terrace at sunset, a band on your stage. Short, silent video clips that loop on the page can work well, as long as they stay small enough to load quickly on a phone.</p>
<p>Keep the photos current. If the website shows last year’s decor, or a terrace you no longer have, guests feel misled the moment they arrive.</p>
<p>The same goes for the drinks. If a photo shows a cocktail, it should be one that is actually on the menu, made the way you make it. Guests often order the drink they saw online, and it should look the same when it arrives.</p>

<h2>Make your bar website easy to find</h2>
<p>People search for things like “cocktail bar old town”, “live music tonight” or “bar with terrace”. Use the words your guests use in the headings and text of your bar website, mention your neighbourhood by name, and give every regular event its own clear title and date. Link your website from Google, Instagram and any event listings you use, so all roads lead to the same place.</p>

<h2>A simple bar website structure that works</h2>
<ol>
<li>Tonight: what’s on, plus happy hour</li>
<li>This week: the events calendar</li>
<li>Drinks: signature cocktails first</li>
<li>Groups: one booking form</li>
<li>Find us: hours, map, and how late you’re open</li>
</ol>
<p>That is often all a bar needs to stay busy beyond the weekend. We build <a href="/bars">websites for bars</a> around exactly this, in English and Spanish. <a href="/contact">Tell us about your bar</a> and we’ll show you how it could look.</p>
`,
    faqs: [
      { q: 'What should be on a bar website?', a: 'What’s on tonight, your happy hour, an events calendar, a drinks menu with prices, a group booking form, and your hours and location. Most bars need little more.' },
      { q: 'Can I update the events calendar myself?', a: 'You should be able to. Adding an event should take about a minute: a title, a date and a photo.' },
      { q: 'Should my bar website link to Instagram?', a: 'Yes, but as a supporting channel. Instagram is great for atmosphere, while your website is where people check hours, see what’s on and book.' },
      { q: 'How do I show opening hours past midnight on Google?', a: 'Set the closing time for the following morning in your Google Business Profile, check how it displays, and add special hours for holidays. Keep your website identical.' },
    ],
  },
  {
    ...base,
    id: 'seed-bar-website-es',
    locale: 'es',
    slug: 'web-para-bares',
    title: 'Web para bares: ideas para llenar las noches entre semana',
    metaTitle: 'Web para bares: ideas para llenar las noches entre semana',
    metaDescription: 'Una web para bares que da motivos para venir esta noche: agenda de eventos, happy hour bien visible, carta de copas con personalidad y reservas de grupo.',
    focusKeyword: 'web para bares',
    excerpt: 'Los fines de semana suelen llenarse solos. Una buena web para bares da motivos para venir un martes. Esto es lo que debería tener.',
    publishAt: '2026-11-05T08:45:00.000Z',
    updatedAt: '2026-11-05T08:45:00.000Z',
    body: `
<p>A la mayoría de bares no les cuesta llenar un sábado. Lo difícil es el martes, el miércoles y la primera hora de la tarde. Una web para bares no le da sed a nadie, pero sí puede dar un motivo para venir esta noche y facilitar que la gente traiga a sus amigos.</p>

<h2>Empieza por lo que pasa esta noche</h2>
<p>Casi nadie entra en la web de un bar para leer sobre los dueños. Quieren saber qué hay. Haz que la primera pantalla lo responda: la música en directo de esta noche, el quiz, el partido, el DJ o, simplemente, el happy hour. Si no hay nada especial, cuenta qué hace buena una noche normal.</p>
<p>Una agenda de eventos que actualizas tú en un minuto es lo más útil que puede tener una web para bares. Convierte las stories de Instagram que desaparecen en 24 horas en algo que la gente puede encontrar, planear y compartir en el grupo.</p>

<h2>El happy hour, en la primera pantalla</h2>
<p>Una oferta a primera hora de la tarde es lo que hace pasar a la gente del “luego” al “ahora”. Enseña el horario y la oferta con claridad, arriba, en todas las páginas. Si cambia según el día, muestra automáticamente la de hoy, para que nadie tenga que calcularlo.</p>

<h2>Una carta de copas con personalidad</h2>
<p>Una lista de ingredientes no vende un cóctel. Un nombre, una frase con historia y una buena foto, sí. Enseña primero tus cócteles de autor y luego los clásicos, los vinos por copas, las cervezas de barril y las opciones sin alcohol, todo con precio. Que sea una página de verdad, para que cargue rápido y puedas cambiarla en cuanto una copa sale de la carta.</p>

<h2>Que reservar para un grupo sea facilísimo</h2>
<p>Cumpleaños, despedidas y afterworks son de las noches que más valen para un bar, y muchas veces las más difíciles de organizar. Un formulario sencillo que pida la fecha, el número de personas, el presupuesto y cualquier petición especial, y que te llegue directo, ahorra mensajes sin fin por cinco apps distintas.</p>

<h2>Tu horario de noche, bien puesto en Google</h2>
<p>Los horarios de cierre tarde son donde más fallan las fichas de Google, sobre todo pasada la medianoche. Comprueba que tu <a href="/es/blog/aparecer-en-google-maps">ficha de Google</a> los muestra bien, añade horarios especiales para festivos y asegúrate de que tu web dice exactamente lo mismo. Quien busca “bares abiertos ahora” a la una de la mañana se fiará de la fuente que parezca correcta.</p>

<h2>Que la web se parezca al bar</h2>
<p>Una coctelería con una sala oscura y con ambiente no debería tener una web que parezca la de una clínica dental. El diseño de tu web para bares debería transmitir lo mismo que entrar por la puerta: los mismos colores, la misma actitud, el mismo tipo de música, en espíritu. Eso es lo que hace que la gente la comparta.</p>

<h2>Fotos y vídeo que venden la noche</h2>
<p>Un bar es un ambiente, y el ambiente cuesta describirlo con palabras. Mejor enséñalo: la sala llena, el bartender sirviendo, la terraza al atardecer, un grupo en tu escenario. Los vídeos cortos y sin sonido en bucle funcionan bien, siempre que pesen poco y carguen rápido en el móvil.</p>
<p>Mantén las fotos al día. Si la web enseña la decoración del año pasado o una terraza que ya no tienes, el cliente se siente engañado nada más llegar.</p>

<h2>Que tu web para bares sea fácil de encontrar</h2>
<p>La gente busca cosas como “coctelería en el centro”, “música en directo esta noche” o “bar con terraza”. Usa las palabras de tus clientes en los títulos y textos de tu web, menciona tu barrio por su nombre y dale a cada evento habitual un título y una fecha claros. Enlaza tu web desde Google, Instagram y cualquier agenda de eventos que uses, para que todos los caminos lleven al mismo sitio.</p>

<h2>Una estructura sencilla que funciona</h2>
<ol>
<li>Esta noche: qué hay, más el happy hour</li>
<li>Esta semana: la agenda de eventos</li>
<li>Copas: primero los cócteles de autor</li>
<li>Grupos: un formulario de reserva</li>
<li>Dónde estamos: horario, mapa y hasta qué hora abrís</li>
</ol>
<p>A menudo, no hace falta más. Hacemos <a href="/es/bares">webs para bares</a> justo con esta idea, en español y en inglés. <a href="/es/contacto">Cuéntanos cómo es tu bar</a> y te enseñamos cómo podría quedar.</p>
`,
    faqs: [
      { q: '¿Qué debe tener la web de un bar?', a: 'Lo que hay esta noche, tu happy hour, una agenda de eventos, una carta de copas con precios, un formulario de reservas de grupo, y tu horario y ubicación. La mayoría de bares no necesita mucho más.' },
      { q: '¿Puedo actualizar yo la agenda de eventos?', a: 'Deberías poder. Añadir un evento debería llevar un minuto: un título, una fecha y una foto.' },
      { q: '¿La web de mi bar debe enlazar a Instagram?', a: 'Sí, pero como canal de apoyo. Instagram es ideal para transmitir ambiente, mientras que la web es donde la gente consulta el horario, ve qué hay y reserva.' },
      { q: '¿Cómo pongo en Google un horario que pasa de medianoche?', a: 'Indica en tu ficha de Google la hora de cierre de la madrugada siguiente, comprueba cómo se muestra y añade horarios especiales para festivos. Mantén tu web idéntica.' },
    ],
  },
]
