---
title: Arch CloseHoles
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Arch CloseHoles                                |
| poziția meniului                               |
| Arch → Utilities → Close Holes                 |
| Ateliere                                       |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură                                     |
| _Nici unul_                                    |
| Prezentat în versiune                          |
| -                                              |
| A se vedea, de asemenea,                       |
| [Arch Check](/Arch_Check/ro "Arch Check/ro")   |
|                                                |

## Descriere

Acest instrument identifică găuri/orificii (secvența circulară a marginilor deschise) într-un obiect [Shape](/Part_Workbench "Part Workbench") și încearcă să le închidă prin adăugarea unei fațete noi constrută pe acea secvență de margini. Totuși, trebuie să vă asigurați că rezultatul este un obiect solid.

## Cum se folosește

1. Selectați un obiect [Shape](/Part_Workbench "Part Workbench")
2. Apăsați ![](/images/Arch_CloseHoles.svg) [Close Holes](/Arch_CloseHoles "Arch CloseHoles") entry in **Arch → Utilities → Close Holes**

## Scrip-Programare

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Acest instrument poate fi utilizat în [macros](/Macros "Macros") și din consola Python utilizând următoarea funcție:

```
solid = closeHole(shape)

```

închide o gaură într-o formă deschisă

Example:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CloseHoles/ro&oldid=1432837>"
