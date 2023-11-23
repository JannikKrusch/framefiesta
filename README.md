# Einrichtug

## Kurzanleitung
1. Node.js installieren
2. Repository klonen
3. ```bash
   src
    └───utils
        ├───constants
            └───Api.ts
   ```
   Die `Api.ts` öffnen und den Wert der Variable `DEFAULT_URL` gegebenfalls mit der URL zum lokalen Backend ersetzen.
5. Terminal aufmachen, in das Stammverzeichnis wechseln und folgende Befehle eingeben
   ![grafik](https://github.com/JannikKrusch/framefiesta/assets/96232216/9f3bfd71-cd96-466a-941b-14e69e691a1c)

7. ```console
   npm i
   ```
8. ```console
   npm start
   ```

## Anleitung
Damit man das Frontend von FrameFiesta starten kann, braucht man Node.js. Dieses kann man entweder direkt von der offiziellen [Node.js Seite](https://nodejs.org/en/download) herunterladen oder man nutzt den [Node Version Manager (NVM)](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/). Mit NVM kann man mehrere Nodeversionen installieren und bequem zwischen diesen wechseln.

Nachdem Node.js installiert wurde, kann man zum Repository gehen und es Klonen. Nun muss man gegbenfalls in `src/utils/constants/Api.ts` und die `DEFAULT_URL` an das lokale Backend anpassen, danach muss man in das Stammverzeichnis des Projekts und in das Terminal `npm i` eingeben, damit werden alle Pakete, die das Projekt verwendet, installiert.
Das Projekt kann man nun starten `npm start`, das kann kurz dauern. Es sollte sich ein Fenster des Standardbrowsers öffnen.

![grafik](https://github.com/JannikKrusch/framefiesta/assets/96232216/746b001e-6587-4daf-8398-9caeb1a90deb)

# Node.js Version
`20.9.0`

# NPM Pakete
| Paketname                 | Version |
| ------------------------- | ------- |
| bootstrap                 | 5.3.2   |
| classnames                | 2.3.2   |
| react-bootstrap           | 2.9.2   |
| react-bootstrap-icons     | 1.10.3  |
| react-bootstrap-typeahead | 6.3.1   |
