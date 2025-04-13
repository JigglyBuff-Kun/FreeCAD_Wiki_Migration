---
title: Draft Drawing
---

:::caution
THIS COMMAND IS OBSOLETEBoth the command and theDrawing Workbenchit works with are not available in0.21 and above. Use theTechDraw Workbenchand theTechDraw DraftViewcommand instead.
:::

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| Draft Drawing                                                                                                                            |
| Menu location                                                                                                                            |
| _None_                                                                                                                                   |
| Workbenches                                                                                                                              |
| [Drawing](/Drawing_Workbench "Drawing Workbench"), [Draft](/Draft_Workbench "Draft Workbench"), [Arch](/Arch_Workbench "Arch Workbench") |
| Default shortcut                                                                                                                         |
| _None_                                                                                                                                   |
| Introduced in version                                                                                                                    |
| -                                                                                                                                        |
| See also                                                                                                                                 |
| [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView")                                                                           |
|                                                                                                                                          |

## Description

The ![](/src/assets/images/Draft_Drawing.svg) **Draft Drawing** command inserts views of selected objects into a [drawing](/Drawing_Workbench "Drawing Workbench") page.

This command is similar to the [Drawing View](/Drawing_View "Drawing View") command but is optimized for [Draft](/Draft_Workbench "Draft Workbench") objects. Contrary to that command, it can handle specific objects such as [Draft Dimensions](/Draft_Dimension "Draft Dimension") and [Draft Texts](/Draft_Text "Draft Text"), and it can render faces.

This command is now obsolete. Use the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") and the [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView") command instead.

![](/src/assets/images/Draft_drawing_example.jpg)

On the left the selected Draft objects. On the right the created drawing views.

## Usage

1. To use this command in FreeCAD version 0.19 and later you need to add a button to a custom toolbar. See [Interface Customization](/Interface_Customization "Interface Customization").
2. Select one or more objects. A separate view will be created for each object.
3. Optionally add a [Drawing](/Drawing_Workbench "Drawing Workbench") page to the selection. If you do not, the view is inserted into the first page in the document. If there are no pages in the document a new page is created first.
4. Press the ![](/src/assets/images/Draft_Drawing.svg) [Draft Drawing](/Draft_Drawing "Draft Drawing") button.
5. There is a bug in the FreeCAD version 0.19 version of the command. The initial value of the Data**Direction** property is `[0, 0, 0]` which is not allowed. For objects on a plane parallel to the XY plane of the global coordinate system it should be changed to `[0, 0, 1]`. After changing this property the page and the view may need to be [recomputed](/Std_Refresh "Std Refresh").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Drawing/en&oldid=1267789>"
