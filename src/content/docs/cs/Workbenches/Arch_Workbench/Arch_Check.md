---
title: Arch Kontrola (Check)
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Check |
| Umístění Menu |
| Arch → Utilities → Check |
| Pracovní stoly |
| [Arch](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Arch CloseHoles](/Arch_CloseHoles/cs "Arch CloseHoles/cs") |
|  |

## Popis

Tento nástroj kontroluje daný dokument nebo jen vybrané objekty na objekty které nejsou tělesy v [Modulu Díl](/Part_Workbench "Part Workbench") nebo [Architektura](/Arch_Workbench "Arch Workbench"), tj. takové které mohou dělat problémy, protože většina činností v modulu Stavitelství vyžaduje tělesa.

## Použití

1. Stiskněte tlačítko ![](/images/Arch_Check.png) **Kontrola** a vstoupíte do Architektura → Menu Utility

## Skriptování

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Tento nástroj může být použit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

```
list_bad = check(objectslist, includehidden=False)

```

kontroluje zda daný objekt obsahuje pouze statické objekty

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Check/cs&oldid=1432823>"