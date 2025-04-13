---
title: Arch Remove
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Arch Remove                                    |
| poziția meniului                               |
| Arch → Remove                                  |
| Ateliere                                       |
| [Arch](/Arch_Workbench/fr "Arch Workbench/fr") |
| scurtătură                                     |
| _Nici unul_                                    |
| Prezentat în versiune                          |
| -                                              |
| A se vedea, de asemenea,                       |
| [Arch Add](/Arch_Add "Arch Add")               |
|                                                |

## Descriere

Instrumentele de eliminare vă permit să efectuați două tipuri de operații:

- Eliminați o subcomponentă dintr-un obiect Arch, de exemplu, scoateți o cutie adăugată pe un perete, ca în exemplul [Arch Add](/Arch_Add "Arch Add")
- Scoateți un obiect bazat pe [shape](/Part_Workbench "Part Workbench") dintr-o componentă Arch, cum ar fi [wall](/Arch_Wall "Arch Wall") sau [structure](/Arch_Structure "Arch Structure")

The counterpart of this tool is the ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") tool.

![](/images/Arch_Remove_example.jpg)

_In imaginea de mai sus, o casetă este extrasă dintr-un perete._

## Cum se folosește

1. Selectați o subcomponentă în interiorul unui obiect Arch, **sau**:
2. Selectați obiectul (obiectele) care trebuie scos, apoi componenta Arch din care trebuie să fie scăzută (componenta Arch trebuie să fie ultimul lucru pe care l-ați selectat)
3. Apăsați butonul ![](/images/Arch_Remove.png) **Remove**

Or

1. Select objects to be subtracted, the last object selected must the Arch object from which the other objects will be subtracted.
2. Press the ![](/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove") button, or **Modify → ![](/images/Arch_Remove.svg) Remove component** from the top menu.

## Scripting

## Scrip-Programare

Instrumentul Remove poate fi folosit în [macros](/Macros "Macros") și din consola python utilizând următoarea funcție:

```
removeComponents(objectsList, host=None)

```

- elimină componenta dată sau componentele din lista dată de la părinți ei. Dacă este specificat un obiect gazdă, această funcție va încerca să adauge componentele ca găuri la obiectul gazdă.

Exemplu:

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

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Remove/ro&oldid=1437760>"
