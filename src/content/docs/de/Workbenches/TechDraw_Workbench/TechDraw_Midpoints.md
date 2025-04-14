---
title: TechDraw Mittenpunkte
---

|                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| TechDraw Mittenpunkte                                                                                                                                  |
| Menüeintrag                                                                                                                                            |
| TechDraw → Knoten hinzufügen → Kantenmittelpunkte hinzufügen                                                                                           |
| Arbeitsbereich                                                                                                                                         |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")                                                                                                   |
| Standardtastenkürzel                                                                                                                                   |
| _Keiner_                                                                                                                                               |
| Eingeführt in Version                                                                                                                                  |
| 0.19                                                                                                                                                   |
| Siehe auch                                                                                                                                             |
| [TechDraw Hilfspunkt](/TechDraw_CosmeticVertex/de "TechDraw CosmeticVertex/de"), [TechDraw Quadranten](/TechDraw_Quadrants/de "TechDraw Quadrants/de") |
|                                                                                                                                                        |

## Beschreibung

Das Werkzeug **TechDraw Mittenpunkte** fügt einer oder mehreren Kanten einen Hilfspunkt ([Knoten](/Glossary/de#Vertex "Glossary/de")) auf halber Länge hinzu.

![](/images/TechDraw_CosmeticMidpoint_Sample.png)

Hilfspunkte an Kantenmittenpunkten

## Anwendung

1. Eine oder mehrere Kanten in einer Ansicht auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/TechDraw_Midpoints.svg) [Kantenmittelpunkte hinzufügen](/TechDraw_Midpoints "TechDraw Midpoints") drücken.
   - Den Menüeintrag **TechDraw → Knoten hinzufügen → ![](/images/TechDraw_Midpoints.svg) Kantenmittelpunkte hinzufügen** auswählen.

## Hinweise

- Die erstellten Hilfspunkte sind nicht parametrisch mit den ausgewählten Kanten verbunden.
- Um einen Hilfspunkt zu löschen, wird er ausgewählt und die Entf-Taste gedrückt. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

## Eigenschaften

Hilfspunkte haben keine eigenen Eigenschaften, da sie keine Dokumentobjekte sind. Sie verwenden dieselben Farb- und Größeneinstellungen wie reguläre Geometrieknoten.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Hilfspunkte sind zur Zeit nicht über [Makros](/Macros/de "Macros/de") oder die [Python](/Python/de "Python/de")-Konsole erreichbar. Dieser Schnipsel entfernt alle Hilfspunkte aus der Ansicht.

```
v = App.ActiveDocument.View
v.clearCV()
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Midpoints/de&oldid=1500201>"
