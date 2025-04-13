---
title: Arch Zaun
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Zaun |
| Menüeintrag |
| 3D/BIM → Zaun |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Arch Zaun ist ein Objekt, das einen Zaun aufbaut durch die Wiederholung eines einzelnen Zaunpfostens und eines Zaunabschnitts entlang eines gegebenen Pfades.

![](/images/Arch_Fence_description_example.png)

## Anwendung

### Erzeugung von Grundauf

1. Einen Arbeitsbereich nach Wahl verwenden, um einen einzelnen Zaunpfosten und einen einzelnen Zaunabschnitt zu erstellen.
2. Den Pfad, dem der Zaun folgen soll, mit Hilfe des Arbeitsbereichs [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") oder [Draft](/Draft_Workbench/de "Draft Workbench/de").
3. Zum Arbeitsbereich [BIM](/BIM_Workbench/de "BIM Workbench/de") zurück wechseln.
4. Den Zaunabschnitt, den Pfosten und den Pfad in genau dieser Reihenfolge auswählen.
5. Die Schaltfläche ![](/images/Arch_Fence.svg) Zaun drücken.

## Optionen

Vorerst geht das Werkzeug von folgenden Voraussetzungen aus:

1. Der Pfad wird auf der XY-Ebene gezeichnet
2. Zaunabschnitt und Pfosten sind am Ursprung so modelliert, dass sie in der Vorderansicht aufrecht stehen

## Eigenschaften

### Daten

* Daten-Eigenschaft**Path**: Der Pfad, dem der Zaun folgen soll.
* Daten-Eigenschaft**Post**: Ein einzelner Zaunpfosten, der wiederholt werden soll.
* Daten-Eigenschaft**Section**: Ein einzelner Zaunabschnitt, der wiederholt werden soll.
* Daten-Eigenschaft**Number Of Posts**: Die Gesamtanzahl der Pfosten, die für den Aufbau des Zauns verwendet werden. Diese wird automatisch berechnet.
* Daten-Eigenschaft**Number Of Sections**: Die Gesamtanzahl der Zaunabschnitte, die zum Aufbau des Zauns verwendet werden. Diese wird automatisch berechnet.

### Ansicht

* Ansicht-Eigenschaft**Use Original Colors**: Wenn auf `true` gesetzt, verwendet der Zaun die Farben des originalen Zaunabschnitts und des originalen Pfostens. Andernfalls wird die Formfarbe (ShapeColor) des Zauns verwendet, um den Zaun einzufärben.

## Hinweise

* Arch Zaun wurde mit FC v0.19 durch den Anwender furti eingeführt.
* [Forumsbeitrag](https://forum.freecadweb.org/viewtopic.php?t=36149) der die Funktionalität von Arch Zaun diskutiert.

## Skripten

Das Werkzeug Zaun kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus durch Verwendung der folgenden Funktion verwendet werden:

```
Fence = buildFence(section, post, path)

```

Beispiel:

```
import FreeCAD
import Part
import Arch

parts = []

parts.append(Part.makeBox(2000, 50, 30, FreeCAD.Vector(0, 0, 1000 - 30)))
parts.append(Part.makeBox(2000, 50, 30))
parts.append(Part.makeBox(20, 20, 1000 - 60, FreeCAD.Vector(0, 15, 30)))
parts.append(Part.makeBox(20, 20, 1000 - 60, FreeCAD.Vector(1980, 15, 30)))

for i in range(8):
    parts.append(Part.makeBox(20, 20, 1000 - 60, FreeCAD.Vector((2000 / 9 * (i + 1)) - 10, 15, 30)))

Part.show(Part.makeCompound(parts), "Fence_section")
fence_section = FreeCAD.ActiveDocument.Fence_section

sketch = FreeCAD.ActiveDocument.addObject("Sketcher::SketchObject", "Path")
sketch.Placement = FreeCAD.Placement(FreeCAD.Vector(0, 0, 0), FreeCAD.Rotation(0, 0, 0, 1))
sketch.addGeometry(Part.LineSegment(FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(20000, 0, 0)), False)
sketch.addGeometry(Part.LineSegment(FreeCAD.Vector(20000, 0, 0), FreeCAD.Vector(20000, 20000, 0)), False)

post = Part.makeBox(100, 100, 1000, FreeCAD.Vector(0, 0, 0))
Part.show(post, "Post")
post = FreeCAD.ActiveDocument.Post

Fence = Arch.buildFence(fence_section, post, sketch)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Fence/de&oldid=1461676>"