import { useEffect } from 'react';
import './App.css';

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
  useEffect(() => {
    document.title = 'SAARwooD | Marke, Produkte, Kontakt';
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        'content',
        'SAARwooD ist die oeffentliche Marken- und Produktseite fuer Teleprompter, Admin und weitere Saarwood-Apps.',
      );
    }
  }, []);

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
            <p>Saarwood Betreiberangaben und Kontakt werden hier zentral gepflegt.</p>
          </div>
          <div>
            <h2>Datenschutz</h2>
            <p>DSGVO-Hinweise, Cookies und Tracking-Basics werden auf dieser Seite koordiniert.</p>
          </div>
          <div>
            <h2>Release</h2>
            <p>Public Notes, Status und Produktverweise fuer neue App-Versionen.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>SAARwooD</span>
        <span>Public site for brand, product and legal information</span>
      </footer>
    </div>
  );
}
