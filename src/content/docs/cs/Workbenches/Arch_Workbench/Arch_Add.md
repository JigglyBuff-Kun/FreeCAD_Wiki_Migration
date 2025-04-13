---
title: Arch Přidat (Add)
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Přidat |
| Umístění Menu |
| Arch → Add |
| Pracovní stoly |
| [Arch](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Remove](/Arch_Remove/cs "Arch Remove/cs") |
|  |

## Popis

Nástroj Přidat Vám umožní 4 druhy operací:

* Přidání na [tvaru](/Part_Workbench/cs "Part Workbench/cs") založených objektů na stavební prvek jako například [zeď](/Arch_Wall/cs "Arch Wall/cs") nebo [struktura](/Arch_Structure/cs "Arch Structure/cs"). Tyto objekty pak tvoří součást stavebního prvku a umožňují vám modifikovat jeho tvar, ale dál si udržují základní vlastnosti jako je šířka a výška
* Přidávání stavebních prvků jako jsou [zdi](/Arch_Wall/cs "Arch Wall/cs") nebo [struktury](/Arch_Structure/cs "Arch Structure/cs") ke skupinám založeným na stavebních objektech jako jsou [podlaží](/Arch_Floor/cs "Arch Floor/cs").
* Přidávání [osových systémů](/Arch_Axis/cs "Arch Axis/cs") ke [strukturovaným objektům](/Arch_Structure/cs "Arch Structure/cs")
* Přidávání stavebních objektů do [dílčích plánů](/Arch_SectionPlane/cs "Arch SectionPlane/cs")

The counterpart of this tool is the ![](/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove "Arch Remove") tool.

![](/images/Arch_Add_example.jpg)

*Na předchozím obrázku je kvádr přidaný do zdi.*

## Použití

1. Vyberte objekt(y), který má být přidán a potom "hlavní" objekt (hlavní objekt posledním, který vyberete)
2. Stiskněte tlačítko ![](/images/Arch_Add.png) **Přidat**

## Scripting

## Skriptování

Nástroj Add (Přidat) může být využit v [makrech](/Macros/cs "Macros/cs") a z konzole Pythonu použitím následující funkce:

:   ```
    addComponents(objectsList, host)

    ```

* Přidává vybraný objekt nebo objekty z daného seznamu (objectList) jako prvky k vybranému hlavnímu objektu (hostObject). Využijete to například pro přidávání oken do zdi nebo přidávání zdí na podlaží.
* Nevrací nic.

Příklad:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Add/cs&oldid=1432718>"