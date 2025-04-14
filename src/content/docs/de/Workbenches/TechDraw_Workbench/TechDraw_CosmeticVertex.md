---
title: TechDraw Hilfspunkt
---

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw Hilfspunkt                                                                                                                         |
| Menüeintrag                                                                                                                                 |
| TechDraw → Knoten hinzufügen → Hilfspunkt hinzufügen                                                                                        |
| Arbeitsbereich                                                                                                                              |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                  |
| Standardtastenkürzel                                                                                                                        |
| _Keiner_                                                                                                                                    |
| Eingeführt in Version                                                                                                                       |
| 0.19                                                                                                                                        |
| Siehe auch                                                                                                                                  |
| [TechDraw Mittenpunkt](/TechDraw_Midpoints/de "TechDraw Midpoints/de"), [TechDraw Quadrant](/TechDraw_Quadrants/de "TechDraw Quadrants/de") |
|                                                                                                                                             |

## Beschreibung

Das Werkzeug **TechDraw Hilfspunkt** fügt einer Ansicht einen Hilfspunkt ([Knoten](/Glossary/de#Vertex "Glossary/de")) hinzu, der nicht Teil der Quellgeometrie ist. Dieser Hilfspunkt verhält sich wie jeder andere Knoten und kann für die Bemaßung verwendet werden.

![](/images/TechDraw_CosmeticVertex_Sample.png)

Hilfspunkte, verwendet, um ein sonst unmögliches Maß einzutragen

## Anwendung

1. Eine Ansicht auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/TechDraw_CosmeticVertex.svg) Hilfspunkt hinzufügen drücken.
   - Den Menüeintrag **TechDraw → Knoten hinzufügen → ![](/images/TechDraw_CosmeticVertex.svg) Hilfspunkt hinzufügen** auswählen.
3. Ein Aufgaben-Bereich wird geöffnet.
4. Wahlweise die Schaltfläche Punkt-Auswahl drücken und einen Punkt auf dem Zeichnungsblatt auswählen. Die Schaltfläche Auswahl abbrechen drücken, um diesen Vorgang abzubrechen.
5. Wahlweise die X- und Y-Koordinaten des Punktes anpassen oder festlegen. Die Koordinaten beziehen sich auf das Zentrum der Ansicht.
6. Die Schaltfläche OK drücken.

## Hinweise

- Die Position eines Hilfspunktes kann nicht geändert werden. Im Moment gibt es keine andere Möglichkeit, als ihn zu löschen und einen neuen zu erstellen.

## Eigenschaften

Hilfspunkte haben keine eigenen Eigenschaften, da sie keine Dokumentobjekte sind. Sie verwenden dieselben Farb- und Größeneinstellungen wie reguläre Geometrieknoten.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Hilfspunkte stehen in [Makros](/Macros/de "Macros/de") oder der [Python](/Python/de "Python/de")-Konsole zur Verfügung.

```
dvp = App.ActiveDocument.View
org = App.Vector(0.0, 0.0, 0.0)
dvp.makeCosmeticVertex(org);

#lines too!
start = FreeCAD.Vector (1.0, 5.0, 0.0)
end = FreeCAD.Vector(1.0, -5.0, 0.0)
style = 2
weight = 0.75
pyGreen = (0.0, 0.0, 1.0, 0.0)
dvp.makeCosmeticLine(start,end,style, weight, pyGreen)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_CosmeticVertex/de&oldid=1500116>"
