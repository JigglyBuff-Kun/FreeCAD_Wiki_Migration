---
title: Architektura Podlaží
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Floor |
| Umístění Menu |
| Arch → Floor |
| Pracovní stoly |
| [Arch](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| F L |
| Představen ve verzi |
| - |
| Viz také |
| [Arch Building](/Arch_Building/cs "Arch Building/cs"), [Arch Site](/Arch_Site/cs "Arch Site/cs") |
|  |

## Popis

Podlaží je speciální typ skupinového objektu FreeCADu, který má pár doplňkových vlastností zvláště vhodných pro výstavbu podlaží. Speciálně mají vlastnost výška, kterou mohou potomci objektu ([zdi](/Arch_Wall/cs "Arch Wall/cs") a [struktury](/Arch_Structure/cs "Arch Structure/cs")) automaticky použít pro nastavení jejich vlastní výšky.

As of 0.18 and above the Arch Floor is derived entirely from the [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart") object, which is a general container to organize a building model not limited to floors or storeys. Older Floor objects can be converted to the new type by right clicking on them and choosing `Convert to BuildingPart`.

## Použití

1. Volitelně lze vybrat jeden nebo více objektů, které lze vložit do Vašeho nového podlaží
2. Stiskněte tlačítko ![](/images/Arch_Floor.png) **Podlaží** nebo klávesy F a L

## Volby

* Po vytvoření podlaží můžete přidávat další objekty pomocí myši přetáhnutím a upuštěním (drag and drop) na požadované místo v panelu stromu nebo použitím nástroje ![](/images/Arch_Add.png) [Přidat](/Arch_Add/cs "Arch Add/cs")
* Odstranit objekty z podlaží můžete podobně myší přetáhnutím a upuštěním objektu mimo panelu stromu nebo použitím nástroje ![](/images/Arch_Remove.png) [Odebrat](/Arch_Remove/cs "Arch Remove/cs").

## Vlastnosti

An Arch Floor object shares all properties from an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart"), with the Údaje**Ifc Type** set to `"Building Storey"`.

## Scripting

## Skriptování

Nástroj Podlaží může být využit v [makrech](/Macros/cs "Macros/cs") a z konzoly Pythonu použitím následující funkce:

```
Floor = makeFloor(objectslist=None, baseobj=None, name="Floor")

```

vytvoří podlaží včetně objektů ze seznamu objectslist

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

Floor = Arch.makeFloor([Wall1, Wall2])

Building = Arch.makeBuilding([Floor])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Floor/cs&oldid=1537463>"