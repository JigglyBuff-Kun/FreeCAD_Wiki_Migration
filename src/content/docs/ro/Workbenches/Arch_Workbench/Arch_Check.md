---
title: Arch Verifică dacă obiectele sunt non-solide
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                       |
| ----------------------------------------------------- |
| Arch Check                                            |
| poziția meniului                                      |
| Arch → Utilities → Check                              |
| Ateliere                                              |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")        |
| scurtătură                                            |
| _Nici unul_                                           |
| Prezentat în versiune                                 |
| -                                                     |
| A se vedea, de asemenea,                              |
| [Arch CloseHoles](/Arch_CloseHoles "Arch CloseHoles") |
|                                                       |

## Descriere

Acest instrument verifică documentul curent sau obiectele selectate pentru obiecte non-solide [Part](/Part_Workbench "Part Workbench") sau [Arch](/Arch_Workbench "Arch Workbench") care ar putea crea probleme, deoarece cele mai multe operații ale modulului Arch necesită obiecte solide.

## Cum se folosește

1. Apăsați ![](/images/Arch_Check.png) **Check** entry in Arch → Utilities menu

## Scrip-Programare

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Acest instrument poate fi utilizat în [macros](/Macros "Macros") și din consola Python utilizând următoarea funcție:

```
list_bad = check(objectslist, includehidden=False)

```

verifică dacă obiectele date conțin numai solide

Example:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
FreeCAD.ActiveDocument.recompute()

Circle = Draft.makeCircle(450)
Wire = Draft.makeWire([FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(1500, 1000, 0), FreeCAD.Vector(2500, -1000, 0)])

list_bad = Arch.check([Wall1, Wall2, Circle, Wire], includehidden=True)
print(list_bad)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Check/ro&oldid=1432817>"
