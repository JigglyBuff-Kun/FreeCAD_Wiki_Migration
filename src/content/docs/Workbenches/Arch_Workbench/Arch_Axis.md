---
title: Arch Axis
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                            |
| ------------------------------------------------------------------------------------------ |
| Arch Axis                                                                                  |
| Menu location                                                                              |
| Annotation → Axis                                                                          |
| Workbenches                                                                                |
| [BIM](/BIM_Workbench "BIM Workbench")                                                      |
| Default shortcut                                                                           |
| A X                                                                                        |
| Introduced in version                                                                      |
| -                                                                                          |
| See also                                                                                   |
| [Arch AxisSystem](/Arch_AxisSystem "Arch AxisSystem"), [Arch Grid](/Arch_Grid "Arch Grid") |
|                                                                                            |

## Description

The ![](/images/Arch_Axis.svg) [Arch Axis](/Arch_Axis "Arch Axis") tool allows you to place a series of axes in the current document. The distance and the angle between axes is customizable, as well as the numbering style. The axes serve mainly as references to snap objects onto, but can also be used together with ![](/images/Arch_AxisSystem.svg) [Arch AxisSystems](/Arch_AxisSystem "Arch AxisSystem"). They can also be referenced by other Arch objects to create parametric arrays, for example of beams or columns. ![](/images/Arch_Grid.svg) [Arch Grids](/Arch_Grid "Arch Grid") can also be used in places of axes.

![](/images/Arch_Axis_example.jpg)

Two axes objects positioned perpendicularly to each other to create a grid

## Usage

1. Press the ![](/images/Arch_Axis.svg) [Axis](/Arch_Axis "Arch Axis") button, or press A then X keys.
2. [Move](/Draft_Move "Draft Move")/[rotate](/Draft_Rotate "Draft Rotate") the axes system to the desired position.
3. Enter edit mode by double-clicking the axes system in the tree view to adjust its settings like number of axes, distances and angles between axes.

## Options

- Each axis in the series has its own distance and angle in relation to the previous axis. This allows to do very complex systems such as non-orthogonal systems, polar systems or any kind of non-uniform system.
- Double-clicking the axis in the tree view allows to edit the distances, angles and labels of each axis.
- Axes length, size of the bubbles and numbering styles are customizable directly via the axes system's properties.
- Each axis can also display a label, which is editable via the task panel dialog.

## Properties

- Data**Length**: The length of the axes
- Data**Limit**: If greater than zero, each axis will be represented as two lines of the given length instead of one continuous line [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- View**Bubble Size**: The size of the axis bubbles
- View**Numeration style**: How the axes are numbered: 1,2,3, A,B,C, etc...
- View**Bubble Position**: Where the bubble is placed on the axis: At start point, endpoint, both or none.
- View**Font Name**: A font to draw the bubble number and/or labels
- View**Font Size**: The size of the label text only (bubble text is controlled by the bubble size)
- View**Show Labels**: Turns the display of the label texts on/off

## Use as section mark

By setting the **Bubble Position** property to **Arrow left/right** or **Bar left/right**, the axis will display a filled arrow or bar instead of the bubble, so it can be used as a section mark. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Axis tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Axes = makeAxis(num=5, size=1000, name="Axes")

```

- Creates an `Axes` object from the given number (`num`) of axes, and `size`, the interval between each axis.

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

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Axis/en&oldid=1447114>"
