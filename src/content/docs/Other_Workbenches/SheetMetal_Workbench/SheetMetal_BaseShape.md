---
title: SheetMetal BaseShape
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                            |
| ---------------------------------------------------------- |
| SheetMetal BaseShape                                       |
| Menu location                                              |
| SheetMetal → Add base shape                                |
| Workbenches                                                |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench") |
| Default shortcut                                           |
| H                                                          |
| Introduced in version                                      |
| 0.3.10                                                     |
| See also                                                   |
| _None_                                                     |
|                                                            |

## Description

The ![](/images/SheetMetal_BaseShape.svg) **SheetMetal BaseShape** command creates a SheetMetal BaseShape object from parameters.

![](/images/SheetMetal_BaseShape-01.png)

The five available BaseShapes: L-shape, U-shape, Tub, Hat, and Box

A rectangular sixth shape, called Flat, was introduced in v 0.4.10.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/SheetMetal_BaseShape.svg) [Add base shape](/SheetMetal_BaseShape "SheetMetal BaseShape") button.
   - Select the **SheetMetal → ![](/images/SheetMetal_BaseShape.svg) Add base shape** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **SheetMetal → ![](/images/SheetMetal_BaseShape.svg) Add base shape** option from the context menu.
   - Use the keyboard shortcut: H.
2. The **Sheet metal base shape properties** [Task panel](/Task_panel "Task panel") opens.
3. Select the desired shape from the **Base shape type** options.
4. Select the position of the origin in the **Location of part origin** widget.
5. Optionally adjust the parameters in the Task panel.
6. Press the OK button to finish the command and close the Task panel.
7. A **BaseShape** object will be created.
8. Optionally adjust the parameters in the [Property editor](/Property_editor "Property editor").

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal BaseShape object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Data

Parameters

- Data**fill Gaps** (`Bool`): Extends side and flanges to close all gaps. Default: `true`.
- Data**flangeWidth** (`Length`): Width of top flange. Default: `5,00 mm`.
- Data**height** (`Length`): Shape height. Default: `10,00 mm`.
- Data**length** (`Length`): Shape length. Default: `30,00 mm`.
- Data**origin Loc** (`Enumeration`): Origin location.

  : `-X,-Y`, `-X,0`, `-X,+Y`, `0,-Y`, `0,0` (default), `0,+Y`, `+X,-Y`, `+X,0`, and `+X,+Y`

- Data**radius** (`Length`): Bend Radius. Default: `1,00 mm`.
- Data**shape Type** (`Enumeration`): Base shape type.

  : `Flat` (introduced in v 0.4.10), `L-Shape` (default), `U-Shape`, `Tub`, `Hat`, and `Box`.

- Data**thickness** (`Length`): Thickness of sheetmetal. Default: `1,00 mm`.
- Data**width** (`Length`): Shape width. Default: `20,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_BaseShape/en&oldid=1545018>"
