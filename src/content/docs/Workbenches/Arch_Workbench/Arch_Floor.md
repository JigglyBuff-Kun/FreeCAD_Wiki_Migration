---
title: Arch Floor
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                       |
| ------------------------------------- |
| Arch Floor                            |
| Menu location                         |
| 3D/BIM → Level                        |
| Workbenches                           |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                      |
| L V                                   |
| Introduced in version                 |
| -                                     |
| See also                              |
| _None_                                |
|                                       |

## Description

The **Arch Floor** tool is a special type of FreeCAD group object that has a couple of additional properties particularly suited for building floors. Particularly, they have a height property, that its children objects ([walls](/Arch_Wall "Arch Wall") and [structures](/Arch_Structure "Arch Structure")) can use to set their own height automatically. They are mostly used to organize your model.

As of 0.18 and above the Arch Floor is derived entirely from the [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart") object, which is a general container to organize a building model not limited to floors or storeys. Older Floor objects can be converted to the new type by right clicking on them and choosing `Convert to BuildingPart`.

## Usage

1. Optionally, select one or more objects to be included in your new floor.
2. Invoke the Arch Floor command several ways:
   - Pressing the ![](/images/Arch_Floor.svg) [Floor](/Arch_Floor "Arch Floor") button on the toolbar.
   - Using the L then V keyboard keys.
   - Using the **3D/BIM → Floor** entry from the top menu.

## Options

- After creating a floor, you can add more objects to it by drag and dropping them in the Tree View or by using the ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") tool.
- You can remove objects from a floor by drag and dropping them out of it the Tree View or by using the ![](/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove "Arch Remove") tool.

## Properties

An Arch Floor object shares all properties from an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart"), with the Data**Ifc Type** set to `"Building Storey"`.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Floor tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Floor = makeFloor(objectslist=None, baseobj=None, name="Floor")

```

- Creates a `Floor` object from `objectslist`, which is a list of objects.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Floor/en&oldid=1537464>"
