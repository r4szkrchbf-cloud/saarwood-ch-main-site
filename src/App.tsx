import { useEffect } from 'react';
import './App.css';

type SitePath = '/' | '/impressum' | '/datenschutz';

const offers = [
  {
    title: 'Teleprompter',
    text: 'Broadcast-ready browser app mit Room-Sync, Offline-Fallback und klarer Operator-Fuehrung.',
  },
  {
    title: 'Adminpanel',
    text: 'Zentrale Freigaben, Rollen, Support und Audit in einem separaten internen Projekt.',
  },
  {
    title: 'Plattform',
    text: 'Einheitliche Marke, SEO-Basis, Produktverweise und kuenftige Saarwood-Apps.',
  },
];

const facts = [
  'Markenstil: SAAR in rot, woo klein in weiss, D gross in rot',
  'Separate Repo-Grenze fuer Hauptseite, Adminpanel und Teleprompter',
  'SEO, Impressum und Datenschutz auf Public-Site-Ebene verankert',
];

const contacts = [
  { label: 'Teleprompter oeffnen', href: 'https://teleprompter.saarwood.ch/' },
  { label: 'Adminpanel anfragen', href: 'mailto:admin@saarwood.ch' },
  { label: 'Release-Status lesen', href: '#status' },
];

export function App() {
  const pathname = (typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : '/') as SitePath;
  const sitePath: SitePath = pathname === '/impressum' || pathname === '/datenschutz' ? pathname : '/';

  useEffect(() => {
    const titleByPath: Record<SitePath, string> = {
      '/': 'SAARwooD | Marke, Produkte, Kontakt',
      '/impressum': 'SAARwooD | Impressum',
      '/datenschutz': 'SAARwooD | Datenschutz',
    };
    const descriptionByPath: Record<SitePath, string> = {
      '/': 'SAARwooD ist die oeffentliche Marken- und Produktseite fuer Teleprompter, Admin und weitere Saarwood-Apps.',
      '/impressum': 'Impressum der SAARwooD Hauptseite mit Betreiber- und Kontaktangaben.',
      '/datenschutz': 'Datenschutzhinweise fuer die SAARwooD Hauptseite und verbundene Dienste.',
    };

    document.title = titleByPath[sitePath];
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', descriptionByPath[sitePath]);
    }
  }, [sitePath]);

  if (sitePath === '/impressum') {
    return (
      <div className="main-site legal-site">
        <main className="legal-wrapper" aria-label="Impressum">
          <h1>Impressum</h1>
          <p>
            Diese Seite enthaelt die Anbieterkennzeichnung fuer die SAARwooD Hauptseite. Die finalen Betreiberdaten sind vor dem finalen
            Produktionsrelease verbindlich einzutragen.
          </p>
          <section className="legal-block">
            <h2>Angaben gemaess TMG</h2>
            <p>SAARwooD (Projektplattform)</p>
            <p>Verantwortliche Stelle: Hans Manuel Angel</p>
            <p>Kontakt: info@saarwood.ch</p>
          </section>
          <section className="legal-block">
            <h2>Verantwortlich fuer Inhalte</h2>
            <p>Hans Manuel Angel, Saarwood Plattformbetrieb</p>
          </section>
          <section className="legal-block">
            <h2>Haftungshinweis</h2>
            <p>
              Trotz sorgfaeltiger inhaltlicher Kontrolle uebernehmen wir keine Haftung fuer Inhalte externer Links. Fuer den Inhalt verlinkter
              Seiten sind ausschliesslich deren Betreiber verantwortlich.
            </p>
          </section>
          <a className="cta" href="/">Zurueck zur Hauptseite</a>
        </main>
      </div>
    );
  }

  if (sitePath === '/datenschutz') {
    return (
      <div className="main-site legal-site">
        <main className="legal-wrapper" aria-label="Datenschutz">
          <h1>Datenschutz</h1>
          <p>
            Diese Hinweise beschreiben die Datenverarbeitung auf der SAARwooD Hauptseite. Fuer produktbezogene Spezialfaelle gelten zusaetzlich
            die Hinweise der jeweiligen Anwendung.
          </p>
          <section className="legal-block">
            <h2>Verarbeitete Daten</h2>
            <p>Beim Aufruf der Seite koennen technische Zugriffsdaten (z. B. IP, User-Agent, Zeitstempel) serverseitig protokolliert werden.</p>
          </section>
          <section className="legal-block">
            <h2>Zweck der Verarbeitung</h2>
            <p>Die Verarbeitung dient der sicheren Auslieferung der Seite, Fehleranalyse und Abwehr von Missbrauch.</p>
          </section>
          <section className="legal-block">
            <h2>Kontakt und Betroffenenrechte</h2>
            <p>Auskunfts-, Loesch- und Berichtigungsanfragen bitte an: privacy@saarwood.ch</p>
          </section>
          <a className="cta" href="/">Zurueck zur Hauptseite</a>
        </main>
      </div>
    );
  }

  return (
    <div className="main-site">
      <header className="masthead">
        <div>
          <p className="eyebrow">Saarwood Platform</p>
          <h1>
            <span className="brand-red">SAAR</span>
            <span className="brand-white">woo</span>
            <span className="brand-red">D</span>
          </h1>
          <p className="lead">
            Die oeffentliche Marken- und Produktseite fuer Teleprompter, Plattform und kuenftige Saarwood-Services.
          </p>
        </div>

        <div className="hero-card">
          <p className="hero-card-title">Aktueller Fokus</p>
          <p>
            Teleprompter bleibt produktiv, die Hauptseite lebt in diesem Repo, und das zentrale Adminpanel wird separat entwickelt.
          </p>
        </div>
      </header>

      <section className="cta-row" aria-label="Primary actions">
        {contacts.map((item) => (
          <a key={item.label} className="cta" href={item.href}>
            {item.label}
          </a>
        ))}
      </section>

      <main className="content-grid">
        <section className="panel panel-accent">
          <h2>Produkte</h2>
          <div className="card-grid">
            {offers.map((offer) => (
              <article key={offer.title} className="info-card">
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="status">
          <h2>Fakten</h2>
          <ul className="fact-list">
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </section>

        <section className="panel legal-panel">
          <div>
            <h2>Impressum</h2>
            <p>Saarwood Betreiberangaben und Kontakt sind als eigene Unterseite ausformuliert.</p>
            <a className="inline-link" href="/impressum">Impressum oeffnen</a>
          </div>
          <div>
            <h2>Datenschutz</h2>
            <p>DSGVO-Hinweise fuer die Hauptseite sind als eigene Unterseite dokumentiert.</p>
            <a className="inline-link" href="/datenschutz">Datenschutz oeffnen</a>
          </div>
          <div>
            <h2>Release</h2>
            <p>Public Notes, Status und Produktverweise fuer neue App-Versionen.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>SAARwooD</span>
        <span>
          <a className="inline-link" href="/impressum">Impressum</a>
          {' | '}
          <a className="inline-link" href="/datenschutz">Datenschutz</a>
        </span>
      </footer>
    </div>
  );
}
