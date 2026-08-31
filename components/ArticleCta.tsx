import Link from 'next/link'

export default function ArticleCta() {
  return (
    <aside className="single-sidebar">
      <div className="single-cta-card">
        <div className="single-cta-card-inner">
          <h3>Tarvitsetko ammattimaiset verkkosivut?</h3>
          <p>Kerro liiketoiminnastasi ja saat ilmaisen alkukartoituksen yhden arkipäivän sisällä.</p>
          <Link href="/#ota-yhteytta" className="btn-accent single-cta-card-btn">
            Aloita projekti →
          </Link>
        </div>
      </div>
    </aside>
  )
}
