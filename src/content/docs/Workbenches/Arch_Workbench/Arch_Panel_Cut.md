---
title: Arch Panel Cut
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- |
| Arch Panel Cut                                                                                                                        |
| Menu location                                                                                                                         |
| Utils → Panel tools → Panel Cut                                                                                                       |
| Workbenches                                                                                                                           |
| [BIM](/BIM_Workbench "BIM Workbench")                                                                                                 |
| Default shortcut                                                                                                                      |
| _None_                                                                                                                                |
| Introduced in version                                                                                                                 |
| 0.17                                                                                                                                  |
| See also                                                                                                                              |
| [Arch Panel](/Arch_Panel "Arch Panel"), [Arch Panel Sheet](/Arch_Panel_Sheet "Arch Panel Sheet"), [Arch Nest](/Arch_Nest "Arch Nest") |
|                                                                                                                                       |

## Description

The **Arch Panel Cut** tool creates, in the 3D document, a flat, 2D view of an [Arch Panel](/Arch_Panel "Arch Panel"), to be included in an [Arch Panel Sheet](/Arch_Panel_Sheet "Arch Panel Sheet") or directly exported to [DXF](/Draft_DXF "Draft DXF"). The Panel Cut objects are also supported by the [CAM Workbench](/CAM_Workbench "CAM Workbench").

![](/images/Arch_Wikihouse_02.jpg)

## Usage

1. Select one or more [Arch Panel](/Arch_Panel "Arch Panel") objects.
2. Select the **Utils → Panel tools → ![](/images/Arch_Panel_Cut.svg) Panel Cut** option from the menu.
3. Adjust the desired properties.

## Options

- If the panel is not flat (corrugated, for example), the relief won't appear in the Panel cut. This tool is useful mainly for flat panels
- The panel cut can display a tag. This tag can be a custom line of text or can automatically show the Tag, Label or Description of its linked Panel.
- To be useful for CNC machining, the tag should be written using a stick font, where letters are simple polylines that are easy for the machine to follow. Upon creation, the Panel Cut object will automatically use the font specified in Edit → Preferences → Draft → Texts and Dimensions → Default ShapeString font file
- Double-clicking on the panel cut in the tree view after it is created allows you to enter edit mode and modify the position of the tag
- When you need to layout different Panel Cuts together, Panel Cuts can display a margin, that is useful to make sure a certain space is always present between a cut and another

## Properties

### Data

- Data**Source**: The [Arch Panel](/Arch_Panel "Arch Panel") object shown by this Cut
- Data**Tag Text**: The text to display. Can be %tag%, %label% or %description% to display the panel tag or label
- Data**Tag Size**: The size of the tag text
- Data**Tag Position**: The position of the tag text. Keep (0,0,0) for automatic center position
- Data**Tag Rotation**: The rotation of the tag text
- Data**Font File**: The font of the tag text
- Data**Make Face**: If True, the panel is a Part Face, otherwise a Part Wire

### View

- View**Margin**: A margin that can be displayed outside the panel cut shape
- View**Show Margin**: Turns the display of the margin on/off

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Panel Cut tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
View = makePanelCut(panel, name="PanelView")

```

- Creates a `View` object (2D projection) from the existing `panel`.

Example:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(500, 0, 0)
p3 = FreeCAD.Vector(500, 50, 0)
p4 = FreeCAD.Vector(550, 50, 0)
p5 = FreeCAD.Vector(600, 0, 0)
p6 = FreeCAD.Vector(1000, 0, 0)
p7 = FreeCAD.Vector(1000, 400, 0)
p8 = FreeCAD.Vector(600, 400, 0)
p9 = FreeCAD.Vector(600, 350, 0)
p10 = FreeCAD.Vector(550, 350, 0)
p11 = FreeCAD.Vector(500, 400, 0)
p12 = FreeCAD.Vector(0, 400, 0)

Wire = Draft.makeWire([p1, p2, p3, p4, p5, p6,
                       p7, p8, p8, p9, p10, p11, p12], closed=True)
Panel = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

View = Arch.makePanelCut(Panel)
View.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

```

## Tutorials

- [Wikihouse porting tutorial](/Wikihouse_porting_tutorial "Wikihouse porting tutorial")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Cut/en&oldid=1437867>"
