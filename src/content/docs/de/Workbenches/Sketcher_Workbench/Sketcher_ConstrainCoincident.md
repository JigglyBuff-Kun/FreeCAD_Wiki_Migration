---
title: Sketcher KoinzidentFestlegen
---

|                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Skizzierer KoinzidentFestlegen                                                                                                                                                                                                           |
| Menüeintrag                                                                                                                                                                                                                              |
| Skizze → Sketcher-Randbedingungen → Koinzidenz festlegen                                                                                                                                                                                 |
| Arbeitsbereich                                                                                                                                                                                                                           |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                                                                                                                               |
| Standardtastenkürzel                                                                                                                                                                                                                     |
| C                                                                                                                                                                                                                                        |
| Eingeführt in Version                                                                                                                                                                                                                    |
| -                                                                                                                                                                                                                                        |
| Siehe auch                                                                                                                                                                                                                               |
| [Sketcher KoinzidentFestlegenKombiniert](/Sketcher_ConstrainCoincidentUnified/de "Sketcher ConstrainCoincidentUnified/de"), [Sketcher PunktAufObjektFestlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") |
|                                                                                                                                                                                                                                          |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_ConstrainCoincident.svg) Sketcher KoinzidentFestlegen erstellt eine Randbedingung zwischen Punkten. die sie koinzident (deckungsgleich) festlegt oder ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) eine Randbedingung zwischen Kreisen, Kreisbögen, Ellipsen, Ellipsenbögen, die sie konzentrisch festlegt (indem ihre Mittelpunkte koinzident festgelegt werden).

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dieses Werkzeug wird durch das Werkzeug [Sketcher KoinzidentFestlegenKombiniert](/Sketcher_ConstrainCoincidentUnified/de "Sketcher ConstrainCoincidentUnified/de") ersetzt, wenn die Option **Koinzidenz und Punkt auf Objekt vereinigen** in den [Voreinstellungen](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") ausgewählt wurde.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_ConstrainCoincident.svg) KoinzidentFestlegen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/images/Sketcher_ConstrainCoincident.svg) KoinzidentFestlegen** auswählen.
   - Das Tastaturkürzel C.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Eine der folgenden Möglichkeiten auswählen:
   - Zwei Punkte auswählen.
   - Zwei Kanten von Kreisen, Kreisbögen, Ellipsen oder Ellipsenbögen auswählen.
5. Eine Randbedingung wird hinzugefügt.
6. Wahlweise weitere Randbedingungen erstellen.
7. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

### Einmal-Ausführen-Modus

1. Eine der folgenden Möglichkeiten auswählen:
   - Zwei oder mehr Punkte auswählen.
   - Zwei oder mehr Kanten von Kreisen, Kreisbögen, Ellipsen oder Ellipsenbögen auswählen.
2. Das Werkzeug wie oben beschrieben aufrufen.
3. Abhängig von der Auswahl werden eine oder mehrere Randbedingungen hinzugefügt.

## Hinweise

- [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Punkte denen die Randbedingung Koinzident festlegen zugeornet ist, werden mit der [Farbe](/Sketcher_Preferences/de#Darstellung "Sketcher Preferences/de") der **Symbole für Randbedingungen** gekennzeichnet.

## Skripten

Die Randbedingung kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit dem folgenden Befehl erstellt werden:

```
Sketch.addConstraint(Sketcher.Constraint('Coincident',LineFixed,PointOfLineFixed,LineMoving,PointOfLineMoving))

```

wobei :

- `Sketch` ein Skizzenobjekt ist.
- `LineFixed` die Nummer der Linie ist, die sich durch die Anwendung der Randbedingung nicht bewegt.
- `PointOfLineFixed` bestimmt, welcher Knoten der Linie `LineFixed` die Randbedingung erfüllen muss.
- `LineMoving` die Nummer der Zeile ist, die sich durch Anwendung der Randbedingung bewegt.
- `PointOfLineMoving` bestimmt, welcher Knoten der Linie `LineMoving`, die Randbedingung erfüllen muss.

Wie die Namen `LineFixed` und `LineMoving` andeuten, bleibt, wenn sich beide beteiligten Knoten frei in jede Richtung bewegen können, der erste (in der GUI zuerst ausgewählte) fest und der andere bewegt sich. Sind jedoch weitere Randbedingungen vorhanden, dürfen sich beide Kanten bewegen.

Die Seite [Sketcher Skripten](/Sketcher_scripting/de "Sketcher scripting/de") erklärt die Werte, die für `LineFixed`, `PointOfLineFixed`, `LineMoving` und `PointOfLineMoving` verwendet werden können, und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainCoincident/de&oldid=1417508>"
