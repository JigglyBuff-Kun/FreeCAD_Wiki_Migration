---
title: Arch RemoveShape
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                          |
| -------------------------------------------------------- |
| Arch RemoveShape                                         |
| poziția meniului                                         |
| Arch → Utilities → Remove Shape                          |
| Ateliere                                                 |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")           |
| scurtătură                                               |
| _Nici unul_                                              |
| Prezentat în versiune                                    |
| -                                                        |
| A se vedea, de asemenea,                                 |
| [Arch MeshToShape](/Arch_MeshToShape "Arch MeshToShape") |
|                                                          |

## Descriere

Acest instrument încearcă să înlăture forma cubică interioară a unui [Arch Wall](/Arch_Wall "Arch Wall") sau [Arch Structure](/Arch_Structure "Arch Structure") și să-și ajusteze proprietățile, făcând-o complet parametrică. Acest instrument va funcționa numai dacă forma subiacentă este cubică (exact 6 fețe, toate colțurile au doar unghiuri drepte).

## Cum se folosește

1. Selectați un [Arch Wall](/Arch_Wall "Arch Wall") sau o [Arch Structure](/Arch_Structure "Arch Structure")
2. Apăsați tasta ![](/images/Arch_RemoveShape.png) **Remove Shape** din meniul Arch -> Utilities menu

## Scripting

## Scrip-Programare

Acest instrument poate fi utilizat în [macros](/Macros "Macros") și din consola Python utilizând următoarea funcție:

```
removeShape(objs, mark=True)

```

ia un obiect arc (perete sau o structură) construit pe o formă cubică și îndepărtează forma interioară, păstrând lungimea, lățimea și înălțimea ca parametri.

```
import FreeCAD, Draft, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

Structure = Arch.makeStructure(Box)
FreeCAD.ActiveDocument.recompute()

Arch.removeShape(Structure)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_RemoveShape/ro&oldid=1437836>"
