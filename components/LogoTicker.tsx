const CLIENTS = [
  'Kahvila Aromas', 'Lakiasiaintoimisto Mäkinen', 'Putkipalvelu Virtanen',
  'Hammaslääkäri Koskinen', 'Rakennusliike Nykänen', 'Hieronta Studio Zen',
  'Autokorjaamo Peltonen', 'Tilitoimisto Ahola', 'Parturi Salone',
  'Fysioterapia Nord', 'Siivouspalvelu Puhtaus', 'Kukkakauppa Keidas',
]

const ITEMS = [...CLIENTS, ...CLIENTS]

export default function LogoTicker() {
  return (
    <div className="ticker-wrap">
      <span className="ticker-label">Asiakkaitamme</span>
      <div className="ticker-run" aria-hidden>
        {ITEMS.map((name, i) => (
          <span key={i}>
            {i > 0 && i % 1 === 0 && <span className="ticker-sep" />}
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
