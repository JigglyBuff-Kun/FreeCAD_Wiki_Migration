---
title: Arch Entfernen
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Entfernen |
| Menüeintrag |
| Modify → Komponente entfernen |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch Schnittebene](/Arch_CutPlane/de "Arch CutPlane/de"), [Arch Hinzufügen](/Arch_Add/de "Arch Add/de") |
|  |

## Beschreibung

Das Werkzeug **Arch Entfernen** ermöglicht zwei Arten von Operationen:

* Entfernen einer Unterkomponente aus einem Arch-Objekt, zum Beispiel einen Quader entfernen, der einer Wand hinzugefügt wurde, wie in dem Beispiel unter ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add/de "Arch Add/de").
* Abziehen eines auf einer [Form](/Part_Workbench/de "Part Workbench/de") basierenden Objekts aus einer Arch-Komponente wie z.B. einer ![](/images/Arch_Wall.svg) [Arch-Wand](/Arch_Wall/de "Arch Wall/de") oder ![](/images/Arch_Structure.svg) [Arch-Struktur](/Arch_Structure/de "Arch Structure/de")

Das Gegenstück dieses Werkzeugs ist das ![](/images/Arch_Add.svg) [Arch Hinzufügen](/Arch_Add/de "Arch Add/de") Werkzeug.

![](/images/Arch_Remove_example.jpg)

Ein Quader wird von einer Wand subtrahiert und hinterlässt in ihr eine Aussparung.

## Anwendung

1. Eine Unterkomponente in einem Arch-Objekt auswählen
2. Die Schaltfläche ![](/images/Arch_Remove.svg) Komponente entfernen drücken oder den Menüeintrag **Modify → ![](/images/Arch_Remove.svg) Komponente entfernen** auswählen.

Oder

1. Abzuziehende Objekte auswählen, das letzte Objekt muss das Arch-Objekt sein, von dem die anderen Objekte abgezogen werden sollen.
2. Die Schaltfläche ![](/images/Arch_Remove.svg) Komponente entfernen drücken oder den Menüeintrag **Modify → ![](/images/Arch_Remove.svg) Komponente entfernen** auswählen.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Entfernen Werkzeug kann in [Makros](/Macros/de "Macros/de") und aus der [Python](/Python/de "Python/de") Konsole mit der folgenden Funktion verwendet werden:

```
removeComponents(objectsList, host=None)

```

* Entfernt die in `objectsList` angegebenen Objekte von den Elternobjekten.

1. Ist ein `Host`-Objekt angegeben, wird stattdessen versucht, die in `objectsList` angegebenen Objekte als Aussparungen zum `host` hinzuzufügen.

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

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Remove/de&oldid=1542000>"