---
title: Arch AxisSystem
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                          |
| ------------------------------------------------------------------------ |
| Arch AxisSystem                                                          |
| Menu location                                                            |
| Annotation → Axis System                                                 |
| Workbenches                                                              |
| [BIM](/BIM_Workbench "BIM Workbench")                                    |
| Default shortcut                                                         |
| _None_                                                                   |
| Introduced in version                                                    |
| -                                                                        |
| See also                                                                 |
| [Arch Axis](/Arch_Axis "Arch Axis"), [Arch Grid](/Arch_Grid "Arch Grid") |
|                                                                          |

## Description

The [AxisSystem](/Arch_AxisSystem "Arch AxisSystem") tool allows you to combine two or three [Arch Axis](/Arch_Axis "Arch Axis") objects.

This is useful to define the intersection points between the different axes. Arch objects can then use this system to duplicate their shape on the different intersection points.

![](/images/Arch_AxisSystem_example.jpg)

Three [Arch Axis](/Arch_Axis "Arch Axis") objects combined into one [Arch AxisSystem](/Arch_AxisSystem "Arch AxisSystem"). An [Arch Structure](/Arch_Structure "Arch Structure") object uses this system as its Data**Axis** property, to have its shape duplicated at each intersection point.

## Usage

1. Optionally, select the [Arch Axis](/Arch_Axis "Arch Axis") objects you wish to include in this system.
2. Press the ![](/images/Arch_AxisSystem.svg) [Axis System](/Arch_AxisSystem "Arch AxisSystem") button.
3. Right-click the newly created axes system object in the tree view to add/edit the [Arch Axis](/Arch_Axis "Arch Axis") objects included in this system.
4. Select any existing [Arch Axis](/Arch_Axis "Arch Axis") and press ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") or ![](/images/Arch_Remove.svg) [Remove](/Arch_Remove "Arch Remove") buttons to add or remove it to/from this system.
5. Set the Data**Axis** property of any Arch object to point to this system, to have its shape duplicated to the intersection points of this system.

## Options

- A same [Arch Axis](/Arch_Axis "Arch Axis") object can be part of more than one system
- Any shape-based object can also be used as the **Axis** property of Arch objects. In this case, the object shape will be duplicated along the vertices of the Axis object

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The AxisSystem tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
AxisSystem = makeAxisSystem(axes, name="Axis System")

```

- Creates an `AxisSystem` object from the given `axes`, which is a single [Arch Axis](/Arch_Axis "Arch Axis"), or a list of them.

Example:

```
import Draft, Arch

Axes = Arch.makeAxis(5, 1000)

Axes.ViewObject.LineWidth = 3
Axes.ViewObject.BubbleSize = 200
Axes.ViewObject.FontSize = 150

Axes2 = Arch.makeAxis(6, 500)

Axes2.ViewObject.LineWidth = 2
Axes2.ViewObject.BubbleSize = 200
Axes2.ViewObject.FontSize = 150
Axes2.ViewObject.NumberingStyle = "A,B,C"
FreeCAD.ActiveDocument.recompute()

Axes2.Length = 6000
Draft.rotate(Axes2, -90)
Draft.move(Axes2, FreeCAD.Vector(-1000, 2500, 0))
FreeCAD.ActiveDocument.recompute()

AxisSystem = Arch.makeAxisSystem([Axes, Axes2])

Structure = Arch.makeStructure(length=200, width=200, height=100)
Draft.move(Structure, FreeCAD.Vector(-100, 0, 0))
Structure.Axis = AxisSystem
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_AxisSystem/en&oldid=1432779>"
