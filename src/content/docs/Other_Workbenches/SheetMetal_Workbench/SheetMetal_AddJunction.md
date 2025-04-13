---
title: SheetMetal AddJunction
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| SheetMetal AddJunction                                                                                                               |
| Menu location                                                                                                                        |
| SheetMetal → Make Junction                                                                                                           |
| Workbenches                                                                                                                          |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench")                                                                           |
| Default shortcut                                                                                                                     |
| S J                                                                                                                                  |
| Introduced in version                                                                                                                |
| -                                                                                                                                    |
| See also                                                                                                                             |
| [SheetMetal AddRelief](/SheetMetal_AddRelief "SheetMetal AddRelief"), [SheetMetal AddBend](/SheetMetal_AddBend "SheetMetal AddBend") |
|                                                                                                                                      |

## Description

The ![](/src/assets/images/SheetMetal_AddJunction.svg) [SheetMetal AddJunction](/SheetMetal_AddJunction "SheetMetal AddJunction") command creates open junctions between two sections (walls/flanges) of a sheet metal object. Without these junctions sheet metal sections connected to the same base will not be unfoldable.

This command is the second of three steps to convert a shell object made with the [Part Workbench](/Part_Workbench "Part Workbench") or [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") into an unfoldable sheet metal object:

1. [SheetMetal AddRelief](/SheetMetal_AddRelief "SheetMetal AddRelief")
2. [SheetMetal AddJunction](/SheetMetal_AddJunction "SheetMetal AddJunction")
3. [SheetMetal AddBend](/SheetMetal_AddBend "SheetMetal AddBend")

![](/src/assets/images/SheetMetal_ConvertShellObject-01.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_ConvertShellObject-02.png)(/SheetMetal_AddRelief "SheetMetal AddRelief") ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_ConvertShellObject-03.png)(/SheetMetal_AddJunction "SheetMetal AddJunction") ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_ConvertShellObject-04.png)(/SheetMetal_AddBend "SheetMetal AddBend")

Make Junction - cut edges open

## Usage

1. Select one or more edges.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/SheetMetal_AddJunction.svg) [Make Junction](/SheetMetal_AddJunction "SheetMetal AddJunction") button.
   - Select the **SheetMetal → ![](/src/assets/images/SheetMetal_AddJunction.svg) Make Junction** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **SheetMetal → ![](/src/assets/images/SheetMetal_AddJunction.svg) Make Junction** option from the context menu.
   - Use the keyboard shortcut: S then J.
3. The **Junction properties** [Task panel](/Task_panel "Task panel") opens (introduced in version 0.5.00).
4. Optionally press the Select button to add more faces.
   - Press the Preview button to finish the selection and display the changes.
5. Optionally adjust the parameters in the Task panel.
6. Press the OK button to finish the command and close the Task panel.
7. A **Junction** object will be created consisting of one opening at each selected edge.
8. Optionally adjust the parameters in the [Property editor](/Property_editor "Property editor").

![](/src/assets/images/SheetMetal_ConvertShellObject-06.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_ConvertShellObject-07.png)

## Notes

- The commands ![](/src/assets/images/SheetMetal_AddRelief.svg) **[SheetMetal AddRelief](/SheetMetal_AddRelief "SheetMetal AddRelief")**, ![](/src/assets/images/SheetMetal_AddJunction.svg) **[SheetMetal AddJunction](/SheetMetal_AddJunction "SheetMetal AddJunction")**, and ![](/src/assets/images/SheetMetal_AddBend.svg) **[SheetMetal AddBend](/SheetMetal_AddBend "SheetMetal AddBend")** work best with hollow cuboids i.e. shell objects with a constant thickness and only 90° angles between faces.
- See [SheetMetal AddRelief](/SheetMetal_AddRelief#Notes "SheetMetal AddRelief") for hints about creating shell objects of cuboids.

- **Junction** in this case is not the result of this tool, which is a gap between adjacent planar faces, but rather describes the location where two planar faces of the finished real world object meet, to be welded, for example.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal Junction object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Data

Parameters

- Data**base Object** (`LinkSub`): "Base Object". Links to the edges defining gap/junction positions.
- Data**gap** (`Length`): "Junction Gap". Default: `2,00 mm`.Size of gap/junction to be added.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddJunction/en&oldid=1545465>"
