# Statusbericht Soll-Ist (Main-Site)

Stand: 2026-07-07

## Soll-Zustand

- Hauptseite unter `https://saarwood.ch` erreichbar.
- Rechtseiten (`/impressum`, `/datenschutz`) lauffaehig.
- Pfadweiterleitungen fuer Produktzugriff stabil:
  - `/admin` -> `admin.saarwood.ch`
  - `/telepromter` -> `teleprompter.saarwood.ch`

## Ist-Zustand (geprueft)

- Build erfolgreich (`npm run build`).
- `https://saarwood.ch` liefert HTTP 200 und korrektes Main-Site-HTML.
- Redirect-Ketten geprueft:
  - `https://saarwood.ch/admin` -> `https://admin.saarwood.ch/` -> HTTP 200
  - `https://saarwood.ch/telepromter` -> `https://teleprompter.saarwood.ch/` -> HTTP 200

## Doku-Check

- `docs/TODO_DE.md` weiterhin konsistent mit offenem Rechts-/SEO/DNS-Finalcheck.

## Offene Punkte

- DNS-Finalcheck ueber mehrere Regionen dokumentieren.
- OG-Bild final bereitstellen.
- Impressum/Datenschutz inhaltlich finalisieren.
