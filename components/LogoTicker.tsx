const INDUSTRIES = [
  'Rakennusyritykset', 'Ravintolat & kahvilat', 'Kampaamot', 'Hammaslääkärit',
  'Lakitoimistot', 'Siivouspalvelut', 'Autokorjaamot', 'Tilitoimistot',
  'Terapia & hyvinvointi', 'Sisustussuunnittelu', 'Valokuvaajat', 'Personal trainerit',
  'LVI & sähkötyöt', 'Piha- & puutarhapalvelut', 'Koulutus & valmennus', 'Lemmikkipalvelut',
]

const ITEMS = [...INDUSTRIES, ...INDUSTRIES]

export default function LogoTicker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-run" aria-hidden>
        {ITEMS.map((name, i) => (
          <span key={i}>
            {i > 0 && <span className="ticker-sep" />}
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
