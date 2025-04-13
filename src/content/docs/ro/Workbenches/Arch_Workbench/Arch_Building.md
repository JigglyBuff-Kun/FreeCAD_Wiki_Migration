---
title: Arch Construcție/Edificiu
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                             |
| --------------------------------------------------------------------------- |
| Arch Building                                                               |
| poziția meniului                                                            |
| Arch → Building                                                             |
| Ateliere                                                                    |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                              |
| scurtătură                                                                  |
| B U                                                                         |
| Prezentat în versiune                                                       |
| -                                                                           |
| A se vedea, de asemenea,                                                    |
| [Arch Floor](/Arch_Floor "Arch Floor"), [Arch Site](/Arch_Site "Arch Site") |
|                                                                             |

## Descriere

Clădirea Arch este un tip special de obiect al grupului FreeCAD, care este special conceput pentru a reprezenta o întreagă unitate de construcție. Ele sunt cele mai utilizate pentru a vă organiza modelul, conținând obiecte [floor](/Arch_Floor "Arch Floor").

## Cum se folosește

1. Optionally, select one or more objects to be included in your new building
2. Apăsați butonul ![](/images/Arch_Building.png) **Arch Building** , sau apăsați tastele B apoi U

## Opţiuni

- După crearea unei clădiri, puteți să adăugați mai multe obiecte prin glisarea și plasarea acestora în Vizualizarea Arborescentă sau utilizând instrumentul ![](/images/Arch_Add.png) [Arch Add](/Arch_Add "Arch Add")
- Puteți să eliminați obiecte dintr-o clădire prin tragerea/glisarea și scoaterea lor din Vizualizarea arborescentă sau folosind instrumentul ![](/images/Arch_Remove.png) [Arch Remove](/Arch_Remove "Arch Remove")

## Properties

- Date**Building Type**: The type of this building, to choose from a list

## Scripting

## Scrip-Programare

Instrumentul pentru Construcție poate fi utilizat în [macro-uri](/Macros/ro "Macros/ro") și din consola Python utilizând următoarea funcție:

```
Building = makeBuilding(objectslist=None, baseobj=None, name="Building")

```

creează o consrucție incluzând obiectele din lista dată.

Exempluː

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
FreeCAD.ActiveDocument.recompute()

Building = Arch.makeBuilding([Wall1, Wall2])

Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Building/ro&oldid=1432802>"
