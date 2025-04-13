---
title: Piso Arch
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Floor |
| Localização do menu |
| Arch → Floor |
| Bancadas de trabalho |
| [Arch](/Arch_Workbench/pt "Arch Workbench/pt") |
| Atalho padrão |
| F L |
| Introduzido na versão |
| - |
| Veja também |
| [Arch Building](/index.php?title=Arch_Building/pt&action=edit&redlink=1 "Arch Building/pt (page does not exist)"), [Arch Site](/index.php?title=Arch_Site/pt&action=edit&redlink=1 "Arch Site/pt (page does not exist)") |
|  |

## Descrição

O piso "Arch" é um tipo especial de grupo do FreeCAD que tem algumas propriedades adicionais particularmente ajustadas aos piso dos edifícios. Em particular a propriedade altura, que os objetos nele contidos ([paredes](/Arch_Wall "Arch Wall") e [estruturas](/Arch_Structure "Arch Structure")) podem usar para definir a sua própria altura automaticamente. Estes são usados principalmente para organizar o modelo.

As of 0.18 and above the Arch Floor is derived entirely from the [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart") object, which is a general container to organize a building model not limited to floors or storeys. Older Floor objects can be converted to the new type by right clicking on them and choosing `Convert to BuildingPart`.

## Como usar

1. Opcionalmente, selecione um ou mais objetos para serem incluídos no seu novo piso
2. Pressione o icone ![](/images/Arch_Floor.png) **Piso Arch** ou pressione as teclas F e L

## Options

* After creating a floor, you can add more objects to it by drag and dropping them in the Tree View or by using the ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") tool.
* You can remove objects from a floor by drag and dropping them out of it the Tree View or by using the ![](/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove "Arch Remove") tool.

## Properties

An Arch Floor object shares all properties from an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart"), with the Dados**Ifc Type** set to `"Building Storey"`.

## Scripting

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Floor tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Floor = makeFloor(objectslist=None, baseobj=None, name="Floor")

```

* Creates a `Floor` object from `objectslist`, which is a list of objects.

Example:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Floor/pt&oldid=1537458>"