---
title: SheetMetal AddCutout
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                            |
| ---------------------------------------------------------- |
| SheetMetal AddCutout                                       |
| Menu location                                              |
| SheetMetal → Extruded Cutout                               |
| Workbenches                                                |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench") |
| Default shortcut                                           |
| E C                                                        |
| Introduced in version                                      |
| 0.5.04                                                     |
| See also                                                   |
| _None_                                                     |
|                                                            |

## Description

The ![](/src/assets/images/SheetMetal_AddCutout.svg) [SheetMetal AddCutout](/SheetMetal_AddCutout "SheetMetal AddCutout") command creates an extruded cutout from a sketch extrusion.

The difference between a 'normal' cutout and an extruded cutout is that in the latter case the edges are made perpendicular to the selected face of the sheet metal object. The effect of the command is only visible if the sketch is not plane-parallel to the face.

![](/src/assets/images/SheetMetal_AddCutout_Example.png)

Extruded cutout based on a circular sketch

## Usage

1. Select a planar face and a sketch with a closed contour (in any order).
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/SheetMetal_AddCutout.svg) [Extruded Cutout](/SheetMetal_AddCutout "SheetMetal AddCutout") button.
   - Select the **SheetMetal → ![](/src/assets/images/SheetMetal_AddCutout.svg) Extruded Cutout** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **SheetMetal → ![](/src/assets/images/SheetMetal_AddCutout.svg) Extruded Cutout** option from the context menu.
   - Use the keyboard shortcut: E then C.
3. The **Extruded Cutout properties** [Task panel](/Task_panel "Task panel") opens.
4. Optionally press the Face button to reselect the planar face.
5. Optionally press the Sketch button to reselect a sketch.
6. Optionally adjust the parameters in the Task panel.
7. Press the OK button to finish the command and close the Task panel.
8. An **ExtrudedCutout** object will be created consisting of one or more holes in a line through the object.
9. Optionally adjust the parameters in the [Property editor](/Property_editor "Property editor").

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal ExtrudedCutout object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Data

Extruded Cutout

- Data**Cut Side** (`Enumeration`): Default is `Inside`. Side of the cut.
- Data**Cut Type** (`Enumeration`): Default is `Through everything both sides`. Cut type.
- Data (hidden)**Extrusion Length1** (`Length`): Default is `500.0 mm`. Length of the extrusion direction 1.
- Data (hidden)**Extrusion Length2** (`Length`): Default is `500.0 mm`. Length of the extrusion direction 2.
- Data**Selected Face** (`LinkSub`): The selected object and face.
- Data**Sketch** (`Link`): The sketch for the cut.

Extruded Cutout Improvements

- Data**Improve Cut** (`Bool`): Default is `False`. Improve cut geometry if it enters the cutting zone. Only select `True` if the cut needs fix, because it can be slow.
- Data (hidden)**Improve Level** (`IntegerConstraint`): Default is `4`. Level of cut improvement quality. More than 10 can take a very long time.
- Data**Refine** (`Bool`): Default is `False`. Refine the geometry.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddCutout/en&oldid=1545450>"
