---
title: Architektura OdebratTvar
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch RemoveShape |
| Umístění Menu |
| Arch → Utilities → Remove Shape |
| Pracovní stoly |
| [Arch](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Arch MeshToShape](/Arch_MeshToShape/cs "Arch MeshToShape/cs") |
|  |

## Popis

Tento nástroj se pokouší odebrat trojrozměrný tvar ze [zdi](/Arch_Wall "Arch Wall") nebo [stavební struktury](/Arch_Structure "Arch Structure") a nastavit její vlastnosti, tak že ji udělá plně parametrickou. Tento nástroj funguje pouze tehdy když základní tvar je trojrozměrný (přesně 6 ploch, všechny úhly jsou pravé).

## Použití

1. Vyberte [zeď](/Arch_Wall "Arch Wall") nebo [strukturu](/Arch_Structure "Arch Structure")
2. Stiskem tlačítka ![](/images/Arch_RemoveShape.png) **Odebrat tvar** přejdete od Architektura -> Menu Utility

## Scripting

## Skriptování

Tento nástroj může být použit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

```
removeShape(objs, mark=True)

```

vezme stavební objekt (zeď nebo struktura) založený na trojrozměrném tvaru a odebere z něj vnitřní tvar o délce, šířce a výšce daný parametry.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_RemoveShape/cs&oldid=1437828>"