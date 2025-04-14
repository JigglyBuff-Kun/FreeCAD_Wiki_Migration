---
title: Sketcher KoinzidentFestlegenKombiniert
---

|                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sketcher KoinzidentFestlegenKombiniert                                                                                                                                                                           |
| Menüeintrag                                                                                                                                                                                                      |
| Skizze → Sketcher-Randbedingungen → Koinzidenz festlegen                                                                                                                                                         |
| Arbeitsbereich                                                                                                                                                                                                   |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                                                                                                       |
| Standardtastenkürzel                                                                                                                                                                                             |
| C                                                                                                                                                                                                                |
| Eingeführt in Version                                                                                                                                                                                            |
| 1.0                                                                                                                                                                                                              |
| Siehe auch                                                                                                                                                                                                       |
| [Sketcher KoinzidentFestlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de"), [Sketcher PunktAufObjektFestlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") |
|                                                                                                                                                                                                                  |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Sketcher KoinzidentFestlegenKombiniert legt Deckungsgleichheit zwischen Punkten fest, verbindet Punkte mit Kanten oder Achsen (Linien werden als unendlich angesehen und offene Kurven werden auch virtuell verlängert) oder legt Kreise, Kreisbögen und/oder Ellipsen konzentrisch fest (indem ihre Mittelpunkte deckungsgleich festgelegt werden).

Dieses Werkzeug ersetzt die Werkzeuge [Sketcher KoinzidentFestlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") und [Sketcher PunktAufObjektFestlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de"), wenn die Option **Kombiniertes Werkzeug für Koinzidenz und Punkt-auf-Objekt-Randbedingungen** in den [Voreinstellungen](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") ausgewählt wurde.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Koinzidenz festlegen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Koinzidenz festlegen** auswählen.
   - Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/images/Sketcher_ConstrainCoincidentUnified.svg) Koinzidenz festlegen** im Kontextmenü auswählen.
   - Das Tastaturkürzel C.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Eine der folgenden Möglichkeiten auswählen:
   - Zwei Punkte auswählen.
   - Zwei Kanten von Kreisen, Kreisbögen, Ellipsen oder Ellipsenbögen auswählen.
   - Einen einzelnen Punkt und eine einzelne Kante (in beliebiger Reihenfolge) auswählen.
5. Eine Randbedingung wird hinzugefügt.
6. Wahlweise weitere Randbedingungen erstellen.
7. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

### Einmal-Ausführen-Modus

1. Eine der folgenden Möglichkeiten auswählen:
   - Zwei oder mehr Punkte auswählen.
   - Zwei oder mehr Kanten von Kreisen, Kreisbögen, Ellipsen oder Ellipsenbögen auswählen.
   - Einen einzelnen Punkt und eine einzelne Kante auswählen (in beliebiger Reihenfolge).
   - Mehrere Punkte und eine einzelne Kante auswählen (in beliebiger Reihenfolge).
   - Einen einzelnen Punkt und mehrere Kanten auswählen (in beliebiger Reihenfolge).
2. Das Werkzeug aufrufen, wie oben beschrieben oder mit der folgenden zusätzlichen Möglichkeit:
   - Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/images/Sketcher_ConstrainCoincidentUnified.svg) Constrain coincident** im Kontextmenü auswählen.
3. Abhängig von der Auswahl werden eine oder mehrere Randbedingungen hinzugefügt.

## Hinweise

- [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Punkte denen die Randbedingung Koinzident festlegen zugeornet ist, werden mit der [Farbe](/Sketcher_Preferences/de#Darstellung "Sketcher Preferences/de") der **Symbole für Randbedingungen** gekennzeichnet.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainCoincidentUnified/de&oldid=1423227>"
