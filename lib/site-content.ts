/**
 * All public-site copy lives here so the Spanish version can be a translation
 * of this one file rather than a hunt through components.
 *
 * PRICES and DELIVERY TIMES below are placeholders — set them to your real
 * offer before launch.
 */

export type SectorSlug = 'restaurants' | 'bars' | 'coffee-shops' | 'other-businesses'

export interface Sector {
  slug: SectorSlug
  /** Short label used in nav and cards. */
  label: string
  /** Number shown on the home-page card. */
  index: string
  /** Home-page card line. */
  teaser: string
  /** Detail page. */
  metaTitle: string
  metaDescription: string
  eyebrow: string
  headline: [string, string]
  intro: string
  signs: string[]
  features: { title: string; body: string }[]
  concept: ConceptKey
  faqs: { q: string; a: string }[]
}

export type ConceptKey = 'oleaje' | 'nocturno' | 'almendro'

export const SECTORS: Sector[] = [
  {
    slug: 'restaurants',
    label: 'Restaurants',
    index: '01',
    teaser: 'Bookings, menus that update in minutes, and a first impression as good as your food.',
    metaTitle: 'Websites for Restaurants in Spain | Zevu',
    metaDescription:
      'Restaurant websites with online bookings, menus you edit yourself, allergen info and English + Spanish built in. Designed and built in Spain.',
    eyebrow: 'For restaurants',
    headline: ['A website that books the table', 'before they’ve seen the menu.'],
    intro:
      'Most people decide where to eat on their phone, standing on the street, in under a minute. Your website gets that minute. We make it count: the right photos, a menu that opens instantly, and a booking button that is never more than a thumb away.',
    signs: [
      'Your menu is a PDF that takes ages to open on a phone.',
      'Guests call to ask things your website should answer.',
      'Your Google listing shows old hours or someone else’s photos.',
      'Tourists can’t read your site, so they walk past.',
    ],
    features: [
      { title: 'Online bookings', body: 'Connect the booking system you already use, or we set up a simple one that sends reservations straight to your phone.' },
      { title: 'A menu you edit yourself', body: 'Change a price or add tonight’s special in a minute. No PDFs, no designer, no waiting.' },
      { title: 'Allergens, clearly', body: 'Allergen labels on every dish, so guests know before they ask, and staff aren’t interrupted mid-service.' },
      { title: 'English, Español & more', body: 'Your site speaks your guests’ language. Add German, French or Dutch if your street is full of them.' },
      { title: 'Found on Google Maps', body: 'We set up and polish your Google Business Profile so you appear when someone searches “dinner near me”.' },
      { title: 'Private dining & groups', body: 'A proper enquiry form for birthdays, company dinners and weddings, the bookings worth the most.' },
    ],
    concept: 'oleaje',
    faqs: [
      { q: 'Can you connect my existing booking system?', a: 'Usually, yes. Most booking tools offer a widget or link we can build in so it feels like part of your site. If you don’t have one, we’ll recommend a simple option.' },
      { q: 'Do you take the photos?', a: 'We can direct a shoot with a local photographer or work with photos you already have. Good food photography makes a bigger difference than almost anything else on the page.' },
      { q: 'How hard is it to update the menu?', a: 'You log in, change the text or price, and press save. If you can write a WhatsApp message, you can update your menu.' },
    ],
  },
  {
    slug: 'bars',
    label: 'Bars',
    index: '02',
    teaser: 'Tonight’s plan, sorted: events, happy hour, drinks and group bookings in one place.',
    metaTitle: 'Websites for Bars & Cocktail Bars in Spain | Zevu',
    metaDescription:
      'Bar websites with event calendars, drinks menus, happy hour and group bookings. Bold design that matches the night. Built in Spain.',
    eyebrow: 'For bars',
    headline: ['Make your bar', 'the plan for tonight.'],
    intro:
      'Nobody plans a night out on a website that looks like it closed in 2016. People want to see the room, the drinks and what’s on, and then they want to send it to the group chat. We design bar sites that are worth sharing.',
    signs: [
      'Your events only exist as Instagram stories that vanish in 24 hours.',
      'Groups message you on five different apps to book a table.',
      'Your opening hours online are wrong after midnight.',
      'Your site doesn’t look anything like the bar.',
    ],
    features: [
      { title: 'What’s on, always current', body: 'Live music, DJs, quiz nights, the match. One calendar you update, shown everywhere.' },
      { title: 'Drinks menu that sells', body: 'Signature cocktails with a line of story each. It works better than a list of ingredients.' },
      { title: 'Happy hour, front and centre', body: 'The offer that brings people in at 7 instead of 11, on the first screen.' },
      { title: 'Group & party bookings', body: 'Birthdays, hen dos, after-work. One form, every detail you need, straight to your inbox.' },
      { title: 'Late hours on Google', body: 'Accurate hours, the right category, and real photos, so you show up for “bars open now”.' },
      { title: 'Design with an attitude', body: 'Your bar has a personality. Your site should have the same one, not a template’s.' },
    ],
    concept: 'nocturno',
    faqs: [
      { q: 'Can I update the events myself?', a: 'Yes. Adding an event takes about a minute: title, date, a photo, done. It shows on your site straight away.' },
      { q: 'Can you link it to our Instagram?', a: 'We can show your latest posts on the site and make sure everything points people back to the same place to book.' },
      { q: 'We’re a small bar. Is this overkill?', a: 'Our smallest package is a single, sharp page with your hours, drinks, events and a way to book. Many bars need nothing more.' },
    ],
  },
  {
    slug: 'coffee-shops',
    label: 'Coffee shops',
    index: '03',
    teaser: 'Hours that are always right, a menu worth the walk, and ordering ahead if you want it.',
    metaTitle: 'Websites for Coffee Shops & Cafés in Spain | Zevu',
    metaDescription:
      'Café and coffee shop websites with correct hours, menus, order-ahead and bean shops. Warm, crafted design for specialty coffee. Built in Spain.',
    eyebrow: 'For coffee shops',
    headline: ['The morning ritual', 'starts on their phone.'],
    intro:
      'A café is a habit. People find you once, and then they come back every day if you make it easy. Your website should do the same quiet work: correct hours, a menu worth the walk, and a reason to choose you over the chain on the corner.',
    signs: [
      'People ask on Instagram if you’re open today.',
      'Your beans, brunch or pastries deserve better than a phone photo.',
      'Remote workers don’t know you have wifi and plugs.',
      'You sell beans or merch, but only over the counter.',
    ],
    features: [
      { title: 'Hours you can trust', body: 'Holiday hours, early closes, summer schedules. Change them once and they’re right everywhere.' },
      { title: 'Menu with personality', body: 'Your origin coffees, your brunch, your pastry case, presented like you care about them (because you do).' },
      { title: 'Order ahead', body: 'Optional click-and-collect, so regulars can skip the queue on their way to work.' },
      { title: 'A small online shop', body: 'Sell beans, gift cards or merch to the people who already love your coffee.' },
      { title: 'Laptop-friendly?', body: 'Wifi, plugs, quiet hours, dogs welcome. Tell people the things they actually choose a café for.' },
      { title: 'Found when it matters', body: 'Google Maps set up properly, so you appear for “coffee near me” at 8:47 on a Tuesday.' },
    ],
    concept: 'almendro',
    faqs: [
      { q: 'Do I need online ordering?', a: 'Not necessarily. For many cafés, correct hours and a great menu do most of the work. We’ll tell you honestly whether ordering ahead is worth it for you.' },
      { q: 'Can I sell coffee beans online?', a: 'Yes. We can add a small shop with card payments for beans, gift cards or merch, and it’s easy to manage yourself.' },
      { q: 'We’re opening a new café. When should we start?', a: 'Ideally six to eight weeks before opening, so your site and Google profile are live and collecting interest on day one.' },
    ],
  },
  {
    slug: 'other-businesses',
    label: 'Other businesses',
    index: '04',
    teaser: 'Salons, studios, shops, guesthouses, clinics. Local businesses with a front door.',
    metaTitle: 'Websites for Local Businesses in Spain | Zevu',
    metaDescription:
      'Websites for salons, shops, studios, guesthouses and other local businesses in Spain. Bookings, bilingual content and Google Maps setup.',
    eyebrow: 'For every other front door',
    headline: ['Not a restaurant?', 'We still speak local.'],
    intro:
      'Hospitality is our main thing, but what makes a great restaurant site works for any business people walk into: clear information, beautiful presentation, and an easy way to book or get in touch. Hair salons, yoga studios, boutiques, guesthouses, clinics, tour operators.',
    signs: [
      'Customers find you through word of mouth, but can’t find you online.',
      'You take every booking by phone, even while you’re working.',
      'Your site is a free template you made years ago.',
      'You’re missing out on English-speaking customers.',
    ],
    features: [
      { title: 'Appointments & bookings', body: 'Let customers book a slot themselves, connected to the calendar you already use.' },
      { title: 'Services & prices', body: 'Clear, honest information that answers questions before customers have to call.' },
      { title: 'Bilingual from day one', body: 'English and Spanish, written properly, not run through a translator.' },
      { title: 'Google Maps & reviews', body: 'A polished Google profile and a simple way for happy customers to leave reviews.' },
      { title: 'Fast on every phone', body: 'Your site loads quickly on a patchy 4G connection, because that’s where your customers are.' },
      { title: 'Yours to edit', body: 'Change prices, photos and opening hours yourself, without calling anyone.' },
    ],
    concept: 'almendro',
    faqs: [
      { q: 'What kinds of businesses do you work with?', a: 'Any local business with customers who come through the door: salons, studios, shops, guesthouses, clinics, tour operators, and more.' },
      { q: 'Can customers book appointments online?', a: 'Yes. We connect the booking tool you already use, or recommend one that fits how you work.' },
      { q: 'Do you only work in one city?', a: 'We work with businesses all over Spain. Most of the process happens over a call and WhatsApp, and we meet in person when it helps.' },
    ],
  },
]

export const sectorBySlug = (slug: string) => SECTORS.find(s => s.slug === slug)

/* ------------------------------------------------------------------ */

export const HERO = {
  eyebrow: 'Website studio for hospitality · Spain',
  lead: 'Websites that',
  rotating: ['fill tables.', 'pour more drinks.', 'sell out by noon.', 'bring locals back.'],
  body:
    'Zevu designs and builds fast, beautiful websites for restaurants, bars and coffee shops. Menus you can edit yourself, bookings that land in your inbox, and a Google profile that actually shows up.',
  primary: 'Start a project',
  secondary: 'See the work',
}

export const RECEIPT = [
  'Custom website design',
  'Menu you edit yourself',
  'Online bookings',
  'Google Maps profile',
  'English + Español',
  'Hosting & care',
]

export const MARQUEE = [
  'Tapas bars',
  'Coffee shops',
  'Cocktail bars',
  'Chiringuitos',
  'Bakeries',
  'Wine bars',
  'Brunch spots',
  'Restaurants',
]

export const PROBLEM = {
  eyebrow: 'The honest bit',
  statement: [
    'Your food is excellent.',
    'Your website is a menu PDF that won’t open, a photo from 2019, and opening hours nobody trusts.',
  ],
  body:
    'People judge a place by its phone screen long before they see the room. We fix that, and we make the fix easy to keep up.',
}

export interface Concept {
  key: ConceptKey
  name: string
  kind: string
  place: string
  note: string
}

export const CONCEPTS: Concept[] = [
  { key: 'oleaje', name: 'Taberna Oleaje', kind: 'Seafood restaurant', place: 'Coastal', note: 'Editorial serif, sea-glass blue, a reservation button that never leaves the screen.' },
  { key: 'nocturno', name: 'Nocturno', kind: 'Cocktail bar', place: 'Old town', note: 'Dark, loud and condensed. Tonight’s line-up is the first thing you see.' },
  { key: 'almendro', name: 'Almendro', kind: 'Specialty coffee', place: 'Neighbourhood', note: 'Soft, warm and rounded. Hours, the bean of the week, and order-ahead.' },
]

export const MENU = {
  eyebrow: 'Set menus',
  title: ['Clear prices.', 'No surprises.'],
  note: 'Every package includes design, build, mobile optimisation, Google Business Profile setup, and English + Spanish. Prices exclude IVA.',
  // PLACEHOLDER PRICES — set before launch.
  items: [
    {
      name: 'La Tapa',
      price: '€590',
      sub: 'One sharp page',
      lines: ['Single-page website', 'Menu, hours, location & contact', 'Booking or WhatsApp button', 'Live in about 2 weeks'],
    },
    {
      name: 'El Menú',
      price: '€1,290',
      sub: 'Most places start here',
      featured: true,
      lines: ['Up to 6 pages', 'Menu you edit yourself', 'Online bookings & group enquiries', 'Events or specials section', 'Live in about 3–4 weeks'],
    },
    {
      name: 'Degustación',
      price: '€2,400+',
      sub: 'The full experience',
      lines: ['Fully custom design', 'Ordering, shop or gift cards', 'Photo shoot direction', 'Extra languages', 'Live in about 5–6 weeks'],
    },
  ],
  care: { name: 'Care plan', price: '€39 / month', body: 'Hosting, security, backups, and small edits whenever you need them. Cancel any time.' },
}

export const PROCESS = {
  eyebrow: 'How it works',
  title: 'Four courses. No homework.',
  steps: [
    { course: 'Aperitivo', title: 'A coffee and a chat', body: 'A short call or visit. We learn what makes your place yours, and you get a fixed price, in writing.' },
    { course: 'Primero', title: 'Design', body: 'You see your new homepage designed for real, on your phone, before anything is built. Two rounds of changes included.' },
    { course: 'Segundo', title: 'Build', body: 'We build it fast and properly: menus, bookings, translations, Google. You send photos and text; we handle the rest.' },
    { course: 'Postre', title: 'Launch & care', body: 'We go live, show you how to edit everything in 20 minutes, and stay on WhatsApp for whatever comes next.' },
  ],
}

export const INCLUDED = [
  { k: 'Fast', v: 'Built to load quickly on a patchy beach-bar 4G connection.' },
  { k: 'Yours', v: 'You own the domain, the content and the site. No lock-in.' },
  { k: 'Editable', v: 'Change menus, hours and photos yourself in minutes.' },
  { k: 'Local', v: 'A studio in Spain that answers WhatsApp, in English or Spanish.' },
]

export const HOME_FAQS = [
  { q: 'How long does it take?', a: 'A one-page site is usually live in about two weeks. A full site with menus and bookings takes three to four weeks. Most of that time is waiting for photos and text, and we help with both.' },
  { q: 'Do I need to know anything technical?', a: 'No. We handle the domain, hosting, email setup and Google. You get a simple login to edit menus, hours and photos.' },
  { q: 'Will it be in Spanish and English?', a: 'Yes. Every site we build is bilingual by default, and we can add other languages for tourist-heavy areas.' },
  { q: 'Can you redesign my existing website?', a: 'Of course. We keep what works, move your domain without downtime, and make sure Google doesn’t lose track of you.' },
  { q: 'What happens after launch?', a: 'You can edit everything yourself. If you’d rather not, the care plan covers hosting, updates and small changes whenever you need them.' },
]

export const CONTACT = {
  eyebrow: 'Reservations open',
  title: ['Let’s put your place', 'on the map.'],
  body: 'Tell us a little about your business. We reply within one working day, usually much faster, with honest advice and a fixed price.',
  types: ['Restaurant', 'Bar', 'Coffee shop', 'Other'],
}
