---
title: Sketcher AbstandFestlegen
---

|                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sketcher AbstandFestlegen                                                                                                                                                                      |
| Menüeintrag                                                                                                                                                                                    |
| Skizze → Sketcher-Randbedingungen → Abstand festlegen                                                                                                                                          |
| Arbeitsbereich                                                                                                                                                                                 |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                                                                                     |
| Standardtastenkürzel                                                                                                                                                                           |
| K D                                                                                                                                                                                            |
| Eingeführt in Version                                                                                                                                                                          |
| -                                                                                                                                                                                              |
| Siehe auch                                                                                                                                                                                     |
| [Sketcher XAbstandFestlegen](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de"), [Sketcher YAbstandFestlegen](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de") |
|                                                                                                                                                                                                |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_ConstrainDistance.svg) Abstand festlegen: Legt die Länge einer Linie, den Abstand zwischen zwei Punkten, den senkrechten Abstand eines Punktes zu einer Linie fest; oder [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de") den Abstand zwischen den Kanten zweier Kreise oder Kreisbögen oder zwischen der Kante eines Kreises oder Kreisbogens und einer Linie; oder [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") die Länge eines Kreisbogens.

![](/src/assets/images/Sketcher_ConstrainDistance_example.png)

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass nichts ausgewählt ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ist die [Voreinstellung](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") **Werkzeuge für Maßeinträge** auf `Einzelnes Werkzeug` (Standardeinstellung) gesetz: Den Abwärtspfeil rechts neben der Schaltfläche ![](/src/assets/images/Sketcher_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) drücken und im Ausklappmenü **![](/src/assets/images/Sketcher_ConstrainDistance.svg) Abstand festlegen** auswählen.
   - Hat die Voreinstellung einen anderen Wert (und in 0.21 und davor): Die Schaltfläche ![](/src/assets/images/Sketcher_ConstrainDistance.svg) Abstand festlegen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/src/assets/images/Sketcher_ConstrainDistance.svg) Abstand festlegen** auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Bemaßung → ![](/src/assets/images/Sketcher_ConstrainDistance.svg) Abstand festlegen** im Kontextmenü auswählen.
   - Das Tastaturkürzel I.
3. Für weitere Schritte siehe [Sketcher XAbstandFestlegen](/Sketcher_ConstrainDistanceX/de#Fortsetzen-Modus "Sketcher ConstrainDistanceX/de").

### Einmal-Ausführen-Modus

1. Eine der folgenden Möglichkeiten auswählen:
   - Eine einzelne Linie auswählen.
   - Zwei Punkte auswählen.
   - Einen Punkt und eine Linie auswählen (in beliebiger Reihenfolge).
   - Die Kanten zweier Kreise oder Kreisbögen auswählen.
   - Eine Kante eines Kreises oder Kreisbogens und eine Linie auswählen (in beliebiger Reihenfolge).
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Die Kante eines einzelnen Kreisbogens auswählen.
2. Das Werkzeug aufrufen, wie oben beschrieben.
3. Wahlweise den [Wert der Randbedingung](/Sketcher_Workbench/de#Randbedingungen_bearbeiten "Sketcher Workbench/de") bearbeiten.
4. Eine Randbedingung wird hinzugefügt.

## Hinweise

- Wenn es passt, sollte die Verwendung der Randbedingungen [XAbstandFestlegen](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de") oder [YAbstandFestlegen](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de") erwägt werden; sie sind effizienter.

## Skripten

Abstand vom Ursprung:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Abstand zwischen zwei Endpunkten:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Länge der Linie (die GUI erlaubt die Auswahl der Kante, aber das ist nur eine Abkürzung für die Nutzung der beiden Endpunkte derselben Linie):

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

Senkrechter Abstand eines Punktes (`Edge, PointOfEdge`) zu einer Linie (`Line`):

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, Line, 0, App.Units.Quantity('123.0 mm')))

```

Abstand zwischen den Kanten zweier Kreise:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Circle1, 0, Circle2, 0, App.Units.Quantity('123.0 mm')))

```

Die Seite [Sketcher Skripterstellung](/Sketcher_scripting/de "Sketcher scripting/de") erklärt die Werte, die für `Edge`, `Edge1`, `Edge2`, `PointOfEdge`, `PointOfEdge1`, `PointOfEdge2`, `Line`, `Circle1` und `Circle2` verwendet werden können, und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistance/de&oldid=1423194>"
