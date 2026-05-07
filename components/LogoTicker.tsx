const industries = ['Ravintolat', 'Hyvinvointi', 'Kiinteistöt', 'Remontit', 'Kauneus', 'Vähittäiskauppa']

export default function LogoTicker() {
  const items = [...industries, ...industries]
  return (
    <div className="logos">
      <div className="logos-tag">Toimii toimialoilla</div>
      <div style={{ overflow: 'hidden', flex: 1 }}>
        <div className="logos-run">
          {items.map((name, i) => (
            <>
              <span key={`name-${i}`}>{name}</span>
              <span key={`sep-${i}`} className="logos-sep"></span>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
