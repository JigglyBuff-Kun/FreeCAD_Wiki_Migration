---
title: Sketcher PunktAufObjektFestlegen
---

|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sketcher PunktAufObjektFestlegen                                                                                                                                                                                               |
| Menüeintrag                                                                                                                                                                                                                    |
| Skizze → Sketcher-Randbedingungen → Punkt auf Objekt festlegen                                                                                                                                                                 |
| Arbeitsbereich                                                                                                                                                                                                                 |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                                                                                                                     |
| Standardtastenkürzel                                                                                                                                                                                                           |
| O                                                                                                                                                                                                                              |
| Eingeführt in Version                                                                                                                                                                                                          |
| -                                                                                                                                                                                                                              |
| Siehe auch                                                                                                                                                                                                                     |
| [Sketcher KoinzidentFestlegenKombiniert](/Sketcher_ConstrainCoincidentUnified/de "Sketcher ConstrainCoincidentUnified/de"), [Sketcher KoinzidentFestlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") |
|                                                                                                                                                                                                                                |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_ConstrainPointOnObject.svg) Sketcher PunktAufObjektFestlegen verbindet Punkte mit Kanten oder Achsen. Linien werden als unendlich angesehen und Kurven werden ebenso virtuell verlängert.

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dieses Werkzeug wird durch das Werkzeug [Sketcher KoinzidentFestlegenKombiniert](/Sketcher_ConstrainCoincidentUnified/de "Sketcher ConstrainCoincidentUnified/de") ersetzt, wenn die Option **Koinzidenz und Punkt auf Objekt vereinigen** in den [Voreinstellungen](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") ausgewählt wurde.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_ConstrainPointOnObject.svg) Punkt auf Objekt festlegen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/src/assets/images/Sketcher_ConstrainPointOnObject.svg) Punkt auf Objekt festlegen** auswählen.
   - Das Tastaturkürzel O.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Einen einzelnen Punkt und eine einzelne Kante (in beliebiger Reihenfolge) auswählen.
5. Eine Randbedingung wird hinzugefügt.
6. Wahlweise weitere Randbedingungen erstellen.
7. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

### Einmal-Ausführen-Modus

1. eine der folgenden Möglichkeiten auswählen:
   - Einen einzelnen Punkt und eine einzelne Kante auswählen (in beliebiger Reihenfolge).
   - Mehrere Punkte und eine einzelne Kante auswählen (wie vorher).
   - Einen einzelnen Punkt und mehrere Kanten auswählen (wie vorher).
2. Das Werkzeug aufrufen, wie oben beschrieben.
3. Abhängig von der Auswahl werden eine oder mehrere Randbedingungen hinzugefügt.

## Skripten

Die Randbedingung kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus durch den folgenden Befehl erstellt werden:

`Sketch.addConstraint(Sketcher.Constraint('PointOnObject',LineMoving,PointOfLineMoving,LineFixed))`

- `Sketch` ist ein Skizzenobjekt
- `LineMoving` ist die Nummer, die die Linie kennzeichnet, die den Punkt enthält, der auf die `LineFixed` (die Linie, die fixiert ist) verschoben werden soll.
- `PointOfLineMoving` ist die Nummer des Knotens der Linie `LineMoving`, der sich auf die Linie `LineFixed` bewegen soll.
- `LineFixed` ist die Nummer der Linie, an die der Punkt `PointOfLineMoving` befestigt werden soll.

Die Seite [Sketcher Skripterstellung](/Sketcher_scripting/de "Sketcher scripting/de") erklärt, wie man die Nummern zum Bestimmen von Linien und Punkten erkennt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainPointOnObject/de&oldid=1426446>"
