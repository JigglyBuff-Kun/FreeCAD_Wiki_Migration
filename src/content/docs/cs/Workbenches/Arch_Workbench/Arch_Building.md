---
title: Arch Stavba
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Budova |
| Umístění Menu |
| Arch → Building |
| Pracovní stoly |
| [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| B U |
| Představen ve verzi |
| - |
| Viz také |
| [Arch Podlaží](/Arch_Floor/cs "Arch Floor/cs"), [Arch Staveniště](/Arch_Site/cs "Arch Site/cs") |
|  |

## Popis

Stavba je speciální typ skupiny objektů FreeCADu, zvlášť přizpůsobené k prezentaci celých stavebních jednotek. Většinou jsou využívány pro uspořádání Vašeho modelu obsahujícího objekty [podlaží](/Arch_Floor/cs "Arch Floor/cs")

## Použití

1. Volitelně lze vybrat jeden nebo více objektů, které lze vložit do Vaší nové stavby
2. Stiskněte tlačítko ![](/images/Arch_Building.png) **Stavba** nebo klávesy B a U

## Volby

* Po vytvoření stavby můžete přidávat další objekty pomocí myši přetáhnutím a upuštěním (drag and drop) na požadované místo v panelu stromu nebo použitím nástroje ![](/images/Arch_Add.png) [Přidat](/Arch_Add/cs "Arch Add/cs")
* Odstranit objekty ze stavby můžete podobně myší přetáhnutím a upuštěním objektu mimo panelu stromu nebo použitím nástroje ![](/images/Arch_Remove.png) [Odebrat](/Arch_Remove/cs "Arch Remove/cs").

## Properties

* Údaje**Building Type**: The type of this building, to choose from a list

## Scripting

## Skriptování

Nástroj Stavba může být použit v [makrech](/Macros/cs "Macros/cs") a z konzoly Pythonu použitím následující funkce:

```
Building = makeBuilding(objectslist=None, baseobj=None, name="Building")

```

vytvoří stavbu včetně objektů ze seznamu objectslist

Příklad:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Building/cs&oldid=1432800>"