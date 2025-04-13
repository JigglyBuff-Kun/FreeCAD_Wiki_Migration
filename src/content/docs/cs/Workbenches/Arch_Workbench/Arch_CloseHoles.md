---
title: Arch Uzavření mezer
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch CloseHoles |
| Umístění Menu |
| Arch → Utilities → Close Holes |
| Pracovní stoly |
| [Arch](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Arch Check](/Arch_Check "Arch Check") |
|  |

## Popis

Tento nástroj identifikuje mezery (kruhovité sekvence s otevřenými okraji) v objektu [Tvary](/Part_Workbench "Part Workbench") a pokouší se je uzavřít přidáním nové části vytvořené z okrajové sekvence. Nicméně, musíte přitom stále kontrolovat zda je výsledek těleso.

## Použití

1. Vyberte objekt [Tvar](/Part_Workbench "Part Workbench")
2. Stiskněte tlačítko ![](/images/Arch_CloseHoles.png) **Uzavřít mezery** a dostanete se do nástrojového menu Architektura -> Menu Utility

## Skriptování

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Tento nástroj může být použit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

```
solid = closeHole(shape)

```

uzavře mezery v otevřeném tvaru

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CloseHoles/cs&oldid=1432839>"