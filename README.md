# HogwartsWiki
🧙‍♂️ Harry Potter House Explorer

Eine interaktive Webanwendung, die es Nutzern ermöglicht, Charaktere aus der Welt von Harry Potter nach ihren Hogwarts-Häusern zu filtern und anzuzeigen. In bearbeitung!

![npm bundle size (version)](https://img.shields.io/badge/version-0.0.1-green) ![npm bundle size (version)](https://img.shields.io/badge/language-JavaScript-yellow) ![npm bundle size (version)](https://img.shields.io/badge/language-CSS3-blue) ![npm bundle size (version)](https://img.shields.io/badge/language-HTML5-orange) 


## 🏞️ Overview
![Alt text](Pic1.png "Optional title")
![Alt text](Pic2.png "Optional title")

✨ Funktionen

  * Hausauswahl: Wähle eines der vier ikonischen Hogwarts-Häuser (Gryffindor, Slytherin, Hufflepuff, oder Ravenclaw).

  * Dynamische Charakter-Anzeige: Lade und sieh alle Charaktere des gewählten Hauses in einer ansprechenden Grid-Ansicht.

  *  Responsive Design: Die Charakter-Karten passen sich an verschiedene Bildschirmgrößen an.

   * Fehlerbehandlung: Klare Fehlermeldungen bei ungültiger Eingabe oder API-Problemen.

  * Lade-Animation: Ein visuelles Feedback, während die Charakterdaten geladen werden.

📖 Wie es funktioniert

   * Der Nutzer wählt ein Haus aus (entweder über Buttons oder eine Eingabe).

   * Die Funktion fetchData() wird aufgerufen.

   * Diese Funktion sendet eine Anfrage an die externe HP-API. [API](https://github.com/KostaSav/hp-api)

   * Bei Erfolg werden die empfangenen Daten an die Funktion displayCharacters() übergeben.

   * Diese Funktion rendert für jeden Charakter eine Karte mit Bild und Namen in einem responsive Grid.

🎯 Kernfunktionen im Code

   * selectHouse(house): Setzt den Hausnamen und triggert das Fetching.

   * fetchData(): Asynchrone Funktion, die die API anfragt und Error Handling beinhaltet.

   * displayCharacters(characters): Rendert die empfangenen Charakter-Daten in das HTML.

   * closeCharacter(): Schließt den Anzeige-Container.

🔮 Mögliche Erweiterungen

   * Detailansicht für Charaktere beim Anklicken einer Karte.

   * Suchfunktion, um nach bestimmten Charakteren zu suchen.

   * Filtern nach anderen Kriterien (Blutstatus, Zauberstab, etc.).

   * Lokaler Favoriten-Speicher.

   * Dunkelmodus-Toggle.
