---
title: Sketcher YAbstandFestlegen
---

|                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sketcher YAbstandFestlegen                                                                                                                                                                  |
| Menüeintrag                                                                                                                                                                                 |
| Skizze → Sketcher-Randbedingungen → Vertikalen Abstand festlegen                                                                                                                            |
| Arbeitsbereich                                                                                                                                                                              |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                                                                                  |
| Standardtastenkürzel                                                                                                                                                                        |
| I                                                                                                                                                                                           |
| Eingeführt in Version                                                                                                                                                                       |
| -                                                                                                                                                                                           |
| Siehe auch                                                                                                                                                                                  |
| [Sketcher XAbstandFestlegen](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de"), [Sketcher AbstandFestlegen](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de") |
|                                                                                                                                                                                             |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_ConstrainDistanceY.svg) YAbstandFestlegen: Legt den vertikalen Abstand zwischen zwei Punkten oder den Endpunkten einer Linie fest. Ist ein einzelner Punkt vorausgewählt, bezieht sich der Abstand auf den Ursprung der Skizze.

![](/src/assets/images/Sketcher_ConstraintDistanceY_example.png)

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass nichts ausgewählt ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ist die [Voreinstellung](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") **Werkzeuge für Maßeinträge** auf `Einzelnes Werkzeug` (Standardeinstellung) gesetz: Den Abwärtspfeil rechts neben der Schaltfläche ![](/src/assets/images/Sketcher_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) drücken und im Ausklappmenü **![](/src/assets/images/Sketcher_ConstrainDistanceY.svg) Vertikalen Abstand festlegen** auswählen.
   - Hat die Voreinstellung einen anderen Wert (und in 0.21 und davor): Die Schaltfläche ![](/src/assets/images/Sketcher_ConstrainDistanceY.svg) Vertikalen Abstand festlegen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/src/assets/images/Sketcher_ConstrainDistanceY.svg) Vertikalen Abstand festlegen** auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Bemaßung → ![](/src/assets/images/Sketcher_ConstrainDistanceY.svg) Vertikalen Abstand festlegen** im Kontextmenü auswählen.
   - Das Tastaturkürzel I.
3. Für weitere Schritte siehe [Sketcher XAbstandFestlegen](/Sketcher_ConstrainDistanceX/de#Fortsetzen-Modus "Sketcher ConstrainDistanceX/de")

### Einmal-Ausführen-Modus

Siehe [Sketcher XAbstandFestlegen](/Sketcher_ConstrainDistanceX/de#Einmal-Ausführen-Modus "Sketcher ConstrainDistanceX/de").

## Skripten

Abstand vom Ursprung:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Abstand zwischen zwei Endpunkten:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Die vertikale Länge der Linie (die GUI erlaubt die Auswahl der Kante, aber das ist nur eine Abkürzung für die Nutzung der beiden Endpunkte derselben Linie):

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

Die Seite [Skizzierer Skripten](/Sketcher_scripting "Sketcher scripting") erklärt die Werte, die für `Edge1`, `Edge2`, `Edge`, `PointOfEdge1`, `PointOfEdge2`, `PointOfEdge` und `Line` verwendet werden können, und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistanceY/de&oldid=1423173>"
