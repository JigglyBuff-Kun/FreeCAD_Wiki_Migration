---
title: Curves WaterlineCurves
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves WaterlineCurves                         |
| Menu location                                  |
| Surfaces → WaterLine                           |
| Workbenches                                    |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| -                                              |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The ![](/src/assets/images/Curves_WaterlineCurves.svg) **Curves WaterlineCurves** tool creates waterline curves on selected faces.

## Usage

1. Select one or more faces and/or objects.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_WaterlineCurves.svg) [WaterLine](/Curves_WaterlineCurves "Curves WaterlineCurves") button.
   - Select the **Surfaces → ![](/src/assets/images/Curves_WaterlineCurves.svg) WaterLine** option from the menu.
3. One collective **Waterline** object is created.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to change the number of waterlines and adjust their orientation (see Properties below).

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Waterline** object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Settings

- Data**Direction** (`Vector`): Axis of the cutting planes
- Data**Number** (`Integer`): The number of waterlines

Source

- Data**Source** (`LinkSubList`): The source face or object

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_WaterlineCurves/en&oldid=1568604>"
