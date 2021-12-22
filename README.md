# Feinstaub in Stockach - Website

Dieses Projekt erzeugt die Website: https://feinstaub-stockach.netlify.app/

Genutzt wird [VuePress 2.0](https://v2.vuepress.vuejs.org/.

## Entwicklung

### Voraussetzungen

* Lokale Installation von [Node.js](https://nodejs.org/)
* Repository lokal clonen: `git clone https://github.com/stritti/stockach-feinstaub-website.git`
* `npm install` in dem Projektverzeichnis aufrufen, um die notwendigen Bibliotheken zu installieren.

### Lokal weiterentwickeln

* Im Projektverzeichnis `npm run dev` aufrufen, um die Website zu starten.
* Der Link zur Website wird in der Console angezeigt und kann aufgerufen werden.
* Ändert man nun die Markdown-Dateien, wird die Seite automatisch aktualisiert.
  * Die wesentlichen Dokumente liegen in dem Unterordner `docs`
  * Um z.B. das Menü zu erweitern, muss die Datei `docs/.vuepress/config.js` bearbeitet werden.

Weitere Infos zu VuePress findet man auf [https://v2.vuepress.vuejs.org/](https://v2.vuepress.vuejs.org/).

## Deployment

Sobald es Änderung auf dem Hauptzweig `main` gibt, wird automatisch die Website aktualisiert.
Dies kann einige Minuten dauern, bis alles aktualisiert ist.
