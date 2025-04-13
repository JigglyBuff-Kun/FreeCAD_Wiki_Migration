---
title: Sketcher XAbstandFestlegen
---

|                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sketcher XAbstandFestlegen                                                                                                                                                                  |
| Menüeintrag                                                                                                                                                                                 |
| Skizze → Sketcher-Randbedingungen → Horizontalen Abstand festlegen                                                                                                                          |
| Arbeitsbereich                                                                                                                                                                              |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                                                                                  |
| Standardtastenkürzel                                                                                                                                                                        |
| L                                                                                                                                                                                           |
| Eingeführt in Version                                                                                                                                                                       |
| -                                                                                                                                                                                           |
| Siehe auch                                                                                                                                                                                  |
| [Sketcher YAbstandFestlegen](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de"), [Sketcher AbstandFestlegen](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de") |
|                                                                                                                                                                                             |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) XAbstandFestlegen: Legt den horizontalen Abstand zwischen zwei Punkten oder den Endpunkten einer Linie fest. Ist ein einzelner Punkt vorausgewählt, bezieht sich der Abstand auf den Ursprung der Skizze.

![](/src/assets/images/Constraint_H_Distance.png)

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass nichts ausgewählt ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ist die [Voreinstellung](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") **Werkzeuge für Maßeinträge** auf `Einzelnes Werkzeug` (Standardeinstellung) gesetz: Den Abwärtspfeil rechts neben der Schaltfläche ![](/src/assets/images/Sketcher_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) drücken und im Ausklappmenü **![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) Horizontalen Abstand festlegen** auswählen.
   - Hat die Voreinstellung einen anderen Wert (und in 0.21 und davor): Die Schaltfläche ![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) Horizontalen Abstand festlegen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) Horizontalen Abstand festlegen** auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Bemaßung → ![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) Horizontalen Abstand festlegen** im Kontextmenü auswählen.
   - Das Tastaturkürzel L.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Eine der folgenden Möglichkeiten auswählen:
   - Zwei Punkte auswählen (einer von beiden kann der Ursprung sein).
   - Eine einzelne Linie auswählen.
5. Wurde eine [festlegende maßliche Randbedingung](/Sketcher_ToggleDrivingConstraint/de "Sketcher ToggleDrivingConstraint/de") erstellt, wird abhängig von den [Voreinstellungen](/Sketcher_Preferences/de#Anzeige "Sketcher Preferences/de") ein Dialog zum [Bearbeiten seines Wertes](/Sketcher_Workbench/de#Randbedingungen_bearbeiten "Sketcher Workbench/de") geöffnet.
6. Eine Randbedingung wird hinzugefügt.
7. Wahlweise weitere Randbedingungen erstellen.
8. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

### Einmal-Ausführen-Modus

1. Eine der folgenden Möglichkeiten auswählen:
   - Ein oder zwei Punkte auswählen.
   - Eine einzelne Linie auswählen.
2. Das Werkzeug aufrufen, wie oben beschrieben.
3. Wahlweise den [Wert der Randbedingung](/Sketcher_Workbench/de#Randbedingungen_bearbeiten "Sketcher Workbench/de") bearbeiten.
4. Eine Randbedingung wird hinzugefügt.

## Skripten

Abstand vom Ursprung:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Abstand zwischen zwei Endpunkten:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Die horizontale Länge der Linie (die GUI erlaubt die Auswahl der Kante, aber das ist nur eine Abkürzung für die Nutzung der beiden Endpunkte derselben Linie):

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

Die Seite [Sketcher Skripten](/Sketcher_scripting "Sketcher scripting") erklärt die Werte, die für `Edge1`, `Edge2`, `Edge`, `PointOfEdge1`, `PointOfEdge2`, `PointOfEdge` und `Line` verwendet werden können, und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistanceX/de&oldid=1423171>"
