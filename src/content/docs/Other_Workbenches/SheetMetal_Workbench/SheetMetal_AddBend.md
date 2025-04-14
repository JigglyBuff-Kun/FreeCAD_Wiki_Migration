---
title: SheetMetal AddBend
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| SheetMetal AddBend                                                                                                                               |
| Menu location                                                                                                                                    |
| SheetMetal → Make Bend                                                                                                                           |
| Workbenches                                                                                                                                      |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench")                                                                                       |
| Default shortcut                                                                                                                                 |
| S B                                                                                                                                              |
| Introduced in version                                                                                                                            |
| -                                                                                                                                                |
| See also                                                                                                                                         |
| [SheetMetal AddRelief](/SheetMetal_AddRelief "SheetMetal AddRelief"), [SheetMetal AddJunction](/SheetMetal_AddJunction "SheetMetal AddJunction") |
|                                                                                                                                                  |

## Description

The ![](/images/SheetMetal_AddBend.svg) [SheetMetal AddBend](/SheetMetal_AddBend "SheetMetal AddBend") command replaces sharp edges between between two sections (base plate/walls/flanges) of a sheet metal object with rounded bends. Without these bends the object will not be unfoldable.

This command is the third of three steps to convert a shell object made with the [Part Workbench](/Part_Workbench "Part Workbench") or [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") into an unfoldable sheet metal object:

1. [SheetMetal AddRelief](/SheetMetal_AddRelief "SheetMetal AddRelief")
2. [SheetMetal AddJunction](/SheetMetal_AddJunction "SheetMetal AddJunction")
3. [SheetMetal AddBend](/SheetMetal_AddBend "SheetMetal AddBend")

![](/images/SheetMetal_ConvertShellObject-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-02.png)(/SheetMetal_AddRelief "SheetMetal AddRelief") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-03.png)(/SheetMetal_AddJunction "SheetMetal AddJunction") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-04.png)

Make Bend - replace edges with bends

## Usage

1. Select one or more edges.
2. There are several ways to invoke the command:
   - Press the ![](/images/SheetMetal_AddBend.svg) [Make Bend](/SheetMetal_AddBend "SheetMetal AddBend") button.
   - Select the **SheetMetal → ![](/images/SheetMetal_AddBend.svg) Make Bend** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **SheetMetal → ![](/images/SheetMetal_AddBend.svg) Make Bend** option from the context menu.
   - Use the keyboard shortcut: S then B.
3. The **Bend sharp corner properties** [Task panel](/Task_panel "Task panel") opens (introduced in version 0.5.00).
4. Optionally press the Select button to add more faces.
   - Press the Preview button to finish the selection and display the changes.
5. Optionally adjust the parameters in the Task panel.
6. Press the OK button to finish the command and close the Task panel.
7. A **SolidBend** object will be created consisting of one new bend at each selected edge.
8. Optionally adjust the parameters in the [Property editor](/Property_editor "Property editor").

![](/images/SheetMetal_ConvertShellObject-07.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-08.png)

## Notes

The commands ![](/images/SheetMetal_AddRelief.svg) **[SheetMetal AddRelief](/SheetMetal_AddRelief "SheetMetal AddRelief")**, ![](/images/SheetMetal_AddJunction.svg) **[SheetMetal AddJunction](/SheetMetal_AddJunction "SheetMetal AddJunction")**, and ![](/images/SheetMetal_AddBend.svg) **[SheetMetal AddBend](/SheetMetal_AddBend "SheetMetal AddBend")** work best with hollow cuboids i.e. shell objects with a constant thickness and only 90° angles between faces.

See [SheetMetal AddRelief](/SheetMetal_AddRelief#Notes "SheetMetal AddRelief") for hints about creating shell objects of cuboids.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal SolidBend object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Data

Parameters

- Data**base Object** (`LinkSub`): "Base object". Links to the edges to be bent.
- Data**radius** (`Length`): "Bend Radius". Default: `1,00 mm`.
- Data**thickness** (`Length`): "Thickness of sheetmetal". Default: `1,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddBend/en&oldid=1545430>"
