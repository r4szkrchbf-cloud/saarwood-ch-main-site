# Saarwood Main-Site Projektstatus (2026-07-07)

## Geltungsbereich

Dieser Bericht dokumentiert nur den Stand des Main-Site-Repositories fuer `saarwood.ch`.

## Ergebnis

- Eigenstaendiges Repository angelegt und initial befuellt.
- Domain-Zielbild umgesetzt: `saarwood.ch` und `www.saarwood.ch` zeigen auf die Main-Site.
- HTTPS per Let's Encrypt ist aktiv.
- Nginx-Serving auf VPS ist fuer die Hauptdomain aktiv.

## Repository

- Remote: `git@github.com:r4szkrchbf-cloud/saarwood-ch-main-site.git`

## Deployment-Stand

- Build erfolgt ueber `vite build`.
- Statische Assets werden unter `/srv/saarwood-main-site/dist` bereitgestellt.
- Nginx-VHost `saarwood-main-site` ist aktiv.

## Inhalte

- Public Brand-Landingpage fuer SAARwooD.
- SEO-Basis mit `robots.txt`, `sitemap.xml`, Canonical und Meta-Daten.
- Verweise auf Teleprompter und Adminpanel.

## Nächste Schritte

- Impressum und Datenschutz als eigene Unterseiten ergaenzen.
- OG-Bild (`/og-image.png`) final bereitstellen.
- Release- und Statussektionen inhaltlich erweitern.
