import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero-outer">
      <div className="hero-top">
        <div className="hero-kicker">
          <span className="kicker-dot" />
          Suomalainen verkkosivutoimisto
        </div>
        <h1 className="hero-h1">
          Verkkosivut, jotka<br />
          kasvattavat<br />
          liiketoimintaasi.
        </h1>
        <p className="hero-tagline">
          Suunnittelemme ja rakennamme modernit verkkosivut pk-yrityksille —
          nopeasti, ammattimaisesti ja tuloksiin keskittyen.
        </p>
        <div className="hero-actions">
          <Link href="/#ota-yhteytta" className="btn-accent">Aloita projekti →</Link>
          <Link href="/#hinnat" className="btn-ghost">Katso hinnat</Link>
        </div>
      </div>
    </section>
  )
}
