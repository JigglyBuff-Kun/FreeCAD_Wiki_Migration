---
title: TechDraw Quadranten
---

|                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw Quadranten                                                                                                                                      |
| Menüeintrag                                                                                                                                              |
| TechDraw → Knoten hinzufügen → Quadrantengrenzpunkte hinzufügen                                                                                          |
| Arbeitsbereich                                                                                                                                           |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                               |
| Standardtastenkürzel                                                                                                                                     |
| _Keiner_                                                                                                                                                 |
| Eingeführt in Version                                                                                                                                    |
| 0.19                                                                                                                                                     |
| Siehe auch                                                                                                                                               |
| [TechDraw Hilfspunkt](/TechDraw_CosmeticVertex/de "TechDraw CosmeticVertex/de"), [TechDraw Mittenpunkte](/TechDraw_Midpoints/de "TechDraw Midpoints/de") |
|                                                                                                                                                          |

## Beschreibung

Das Werkzeug **TechDraw Quadranten** fügt einer oder mehreren ausgewählten Kanten der Länge nach drei [Hilfspunkte](/TechDraw_CosmeticVertex/de "TechDraw CosmeticVertex/de") hinzu. Die Punkte werden bei 25%, 50% und 75% der Länge jeder Kante positioniert. Für eine Kreiskante ergeben sich so Hilfspunkte bei 90°, 180° and 270°, zusätzlich zu ihrem geometrischen Knotenpunkt bei 0°.

![](/src/assets/images/TechDraw_CosmeticQuadrant_Sample.png)

Hilfspunkte an Quadrantengrenzpunkten eines Kreises

## Anwendung

1. Eine oder mehrere Kanten in einer Ansicht auswählen. Jede Kante kann ausgewählt werden, nicht nur Kreise.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_Quadrants.svg) Quadrantengrenzpunkte hinzufügen drücken.
   - Den Menüeintrag **TechDraw → Knoten hinzufügen → ![](/src/assets/images/TechDraw_Quadrants.svg) Quadrantengrenzpunkte hinzufügen** auswählen.

## Hinweise

- Die erstellten Hilfspunkte sind nicht parametrisch mit den ausgewählten Kanten verbunden.
- Um einen Hilfspunkt zu löschen, wird er ausgewählt und die Entf-Taste gedrückt. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

## Eigenschaften

Quadrantenknoten haben keine eigenen Eigenschaften, da sie keine Dokumentobjekte sind. Sie teilen Farb- und Größeneinstellungen mit regulären Geometrieknoten.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Kosmetische Knoten sind zur Zeit nicht über [Makros](/Macros/de "Macros/de") oder die [Python](/Python/de "Python/de") Konsole zugänglich. Dieser Schnipsel entfernt alle Kosmetische Knoten aus der Ansicht.

```
v = App.ActiveDocument.View
v.clearCV()
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Quadrants/de&oldid=1500207>"
