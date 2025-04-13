---
title: SheetMetal AddRelief
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------ |
| SheetMetal AddRelief                                                                                                                       |
| Menu location                                                                                                                              |
| SheetMetal → Make Relief                                                                                                                   |
| Workbenches                                                                                                                                |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench")                                                                                 |
| Default shortcut                                                                                                                           |
| S R                                                                                                                                        |
| Introduced in version                                                                                                                      |
| -                                                                                                                                          |
| See also                                                                                                                                   |
| [SheetMetal AddJunction](/SheetMetal_AddJunction "SheetMetal AddJunction"), [SheetMetal AddBend](/SheetMetal_AddBend "SheetMetal AddBend") |
|                                                                                                                                            |

## Description

The ![](/src/assets/images/SheetMetal_AddRelief.svg) [SheetMetal AddRelief](/SheetMetal_AddRelief "SheetMetal AddRelief") command creates corner reliefs, cutouts, at the points where three sections (base plate/walls/flanges) of a sheet metal object meet. Without these reliefs the object will not be unfoldable.

This command is the first of three steps to convert a shell object made with the [Part Workbench](/Part_Workbench "Part Workbench") or [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") into an unfoldable sheet metal object:

1. [SheetMetal AddRelief](/SheetMetal_AddRelief "SheetMetal AddRelief")
2. [SheetMetal AddJunction](/SheetMetal_AddJunction "SheetMetal AddJunction")
3. [SheetMetal AddBend](/SheetMetal_AddBend "SheetMetal AddBend")

![](/src/assets/images/SheetMetal_ConvertShellObject-01.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_ConvertShellObject-02.png)(/SheetMetal_AddRelief "SheetMetal AddRelief") ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_ConvertShellObject-03.png)(/SheetMetal_AddJunction "SheetMetal AddJunction") ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_ConvertShellObject-04.png)(/SheetMetal_AddBend "SheetMetal AddBend")

Make Relief - cut off corners

## Usage

1. Select one or more corner vertex(es).
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/SheetMetal_AddRelief.svg) [Make Relief](/SheetMetal_AddRelief "SheetMetal AddRelief") button.
   - Select the **SheetMetal → ![](/src/assets/images/SheetMetal_AddRelief.svg) Make Relief** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Sheet Metal → ![](/src/assets/images/SheetMetal_AddRelief.svg) Make Relief** option from the context menu.
   - Use the keyboard shortcut: S then R.
3. The **Corner relief on solid parameters** [Task panel](/Task_panel "Task panel") opens (introduced in version 0.5.00).
4. Optionally press the Select button to add more vertices.
   - Press the Preview button to finish the selection and display the changes.
5. Optionally adjust the parameters in the Task panel.
6. Press the OK button to finish the command and close the Task panel.
7. A **CornerRelief** object will be created consisting of one new corner relief at each selected vertex.
8. Optionally adjust the parameters in the [Property editor](/Property_editor "Property editor").

![](/src/assets/images/SheetMetal_ConvertShellObject-05.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_ConvertShellObject-06.png)

## Notes

The commands ![](/src/assets/images/SheetMetal_AddRelief.svg) **[SheetMetal AddRelief](/SheetMetal_AddRelief "SheetMetal AddRelief")**, ![](/src/assets/images/SheetMetal_AddJunction.svg) **[SheetMetal AddJunction](/SheetMetal_AddJunction "SheetMetal AddJunction")**, and ![](/src/assets/images/SheetMetal_AddBend.svg) **[SheetMetal AddBend](/SheetMetal_AddBend "SheetMetal AddBend")** work best with hollow cuboids i.e. shell objects with a constant thickness and only 90° angles between faces.

Shell objects can be created with commands from the ![](/src/assets/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench")
or the ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").

To create a hollow cuboid with the [Part Workbench](/Part_Workbench "Part Workbench"):

1. Create a solid using either:
   - ![](/src/assets/images/Part_Box.svg) [Part Box](/Part_Box "Part Box").
   - ![](/src/assets/images/Part_Extrude.svg) [Part Extrude](/Part_Extrude "Part Extrude") from:
     - A ![](/src/assets/images/Draft_Rectangle.svg) [Draft Rectangle](/Draft_Rectangle "Draft Rectangle").
     - A ![](/src/assets/images/Draft_Wire.svg) [Draft Wire](/Draft_Wire "Draft Wire").
     - A ![](/src/assets/images/Sketcher_NewSketch.svg) [Sketch](/Sketcher_NewSketch "Sketcher NewSketch").
2. Use ![](/src/assets/images/Part_Thickness.svg) [Part Thickness](/Part_Thickness "Part Thickness") to create a shell object from the solid (Typically with the thickness value of the sheet metal).

To create a hollow cuboid with the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"):

1. Create a solid using either:
   - ![](/src/assets/images/PartDesign_AdditiveBox.svg) [Additive Box](/PartDesign_AdditiveBox "PartDesign AdditiveBox").
   - ![](/src/assets/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") from a ![](/src/assets/images/Sketcher_NewSketch.svg) [Sketch](/Sketcher_NewSketch "Sketcher NewSketch").
2. Use ![](/src/assets/images/PartDesign_Thickness.svg) [PartDesign Thickness](/PartDesign_Thickness "PartDesign Thickness") to create a shell object from the solid (Typically with the thickness value of the sheet metal).

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal Relief object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Data

Parameters

- Data**base Object** (`LinkSub`): "Base Object". Links to the corner vertexes defining relief positions.
- Data**relief** (`Length`): "Relief Size". Default: `2,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddRelief/en&oldid=1545476>"
