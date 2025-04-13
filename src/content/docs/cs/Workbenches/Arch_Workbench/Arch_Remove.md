---
title: Architektura Odebrat
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Architektura Odebrat |
| Umístění Menu |
| Arch → Remove |
| Pracovní stoly |
| [Arch](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Arch Add](/Arch_Add "Arch Add") |
|  |

## Popis

Nástroj Odebrat Vám umožňuje 2 druhy činnosti:

* Odebrat komponentu ze stavebního objektu, například odebrat kvádr, který byl přidán do zdi, jako je v příkladu [Přidat](/Arch_Add/cs "Arch Add/cs")
* Odebrat objekt založený na objektu [tvar](/Part_Workbench/cs "Part Workbench/cs") ze stavební komponenty jako je třeba [zeď](/Arch_Wall/cs "Arch Wall/cs") nebo [struktura](/Arch_Structure/cs "Arch Structure/cs")

The counterpart of this tool is the ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") tool.

![](/images/Arch_Remove_example.jpg)

*Na obrázku výše je ze zdi odebrán kvádr*

## Použití

1. Vyberte součást uvnitř stavebního objektu **nebo**:
2. Vyberte objekt(y), který má být odebrán, potom stavební komponentu, ze které se bude odebírat (tato stavební komponenta musí být vybrána jako poslední)
3. Stiskněte tlačítko ![](/images/Arch_Remove.png) **Odebrat**

Or

1. Select objects to be subtracted, the last object selected must the Arch object from which the other objects will be subtracted.
2. Press the ![](/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove") button, or **Modify → ![](/images/Arch_Remove.svg) Remove component** from the top menu.

## Scripting

## Skriptování

Nástroj Odebrat může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

```
removeComponents(objectsList, host=None)

```

* odebere zadanou komponentu nebo komponenty podle zadaného seznamu objectsList z jejich rodičů. Je-li specifikován hlavní objekt hostObject, tato funkce se pokusí místo nich přidat komponenty jako jsou mezery.

Příklad:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Remove/cs&oldid=1437755>"