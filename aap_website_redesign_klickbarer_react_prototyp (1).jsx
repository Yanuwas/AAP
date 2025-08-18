export default function AAPLandingLO() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen w-full bg-neutral-50 text-neutral-900">
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
        <nav className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/mnt/data/542b9ac8-3a88-4f78-a800-a91f2a4ea319.png" alt="AAP Logo" className="h-8 w-auto"/>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <button className="hover:text-neutral-700" onClick={() => scrollTo("about")}>Über uns</button>
            <button className="hover:text-neutral-700" onClick={() => scrollTo("philosophy")}>Anlagephilosophie</button>
            <button className="hover:text-neutral-700" onClick={() => scrollTo("services")}>Dienstleistungen</button>
            <button className="hover:text-neutral-700" onClick={() => scrollTo("publications")}>Publikationen</button>
          </div>
          <div>
            <button onClick={() => scrollTo("contact")} className="rounded-full border border-neutral-900 px-5 py-2 text-neutral-900 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">Kontakt</button>
          </div>
        </nav>
      </header>

      {/* Hero with Solothurn city image */}
      <section className="relative isolate pt-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rounded-2xl overflow-hidden border border-neutral-200">
            <div className="relative">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Solothurn_Aare_Altstadt.jpg" alt="Solothurn Altstadt" className="w-full h-[520px] object-cover"/>
              <div className="absolute inset-0 bg-neutral-950/40"/>
              <div className="absolute inset-0 flex items-center">
                <div className="px-8 md:px-16">
                  <h1 className="font-serif text-white text-4xl md:text-6xl leading-tight">Vermögensverwaltung mit Weitsicht</h1>
                  <p className="mt-5 text-neutral-100 max-w-2xl text-lg">Unabhängig, transparent, persönlich. Beratung mit klarer Verantwortung und konsequenter Umsetzung.</p>
                  <div className="mt-8 flex gap-4">
                    <button onClick={() => scrollTo("contact")} className="rounded-full bg-white px-6 py-3 text-neutral-900 font-medium hover:bg-neutral-100">Gespräch starten</button>
                    <button onClick={() => scrollTo("philosophy")} className="rounded-full border border-white/70 px-6 py-3 text-white hover:bg-white/10">Ansatz kennenlernen</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro with Solothurn Altstadt detail image */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-wide uppercase text-neutral-600">Seit 2018</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">Wir begleiten Privatpersonen, Familien und Unternehmen aus dem Mittelland beim langfristigen Vermögensaufbau</h2>
            <p className="mt-6 text-neutral-700">Wir sind die AAP Active Advisory Partners, Ihr Vermögensverwalter aus Solothurn. Unabhängig, transparent, persönlich. Als FINMA zertifizierter Vermögensverwalter bauen wir auf Vertrauen und Sicherheit.</p>
            <div className="mt-8">
              <button onClick={() => scrollTo("team")} className="rounded-full border border-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-900 hover:text-white">Lernen Sie uns kennen</button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Solothurn_Aare_Bruecke.jpg" alt="Solothurn Brücke" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      {/* Services with Solothurn imagery placeholder */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <h3 className="font-serif text-3xl md:text-4xl">Unsere Dienstleistungen</h3>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Vermögensverwaltung",
                desc: "Massgeschneiderte Anlageportfolios zugeschnitten auf persönliche Bedürfnisse und Anlegerprofil. Sie geben die Richtung vor, wir kümmern uns um die Umsetzung.",
                img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Solothurn_St_Ursenkathedrale.jpg"
              },
              {
                title: "Anlageberatung",
                desc: "Sie haben Erfahrung beim Investieren und suchen einen professionellen Sparringpartner. Wir liefern Informationen, Meinungen und Analysen. Gemeinsam beleuchten wir Möglichkeiten aus mehreren Blickwinkeln.",
                img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Solothurn_altstadt_gasse.jpg"
              },
              {
                title: "Finanzierungen",
                desc: "Begleitung bei Eigenheim, Renditeliegenschaften und Unternehmenskrediten. Struktur, Varianten, Bewertung, Verhandlung.",
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Solothurn_Stadt.jpg"
              },
              {
                title: "Vorsorgeplanung",
                desc: "Rechtzeitig planen und Vorteile sichern. Sinnvolle Staffelung von Vorsorgegeldern, Budgetplanung und Einkommensszenarien.",
                img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Solothurn_Aareufer.jpg"
              },
              {
                title: "Nachfolgeplanung",
                desc: "Vermögen oder Unternehmen geordnet übergeben. Der Prozess braucht Vertrauen und Zeit. Wir gestalten die Schritte gemeinsam.",
                img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Solothurn_Marktplatz.jpg"
              },
              {
                title: "Steuern und Stiftungen",
                desc: "Steuersituation analysieren, Stiftungen aufbauen oder Transaktionen steuerlich planen.",
                img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Solothurn_Bundesplatz.jpg"
              },
            ].map((s) => (
              <div key={s.title} className="group rounded-2xl border border-neutral-200 p-6 bg-white hover:shadow-md transition">
                <div className="h-40 w-full rounded-xl overflow-hidden mb-5">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover"/>
                </div>
                <h4 className="text-xl font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm text-neutral-700">{s.desc}</p>
                <div className="mt-5">
                  <button onClick={() => scrollTo("contact")} className="text-sm font-medium underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900">Mehr erfahren</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy clean section */}
      <section id="philosophy" className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5">
          <h3 className="font-serif text-3xl md:text-4xl">Langfristig investieren, Werte schaffen</h3>
          <p className="mt-6 max-w-3xl text-neutral-700">Wir investieren mit Disziplin und klaren Regeln. Fundamentale Qualität, Risikobewusstsein und Kostenkontrolle stehen im Zentrum. Portfolios werden konsequent auf Ziele, Zeithorizont und Risikotragfähigkeit ausgerichtet.</p>
        </div>
      </section>

      {/* Publications lightweight */}
      <section id="publications" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <h3 className="font-serif text-2xl md:text-3xl">Publikationen</h3>
          <p className="mt-4 text-neutral-700">Aktuelle Einschätzungen und Analysen. Auf Wunsch senden wir Beiträge per E Mail zu.</p>
        </div>
      </section>

      {/* Contact and small newsletter inspired by LO minimalism */}
      <section id="contact" className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl">Sprechen wir über Ihre Ziele</h3>
            <p className="mt-4 text-neutral-300">Kurzes Gespräch, klare Einschätzung und ein Vorschlag für die nächsten Schritte.</p>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-8 grid grid-cols-1 gap-4">
              <input className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Name"/>
              <input type="email" className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="E Mail"/>
              <textarea rows={4} className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Nachricht"/>
              <button className="rounded-full bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-neutral-100">Anfrage senden</button>
            </form>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <h4 className="text-xl font-semibold">Newsletter</h4>
            <p className="mt-2 text-neutral-300">Analysen, Einblicke und kurze Updates. Massvoll und relevant.</p>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-5 flex gap-3">
              <input type="email" className="min-w-0 flex-1 rounded-full bg-white px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none" placeholder="Ihre E Mail"/>
              <button className="rounded-full border border-white px-5 py-3 text-white hover:bg-white/10">Abonnieren</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer very clean */}
      <footer className="bg-neutral-950 text-neutral-300">
        <div className="mx-auto max-w-7xl px-5 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <img src="/mnt/data/542b9ac8-3a88-4f78-a800-a91f2a4ea319.png" alt="AAP Logo" className="h-8 w-auto"/>
            <p className="mt-3 text-sm">Active Advisory Partners AG</p>
            <p className="text-sm">Solothurn</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-white">Navigation</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" onClick={(e)=>{e.preventDefault(); scrollTo("about");}} className="hover:text-white">Über uns</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); scrollTo("philosophy");}} className="hover:text-white">Anlagephilosophie</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); scrollTo("services");}} className="hover:text-white">Dienstleistungen</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); scrollTo("publications");}} className="hover:text-white">Publikationen</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-white">Services</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Vermögensverwaltung</li>
              <li>Anlageberatung</li>
              <li>Vorsorgeplanung</li>
              <li>Nachfolgeplanung</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-white">Rechtliches</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="#">Impressum</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-6 text-xs text-neutral-500">© 2025 Active Advisory Partners AG</div>
        </div>
      </footer>
    </div>
  );
}
