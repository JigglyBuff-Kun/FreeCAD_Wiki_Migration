---
title: Arch LöcherSchließen
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch LöcherSchließen |
| Menüeintrag |
| Utils → Löcher schließen |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch Überprüfen](/Arch_Check/de "Arch Check/de") |
|  |

## Beschreibung

Dieses Werkzeug identifiziert Löcher (ringförmige Folge von offenen Kanten) in einem [Part](/Part_Workbench/de "Part Workbench/de")-Objekt und versucht sie, durch hinzufügen einer Fläche, zu schließen, die aus der Folge von Kanten erstellt wird. Du musst dich aber noch selbst davon überzeugen, dass das Ergebnis ein Festkörper ist.

## Anwendung

1. Eine [Form](/Part_Workbench/de "Part Workbench/de") (Shape-Objekt) auswählen.
2. Den Menüeintrag **Utils → Löcher schließen** auswählen.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Dieses Werkzeug kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus durch folgende Funktion verwendet werden:

```
solid = closeHole(shape)

```

* Schließt ein Loch in einer Form `shape`, die ein `Part.Shape` ist und gibt das neue Objekt `solid` zurück.

Beispiel:

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0),FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 900
Box.Width = 450
Box.Height = 2000
FreeCAD.ActiveDocument.recompute()

Draft.rotate(Box, 45)
Draft.move(Box, FreeCAD.Vector(1000, 700, 0))

Arch.removeComponents(Box, Wall)
FreeCAD.ActiveDocument.recompute() 

solid = Arch.closeHole(Wall.Shape)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CloseHoles/de&oldid=1541968>"