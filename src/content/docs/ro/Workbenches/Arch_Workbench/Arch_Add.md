---
title: Arch Add
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Arch Add                                       |
| poziția meniului                               |
| Arch → Add                                     |
| Ateliere                                       |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură                                     |
| _Nici unul_                                    |
| Prezentat în versiune                          |
| -                                              |
| A se vedea, de asemenea,                       |
| [Arch Remove](/Arch_Remove "Arch Remove")      |
|                                                |

## Descriere

Instrumentul Add vă permite 4 feluri de operații:

- Add [shape](/Part_Workbench "Part Workbench")-based objects to an Arch component, such as a [wall](/Arch_Wall "Arch Wall") or [structure](/Arch_Structure "Arch Structure"). Aceste obiecte fac parte din componenta Arch și vă permit să modificați forma sa, dar păstrând proprietățile sale de bază ca lățimea și înalțimea
- Adaugă componente Arch, ca de exemplu [walls](/Arch_Wall "Arch Wall") sau [structures](/Arch_Structure "Arch Structure"), la un grup de obiecte de bază Arch ca de exempluh o [floors](/Arch_Floor "Arch Floor").
- Adaugă [axis systems](/Arch_Axis "Arch Axis") la [structural objects](/Arch_Structure "Arch Structure")
- Adaugă obiecte la [section planes](/Arch_SectionPlane "Arch SectionPlane")

The counterpart of this tool is the ![](/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove "Arch Remove") tool.

![](/images/Arch_Add_example.jpg)

_In imaginea de mai sus, o casetă este adăugată la un perete._

## Cum se folosește

1. Selectați obiectul (obiectele) care urmează să fie adăugat e, apoi obiectul "gazdă" (obiectul gazdă trebuie să fie ultimul selectat)
2. Apăsați tasta ![](/images/Arch_Add.png) **Add**

## Scripting

## Script

Instrumentul Add poate fi folosit în [macros](/Macros "Macros") și de la consola Python utilizând următoarea funcție:

: ```
addComponents(objectsList, host)

    ```

- Adaugați obiectul dat sau obiectele din lista dată ca componente la obiectul gazdă. Îl utilizați pentru a adauga o ferestră la un perete , sau a adăga un peret la o pardoseală.
- Nu Returnează nimic.

Exempluː

```
import FreeCAD, Arch, Draft, Part

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Arch.addComponents(Wall2, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Add/ro&oldid=1432724>"
