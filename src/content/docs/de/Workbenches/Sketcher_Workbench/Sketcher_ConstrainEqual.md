---
title: Sketcher GleichheitFestlegen
---

|                                                            |
| ---------------------------------------------------------- |
| Sketcher GleichheitFestlegen                               |
| Menüeintrag                                                |
| Skizze → Sketcher-Randbedingungen → Gleichheit festlegen   |
| Arbeitsbereich                                             |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") |
| Standardtastenkürzel                                       |
| E                                                          |
| Eingeführt in Version                                      |
| -                                                          |
| Siehe auch                                                 |
| _Keiner_                                                   |
|                                                            |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_ConstrainEqual.svg) Sketcher GleichheitFestlegen legt fest, dass Linien (gerade Kanten) die gleiche Länge besitzen bzw. dass Kurven (Alle anderen Kanten außer [B-Splines](/Sketcher_CreateBSpline/de "Sketcher CreateBSpline/de")) die gleiche Krümmung aufweisen. Die Kanten müssen gleichartig sein. Kreise und Kreisbögen sind gleichartig (ihre Radien werden gleichgesetzt), ebenso Ellipsen und Ellipsenbögen (ihre Haupt- und Nebenradien werden jeweils gleichgesetz).

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_ConstrainEqual.svg) Gleichheit festlegen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/images/Sketcher_ConstrainEqual.svg) Gleichheit festlegen** auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Constrain → ![](/images/Sketcher_ConstrainEqual.svg) Gleichheit festlegen** im Kontextmenü auswählen.
   - Das Tastaturkürzel E.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
   - Zwei Kanten derselben Art auswählen.
4. Eine Randbedingung wird hinzugefügt.
5. Wahlweise weitere Randbedingungen erstellen.
6. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

### Einmal-Ausführen-Modus

1. Eine oder mehrere Kanten auswählen.
2. Das Werkzeug wie oben beschrieben aufrufen oder mit der folgenden weiteren Möglichkeit:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/images/Sketcher_ConstrainEqual.svg) Gleichheit festlegen** im Kontextmenü auswählen.
3. Abhängig von der Auswahl werden eine oder mehrere Randbedingungen hinzugefügt.

## Skripten

```
Sketch.addConstraint(Sketcher.Constraint('Equal', Edge1, Edge2))

```

Die Seite [Sketcher Skripterstellung](/Sketcher_scripting/de "Sketcher scripting/de") erklärt die Werte, die für `Edge1` und `Edge2` verwendet werden können und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainEqual/de&oldid=1426452>"
